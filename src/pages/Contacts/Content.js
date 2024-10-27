import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import HomeIcon from '@mui/icons-material/Home';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';

import { SitemarkIcon } from './CustomIcons';

const items = [
  {
    icon: <HomeIcon sx={{ color: 'text.secondary' }} />,
    title: 'Адрес:',
    description:
      '8 (800) 533-80-18',
  },
  {
    icon: <LocalPhoneIcon sx={{ color: 'text.secondary' }} />,
    title: 'Телефоны:',
    description:
      '8 (800) 533-80-18',
  },
  {
    icon: <EmailIcon sx={{ color: 'text.secondary' }} />,
    title: 'Email',
    description:
      'naisinteh@mail.ru',
  },
  {
    icon: <SendIcon sx={{ color: 'text.secondary' }} />,
    title: 'telegram',
    description:
      '@naisinteh',
  },
];

export default function Content() {
  return (
    <Stack
      sx={{ flexDirection: 'column', alignSelf: 'center', gap: 4, maxWidth: 450 }}
    >
      <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
        <SitemarkIcon />
      </Box>
      {items.map((item, index) => (
        <Stack key={index} direction="row" sx={{ gap: 2 }}>
          {item.icon}
          <div>
            <Typography gutterBottom sx={{ fontWeight: 'medium' }}>
              {item.title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {item.description}
            </Typography>
          </div>
        </Stack>
      ))}
    </Stack>
  );
}
