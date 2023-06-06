import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Logo from "../assets/Logo.jpeg";

// IMPORTING ICONS
import BusinessIcon from "@mui/icons-material/Business";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import { Mail } from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Box
      sx={{
        paddingBottom: "100px",
        marginTop: "200px",
        background: "#000",

        position: "",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        paddingBottom: "100px",
      }}
    >
      <Box
        sx={{
          width: { xs: "90%", sm: "75%", md: "89%", lg: "80%" },
          marginTop: "100px",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: { xs: "flex-start", md: "space-between" },
        }}
      >
        <Box
          sx={{
            width: { sm: "100%", md: "20%" },
            textAlign: "start",
          }}
        >
          <Box>
            <Typography
              sx={{
                color: "white",
                fontSize: { xs: "24px", md: "22px" },
                fontFamily: "Poppins",
                position: "relative",
                fontWeight: "600",
                "&::after": {
                  content: '""',
                  backgroundColor: "#FFF",
                  position: "absolute",
                  width: "100%",
                  height: "2px",
                  bottom: 0,
                  left: 0,
                },
              }}
            >
              About Us
            </Typography>
            <Box
              className="logo"
              sx={{
                display: "flex",
                gap: "12px",
                alignItems: "center",
                marginTop: "30px",
              }}
            >
              <img
                src={Logo}
                alt=""
                style={{
                  height: "60px",
                  "@media (min-width:1020px) and (max-width:1040px)": {
                    height: "40px",
                  },
                }}
              />

              {/* <Typography
                sx={{
                  color: "white",
                  width: "50%",
                  textAlign: "start",
                  lineHeight: "24px",
                  fontSize: "24px",
                  fontWeight: "600",
                }}
              >
                Platinum Developers
              </Typography> */}
            </Box>

            <Typography
              sx={{
                fontFamily: "poppins",
                color: "white",
                marginTop: "20px",
                display: "flex",
                alignItems: "center",
                fontSize: { xs: "18px", md: "16px", lg: "18px" },
              }}
            >
              {/* <BusinessIcon sx={{ marginRight: "10px" }} /> 7/28 Enterprise Drive, */}
              Rowville, VIC 3178 Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Sapiente, possimus!
            </Typography>
          </Box>
        </Box>

        {/* ------------------------ BUY WITH US --------------------------------------------------------------------  */}
        <Box
          sx={{
            width: { sm: "100%", md: "20%" },
            textAlign: "start",
          }}
        >
          <Box>
            <Typography
              sx={{
                color: "white",
                fontSize: { xs: "24px", md: "22px" },
                fontFamily: "Poppins",
                position: "relative",
                fontWeight: "600",
                marginTop: { xs: "50px", md: "0px" },
                "&::after": {
                  content: '""',
                  backgroundColor: "#FFF",
                  position: "absolute",
                  width: "100%",
                  height: "2px",
                  bottom: 0,
                  left: 0,
                },
              }}
            >
              Buy With Us
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                fontFamily: "poppins",
                color: "white",
                marginTop: "20px",
                display: "flex",
                alignItems: "center",
                fontSize: "18px",
              }}
            >
              Selling
            </Typography>

            <Typography
              sx={{
                fontSize: "18px",
                fontFamily: "poppins",
                color: "white",
                marginTop: "10px",
                display: "flex",
                alignItems: "center",
              }}
            >
              Completed
            </Typography>

            <Typography
              sx={{
                fontSize: "18px",
                fontFamily: "poppins",
                color: "white",
                marginTop: "10px",
                display: "flex",
                alignItems: "center",
              }}
            >
              Sold
            </Typography>
          </Box>
        </Box>

        {/* ---------------------------------------- CONTACR ----------------------------------  */}
        <Box
          sx={{
            width: { sm: "100%", md: "24%" },
            textAlign: "start",
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontSize: { xs: "24px", md: "22px" },
              fontFamily: "Poppins",
              position: "relative",
              fontWeight: "600",
              marginTop: { xs: "50px", md: "0px" },
              "&::after": {
                content: '""',
                backgroundColor: "#FFF",
                position: "absolute",
                width: "100%",
                height: "2px",
                bottom: 0,
                left: 0,
              },
            }}
          >
            Contact
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              // fontSize: "18px",
              color: "white",
              marginTop: "20px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <BusinessIcon sx={{ marginRight: "10px" }} /> 7/28 Enterprise Drive,
            Rowville, VIC 3178
          </Typography>

          <Typography
            sx={{
              fontFamily: "poppins",
              color: "white",
              marginTop: "20px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <CallIcon sx={{ marginRight: "10px" }} /> 1300 459 162
          </Typography>
          <Typography
            sx={{
              fontFamily: "poppins",
              color: "white",
              marginTop: "20px",
              display: "flex",
              alignItems: "center",
              width: "10%",
            }}
          >
            <Mail sx={{ marginRight: "10px" }} /> platinumdevelopers@gmail.com
          </Typography>
        </Box>

        {/* --------------------------------- SOCIAL LINKS -----------------------------------------  */}

        {/* ---------------------------------- SUBSCRIBE TO NEWS LETTER -------------------------------------------  */}

        <Box
          sx={{
            marginTop: { xs: "50px", md: "0px" },
            width: { sm: "100%", md: "26%" },
            textAlign: "start",
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontSize: { xs: "24px", md: "22px" },
              fontFamily: "Poppins",
              position: "relative",
              fontWeight: "600",
              "&::after": {
                content: '""',
                backgroundColor: "#FFF",
                position: "absolute",
                width: "100%",
                height: "2px",
                bottom: 0,
                left: 0,
              },
            }}
          >
            Subscribe to Our Newsletter
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginTop: "30px",
              gap: "2px",
            }}
          >
            <Box
              sx={{
                borderRadius: "8px",
                background: "#f8f0fc",
                width: "80%",
                height: "60px",
                alignSelf: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <input
                type="text"
                style={{
                  textDecoration: "none",
                  border: "none",
                  width: "90%",
                  height: "60%",
                  outline: "none",
                  fontSize: "20px",
                  fontFamily: "Poppins",
                  backgroundColor: "#f8f0fc",
                }}
                placeholder="Enter Email"
              />
            </Box>
            <Button
              sx={{
                height: "60px",
                width: "60px",
                backgroundColor: "white",
                color: "#6d4687",
                textTransform: "capitalize",
                fontSize: "20px",
                fontWeight: "bold",
                borderRadius: "10px",
                "&:hover": {
                  backgroundColor: "rgba(256,256,256,0.5)",
                },
              }}
            >
              Go!
            </Button>
          </Box>

          <Typography sx={{ marginTop: "10px", color: "white" }}>
            Get regular updates about property on mail
          </Typography>
          <Box
            sx={{
              marginTop: "50px",
              width: { sm: "100%", md: "100%" },
              textAlign: "start",
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontSize: { xs: "24px", md: "22px" },
                fontFamily: "Poppins",
                position: "relative",
                fontWeight: "600",
                "&::after": {
                  content: '""',
                  backgroundColor: "#FFF",
                  position: "absolute",
                  width: "100%",
                  height: "2px",
                  bottom: 0,
                  left: 0,
                },
              }}
            >
              Follow Us on
            </Typography>
            <Box sx={{ display: "flex" }}>
              <Typography
                sx={{
                  fontFamily: "poppins",
                  color: "white",
                  marginTop: "20px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <FacebookIcon
                  sx={{
                    marginRight: "10px",
                    fontSize: "50px",
                    "&:hover": { color: "#367ff5", background: "white" },
                  }}
                />
              </Typography>

              <Typography
                sx={{
                  fontFamily: "poppins",
                  color: "white",
                  marginTop: "20px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <LinkedInIcon
                  sx={{
                    marginRight: "10px",
                    fontSize: "50px",
                    "&:hover": { color: "#1a56b8", background: "white" },
                  }}
                />
              </Typography>
            </Box>
          </Box>
        </Box>
        {/* <Box
          sx={{
            marginTop: { xs: "50px", md: "0px" },
            width: { sm: "100%", md: "20%" },
            textAlign: "start",
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontSize: { xs: "24px", md: "28px" },
              fontFamily: "Poppins",
              position: "relative",
              fontWeight: "600",
              "&::after": {
                content: '""',
                backgroundColor: "#FFF",
                position: "absolute",
                width: "100%",
                height: "2px",
                bottom: 0,
                left: 0,
              },
            }}
          >
            Find Us on Google
          </Typography>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12591.191651980034!2d145.23343!3d-37.911786000000006!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad63de4ef3fffff%3A0x46d0909a26476155!2sUnit%207%2F28%20Enterprise%20Dr%2C%20Rowville%20VIC%203178!5e0!3m2!1sen!2sau!4v1685593295172!5m2!1sen!2sau"
            width="100%"
            style={{ marginTop: "30px" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box> */}
      </Box>
    </Box>
  );
};

export default Footer;
