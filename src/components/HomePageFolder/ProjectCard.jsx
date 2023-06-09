import React, { useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { ThemeProvider, useTheme } from "@emotion/react";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({
  projectImage,
  projectName,
  units,
  propertyDescription,
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    var projectNameNav = projectName.split(" ").join("-");

    navigate(projectNameNav);

    // const maxLength = 100;

    // const propertyDescription = (propertyDescription) => {
    //   console.log(propertyDescription);
    //   if (propertyDescription.length <= maxLength) {
    //     return propertyDescription;
    //   }
    //   return propertyDescription.substring(0, maxLength) + "...";
    // };
  };
  return (
    <Box
      className="projectCard "
      onClick={handleClick}
      sx={{
        width: { sm: "350px", md: "360px" },
        height: { xs: "auto", lg: "500px" },
        background: "#fcf5ff",
        display: "grid",
        justifyContent: "center",
        paddingBottom: "8px",
        boxShadow: "0px 13px 10px -8px rgba(0, 0, 0,0.1)",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
        "@media (max-width:290px)": {
          width: "250px",
        },
      }}
    >
      <Box
        sx={{
          height: "300px",
          width: "100%",
        }}
      >
        <img
          src={projectImage}
          alt="Project Images"
          width="100%"
          height="100%"
          style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          className="transition title"
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
          <Typography className="propertyDesc transition">
            {propertyDescription}
          </Typography>
          <Button
            sx={{
              marginTop: "8px",
              fontSize: { xs: "14px", sm: "16px", md: "16px" },
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
