import { Box, styled } from '@mui/system';
import React from 'react';
import pqpl from '../media/pqp_l.webp'
import aliens from '../media/aliens.webp'

const Img = styled('img')(({ theme }) => ({
   maxWidth: '100%',
   margin: '1.25rem auto',
   display: 'block',

}));

const Home = () => {
   return (
      <Box>
         <Img
            src={pqpl}
            alt=''
         />
         <Img
            src={aliens}
            alt=''
         />
      </Box>
   );
};

export default Home;
