import React, { useState, useEffect, createRef } from 'react';
import Header from './Header';
import Mics from './Mics';
import ReactAplayer from 'react-aplayer';
import { Box, Container, Hidden } from '@mui/material';
import axios from 'axios';
import Sound_Cloud from "./Sound_Cloud";

const Layout = ({ children }) => {

   const [mainTrackList, setMainTrackList] = useState();
   const [radioFlag, setRadioFlag] = useState(false);
   let radioFlag_ = false;
   const [soundCloudList, setSoundCloudList] = useState(null);
   const [showPlayer, setShowPlayer] = useState(true);
   const [soundCloudTrackId, setSoundCloudTrackId] = useState(null);
   const [soundCloudAudio, setSoundCloudAudio] = useState({ audio: null, trackID: null });
   const [soundTrack, setSoundTrack] = useState(null);
   const [ap, setap] = useState(null);
   function getRandomInt(max) {
      return Math.floor(Math.random() * max);
   }
   /// Fetch Playlist from API
   const getAudioList = () => {

      axios.get("https://api.planetqproductions.com/api/audio/")
         .then(
            (response) => {

               let trackList = [];
               let soundCloudtrackList = [];
               //response.data.data.filter((item) => item.soundcloudurl != null && item.soundcloudurl != "").forEach((item) => {
               response.data.data.forEach((item) => {
                  //console.log(item.soundcloudurl);
                  if (item.soundcloudurl != null && item.soundcloudurl != "") {
                     trackList.push({
                        name: item.title,
                        artist: item.artistName,
                        url: item.soundcloudurl,
                        cover: item.thumnail,
                     });
                  } else {
                     trackList.push({
                        name: item.title,
                        artist: item.artistName,
                        url: item.audioFile,
                        cover: item.thumnail,
                     });
                  }
               });
               //console.log(trackList)
               // response.data.data.forEach((item) => {
               //    if (item.soundcloudurl && item.soundcloudurl != "") {
               //       soundCloudtrackList.push({
               //          name: item.title,
               //          artist: item.artistName,
               //          url: item.audioFile,
               //          cover: item.thumnail,
               //          soundcloudurl: item.soundcloudurl,
               //       });
               //    }
               // });
               setRadioFlag(true);
               // setSoundCloudList({
               //    soundCloudTrack: soundCloudtrackList
               // });
               //console.log(soundCloudtrackList);
               //console.log(trackList); 
               setMainTrackList({
                  autoplay: true,
                  theme: '#FFF',
                  loop: 'all',
                  order: 'random',
                  preload: 'auto',
                  volume: 1,
                  mutex: true,
                  listFolded: true,
                  audio: trackList
               });
            }).catch(function (error) {
               console.log(error);
            });
   }
   // To Fetch and Start the Playlist 
   useEffect(() => {
      getAudioList();
   }, []);

   useEffect(() => {
      if (window.player && soundCloudAudio.trackID)
         window.player.toggle();
   }, [soundCloudAudio.trackID]);

   const iframeRef = createRef();
   /// Player Functions
   const onPlay = (e) => {
      //console.log(e.path[0].currentSrc)
      setSoundTrack(e);
      if (e.path[0].currentSrc.includes("soundcloud")) {
         window.ap.pause();
         setShowPlayer(false);
         let regex = /(?<=\/)\d+/g;
         let trackID = String(e.path[0].currentSrc).match(regex);
         //console.log(trackID[0])
         if (trackID[0]) {

            //  console.log(JSON.stringify(mainTrackList.audio))
            // console.log(e.path[0].currentSrc)
            let sTrack = mainTrackList.audio.filter((x) => x.url == e.path[0].currentSrc)[0];

            //console.log(sTrack)
            setSoundCloudAudio({ audio: sTrack, trackID: trackID[0] })


         }
      }
      else {
         setShowPlayer(true)
         setSoundCloudAudio({ audio: null, trackID: null })

         window.ap.play();
      }

   };
   const onPause = () => {
      console.log('on pause');
   };

   const onInit = ap => {
      window.ap = ap;
   };

   const onLoadStart = (ap) => {
      console.log(ap);

   }


   return (
      <>
         <Container maxWidth='md'>
            <Header />
            <Mics />
            <Box sx={{ width: '100%' }} >
               <div style={{ display: soundCloudAudio.trackID ? 'none' : 'block' }}>
                  {mainTrackList && (<ReactAplayer
                     ref={iframeRef}
                     {...mainTrackList}
                     onInit={onInit}
                     onPlay={onPlay}
                     onPause={onPause}
                  //onLoadStart={onLoadStart}
                  />)

                     // !radioFlag && mainTrackList && (<ReactAplayer
                     //    //ref={iframeRef}
                     //    {...mainTrackList}
                     //    onInit={onInit}
                     //    onPlay={onPlay}
                     //    onPause={onPause}
                     // />)

                  }</div>

               <div style={{ display: soundCloudAudio.trackID ? 'block' : 'none' }}>
                  <Sound_Cloud
                     soundCloudAudio={soundCloudAudio}
                     onFinish={(e) => { //console.log("finished..."); 
                        window.ap.play()
                     }}
                     isSoundCloud={true}
                  />
               </div>
            </Box>
            {children}
         </Container>
      </>
   );
};

export default Layout;
