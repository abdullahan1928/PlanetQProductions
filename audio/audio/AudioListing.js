import { React, useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

// import CameraIcon from '@mui/icons-material/PhotoCamera';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { DataGrid } from '@mui/x-data-grid';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { toast } from 'react-toastify';


const columns = [
   { field: 'id', headerName: 'ID', width: 70 },
   { field: 'title', headerName: 'Title', width: 200 },
   { field: 'artistName', headerName: 'Artist Name', width: 200 },
   { field: 'owner', headerName: 'Owner', width: 200 },
   { field: 'audio', headerName: 'Audio', width: 200 },
 ];
 

 
const theme = createTheme();

export default function AudioListing() {
  const aduioURL = process.env.REACT_APP_PLANT_Q_APP_API_URL + "audio";
  
   let navigate = useNavigate();
    const [audios, setAudios] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

   useEffect(() => {
      getAudioList();
   }, []);

   const getAudioList = () => {
    let mounted = true;
    axios.get(aduioURL)
        .then(
            (response) => {
                if (mounted) {
                  setAudios(response.data.data.audioList);
                }
            }).catch(function (error) {
              console.log(error);
    });
    return () => mounted = false;
}
  const deleteAudio = (id) => {
    setIsLoading(true);
    axios.post(aduioURL+`/${id}`)
    .then(
      (response) => {
          console.log('response', response);
          navigate('/audiolisting');
          setIsLoading(false);
          getAudioList();
          toast.success("Audio item deleted successfully!");
      }).catch(function (error) {
        console.log(error);
        setIsLoading(false);
  
      })
  }
   const addNewItem = () => {
      navigate('/add-audio');
   }


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          {/* <CameraIcon sx={{ mr: 2 }} /> */}
          <Typography variant="h6" color="inherit" noWrap>
            Planet Q Production
          </Typography>
        </Toolbar>
      </AppBar>
      <main >
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
            <Button variant="contained" startIcon={<AddIcon />} style={{float:"right", marginBottom:"5px"}} onClick={addNewItem}>
                        Add Item
            </Button>
               </Grid>
            </Grid>  

          <div style={{ height: 400, width: '100%' }}>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Title</th>
                <th scope="col">Artist Name</th>
                <th scope="col">Owner</th>
                <th scope="col">Audio</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {audios.length > 0 ?  audios.map((audio, index) => {
                return (
                  <tr>
                  <th scope="row">{ index+1 }</th>
                  <td>{ audio?.title }</td>
                  <td>{ audio?.artistName }</td>
                  <td>{ audio?.owner }</td>
                  <td>{ audio?.audioFileName }</td>
                  <td><DeleteIcon onClick={ () => deleteAudio(audio.id)} /></td>
                </tr>
                )
              }) : <p>No data added yet</p> }

            </tbody>
          </table>
         </div>
          </Container>
        </Box>

      </main>

    </ThemeProvider>
  );
}
