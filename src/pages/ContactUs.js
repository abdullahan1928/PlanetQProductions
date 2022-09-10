import { Button } from '@mui/material';
import { Box, styled } from '@mui/system';
import contactimg from '../media/contact.webp'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Img = styled('img')(({ theme }) => ({
   maxWidth: '100%',
   margin: '1rem auto',
   display: 'block',
}));

const Form = styled(Box)(({ theme }) => ({
   '& input': {
      width: '50%',
      height: '2.5rem',
      border: 'none',
      padding: '0.5rem',
      background: 'rgb(86, 111, 184)',
      color: 'white',
      '&::placeholder': {
         color: 'white',
      },
      '&:focus': {
         outline: 'none',
      },
   },
   '& textarea': {
      background: 'rgb(86, 111, 184)',
   },
}));

const ContactUs = () => {
	  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_p4d83cv', 'template_l04tsbp', form.current, 'BTre6laoVa7VYyIqi')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


return (
      <Box sx={{my: 3, pb: 2}}>
         <Img
            src={contactimg}
            alt=''
         />

         <Form ref={form} onSubmit={sendEmail}> 
	<Box sx={{ width: '100%', mb: 2 }}>
               <input type='text' placeholder='Name*' />
               <input type='email' placeholder='Email*' />
            </Box>
            <Box sx={{ width: '100%', mb: 2 }}>
               <input
                  type='text'
                  placeholder='Subject*'
                  style={{ width: '100%' }}
               />
            </Box>
            <Box sx={{ width: '100%', mb: 2 }}>
               <textarea
               defaultValue='Please click here to send the message'
               style={{color: '#ffffff'}}
                  name=''
                  id=''
                  style={{ width: '100%' }}
                  rows='8'
               ></textarea>
            </Box>
            <Box sx={{mb: 2}}>
                <input type='submit' sx={{marginLeft:'auto', display:'block'}} value="Send" />
            </Box>
         </Form>
      </Box>
   );
};

export default ContactUs;
