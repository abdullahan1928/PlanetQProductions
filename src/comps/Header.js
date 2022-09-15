import { Button, styled, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import facebook from '../media/facebook.webp'
import twitter from '../media/twitter.webp'
import youtube from '../media/youtube.webp'
import instagram from '../media/insta.webp'
import DrawerComponent from '../comps/drawer';
import {
   useTheme,
   useMediaQuery,
} from "@material-ui/core";
//import useMediaQuery from '@material-ui/core/useMediaQuery'
//import { theme } from '@material-ui/core/styles';//
//import { createTheme } from '@mui/material';



const HeaderWrapper = styled(Box)(({ theme }) => ({
   backgroundColor: theme.palette.primary.main,
   padding: '3rem 1rem',
}));

const Flex = styled(Box)(({ theme }) => ({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
}));

const Menus = styled(Box)(({ theme }) => ({
   flex: 2,
}));

const Row = styled(Box)(({ theme }) => ({
   display: 'flex',
   alignItems: 'center',
   marginBottom: '1rem',
}));

const MenuButton = styled(Button)(({ theme }) => ({
   background: 'rgb(57, 114, 155)',
   color: 'white',
   marginRight: '1rem',
   fontSize: '0.7rem',
   padding: '0.4rem .3rem',
   '&:hover': {
      background: 'rgb(57, 114, 155)',
   },
}));

const Social = styled(Box)(({ theme }) => ({
   '& img': {
      marginRight: '1rem',
   }
}));

const Header = () => {
   const theme = useTheme();
   const isMobile = useMediaQuery(theme.breakpoints.down("md"));
   return (
      <HeaderWrapper>
         <Flex>
            <Box sx={{ flex: 1 }}>
               <Typography variant='h5' gutterBottom>
                  Planet Q Productions
               </Typography>
               <Typography sx={{ fontSize: '13px', color: 'rgb(255, 203, 5)' }}>
                  The Sci Fi Channel Of Hip Hop and R&B © 2021 Planet
                  Q-Productions
               </Typography>
            </Box>
            {isMobile ? (
               <DrawerComponent />
            ) : (
               <Menus>
                  <Row>
                     <MenuButton component={Link} to='/' >Home</MenuButton>
                     <MenuButton component={Link} to='/albums'>Albums</MenuButton>
                     <MenuButton component={Link} to='/radio'>Radio</MenuButton>
                     <MenuButton component={Link} to='/gallery'>Gallery</MenuButton>
                  </Row>
                  <Row>
                     <MenuButton component={Link} to='/about' >About Us</MenuButton>
                     <MenuButton component={Link} to='/videos'>Videos</MenuButton>
                     <MenuButton component={Link} to='/beats'>Beats</MenuButton>
                     <MenuButton component={Link} to='/contact'>Contact Us</MenuButton>
                     <Social>
                        <a href="https://twitter.com/planetqproducti"> <img src={twitter} alt='' /> </a>
                        <a href="https://instagram.com/planet_q_productions"> <img src={instagram} alt='' /> </a>
                        <a href="https://www.facebook.com/Planet-Q-Productions-122819285080847"><img src={facebook} alt='' /> </a>
                        <a href="https://www.youtube.com/channel/UCJbAwNlfywwXwsMjiPInfNg"><img src={youtube} alt='' /> </a>
                     </Social>
                  </Row>

               </Menus>
            )}

         </Flex>
      </HeaderWrapper>
   );
};

export default Header;
