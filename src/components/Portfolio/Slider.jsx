import { Box, Button } from "@mui/material";
import React, { useState } from "react";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { ThemeProvider, useTheme } from "@mui/material/styles";

const Slider = ({ images }) => {
  const theme = useTheme();
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);
  const [imageToShow, setImageToShow] = useState("");

  const showImage = (image) => {
    setImageToShow(image);
    setLightBoxDisplay(true);
  };

  //hide lightbox
  //   const hideLightBox = () => {
  //     setLightBoxDisplay(false);
  //   };

  const showNext = (e) => {
    // e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex >= images.length - 1) {
      //   setLightBoxDisplay(false);
      currentIndex = 0;
      setImageToShow(currentIndex);
    } else {
      let nextImage = images[currentIndex + 1];
      setImageToShow(nextImage);
    }
  };

  setTimeout(showNext, 2500);

  //show previous image in lightbox
  const showPrev = (e) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex <= 0) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = images[currentIndex - 1];
      setImageToShow(nextImage);
    }
  };

  return (
    <Box>
      <Box
        sx={{
          //   zIndex: 1,
          //   position: "absolute",
          width: "100vw",
          height: { xs: "50vh", md: "100vh" },
          //   backgroundColor: "rgba(255, 255, 255, 0.5)",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#f8f0fc",
          justifyContent: "space-evenly",
          "@media (max-width: 600px)": {
            flexDirection: "column",
          },
        }}
      >
        <Button
          sx={{
            display: { xs: "none", sm: "flex" },
            width: "20px",
            height: "60px",
            backgroundColor: theme.palette.primary.main,
            color: "white",
            "&:hover": {
              color: "black",
            },
          }}
          onClick={showPrev}
        >
          <ArrowBackIcon />
        </Button>

        <Box
          sx={{
            width: { xs: "80%", sm: "80%", md: "90%" },
            height: { xs: "60%", sm: "80%", md: "80%" },
            // backgroundColor: "#edd7f7",
            // padding: { xs: "10px", md: "20px", md: "30px" },
            // borderRadius: "12px",
          }}
        >
          <img
            id="lightbox-img"
            src={imageToShow}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "10px",
            }}
            alt="Slow Network"
          />
        </Box>
        <Button
          sx={{
            display: { xs: "none", sm: "flex" },
            width: "20px",
            height: "60px",
            backgroundColor: theme.palette.primary.main,
            color: "white",
            "&:hover": {
              color: "black",
            },
          }}
          onClick={showNext}
        >
          <ArrowForwardIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default Slider;
