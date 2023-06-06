import React, { useRef, useState, useEffect } from "react";
import {
  Box,
  Typography,
  InputLabel,
  MenuItem,
  Select,
  Button,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import { ThemeProvider, useTheme } from "@mui/material";
import data from "../../data.json";

// -------------------------------- IMPORTING ICONS --------------------------
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BedIcon from "@mui/icons-material/Bed";
import ShowerIcon from "@mui/icons-material/Shower";
import GarageIcon from "@mui/icons-material/Garage";
import DomainIcon from "@mui/icons-material/Domain";

// --------------- IMPORTING COMPONENTS --------------------------
import Slider from "../Portfolio/Slider";

const ProjectPage = (projectName) => {
  // -------------------------- To Find the Project Name from URL -------------------------------------------------------------------------------------------
  const theme = useTheme();
  const location = useLocation();
  const currentUrl = location.pathname;
  var projectName;
  for (let i = currentUrl.length - 1; i >= 0; i--) {
    if (currentUrl[i] != "/") {
      projectName = currentUrl.slice(i + 1);
    } else {
      projectName = currentUrl.slice(i + 1);
      break;
    }
  }
  projectName = projectName.split("-").join(" ");

  // --------------------------- FETCHINF IMAGES ------------------
  var images = [];
  var content = [];
  data.project.map((item, index) => {
    if (item.name === projectName) {
      content = item;
      console.log(content);
      return;
    }
  });

  images = content.houseImage;

  // ----------------------------------------- UNIT PLAN SELECTION -------------------------
  const [selectedUnit, setSelectedUnit] = useState(1);
  var selectedUnitContent;
  console.log(selectedUnit);
  const handleSelectUnit = (event) => {
    setSelectedUnit(event.target.value);
    console.log(content);
    content.unit.map((item, index) => {
      if (item.no == selectedUnit) {
        selectedUnitContent = item;
      }
    });
  };
  // console.log(selectedUnitContent);

  return (
    <Box style={{ marginTop: "200px" }}>
      <Typography
        sx={{
          padding: "20px",
          marginTop: "180px",
          fontSize: "60px",
          backgroundColor: theme.palette.primary.main,
          color: "white",
          fontWeight: "600",
        }}
      >
        {content.name}
      </Typography>

      <Slider images={images} />
      <Box
        sx={{
          backgroundColor: theme.palette.primary.main,
          height: "80px",
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "60vw",
            display: "flex",
            justifyContent: "space-between",
            scrollBehavior: "smooth",
          }}
        >
          <a href="#description" style={{ textDecoration: "none" }}>
            <Typography variant="navLink2">Description</Typography>
          </a>
          <a href="#address" style={{ textDecoration: "none" }}>
            {" "}
            <Typography variant="navLink2">Address</Typography>
          </a>
          <a href="#unit-plan" style={{ textDecoration: "none" }}>
            <Typography variant="navLink2">Unit Plans</Typography>
          </a>
          <a href="#location" style={{ textDecoration: "none" }}>
            <Typography variant="navLink2">Location</Typography>
          </a>
          <a href="#enquiry-form" style={{ textDecoration: "none" }}>
            <Typography variant="navLink2">Enguiry</Typography>
          </a>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: { xs: "95vw", sm: "80vw", lg: "62vw" },
          }}
        >
          {/* ---------------------------------------------------------------------- DESCRIPTION -------------------------------------------------------------------------  */}
          <Box
            id="description"
            sx={{
              width: "96%",
              textAlign: "start",
              marginTop: "20px",
              backgroundColor: "#f6f0f7",
              padding: "20px",
              borderRadius: "4px",
            }}
          >
            <Typography variant="subtitleHeading" sx={{}}>
              Description
            </Typography>

            <Typography
              variant="subtitle"
              sx={{ display: "flex", alignItems: "center", marginTop: "10px" }}
            >
              {content.propertyDescription}
            </Typography>
          </Box>

          {/* --------------------------------------------------------------------- PROPERTY ADDRESS ---------------------------------------------------------------------   */}
          <Box
            id="address"
            sx={{
              width: "96%",
              textAlign: "start",
              marginTop: "20px",
              backgroundColor: "#f6f0f7",
              padding: "20px",
              borderRadius: "4px",
            }}
          >
            <Typography
              variant="subtitleHeading"
              sx={{
                display: "flex",
                // justifyContent: "center",
                alignItems: "center",
              }}
            >
              Address
            </Typography>

            <Typography
              variant="subtitle"
              sx={{ display: "flex", alignItems: "center", marginTop: "10px" }}
            >
              <LocationOnIcon sx={{ fontSize: "20px" }} />{" "}
              {content.propertyAddress}
            </Typography>
          </Box>
          {/* --------------------------------------------------------------------- VIDEO ---------------------------------------------------------------------   */}
          {content.videoURL && (
            <Box
              sx={{
                width: "96%",
                textAlign: "start",
                marginTop: "20px",
                backgroundColor: "#f6f0f7",
                padding: "20px",
                borderRadius: "4px",
              }}
            >
              <Typography
                variant="subtitleHeading"
                sx={{
                  display: "flex",
                  // justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Video
              </Typography>

              <Box
                sx={{
                  height: { xs: "50vh", sm: "36vh", lg: "60vh" },
                  marginTop: "10px",
                }}
              >
                <iframe
                  width="100%"
                  height="100%"
                  // src="https://www.youtube.com/embed/fGKgQyhMF6g"
                  src={content.videoURL}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </Box>
            </Box>
          )}

          {/* ------------------------------------------------------------- UNIT PLANS -------------------------------------------------  */}
          <Box
            id="unit-plan"
            sx={{
              width: "96%",
              textAlign: "start",
              marginTop: "20px",
              backgroundColor: "#f6f0f7",
              padding: "20px",
              borderRadius: "4px",
            }}
          >
            <InputLabel
              id="demo-simple-select-label"
              sx={{ width: "200px", color: theme.palette.primary.main }}
            >
              Unit No.
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              defaultValue="1"
              value={selectedUnit}
              label="Unit No."
              onChange={handleSelectUnit}
              sx={{
                width: "200px",
                backgroundColor: theme.palette.primary.main,
                color: "white",
                "&:hover": {
                  outline: "none",
                  border: "none",
                },
              }}
            >
              {Array.from(Array(content.totalUnit)).map((item, index) => (
                <MenuItem value={index} key={index}>
                  Unit {index + 1}
                </MenuItem>
              ))}
            </Select>

            <Box
              sx={{
                display: { xs: "block", sm: "flex" },
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "100%  ",
                  marginTop: "30px",
                  display: { xs: "block", sm: "flex" },
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    width: { xs: "90%", sm: "80%", md: "50%" },
                    display: { xs: "block", sm: "flex" },
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: {
                        xs: "70%",
                        sm: "40%",
                      },
                      height: {
                        xs: "100px",
                        sm: "100px",
                      },
                      border: "1px solid #000",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="subtitle" sx={{ display: "flex" }}>
                      <DomainIcon sx={{ paddingRight: "10px" }} />
                      Storey
                    </Typography>
                    <Typography variant="subtitle" sx={{ marginTop: "4px" }}>
                      {/* {selectedUnitContent.rooms.storey} */}
                      {content.unit[selectedUnit].rooms.storey}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      width: {
                        xs: "70%",
                        sm: "40%",
                      },
                      height: {
                        xs: "100px",
                        sm: "100px",
                      },
                      border: "1px solid #000",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="subtitle" sx={{ display: "flex" }}>
                      <GarageIcon sx={{ paddingRight: "10px" }} />
                      Garage
                    </Typography>
                    <Typography variant="subtitle" sx={{ marginTop: "4px" }}>
                      {content.unit[selectedUnit].rooms.garage}
                    </Typography>
                  </Box>
                </Box>

                <Box
                  sx={{
                    width: { xs: "90%", sm: "80%", md: "50%" },
                    display: { xs: "block", sm: "flex" },
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: {
                        xs: "70%",
                        sm: "40%",
                      },
                      height: {
                        xs: "100px",
                        sm: "100px",
                      },
                      border: "1px solid #000",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="subtitle" sx={{ display: "flex" }}>
                      <BedIcon sx={{ paddingRight: "10px" }} />
                      Bedroom
                    </Typography>
                    <Typography variant="subtitle" sx={{ marginTop: "4px" }}>
                      {content.unit[selectedUnit].rooms.bedroom}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      width: {
                        xs: "70%",
                        sm: "40%",
                      },
                      height: {
                        xs: "100px",
                        sm: "100px",
                      },
                      border: "1px solid #000",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="subtitle" sx={{ display: "flex" }}>
                      <ShowerIcon sx={{ paddingRight: "10px" }} />
                      Bathroom
                    </Typography>
                    <Typography variant="subtitle" sx={{ marginTop: "4px" }}>
                      {content.unit[selectedUnit].rooms.bathroom}
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box sx={{ marginTop: "30px" }}>
                <img
                  style={{ width: "100%" }}
                  // src="https://i.pinimg.com/736x/a4/eb/f6/a4ebf666496b6d06c5f46b0eac701d7c.jpg"
                  src={content.unit[selectedUnit].arcticturePlan}
                  alt=""
                />
              </Box>
            </Box>
          </Box>
          {/* ------------------------------------- LOCATION ----------------------------------------- */}
          <Box
            id="location"
            sx={{
              width: "96%",
              textAlign: "start",
              marginTop: "20px",
              backgroundColor: "#f6f0f7",
              padding: "20px",
              borderRadius: "4px",
            }}
          >
            <Typography
              variant="subtitleHeading"
              sx={{
                display: "flex",
                // justifyContent: "center",
                alignItems: "center",
              }}
            >
              Location
            </Typography>

            <Box
              sx={{
                // height: { xs: "50vh", sm: "36vh", lg: "60vh" },
                marginTop: "10px",
              }}
            >
              <iframe
                // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d946069.8303919864!2d72.02177493370607!3d22.14178276551545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f68d560049%3A0x50542dc34c47c7e0!2sJSP%20Infosoft%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1685967737986!5m2!1sen!2sin"
                src={content.mapURL}
                width="100%"
                height="450"
                // style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </Box>
          </Box>

          {/* --------------------- Enquiry Form ----------------------------------------  */}
          <Box
            id="enquiry-form"
            sx={{
              width: "96%",
              textAlign: "start",
              marginTop: "20px",
              backgroundColor: "#f6f0f7",
              padding: "20px",
              borderRadius: "4px",
            }}
          >
            <Typography
              variant="subtitleHeading"
              sx={{
                display: "flex",
                // justifyContent: "center",
                alignItems: "center",
              }}
            >
              Enquiry Now
            </Typography>

            <Box
              sx={{ display: { xs: "block", lg: "flex" }, marginTop: "30px" }}
            >
              <Box
                sx={{
                  borderRadius: "8px",
                  margin: { xs: "5px", lg: "3px" },
                  backgroundColor: "#FFF",
                  width: { xs: "auto", lg: "90%" },
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
                    backgroundColor: "#FFF",
                  }}
                  placeholder="Enter Name"
                />
              </Box>
              <Box
                sx={{
                  borderRadius: "8px",
                  margin: { xs: "5px", lg: "3px" },
                  // background: "#f8f0fc",
                  backgroundColor: "#FFF",
                  width: { xs: "auto", lg: "90%" },
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
                    backgroundColor: "#FFF",
                  }}
                  placeholder="Enter Contact"
                />
              </Box>
              <Box
                sx={{
                  borderRadius: "8px",
                  margin: { xs: "5px", lg: "3px" },
                  // background: "#f8f0fc",
                  backgroundColor: "#FFF",
                  width: { xs: "auto", lg: "90%" },
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
                    backgroundColor: "#FFF",
                  }}
                  placeholder="Enter Email"
                />
              </Box>
            </Box>
            <Box
              sx={{
                borderRadius: "8px",
                margin: "3px",
                // background: "#f8f0fc",
                background: "white",
                // width: "99.6%",
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
                  background: "white",
                }}
                placeholder="Message"
              />
            </Box>

            <Button
              sx={{
                borderRadius: "8px",
                background: "#46144c",
                margin: "10px 3px",
                width: { xs: "50%", sm: "30%", md: "20%" },
                height: "60px",

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
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectPage;
