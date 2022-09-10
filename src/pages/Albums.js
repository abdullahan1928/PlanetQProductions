import { Box, styled } from '@mui/system';
import React from 'react';
import g13 from '../media/g13.webp'
import a2 from '../media/a2.webp'



const Img = styled('img')(({ theme }) => ({
    maxWidth: '100%',
    margin: '0 auto',
}));


const Album = styled(Box)(({ theme }) => ({
   width: '70%',
   margin: '0 auto',
   marginTop: '1rem',
   '& img': {
      width: '100%',
   },
}));

const Albums = () => {
   return (
      <Box>
     
         <Album>
            <Img
               src={g13}
               alt=''
            />
            <Box sx={{ width: '100%' }}>
            <iframe
            title='radio'
            style={{ borderRadius: '0px' }}
            src='https://open.spotify.com/embed/album/0UZXvCeyghEpw43cmiE9JM?utm_source=generator'
            width='100%'
            height='80'
            frameBorder='0'
            allowfullscreen=''
            allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
         ></iframe>
            </Box>
         </Album>

         <Album>
            <Img
               src={a2}
               alt=''
            />
            <Box sx={{ width: '100%' }}>
            <iframe
            title='radio'
            style={{ borderRadius: '0px' }}
            src='https://open.spotify.com/embed/album/2CNZVpgDeaK8k8HgeWq3Xu?utm_source=generator'
            width='100%'
            height='80'
            frameBorder='0'
            allowfullscreen=''
            allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
         ></iframe>
            </Box>
         </Album>
      </Box>
   );
};

export default Albums;
