import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { ThemeProvider, useTheme } from "@emotion/react";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ projectImage, projectName, units }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    var projectNameNav = projectName.split(" ").join("-");

    navigate(projectNameNav);
  };
  return (
    <Box
      onClick={handleClick}
      sx={{
        width: { sm: "350px", md: "400px" },
        background: "#fcf5ff",
        // backgroundColor: "#fcf9f0",
        border: "1px solid rgba(0,0,0,0.2)",
        // borderBottom: "8px solid #523d61",
        paddingBottom: "8px",
      }}
    >
      <Box sx={{ height: "250px" }}>
        <img
          src={projectImage}
          alt=""
          width="100%"
          height="100%"
          //   style={{ borderRadius: "10px 10px 0px 0px" }}
        />
      </Box>

      <Box sx={{ paddingTop: "10px" }}>
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontSize: { xs: "18px", sm: "20px", md: "22px" },
          }}
        >
          {projectName}
        </Typography>
        <Box
          sx={{
            // display: "flex",
            margin: "10px 20px",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "16px", sm: "16px", md: "18px" },
              fontFamily: "Poppins",
            }}
          >
            Total Units: {units}
          </Typography>
          <Button
            sx={{
              marginTop: "8px",
              fontSize: { xs: "16px", sm: "16px", md: "18px" },
              padding: "8px 18px",
              backgroundColor: "#46144c",
              color: "#FFF",
              "&:hover": {
                background: "#523d61",
              },
            }}
          >
            More Detail
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectCard;
