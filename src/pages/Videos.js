import React from 'react';
import YouTube from 'react-youtube-embed'
import { styled } from '@mui/system';

const Div = styled('div')(({ theme }) => ({
    maxWidth: '100%',
    marginTop: '2rem',
}));



const Videos = () => {
    return (
        <div>
           <Div> <YouTube id='oSAHKQiR3Fc' /> </Div>
           <Div> <YouTube id='Yp3HZOYAVOw' /> </Div>
           <Div> <YouTube id='tnazlaZNNi8' /> </Div>
        </div>
    )
}

export default Videos;
