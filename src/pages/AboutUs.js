import { Box, Typography } from '@mui/material';
import React from 'react';
import { styled } from '@mui/system';
import aboutcover from '../media/about.webp'


const Wrapper = styled(Box)(({ theme }) => ({
   backgroundColor: '#ffffff',
   color: '#000000',
   padding: '2rem 0',

   '& p': {
      textAlign: 'center',
      margin: '1rem auto',
      width: '80%',
      fontSize: '1.5rem',
   },
   '& a': {
      textAlign: 'center',
      display: 'block',
      margin: '2rem 0',
      textDecoration: 'underline',
   },
}));

const Img = styled('img')(({ theme }) => ({
   maxWidth: '100%',
   margin: '3rem auto',
   display: 'block',
}));

const AboutUs = () => {
   return (
      <Wrapper>
         <Typography variant='h3' component='a'>
            About Us:
         </Typography>
         <Typography>
            Planet Q Productions was created in 2006 by music producer Quincin
            "Que" Williams when at the time only a handful of recording artist
            have been known to write songs about the future, but no one ever put
            two and two together like Quincin Williams did and completely merged
            them together until now. One day Quincin Williams was looking at the
            cover of a Neptunes album which Featured Pharrell Williams, and Chad
            Hugo as members of StarTrak, and at the same time listening to a Nas
            song called "A New World", and a new idea was born called Futuristic
            Hip Hop.
         </Typography>

         <Img
            src={aboutcover}
            alt=''
         />

         <Typography variant='h3' component='a'>
            Our Vision:
         </Typography>
         <Typography>
            Quincin "Que" Williams has been producing music since 2001 with
            killer sound tracks backed by stellar vocals of the future to
            produce our new sound called Futuristic Hip Hop. We wish to produce
            and infuse real life futuristic sound quality beats backed with sci
            fi fantasy lyrics from hot new hip hop recording artist with jaw
            dropping futuristic soundtracks produced by hot new futuristic music
            producers who want to do something fun and help us create the best
            sound quality hit music in the galaxy. We are here to make another
            genre of hip hop called "Futuristic Hip Hop". We wish to travel in
            time, and create surreal scientific environments through our
            futuristic soundtracks and lyrics that'll take you to another world
            rather than just the same old sampled sounds on Planet Earth. You
            can really benefit from our beats if you are an Astronaut, Musician,
            Film Director, Disc Jockey, Video Game Programmer/ Designer, or any
            Incredible Person who need those extra tracks to get that project
            finished. We wish to give Space Cadets a Vision Of The Future while
            flying on long trips to the Moon or other Planetary Systems. If you
            are someone who want to start your music career then check us out
            and download our futuristic beats, or if you love new music then
            support us by leaving a donation to help support our future.
         </Typography>
         <Typography variant='h3' component='a'>
            A Blast From The Past:
         </Typography>
         <Typography>
            Hear the Album that blasted Quincin "Que" Williams music career off
            and quietly made his Album Platinum Status. These are songs he wrote
            from 2001 till the destruction of Hurricane Katrina in 2005. What
            made the Album so successful is he used his 18 Wheeler to sell
            copies of his own CD's at all Truck Stops he visited throughout the
            United States. The entire Album was written, arranged, and produced
            by him, Now That's Futuristic!!!
         </Typography>

         <Typography
            variant='h6'
            sx={{ fontSize: '11px', width: '200px', margin: 'auto' }}
         >
            We Hope You Enjoy And Like What You Hear.2012 Planet Q Productions
            All Rights Reserved.
         </Typography>

         <Box
            sx={{
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
            }}
         >
            <iframe
               title='soul'
               style={{ borderRadius: '12px', margin: '0 auto' }}
               src='https://open.spotify.com/embed/track/5eEFf9n7b2R6uS7ZvFu5X4?utm_source=generator'
               width='70%'
               height='450'
               frameBorder='0'
               allowfullscreen=''
               allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
            ></iframe>
         </Box>
      </Wrapper>
   );
};

export default AboutUs;
