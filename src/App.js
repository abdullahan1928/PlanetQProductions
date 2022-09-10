import './App.css';
import { Box, Container } from '@mui/material';
import Home from './pages/Home';
import 'aplayer/dist/APlayer.min.css';
import ReactAplayer from 'react-aplayer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from './comps/Layout';
import { ThemeProvider } from '@mui/system';
import theme from './theme/theme';
import Albums from './pages/Albums';
import Radio from './pages/Radio';
import Gallery from './pages/Gallery';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Videos from './pages/Videos';
import Beats from './pages/Beats';
import Login from './pages/Login';
import AudioListing from './pages/audio/AudioListing';
import EditAudio from './pages/audio/EditAudio';
import AddAudio from './pages/audio/AddNewAudio';

function App() {
   return (
      <ThemeProvider theme={theme}>
         <BrowserRouter>
            <Routes>
               <Route
                  path='/'
                  element={
                     <Layout>
                        <Home />
                     </Layout>
                  }
               />
               <Route
                  path='/albums'
                  element={
                     <Layout>
                        <Albums />
                     </Layout>
                  }
               />
               <Route
                  path='/radio'
                  element={
                     <Layout>
                        <Radio />
                     </Layout>
                  }
               />
               <Route
                  path='/gallery'
                  element={
                     <Layout>
                        <Gallery />
                     </Layout>
                  }
               />
               
               <Route
                  path='/about'
                  element={
                     <Layout>
                        <AboutUs />
                     </Layout>
                  }
               />
               <Route
                  path='/videos'
                  element={
                     <Layout>
                        <Videos />
                     </Layout>
                  }
               />
               <Route
                  path='/beats'
                  element={
                     <Layout>
                        <Beats />
                     </Layout>
                  }
               />
               <Route
                  path='/contact'
                  element={
                     <Layout>
                        <ContactUs />
                     </Layout>
                  }
               />
               <Route
                  path='/login'
                  element={
                        <Login />
                  }
               />
               <Route
                  path='/audiolisting'
                  element={
                        <AudioListing />
                  }
               />
               <Route
                  path='/add-audio'
                  element={
                        <AddAudio />
                  }
               />
               <Route
                  path='/edit-audio'
                  element={
                        <EditAudio />
                  }
               />
            </Routes>
            <ToastContainer
                    hideProgressBar
                    position="top-right"
                    icon={true}
                    autoClose={15000}/>
         </BrowserRouter>
      </ThemeProvider>
   );
}

export default App;
