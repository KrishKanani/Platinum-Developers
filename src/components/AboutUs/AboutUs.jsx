import { Box, Typography } from "@mui/material";
import React from "react";

import AboutHero from "../../assets/AboutHero.jpg";
import { useTheme } from "@mui/material/styles";

//IMPORTING DATA
import data from "../../data.json";

//IMPORTING ICONS
import DomainOutlinedIcon from "@mui/icons-material/DomainOutlined";
import ApartmentIcon from "@mui/icons-material/Apartment";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import LandscapeIcon from "@mui/icons-material/Landscape";

// IMPORTINF CSS
import "../../styles/AboutUs.css";

const AboutUs = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        marginTop: { xs: "120px", lg: "50px" },
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          backgroundImage: `url(${AboutHero})`,
          backgroundSize: "cover",
        }}
      >
        <Box
          sx={{
            width: "100%",
            backgroundColor: "rgba(0,0,0,0.4)",
            height: { xs: "200px", sm: "350px", md: "400px", lg: "700px" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "30px", sm: "50px", lg: "60px" },
              marginTop: { sm: "20px", lg: "0px" },
              color: "#FFF",
              fontFamily: "Libre Franklin",
              fontWeight: "600",
              border: "2px solid #FFF",
              padding: "2px 30px",
            }}
          >
            About Us
          </Typography>
          <Typography
            sx={{
              width: { xs: "100%", sm: "80%", lg: "50%" },
              color: "white",
              marginTop: "20px",
              fontSize: { xs: "14px", md: "16px" },
              fontFamily: "Poppins",
            }}
          >
            {data.about.heroTagline}
          </Typography>
        </Box>
      </Box>
      {/* --------------------------------------------------------------------------------- SECTION 1 --------------------------------------------------------------------------------- */}
      <Box
        sx={{
          width: "100%",
          height: { lg: "70vh" },
          padding: "100px 0px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: {
              xs: "95vw",
              sm: "90vw",
              lg: "70vw",
            },
            height: { lg: "80%" },
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            justifyContent: "space-evenly",
            alignItems: "center",
            "@media (min-width:1200px) and (max-width:1300px)": {
              height: "90%",
              width: "80vw",
            },
          }}
        >
          <Box
            sx={{
              width: { lg: "46%" },
              height: { sm: "70%", lg: "80%" },
              border: "2px solid #46144c",
              padding: { xs: "20px", sm: "40px", lg: "20px 50px" },
              display: "grid",
              textAlign: "start",
              placeContent: "center",
              "@media (min-width:1200px) and (max-width:1300px)": {
                width: "48%",
                padding: "20px",
              },
            }}
          >
            <Typography
              sx={{
                color: theme.palette.primary.main,
                fontFamily: "Libre Franklin",
                fontSize: { xs: "24px", sm: "30px", md: "34px", lg: "40px" },
                marginBottom: "20px",
                fontWeight: "700",
                "@media (min-width:1200px) and (max-width:1300px)": {
                  fontSize: "30px",
                },
              }}
            >
              Platinum Developers
            </Typography>
            {data.about.section1.map((item, index) => (
              <Typography
                sx={{
                  marginTop: "10px",
                  color: "black",
                  fontFamily: "Poppins",
                  display: "flex",
                }}
              >
                <DomainOutlinedIcon
                  sx={{
                    marginRight: "10px",
                    color: theme.palette.primary.main,
                  }}
                />{" "}
                {item}
              </Typography>
            ))}
          </Box>

          <Box
            sx={{
              width: { xs: "90%", sm: "54%", lg: "48%" },
              height: { xs: "200px", sm: "300px", lg: "60%" },
              backgroundColor: "#46144c",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                backgroundImage:
                  "url(https://img.freepik.com/free-photo/guy-shows-document-girl-group-young-freelancers-office-have-conversation-working_146671-13569.jpg?size=626&ext=jpg&ga=GA1.1.661182646.1670135593&semt=ais)",
                height: "90%",
                width: "95%",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></Box>
          </Box>
        </Box>
      </Box>

      {/* --------------------------------------------------------------------------------- SECTION 2 --------------------------------------------------------------------------------- */}
      <Box
        sx={{
          height: { xs: "auto", sm: "", lg: "110vh" },
          width: "100%",
          backgroundColor: "#f2f8f9",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "100px 0px",
        }}
      >
        <Box sx={{ width: { xs: "95%", md: "80%", lg: "70%" } }}>
          <Typography
            sx={{
              fontSize: "40px",
              fontFamily: "Libre Franklin",
              fontWeight: "700",
              paddingBottom: "40px",
              // borderBottom: "1px solid #000",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            What We Offer
            <Box
              sx={{
                width: "100px",
                height: "4px",
                backgroundColor: theme.palette.primary.main,
                borderRadius: "2px",
              }}
            ></Box>
            <Typography
              sx={{
                marginTop: "30px",
                width: { xs: "95%", sm: "70%", md: "82%" },
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Corrupti, facere doloremque. Veniam consequatur perferendis,
              provident vitae rem molestiae quibusdam. Beatae nam ea id soluta
              ullam?
            </Typography>
          </Typography>

          <Box
            sx={{
              width: "100%",
              marginTop: "20px",
              display: { xs: "block", sm: "flex" },
              justifyContent: { xs: "center", sm: "space-evenly" },
              // justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {data.about.section2.cards.map((item, index) => (
              <Box
                className="card"
                sx={{
                  width: { xs: "80%", sm: "28%" },
                  height: { xs: "250px", sm: "300px", md: "250px" },
                  marginTop: { xs: "20px", sm: "0px" },
                  margin: "auto",
                  border: "1px solid #46144c",
                }}
              >
                <Box
                  sx={{
                    height: "75%",
                  }}
                >
                  {index == 0 ? (
                    <ApartmentIcon
                      className="text"
                      sx={{
                        color: "#46144c",
                        fontSize: "50px",
                        margin: "40px 0px 20px 0px",
                      }}
                    />
                  ) : index == 1 ? (
                    <CorporateFareIcon
                      className="text"
                      sx={{
                        color: "#46144c",
                        fontSize: "50px",
                        margin: "40px 0px 20px 0px",
                      }}
                    />
                  ) : (
                    <LandscapeIcon
                      className="text"
                      sx={{
                        color: "#46144c",
                        fontSize: "50px",
                        margin: "40px 0px 20px 0px",
                      }}
                    />
                  )}
                  {/* <ApartmentIcon
                    sx={{
                      color: "#46144c",
                      fontSize: "50px",
                      margin: "40px 0px 20px 0px",
                    }}
                  /> */}
                  <Typography
                    className="text"
                    sx={{ fontSize: { xs: "16px", lg: "18px" } }}
                  >
                    {/* {data.about.section2.cards.card1.content} */}
                    {item.content}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    height: "25%",
                    backgroundColor: "#46144c",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#f2f8f9",
                      fontSize: { xs: "18px", lg: "20px" },
                      fontFamily: "Poppins",
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            width: { xs: "95%", md: "80%", lg: "66%" },
            // height: "30%",
            marginTop: "100px",
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: { xs: "85%", md: "42%" },
              backgroundColor: theme.palette.primary.main,
              height: { xs: "220px", lg: "100%" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "93%",
                height: "92%",
                backgroundImage: `url("https://img.freepik.com/free-photo/handshake-after-interview_1139-302.jpg?size=626&ext=jpg&ga=GA1.1.661182646.1670135593&semt=ais")`,
                backgroundSize: "cover",
              }}
            ></Box>
          </Box>
          <Box
            sx={{
              width: { xs: "80%", lg: "48%" },
              backgroundColor: "#FFF",
              height: "100%",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "start",
              gap: "20px",
              border: "1px solid #000",
            }}
          >
            {data.about.section2.ExperienceTheDifference.map((item, index) => (
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "start",
                  gap: "10px",
                }}
              >
                <DomainOutlinedIcon
                  sx={{ color: theme.palette.primary.main }}
                />
                {item}
              </Typography>
            ))}
            {/* <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <DomainOutlinedIcon sx={{ color: theme.palette.primary.main }} />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
              iure commodi natus reprehenderit quibusdam debitis odio delectus
              amet at quam.
            </Typography> */}
          </Box>
        </Box>
      </Box>

      {/* ----------------------------------------------------------------------------------- SECTION 3 ------------------------------------------------------------------------------------  */}
      <Box
        sx={{
          // height: "120vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: { xs: "95%", md: "80%", lg: "70%" } }}>
          <Typography
            sx={{
              marginTop: "100px",
              fontSize: "40px",
              fontFamily: "Libre Franklin",
              fontWeight: "700",
              paddingBottom: "40px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            Our Passionate Team
            <Box
              sx={{
                width: "100px",
                height: "4px",
                backgroundColor: theme.palette.primary.main,
                borderRadius: "2px",
              }}
            ></Box>
            <Typography
              sx={{
                marginTop: "30px",
                width: { xs: "95%", sm: "70%", md: "82%" },
              }}
            >
              {data.about.section3.passionateTeam}
            </Typography>
          </Typography>
        </Box>

        <Box sx={{ marginTop: "100px", height: "100%" }}>
          <Box
            sx={{
              width: "100%",
              display: "grid",
              justifyContent: "center",
              alignItems: "center",
              gridTemplateColumns: {
                sm: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
              },
              gridGap: "20px",
            }}
          >
            {data.about.section3.teamCard.map((item, index) => (
              <Box sx={{ width: "30%", height: "350px" }}>
                <Box className="aboutTeamContainer">
                  <Box class="aboutTeamCard">
                    <Box class="aboutTeamImage" sx={{ height: "200px" }}>
                      <img
                        href="#"
                        src={item.image}
                        style={{ width: "100%", height: "100%" }}
                      />
                    </Box>

                    <Box class="aboutTeamContent">
                      <Typography
                        sx={{
                          fontFamily: "Poppins",
                          fontWeight: "Bold",
                          fontSize: "18px",
                          margniTop: "30px",
                          color: theme.palette.primary.main,
                        }}
                      >
                        {item.name}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "Poppins",
                          fontWeight: "Bold",
                        }}
                      >
                        {item.position}
                      </Typography>
                      <Typography sx={{ marginTop: "20px" }}>
                        {item.work}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
        {/* <Box className="aboutTeamContainer">
          <Box class="aboutTeamCard">
            <Box class="aboutTeamImage">
              <img
                href="#"
                src="https://i.pinimg.com/originals/a4/7b/a5/a47ba59b4a353e0928ef0551ca44f980.jpg"
              />
            </Box>
            <Box class="aboutTeamContent">
              <Typography>This is content</Typography>
              <Typography>
                DIn publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content.
              </Typography>
            </Box>
          </Box>
        </Box> */}

        {/* <Box
          className="aboutTeamContainer"
          sx={{
            position: "relative",
            width: "1100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWarp: "warp",
            padding: "30px",
          }}
        >
          <Box
          className="aboutTeamCard"
            style={{
              position: "relative",
              maxWidth: "300px",
              height: "215px",
              backgroundColor: "#fff",
              margin: "30px 10px",
              padding: "20px 15px",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 5px 20px rgba(0,0,0,0.5)",
              transition: "0.3s ease-in-out",
              borderRadius: "15px",
            }}
          >
            <Box
              className="aboutTeamImage"
              sx={{
                position: "relative",
                width: "260px",
                height: "260px",
                top: "-40%",
                left: "8px",
                boxShadow: "0 5px 20px rgba(0,0,0,0.2)",
                zIndex: 1,
              }}
            >
              <img
                src="https://i.pinimg.com/originals/a4/7b/a5/a47ba59b4a353e0928ef0551ca44f980.jpg"
                style={{ width: "100%" }}
                alt=""
              />
            </Box>
            <Box
              className="aboutTeamContent"
              sx={{
                position: "relative",
                top: "-140px",
                padding: "10px 15px",
                color: "#111",
                textAlign: "center",
                visibility: "hidden",
                opacity: 0,
                transition: "0.3s ease-in-out",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur minus consequatur sunt aliquam tempora necessitatibus
              blanditiis quos sapiente nobis recusandae?
            </Box>
          </Box>
        </Box> */}
      </Box>
    </Box>
  );
};

export default AboutUs;
