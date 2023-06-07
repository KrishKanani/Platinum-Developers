import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Marquee from "react-fast-marquee";
import TestimonialCards from "./TestimonialCards";

// IMPORTING ICONS
import BusinessIcon from "@mui/icons-material/Business";
import CallIcon from "@mui/icons-material/Call";
import Mail from "@mui/icons-material/Email";

//IMPORTING DATA
import data from "../../data.json";

const Testimonials = () => {
  const reviews = [
    {
      name: "Andrew David",
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis dignissimos magni eum perspiciatis nostrum, earum praesentium nesciunt? Eos, iure voluptas!",
      propertyName: " Lorem Ipsum Road",
    },
    {
      name: "Stive Smith",
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis dignissimos magni eum perspiciatis nostrum, earum praesentium nesciunt? Eos, iure voluptas!",
      propertyName: " Lorem Ipsum Road",
    },
    {
      name: "David Warner",
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis dignissimos magni eum perspiciatis nostrum, earum praesentium nesciunt? Eos, iure voluptas!",
      propertyName: " Lorem Ipsum Road",
    },
    {
      name: "Michael Johnson",
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis dignissimos magni eum perspiciatis nostrum, earum praesentium nesciunt? Eos, iure voluptas!",
      propertyName: " Lorem Ipsum Road",
    },
  ];

  return (
    <Box sx={{ marginTop: { xs: "100px", md: "200px" } }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "80px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Libre Franklin",
            fontSize: { xs: "34px", md: "40px" },
            fontWeight: "700",
          }}
        >
          This is what our Customer says
        </Typography>
        <Typography
          variant="subtitle"
          width={{ xs: "90%", sm: "75%", md: "50%" }}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
          dignissimos magni eum perspiciatis nostrum, earum praesentium
          nesciunt? Eos, iure voluptas!
        </Typography>
      </Box>

      <Marquee pauseOnHover={true}>
        {Array.from(Array(4)).map((_, index) => (
          <TestimonialCards review={reviews[index]} />
        ))}
      </Marquee>

      {/* ---------------------------------------------------- FORM -------------------------------- */}
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "200px" }}
      >
        <Box
          sx={{
            width: { xs: "95%", md: "80vw", lg: "80vw" },
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            border: "1px solid rgba(0,0,0,0.1)",
            // marginBottom: "100px",
            // "@media (min-width: 1350px)": {
            //   width: "70vw",
            // },
          }}
        >
          {/* ---------------------------------------  */}
          <Box
            sx={{
              width: { xs: "auto", md: "70%" },
              textAlign: "start",
              padding: "80px 40px",
              backgroundColor: "#f8f0fc",
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                Experience the difference by choosing us!
              </Typography>
            </Box>
            <Box
              sx={{
                marginTop: "40px",
                textAlign: "start",
              }}
            >
              <Typography
                sx={{
                  color: "#",
                  fontSize: { xs: "24px", md: "28px" },
                  fontFamily: "Poppins",
                  position: "relative",
                  fontWeight: "600",
                  "&::after": {
                    content: '""',
                    backgroundColor: "#000",
                    position: "absolute",
                    width: "100%",
                    height: "2px",
                    bottom: 0,
                    left: 0,
                  },
                }}
              >
                Contact Us
              </Typography>
              <Typography
                sx={{
                  fontFamily: "poppins",
                  color: "white",
                  marginTop: "20px",
                  display: "flex",
                  alignItems: "center",
                  color: "#6d4687",
                }}
              >
                <BusinessIcon sx={{ marginRight: "10px" }} />{" "}
                {data.content.contactInfo.address}
              </Typography>

              <Typography
                sx={{
                  fontFamily: "poppins",
                  color: "white",
                  marginTop: "20px",
                  display: "flex",
                  color: "#6d4687",
                  alignItems: "center",
                }}
              >
                <CallIcon sx={{ marginRight: "10px" }} />{" "}
                {data.content.contactInfo.contact}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "poppins",
                  color: "white",
                  marginTop: "20px",
                  display: "flex",
                  color: "#6d4687",
                  alignItems: "center",
                }}
              >
                <Mail sx={{ marginRight: "10px" }} />{" "}
                {data.content.contactInfo.email}
              </Typography>
            </Box>
            {/* ------------------ Visit our Office -----------------  */}
            <Box sx={{ marginTop: "40px" }}>
              <Typography
                sx={{
                  color: "#",
                  fontSize: { xs: "24px", md: "28px" },
                  fontFamily: "Poppins",
                  position: "relative",
                  fontWeight: "600",
                  "&::after": {
                    content: '""',
                    backgroundColor: "#000",
                    position: "absolute",
                    width: "100%",
                    height: "2px",
                    bottom: 0,
                    left: 0,
                  },
                }}
              >
                Visit our Office{" "}
              </Typography>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12591.191651980034!2d145.23343!3d-37.911786000000006!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad63de4ef3fffff%3A0x46d0909a26476155!2sUnit%207%2F28%20Enterprise%20Dr%2C%20Rowville%20VIC%203178!5e0!3m2!1sen!2sau!4v1685593295172!5m2!1sen!2sau"
                width="100%"
                style={{ marginTop: "10px" }}
                allowFullScreen="true"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </Box>
          </Box>
          {/* ---------------------------------------  */}

          <Box
            sx={{
              width: { xs: "100%", md: "60%" },
              // height: "700px",
              backgroundColor: "#FFF",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Libre Franklin",
                fontWeight: "700",
                fontSize: "38px",
                marginTop: "40px",
              }}
            >
              Enguiry Now!
              <Box
                sx={{
                  margin: "20px 0px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "20px",
                }}
              >
                <Box
                  sx={{
                    borderRadius: "8px",
                    background: "#f8f0fc",
                    width: "90%",
                    height: { xs: "50px", md: "60px" },
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
                    placeholder="Enter Name"
                  />
                </Box>
                <Box
                  sx={{
                    borderRadius: "8px",
                    background: "#f8f0fc",
                    width: "90%",
                    height: { xs: "50px", md: "60px" },
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
                    placeholder="Enter Contact"
                  />
                </Box>
                <Box
                  sx={{
                    borderRadius: "8px",
                    background: "#f8f0fc",
                    width: "90%",
                    height: { xs: "50px", md: "60px" },
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
                <Box
                  sx={{
                    borderRadius: "8px",
                    background: "#f8f0fc",
                    width: "90%",
                    height: "120px",
                    alignSelf: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <textarea
                    name="message"
                    rows="2"
                    cols="30"
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
                    placeholder="Message"
                  />
                </Box>

                <Box
                  sx={{
                    borderRadius: "8px",
                    background: "#f8f0fc",
                    width: "90%",
                    height: "80px",
                    alignSelf: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                ></Box>

                <Button
                  sx={{
                    borderRadius: "8px",
                    background: "#46144c",
                    width: "90%",
                    height: "60px",
                    alignSelf: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "22px",
                    textTransform: "capitalize",
                    color: "#FFF",
                    fontWeight: "bold",
                    "&:hover": {
                      backgroundColor: "#523d61",
                    },
                  }}
                >
                  Submit
                </Button>
              </Box>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Testimonials;
