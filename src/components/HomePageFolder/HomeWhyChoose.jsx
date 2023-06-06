import React from "react";
import { Box, Typography, Button, Icon } from "@mui/material";

// IMPORTING ICONS
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import GradingIcon from "@mui/icons-material/Grading";
import BusinessIcon from "@mui/icons-material/Business";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import { Mail } from "@mui/icons-material";

import "../../styles/HomePage.css";

import { useTheme } from "@mui/material/styles";

const HomeWhyChoose = () => {
  const theme = useTheme();
  const content = [
    {
      label: "On Budget",
      icon: "PaidIcon",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.dummy text ever since the 1500.`,
    },
    {
      label: "High Quality",
      icon: "PaidIcon",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since industry's standard dummy text ever since  the 1500s, when an unknown printer took a galley of type.dummy text ever since the 1500.`,
    },
    {
      label: "Safety",
      icon: "GradingIcon",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the industry's standard dummy text ever since  1500s, when an unknown printer took a galley of type.dummy text ever since the 1500.`,
    },
  ];
  return (
    <Box>
      <Box
        sx={{ marginTop: "100px", background: "#f8f0fc", paddingTop: "100px" }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "34px", md: "40px" },
              fontFamily: "Libre Franklin",
              fontWeight: "700",
              textAlign: "center",
            }}
          >
            Why Choose Us?
          </Typography>
          <Typography
            variant="subtitle"
            sx={{
              fontSize: "18px",
              width: { xs: "90%", sm: "75%", md: "50%" },
              fontFamily: "Poppins",
            }}
          >
            At Platinum Developers we have the right kind of property to suit
            your needs. Whether you’re looking for your first home or investing
            in a sought after location, we’ve got what you need
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            margin: "60px auto",
            justifyContent: { xs: "center", md: "space-between" },
            width: { xs: "100%", md: "90vw", lg: "80vw" },
            alignItems: "center",
          }}
        >
          {content.map((item, index) => (
            <Box
              className="card"
              sx={{
                width: { xs: "80%", md: "28%", lg: "26%" },
                height: { xs: "400px", sm: "350px", md: "550px", lg: "500px" },
                border: "1px solid rgba(0,0,0,0.3)",
                borderBottom: "10px solid #46144c",
                padding: { xs: "20px", md: "30px" },
                marginTop: { xs: "20px", md: "" },
                backgroundColor: "#FFF",
              }}
            >
              {index === 0 ? (
                <PaidOutlinedIcon
                  className="text"
                  sx={{ fontSize: "80px", color: "#46144c", marginTop: "80px" }}
                />
              ) : index === 1 ? (
                <StarBorderIcon
                  className="text"
                  sx={{ fontSize: "80px", color: "#46144c", marginTop: "80px" }}
                />
              ) : (
                <GradingIcon
                  className="text"
                  sx={{ fontSize: "80px", color: "#46144c", marginTop: "80px" }}
                />
              )}
              <Typography
                className="text"
                sx={{
                  fontSize: "30px",
                  fontFamily: "Libre Franklin",
                  fontWeight: "700",
                  color: "#46144c",
                  marginTop: "20px",
                }}
              >
                {item.label}
              </Typography>
              <Typography className="text" variant="subtitle">
                {item.description}
              </Typography>

              <Box class="go-corner" href="#"></Box>
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            marginTop: "180px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default HomeWhyChoose;
