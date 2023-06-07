import React from "react";
import { Box, Typography } from "@mui/material";

// IMPORTING IMAGES
import HeroImage from "../../assets/HeroImage.jpg";
import AboutUsProp1 from "../../assets/AboutUsProperty1.webp";
import AboutUsProp2 from "../../assets/AboutUsProperty2.webp";
import AboutUsProp3 from "../../assets/AboutUsProperty3.jpg";
import AboutUsProp4 from "../../assets/AboutUsProperty4.webp";

// IMPORTING ICONS AND THEME
import { ThemeProvider, useTheme } from "@mui/material/styles";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import ApartmentIcon from "@mui/icons-material/Apartment";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

// -----------------IMPORTING DATA ----------------
import data from "../../data.json";
import "../../styles/HomePage.css";

const HomePageHero = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        "@media (max-width:1020px) ": {
          width: "100%",
        },
      }}
    >
      {/* <div className="card">
        <div className="card__img">
          <img
            src="https://blog.codepen.io/wp-content/uploads/2012/06/Button-Fill-Black-Large.png"
            alt="Card Image"
          />
        </div>
        <div className="__grid-effect">
          {Array.from({ length: 100 }, (_, index) => (
            <a key={index} className="card__grid-effect-tile" href="#"></a>
          ))}
        </div>
      </div> */}
      <Box
        sx={{
          width: "100%",
          height: { xs: "40vh", sm: "" },
          backgroundImage: `url(${HeroImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          zIndex: "0",
          "@media (min-width:1020px) ": {
            width: "100%",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            height: { xs: "34.5vh", sm: "59vh", md: "90vh", lg: "85vh" },
            // backdropFilter: "blur(2px)",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            paddingTop: { xs: "20px", sm: "50px", md: "90px" },
            textAlign: "start",
            paddingLeft: { xs: "20px", sm: "60px", md: "120px" },
          }}
        >
          <Typography
            sx={{
              marginTop: { xs: "80px", sm: "180px", md: "80px", lg: "180px" },
              fontFamily: "Libre Franklin",
              fontSize: { xs: "30px", sm: "80px", md: "90px" },
              fontWeight: "700",
              color: "white",
              lineHeight: { sm: "100px", md: "100px" },
            }}
          >
            BEST
          </Typography>
          <Typography
            sx={{
              fontFamily: "Libre Franklin",
              fontSize: { xs: "30px", sm: "70px", md: "90px" },
              fontWeight: "700",
              color: theme.palette.primary.light,
              lineHeight: { sm: "60px", md: "100px" },
            }}
          >
            CONSTRUCTION
          </Typography>
          <Typography
            sx={{
              display: "block",
              fontFamily: "Libre Franklin",
              fontSize: { xs: "30px", sm: "65px", md: "90px" },
              fontWeight: "700",
              color: "white",
              // WebkitTextStroke: "2px #FFFFFF",
              lineHeight: { md: "100px" },
              position: "relative",
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: "0",
                left: "0",
                height: "2px",
                backgroundColor: "#FFF",
              },
            }}
          >
            SERVICE
          </Typography>
          <Typography
            sx={{
              fontFamily: "Libre Franklin",
              fontSize: { xs: "14px", md: "24px" },
              fontWeight: "500",
              color: "white",
              marginTop: { xs: "10px", md: "60px" },
              letterSpacing: "1px",
            }}
          >
            We help in building your
            <span
              style={{
                color: "white",
                fontWeight: "800",
              }}
            >
              {" "}
              Dream Home.
            </span>
          </Typography>
        </Box>
      </Box>

      {/* ------------------------------ ABOUT US BEGINS --------------------------------------- */}

      <Box
        sx={{
          display: { xs: "block", md: "flex" },
          flexDirection: "row",
          height: { xs: "680px", sm: "auto", md: "650px" },
          alignItems: "center",
          backgroundColor: "#f8f0fc",
          padding: {
            xs: "50px 14px",
            sm: "80px",
            md: "0px 0vw 20px 2vw",
            lg: "0px 10vw 20px 10vw",
          },
          justifyContent: "space-between",
          "@media (min-width:1020px) and (max-width:1300px) ": {
            justifyContent: "space-evenly",
          },
        }}
      >
        <Box
          sx={{
            borderLeft: "8px solid #cfafe3",
            paddingLeft: { xs: "10px", sm: "20px" },
            width: { xs: "85%", md: "34vw" },
            textAlign: "start",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "28px", sm: "36px" },
              textAlign: "start",
              color: "#46144c",
              fontFamily: "Poppins",
              fontWeight: "800",
            }}
          >
            Platinum Developers
          </Typography>
          <Typography variant="subtitle" fontWeight="500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
            suscipit minima laudantium magnam expedita quo dignissimos quisquam
            facere exercitationem facilis! consectetur adipisicing elit. Enim
            suscipit minima laudantium magnam expedita quo dignissimos quisquam
            facere exercitationem facilis!
          </Typography>
        </Box>

        {/* --------------------------------------------------- ABOUT US IMAGE SECTION ---------------------------------------  */}
        <Box
          sx={{
            width: { md: "30vw" },
            height: "440px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginTop: { xs: "0px", sm: "80px", md: "0px", lg: "0px" },
            gap: "10px",
            alignItems: "center",
            "@media (min-width:1020px) and (max-width:1300px) ": {
              width: "40%",
              // justifyContent: "start",
            },
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              gap: "10px",
            }}
          >
            <Box
              sx={{
                width: "50%",
                borderRadius: "20px",
                backgroundSize: "cover",
                alignSelf: "flex-end",
              }}
            >
              <img
                src={AboutUsProp1}
                alt=""
                width="100%"
                style={{ borderRadius: "10px" }}
              />
            </Box>
            <Box
              sx={{
                width: "35%",
                borderRadius: "20px",
                backgroundSize: "cover",
                display: "block",
                alignSelf: "flex-end",
              }}
            >
              <img
                src={AboutUsProp2}
                alt=""
                width="100%"
                style={{ borderRadius: "10px" }}
              />
            </Box>
          </Box>

          {/* -----------------ANOTHER IMAGE LINE --------------------  */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              gap: "10px",
              justifyContent: "flex-end",
            }}
          >
            <Box
              sx={{
                width: "35%",
                borderRadius: "20px",
                backgroundSize: "cover",
                alignSelf: "flex-start",
              }}
            >
              <img
                src={AboutUsProp3}
                alt=""
                width="100%"
                style={{ borderRadius: "10px" }}
              />
            </Box>
            <Box
              sx={{
                width: "50%",
                borderRadius: "20px",
                backgroundSize: "cover",
                alignSelf: "flex-start",
              }}
            >
              <img
                src={AboutUsProp4}
                alt=""
                width="100%"
                style={{ borderRadius: "10px" }}
              />
            </Box>
          </Box>
        </Box>
      </Box>

      {/* -------------------------------- ABOUT US CARD BEGINS -----------------------------------  */}
      <Box
        sx={{
          // width: "90%",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {/* {data.content.AboutUsCard.map((item, index) => (
          <Box
            flexDirection="column"
            textAlign="left"
            sx={{
              m: { xs: "0 1vw", sm: "0 2vw", md: "0vw 1.3vw", lg: "0vw 2vw" },
              width: { md: "25vw", lg: "50vw" },
              backgroundColor: "#faf2ff",
              border: "2px solid #cfafe3",
              padding: { xs: "3vw 4vw", md: "2vw 3vw" },
              position: "relative",
              textAlign: "center",
              top: { xs: "-2.5rem", sm: "-4rem", md: "-6rem", xl: "-5.55rem" },
              marginBottom: {
                xs: "-2.5rem",
                sm: "-4rem",
                md: "-4rem",
                xl: "-5.55rem",
              },
              borderRadius: "20px",
              boxShadow:
                "0px 5px 10px rgba(0, 0, 0, 0.09), 0px 2px 5px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Box
              sx={{
                // margin: { xs: "10px", md: "0px" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Diversity1Icon
                sx={{
                  color: "#ba90d4",
                  fontSize: { xs: "50px", sm: "70px", md: "80px" },
                  marginRight: "20px",
                }}
              />{" "}
              <Typography
                sx={{
                  color: "#ba90d4",
                  fontSize: { xs: "50px", sm: "70px", md: "80px" },
                  fontWeight: "800",
                }}
              >
                {item.numbers}
              </Typography>
            </Box>
            <Typography variant="heading">Happy Customer</Typography>
            <Typography
              sx={{
                textAlign: "center",
                marginTop: "1.5vw",
                fontSize: {
                  xs: "0.8rem",
                  md: "0.9rem",
                  xl: "1.1rem",
                },
                fontFamily: "Poppins",
                color: "#46144c",
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </Typography>
          </Box>
        ))} */}
        <Box
          className="aboutCard"
          flexDirection="column"
          textAlign="left"
          sx={{
            m: { xs: "0 1vw", sm: "0 2vw", md: "0vw 1.3vw", lg: "0vw 2vw" },
            width: { md: "25vw", lg: "50vw" },
            backgroundColor: "#faf2ff",
            padding: { xs: "3vw 4vw", md: "2vw 3vw" },
            position: "relative",
            textAlign: "center",
            top: { xs: "-2.5rem", sm: "-4rem", md: "-6rem", xl: "-5.55rem" },
            marginBottom: {
              xs: "-2.5rem",
              sm: "-4rem",
              md: "-4rem",
              xl: "-5.55rem",
            },
            borderRadius: "20px",
            boxShadow:
              "0px 5px 10px rgba(0, 0, 0, 0.09), 0px 2px 5px rgba(0, 0, 0, 0.1)",
            zIndex: "10",
          }}
        >
          <Box
            sx={{
              // margin: { xs: "10px", md: "0px" },
              backdropFilter: "blur(8px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Diversity1Icon
              sx={{
                color: "#ba90d4",
                fontSize: { xs: "50px", sm: "70px", md: "80px" },
                marginRight: "20px",
              }}
            />{" "}
            <Typography
              sx={{
                color: "#ba90d4",
                fontSize: { xs: "50px", sm: "70px", md: "80px" },
                fontWeight: "800",
              }}
            >
              250+
            </Typography>
          </Box>
          <Typography variant="heading">Happy Customer</Typography>
          <Typography
            sx={{
              textAlign: "center",
              marginTop: "1.5vw",
              fontSize: {
                xs: "0.8rem",
                md: "0.9rem",
                xl: "1.1rem",
              },
              fontFamily: "Poppins",
              color: "#46144c",
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </Typography>
        </Box>

        <Box
          flexDirection="column"
          textAlign="left"
          sx={{
            m: { xs: "0 1vw", sm: "0 2vw", md: "0vw 1.2vw", lg: "0vw 2vw" },
            width: { md: "24vw", lg: "50vw" },
            backgroundColor: "#faf2ff",
            border: "2px solid #cfafe3",
            padding: { xs: "3vw 4vw", md: "2vw 3vw" },
            position: "relative",
            textAlign: "center",
            top: { xs: "0.5rem", sm: "1rem", md: "-6rem", xl: "-5.55rem" },
            marginBottom: {
              xs: "-2.5rem",
              sm: "-4rem",
              md: "-4rem",
              xl: "-5.55rem",
            },
            borderRadius: "20px",
            boxShadow:
              "0px 5px 10px rgba(0, 0, 0, 0.09), 0px 2px 5px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ApartmentIcon
              sx={{
                color: "#ba90d4",
                fontSize: { xs: "50px", sm: "70px", md: "80px" },
                marginRight: "10px",
              }}
            />{" "}
            <Typography
              sx={{
                color: "#ba90d4",
                fontSize: { xs: "50px", sm: "70px", md: "80px" },
                fontWeight: "800",
              }}
            >
              30+
            </Typography>
          </Box>
          <Typography variant="heading">Projects</Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              marginTop: "1.5vw",
              fontSize: {
                xs: "0.8rem",
                md: "0.9rem",
                xl: "1.1rem",
              },
              fontFamily: "Poppins",
              color: "#46144c",
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </Typography>
        </Box>

        <Box
          flexDirection="column"
          textAlign="left"
          sx={{
            m: { xs: "0 1vw", sm: "0 2vw", md: "0vw 1.2vw", lg: "0vw 2vw" },
            width: { md: "24vw", lg: "50vw" },
            backgroundColor: "#faf2ff",
            border: "2px solid #cfafe3",
            padding: { xs: "3vw 4vw", md: "2vw 3vw" },
            position: "relative",
            textAlign: "center",
            top: { xs: "3.5rem", sm: "6rem", md: "-6rem", xl: "-5.55rem" },
            marginBottom: {
              xs: "-2.5rem",
              sm: "-4rem",
              md: "-4rem",
              xl: "-5.55rem",
            },
            borderRadius: "20px",
            boxShadow:
              "0px 5px 10px rgba(0, 0, 0, 0.09), 0px 2px 5px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <EmojiEventsIcon
              sx={{
                color: "#ba90d4",
                fontSize: { xs: "50px", sm: "70px", md: "80px" },
                marginRight: "10px",
              }}
            />{" "}
            <Typography
              sx={{
                color: "#ba90d4",
                fontSize: { xs: "50px", sm: "70px", md: "80px" },
                fontWeight: "800",
              }}
            >
              10+
            </Typography>
          </Box>
          <Typography variant="heading">Awards</Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              marginTop: "1.5vw",
              fontSize: {
                xs: "0.8rem",
                md: "0.9rem",
                xl: "1.1rem",
              },
              fontFamily: "Poppins",
              color: "#46144c",
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePageHero;
