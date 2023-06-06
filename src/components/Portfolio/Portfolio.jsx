import React, { useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import data from "../../data.json";

// IMPORTING COMPONENTS
import Slider from "./Slider";
import ProjectCard from "../HomePageFolder/ProjectCard";
import { ThemeProvider, useTheme } from "@mui/material";

// IMPORTING ICONS
import SearchIcon from "@mui/icons-material/Search";
const Portfolio = () => {
  const theme = useTheme();
  const portfolioHeroImages = [
    "https://static.domain.com.au/domainblog/uploads/2016/05/20104500/2_gozygl.jpg",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXVzdHJhbGlhJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF1c3RyYWxpYSUyMGhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    "https://www.mirren.com.au/wp-content/uploads/2018/11/Where-to-find-Investments-Bargain-in-Australia.jpg",
    "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/au/wp-content/uploads/2022/08/AustralianHousing-scaled.jpg",
    "https://i.pinimg.com/736x/c0/da/65/c0da65dc0ed96533b1fa228805050695--find-property-amazing-houses.jpg",
  ];
  const [searchCity, setSearchCity] = useState("");

  console.log(searchCity);
  return (
    <Box
      sx={{
        marginTop: "150px",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "40px auto",
          }}
        >
          <Typography
            sx={{
              fontSize: "6rem",
              fontFamily: "Libre Franklin",
              fontWeight: "bold",
              color: theme.palette.primary.main,
            }}
          >
            Platinum Developers
          </Typography>
          <Typography
            sx={{
              width: { xs: "90%", sm: "80%", md: "60%" },
              fontFamily: "Poppins",
              fontSize: "18px",
            }}
          >
            At Platinum Developers we have the right kind of property to suit
            your needs. Whether you’re looking for your first home or investing
            in a sought after location, we’ve got what you need.
          </Typography>
        </Box>
        <Slider images={portfolioHeroImages} />
        <Box
          sx={{
            backgroundColor: "#f8f0fc",
            padding: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              borderRadius: "8px",
              background: "white",
              width: { xs: "90%", md: "60%" },
              height: "60px",
              alignSelf: "center",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <SearchIcon sx={{ fontSize: "40px", color: "#6d4687" }} />
            <input
              name={searchCity}
              type="text"
              style={{
                textDecoration: "none",
                border: "none",
                width: "90%",
                height: "60%",
                outline: "none",
                fontSize: "20px",
                fontFamily: "Poppins",
                backgroundColor: "white",
              }}
              placeholder="Enter city"
              value={searchCity}
              onChange={(e) => setSearchCity(e.target.value)}
            />
          </Box>
        </Box>

        <Box
          sx={{
            width: { xs: "75%", sm: "100%", md: "80%", lg: "80%" },
            margin: "80px auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            "@media (min-width:1300px)": {
              width: "70vw",
            },
          }}
        >
          <Grid
            container
            rowSpacing={6}
            // columnSpacing={6}
            columnSpacing={{ sm: 2, md: 4, lg: 6 }}
            columns={{ md: 12 }}
          >
            {data.project?.map((item, index) => (
              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                key={index}
                display="flex"
                justifyContent="center"
              >
                <ProjectCard
                  projectImage={item.projectImage}
                  projectName={item.name}
                  units={item.units}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Portfolio;
