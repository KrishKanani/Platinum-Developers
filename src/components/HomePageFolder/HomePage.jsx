import React from "react";
import { Box } from "@mui/material";

//IMPORTING THE COMPONENTS
import HomePageHero from "./HomePageHero";
import HomeProjectPortfolio from "./HomeProjectPortfolio";
import HomeWhyChoose from "./HomeWhyChoose";
import Testimonials from "./Testimonials";

const HomePage = () => {
  return (
    <Box
      sx={{
        // width: "320px",
        marginTop: "60px",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <HomePageHero />
      <HomeProjectPortfolio />
      <HomeWhyChoose />
      <Testimonials />
    </Box>
  );
};

export default HomePage;
