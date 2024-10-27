import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import NewCard from './NewCard';
import Pagination from '@mui/material/Pagination';



export default function MainContent({ cardData }) {
  const items = cardData;
  const itemsPerPage = 6; // Количество элементов на странице

  // Состояние для отслеживания текущей страницы
  const [page, setPage] = React.useState(1);

  // Вычисляем общее количество страниц
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Получаем элементы для текущей страницы
  const currentItems = items.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  // Обработчик для изменения страницы
  const handlePageChange = (event, value) => {
    setPage(value);
  };




  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: { xs: 'start', md: 'start' }, gap: 4 }}>
      <Box sx={{ width: "100%" }} >
        <Typography variant="h2" gutterBottom>
          Новости
        </Typography>

        <Stack sx={{ justifyContent: "space-between", alignItems: "center" }} direction="row" spacing={2}>
          <Typography>Будьте в курсе последних новостей с персонализированной лентой</Typography>
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              flexDirection: 'row',
              gap: 1,
              width: { xs: '100%', md: 'fit-content' },
              overflow: 'auto',
            }}
          >
          </Box>
        </Stack>
      </Box>


      <Grid container spacing={2} columns={12}>
        {currentItems.map((item, index) => (
          <Grid size={{ xs: 12, md: 6 }}>
            <NewCard data={item} />
          </Grid>
        ))}

        <Pagination
          count={pageCount}
          page={page}
          onChange={handlePageChange}
          color="primary"
          sx={{ marginTop: 3 }}
        />

      </Grid>
    </Box>
  );
}
