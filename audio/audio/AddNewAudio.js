import { React, useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Toolbar from '@mui/material/Toolbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ArrowBack from '@mui/icons-material/ArrowBack';
import * as Yup from 'yup';
import { Box, Button, Container, Link, Grid, TextField, Typography } from '@mui/material';

 

 
const theme = createTheme();

export default function AddNewAudio() {
  const aduioURL = process.env.REACT_APP_PLANT_Q_APP_API_URL + "audio";

  let navigate = useNavigate();

  const [thumnail, setThumnail] = useState();
  const [thumnailName, setThumnailName] = useState();
  const [audioFileName, setAudioFileName] = useState();
  const [audioFile, setAudioFile] = useState();
  const [isLoading, setIsLoading] = useState(false);

   useEffect(() => {
      // document.body.style.backgroundImage = "url()";

   }, [])
  
  const validationSchema = Yup.object().shape({
    title: Yup.string()
        .required('Title is required')
        .max(128, 'Exceeded maximum character length of 128')
});
   const {
    register,
    handleSubmit,
    formState: { errors }
} = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onChange",
});
const backToListing = () => {
  navigate('/audioListing');
}
const handleChangeThumnail = (event) => {
    let file = event.target.files[0];
    setThumnailName (file.name);
    setThumnail(file);


}
const handleChangeAudioFile = (event) => {
  let file = event.target.files[0];

  setAudioFile(file);
  setAudioFileName(file.name)
}
const onSubmit = async (data) => {
  setIsLoading(true);
  var formData = new FormData();
  formData.append("title", data.title);
  formData.append("artistName", data.artistName);
  formData.append("owner", data.owner);
  formData.append("thumnail", thumnail);
  formData.append("audio", audioFile);

  axios.post(aduioURL, formData)
  .then(
    (response) => {
        console.log('response', response);
        navigate('/audiolisting');
        setIsLoading(false);
        toast.success("Audio item added successfully!");
    }).catch(function (error) {
      console.log(error);
      setIsLoading(false);

    })
}
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="relative">
        <Toolbar>
          {/* <CameraIcon sx={{ mr: 2 }} /> */}
          <Typography variant="h6" color="inherit" noWrap>
          Planet Q Production
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
        style={{background:"white", margin:"2%"}}
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >

          <Container >
          <Grid container spacing={2}>
            <Grid item xs={8}>
            
            </Grid>
            <Grid item xs={4}>
            <Button variant="outlined"  startIcon={<ArrowBack />} style={{float:"right", marginBottom:"-65px"}} onClick={backToListing}>
                        Back to listing
            </Button>
               </Grid>
            </Grid>  

            <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ my: 3 }}>
              <Typography
                color="textPrimary"
                variant="h4"
              >
               Add new item 
              </Typography>
            </Box>

            <TextField
              fullWidth
              margin="normal"
              name="title"
              type="text"
              className="form-control input-group m-b-0"
              placeholder="Enter title"
              {...register('title')}
            />
            <span style={{color:"#C92938"}}> {errors.title && errors.title.message}</span>

            <TextField
              fullWidth
              margin="normal"
              name="artistName"
              placeholder="Enter artist name"
              type="text"
              {...register('artistName')}
            />
             <span style={{color:"#C92938"}}> {errors.artistName && errors.artistName.message}</span>
            <TextField
              fullWidth
              margin="normal"
              name="owner"
              type="text"
              placeholder="Enter owner name"
              {...register('owner')}
            />
            <span style={{color:"#C92938"}}> {errors.owner && errors.owner.message}</span>
            <Typography className="text-center upload-resume m-auto"
             style={{    
              border: "1px dashed #696871",
              padding: "51px",
              height: "10em",
              margin: "4px",
              marginBottom: "15px !important",
              borderRadius: "8px"
              }}>
                                <input
                                    id="raised-button-file"
                                    multiple
                                    type="file"
                                    accept="image/png, image/jpeg"
                                    onChange={handleChangeThumnail} 
                                />
                                <Typography>
                                    <label htmlFor="raised-button-file">
                                        <Typography>
                                            {!thumnailName && 
                                                <Link className="link-color f-13 " underline="hover">Select Thumnail</Link>
                                              }
                                           
                                                <Link className="sub-text-color f-13 textEllipse w-200" underline="hover">{thumnailName}</Link>
                                           
                                        </Typography>
                                    </label>
                                </Typography>
                                </Typography>
                                <Typography className="text-center upload-resume m-auto"
                                style={{    
                                  border: "1px dashed #696871",
                                  padding: "51px",
                                  height: "10em",
                                  margin: "4px",
                                  borderRadius: "8px"
                                }}>
                                <input
                                    type="file"
                                    
                                    accept="audio/*"
                                    name="audioFile"
                                    onChange={handleChangeAudioFile} 
                                />
                                <Typography>
                                    <label htmlFor="raised-button-file">
                                        <Typography>
                                              <Link className="sub-text-color f-13 textEllipse w-200" underline="hover">{audioFileName}</Link>
                                        </Typography>
                                    </label>
                                </Typography>
                                </Typography>
                        <Box sx={{ py: 2 }}>
                          <Button
                            color="primary"
                            fullWidth
                            size="large"
                            type="submit"
                            variant="contained"
                            disabled={isLoading}
                          >
                            Save
                          </Button>
                    </Box>
          </form>
          </Container>
        </Box>

      </main>

    </ThemeProvider>
  );
}
