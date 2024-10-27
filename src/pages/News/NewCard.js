import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import { styled } from '@mui/material/styles';
import { Typography, Box } from '@mui/material';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import IconButton from '@mui/material/IconButton';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Stack } from '@mui/material';
/*
function Author({ link }) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: 2,
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px',
            }}
        >
            <Box
                sx={{ display: 'flex', flexDirection: 'row', gap: 1, alignItems: 'center' }}
            >

                <Typography variant="caption">
                    {link.match(/:\/\/(.[^/]+)/)[1]}
                </Typography >
            </Box >
    <Box
        sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: 1,
            alignItems: 'center',

        }}
    >
        <IconButton variant="contained" color="primary" size="small">
            <RemoveRedEyeIcon />
        </IconButton>
        <IconButton variant="contained" color="primary" size="small">
            <ThumbUpIcon />
        </IconButton>

    </Box>

        </Box >
    );
}

Author.propTypes = {
    authors: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        }),
    ).isRequired,
};*/

const SyledCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
    height: '100%',
    backgroundColor: theme.palette.background.paper,
    '&:hover': {
        backgroundColor: 'transparent',
        cursor: 'pointer',
    },
    '&:focus-visible': {
        outline: '3px solid',
        outlineColor: 'hsla(210, 98%, 48%, 0.5)',
        outlineOffset: '2px',
    },
}));

const SyledCardContent = styled(CardContent)({
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    padding: 16,
    flexGrow: 1,
    '&:last-child': {
        paddingBottom: 16,
    },
});

const StyledTypography = styled(Typography)({
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
});


const NewCard = ({ data }) => {
    return (
        <SyledCard
            variant="outlined"
        //onFocus={() => handleFocus(0)}
        //onBlur={handleBlur}
        //className={focusedCardIndex === 0 ? 'Mui-focused' : ''}
        >

            <SyledCardContent>

                <StyledTypography gutterBottom variant="h6" component="div">
                    {data.title}
                </StyledTypography>
                <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                    {data.description}
                </StyledTypography>
            </SyledCardContent>
            {/*<Author authors={data.authors} />*/}

            <Stack direction="row" alignItems="center" spacing={1} sx={{ margin: 1 }}>
                <Chip
                    label={data.link.match(/:\/\/(.[^/]+)/)[1]}
                    variant="outlined"
                    color="primary"
                    sx={{ marginRight: 1, borderRadius: 1 }} // Отступ справа для Chip
                />
                <IconButton color="primary">
                    <ThumbUpIcon /> {/* Кнопка лайка */}
                </IconButton>
            </Stack>
        </SyledCard>
    )
}

export default NewCard