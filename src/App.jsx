import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import data from "./data.json";

// ----------------- IMPORTING COMPONENTS ----------------
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePageFolder/HomePage";
import Portfolio from "./components/Portfolio/Portfolio";
import ProjectPage from "./components/ProjectPage/ProjectPage";
import Footer from "./components/Footer";
import SliderSwiper from "./components/common/SlideSwiper";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#46144c",
      light: "#FFF",
      dark: "#000",
    },
    secondary: {
      main: "#f8f0fc",
    },
  },
  typography: {
    fontFamily: "Libre Franklin",
    h1: {
      fontFamily: "Libre Franklin",
    },
    navLink2: {
      fontFamily: "Libre Franklin",
      color: "white",
      fontSize: "2vh",
      fontWeight: "bold",
      "&:hover": {
        color: "#f7e6fc",
      },
    },

    //------------------- Heading style---------------
    heading: {
      fontFamily: "Libre Franklin",
      fontWeight: "800",
      fontSize: "2.5rem",
      color: "black",
      "@media (min-width:600px) and (max-width:900px)": {
        fontSize: "1.825rem",
      },
      "@media (max-width:600px)": {
        fontSize: "1.625rem",
      },
    },

    // --------------- PROPERTY PAGE TYPOGRAPHY--------------------
    subtitleHeading: {
      fontFamily: "Poppins",
      color: "#",
      fontWeight: "600",
      fontSize: "2.6vh",
    },
    subtitle: {
      fontFamily: "Poppins",
      fontSize: "1.1rem",
      fontWeight: "400",
      color: "#000",
      "@media (min-width:600px) and (max-width:900px)": {
        fontSize: "1.025rem",
      },
      "@media (max-width:600px)": {
        fontSize: "0.925rem",
      },
    },
  },

  custom: {
    myVariable: "some value",
  },
});

const ProjectUrls = [];
var projectNameNav;
data.project?.map((item, index) => {
  projectNameNav = item.name.split(" ").join("-");
  ProjectUrls.push(projectNameNav);
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        className="App"
        sx={{
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/slider" element={<SliderSwiper />} />
            <Route exact path="/portfolio" element={<Portfolio />} />

            {/* <Route element={{/> */}

            {ProjectUrls?.map((item, index) => (
              <Route
                exact
                path={`/${item}`}
                element={<ProjectPage projectName={item} />}
              />
            ))}

            {ProjectUrls?.map((item, index) => (
              <Route
                exact
                path={`/portfolio/${item}`}
                element={<ProjectPage projectName={item} />}
              />
            ))}
          </Routes>
          <Footer />
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default App;
