import React from "react";

import { Box, Typography, Grid } from "@mui/material";
import data from "../../data.json";

// IMPORTING COMPONENETS
import ProjectCard from "./ProjectCard";

const HomeProjectPortfolio = () => {
  return (
    <Box
      sx={{
        marginTop: {
          xs: "150px",
          md: "100px",
        },
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="heading"
          sx={{
            marginTop: "100px",
          }}
        >
          Our Featured Projects
        </Typography>

        <Box>
          <Box
            sx={{
              width: { xs: "75vw", sm: "100vw", md: "80vw", lg: "100vw" },
              margin: { xs: "40px auto", lg: "50px auto" },
              alignSelf: "center",
              paddingLeft: { xs: "0px", lg: "35px" },
              "@media (min-width:1300px)": {
                width: "70vw",
              },
            }}
          >
            {/* <Box sx={{ display: "flex", width: "80%" }}>
              {data.project?.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                  <ProjectCard
                    projectImage={item.projectImage}
                    projectName={item.name}
                    units={item.units}
                  />
                </Grid>
              ))}
            </Box> */}

            <Box
              sx={{
                margin: { sm: "6px", md: "1px", lg: "0px" },
              }}
            >
              <Grid
                container
                rowSpacing={{ xs: 2, lg: 6 }}
                columnSpacing={{ sm: 0, md: 0, lg: -1 }}
                columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}
              >
                {data.project?.map((item, index) => (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={6}
                    lg={4}
                    key={index}
                    display="flex"
                    justifyContent="center"
                  >
                    <ProjectCard
                      projectImage={item.projectImage}
                      projectName={item.name}
                      units={item.totalUnit}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeProjectPortfolio;
