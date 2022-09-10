import { Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React from "react";
import Albumcover from "../media/albumcover.webp";
import Album1 from "../media/album1.webp";
import Album2 from "../media/album2.webp";
import Album3 from "../media/album3.webp";
import Album4 from "../media/album4.webp";
import Album5 from "../media/album5.webp";
import Album6 from "../media/album6.webp";
import platform from "../media/platform.webp";
import spotify from "../media/spotify.webp";
import donate from "../media/donate.webp";
import verum from "../media/verum.jpeg";
import Sound_Cloud from "../comps/Sound_Cloud";
const Img = styled("img")(({ theme }) => ({
  maxWidth: "100%",
  margin: "0 auto",
}));

const Album = styled(Box)(({ theme }) => ({
  width: "70%",
  margin: "0 auto",
  marginTop: "4rem",
  "& img": {
    width: "100%",
  },
}));

const Radio = () => {
  return (
    <Box
      sx={{
        background: "#ffffff",
        maxWidth: "100%",
        display: "block",
        margin: "auto",
        textAlign: "center",
        py: 5,
      }}
    >
    
  <Img src={Albumcover} alt="" />
      <Album>
        <Typography
          sx={{
            color: "rgb(92,105,123)",
            textAlign: "center",
            fontSize: "36px",
            fontWeight: 400,
            mb: 2,
          }}
        >
          Featured Artist
        </Typography>
        <Img src={Album1} alt="" />
        <Box sx={{ width: "100%" }}>
          <iframe
            title="radio"
            style={{ borderRadius: "0px" }}
            src="https://open.spotify.com/embed/track/1RfTG0dbnxN7DJV0soLBh1?utm_source=generator"
            width="100%"
            height="80"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </Box>
      </Album>
      <Album>
        <Img src={Album2} alt="" />
        <Box sx={{ width: "100%" }}>
          <iframe
            title="outter"
            style={{ borderRadius: "0px" }}
            src="https://open.spotify.com/embed/track/4chG0giQCEPOfXx7BSc6SQ?utm_source=generator"
            width="100%"
            height="80"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </Box>
      </Album>

      <Album>
        <Img src={Album3} alt="" />

        <Box sx={{ width: "100%" }}>
          <iframe
            title="to the moon"
            style={{ borderRadius: "0px" }}
            src="https://open.spotify.com/embed/track/6ZiaQGlGl9U53c4gFtCnsL?utm_source=generator"
            width="100%"
            height="80"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </Box>
      </Album>
      <Album>
        <Img src={Album4} alt="" />

        <Box sx={{ width: "100%" }}>
          <iframe
            title="to the moon"
            style={{ borderRadius: "0px" }}
            src="https://open.spotify.com/embed/track/3GF4LEPREoV51dsfXMzamV?utm_source=generator"
            width="100%"
            height="80"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </Box>
      </Album>
      <Album>
        <Img src={Album5} alt="" />

        <Box sx={{ width: "100%" }}>
          <iframe
            title="to the moon"
            style={{ borderRadius: "0px" }}
            src="https://open.spotify.com/embed/track/0rnC8JVkpDoTE130L7yttq?utm_source=generator"
            width="100%"
            height="80"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </Box>
      </Album>
      <Album>
        <Img src={Album6} alt="" />
        <Box sx={{ width: "100%" }}>
          <iframe
            title="to the moon"
            style={{ borderRadius: "0px" }}
            src="https://open.spotify.com/embed/album/11pd3tbDpDmsBEDA6dpdBG?utm_source=generator"
            width="100%"
            height="80"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </Box>
      </Album>

	 <Album>
        <Img src={verum} alt="" />
        <Box sx={{ width: "100%" }}>
          <iframe
            title="to the moon"
            style={{ borderRadius: "0px" }}
            src="https://open.spotify.com/embed/track/4UMzk4G0OSyzSMQVOinQ1A?utm_source=generator"
            width="100%"
            height="80"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </Box>
      </Album>

      <Box sx={{ margin: "80px" }}>
        <Typography
          sx={{
            color: "rgb(92,105,123)",
            textAlign: "center",
            fontSize: "35px",
            fontWeight: 600,
            mb: 2,
          }}
        >
          Listen To Us On All Platforms
        </Typography>

        <Img src={platform} alt="" />
      </Box>
      <Box sx={{ margin: "80px" }}>
        <Img src={spotify} alt="" />
      </Box>
      <Box sx={{ margin: "80px" }}>
        <Img src={donate} alt="" />
      </Box>

      <Typography
        sx={{
          color: "#000000",
          textAlign: "center",
          width: "50%",
          margin: "auto",
        }}
        variant="body2"
      >
        All songs played on The Planet Q Radio Station are either properly
        licensed, creative commons, or permission based music to ensure the
        songs used over the broadcast of this radio station remain with the
        ownership of the original copyright holder.
      </Typography>
    </Box>
  );
};

export default Radio;
