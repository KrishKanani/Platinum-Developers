import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import {
  AppBar,
  Box,
  Toolbar,
  Stack,
  Container,
  Hidden,
  Typography,
  Menu,
  MenuItem,
  IconButton,
  SwipeableDrawer,
  List,
  ListItemButton,
  ListItemText,
  Button,
} from "@mui/material";
import Logo from "../assets/Logo.jpeg";

//IMPORTING DATA
import data from "../data.json";

// IMPORTING ICONS
import CallIcon from "@mui/icons-material/Call";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import MailIcon from "@mui/icons-material/Mail";

import { useTheme } from "@mui/material/styles";

const Navbar = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const phoneNumber = "+1234567890";

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };
  return (
    <Box
      sx={
        {
          // width: "100%",
          // zIndex: "999",
        }
      }
    >
      <AppBar
        color="default"
        position="fixed"
        sx={{
          height: "130px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "white",
          color: "#3D2521",
        }}
      >
        <Stack
          direction={"row"}
          sx={{
            height: "100%",
            width: "100%",
            paddingRight: "80px",
            textAlign: "center",
            justifyContent: "flex-end",
            backgroundColor: "#000000",
          }}
        >
          <Stack direction={"row"} sx={{ alignItems: "center" }}>
            <CallIcon
              sx={{
                display: "inline",
                color: "common.white",
                width: "2vw",
                padding: "0.1vw 0.1vw 0px",
                marginRight: "5px",
                fontSize: { xs: "16px", sm: "20px" },
              }}
            />
            <Typography
              sx={{ fontSize: { xs: "12px", sm: "20px" }, color: "white" }}
            >
              {data.content.contactInfo.contact}
            </Typography>
          </Stack>
          <Stack
            direction={"row"}
            sx={{ marginLeft: "25px", alignItems: "center" }}
          >
            <MailIcon
              sx={{
                color: "#FFFFFF",
                width: "2vw",
                padding: "0.1vw 0.1vw 0px",
                marginRight: "5px",
                justifyContent: "center",
                fontSize: { xs: "12px", sm: "20px" },
              }}
            />
            <Typography
              sx={{ color: "#FFFFFF", fontSize: { xs: "12px", sm: "20px" } }}
            >
              {data.content.contactInfo.email}
            </Typography>
          </Stack>
        </Stack>
        <Container
          maxWidth="1920px"
          sx={{
            width: "90%",
            display: "flex",
            justifyContent: "space-between",
            // backgroundColor: "#FFFFF0",
          }}
        >
          <Toolbar
            disableGutters
            sx={{
              height: "90px",
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box
              className="logo"
              sx={{ display: "flex", gap: "12px", alignItems: "center" }}
            >
              <Link to="/">
                <img src={Logo} alt="" width="" height="50px" />
              </Link>
              {/* <Typography
                sx={{
                  color: "#6d4687",
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
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Hidden mdDown>
                <Box
                  sx={{
                    display: "flex",
                  }}
                >
                  <ListItemButton
                    href="/"
                    sx={{
                      "&:hover": { borderRadius: "6px" },
                    }}
                    className="list"
                  >
                    <ListItemText disableTypography>
                      <Link exact to="/" className="list">
                        Home
                      </Link>
                    </ListItemText>
                  </ListItemButton>
                  <ListItemButton
                    href="/aboutus"
                    sx={{
                      "&:hover": { borderRadius: "6px" },
                    }}
                  >
                    <ListItemText disableTypography className="list">
                      About Us
                    </ListItemText>
                  </ListItemButton>
                  <ListItemButton
                    href="/"
                    sx={{
                      "&:hover": { borderRadius: "6px" },
                    }}
                  >
                    <ListItemText disableTypography className="list">
                      <Link exact to="/portfolio" className="list">
                        Portfolio
                      </Link>
                    </ListItemText>
                  </ListItemButton>
                  <ListItemButton
                    sx={{
                      "&:hover": { borderRadius: "6px" },
                    }}
                    onClick={handleOpenUserMenu}
                  >
                    <ListItemText disableTypography className="list">
                      Buy With Us
                      <KeyboardArrowDownIcon sx={{ fontSize: "1.2rem" }} />
                    </ListItemText>
                  </ListItemButton>
                  <ListItemButton
                    href="/"
                    sx={{
                      "&:hover": { borderRadius: "6px" },
                    }}
                  >
                    <ListItemText disableTypography className="list">
                      Contact Us
                    </ListItemText>
                  </ListItemButton>

                  <ListItemButton href={`tel:${phoneNumber}`}>
                    <Button
                      onClick={handleCall}
                      variant="contained"
                      sx={{
                        backgroundColor: "#46144c",
                        fontSize: "1.2rem",
                        "@media (max-width: 900px)": {
                          fontSize: "1.2rem",
                        },
                        "@media (max-width: 1100px)": {
                          fontSize: "1rem",
                        },
                        "&:hover": {
                          background: "#523d61",
                        },
                      }}
                    >
                      <CallIcon sx={{ marginRight: "6px" }} /> 1300 459 162
                    </Button>
                  </ListItemButton>
                </Box>
              </Hidden>
              <Hidden mdUp>
                <IconButton onClick={() => setOpen(true)}>
                  <MenuIcon />
                </IconButton>
              </Hidden>
            </Box>
          </Toolbar>
        </Container>
        <SwipeableDrawer
          anchor="right"
          open={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
        >
          <div
            onClick={() => setOpen(false)}
            role="button"
            tabIndex={0}
            style={{ backgroundColor: theme.palette.primary.main }}
          >
            <IconButton>
              <CloseIcon
                onClick={() => setOpen(false)}
                sx={{ color: "#FFFFFF", fontWeight: "600" }}
              />
            </IconButton>
          </div>
          <List
            sx={{
              pl: "0.5rem",
              height: "100%",
              paddingTop: "20px",
              textAlign: "start",
            }}
          >
            <ListItemButton href="/">
              <ListItemText disableTypography className="list">
                {/* <Link to="/">Home</Link> */}
              </ListItemText>
            </ListItemButton>
            <ListItemButton href="/">
              <ListItemText disableTypography className="list">
                About Us
              </ListItemText>
            </ListItemButton>
            <ListItemButton href="/">
              <ListItemText disableTypography className="list">
                Portfolio
              </ListItemText>
            </ListItemButton>
            <ListItemButton onClick={handleOpenUserMenu}>
              <ListItemText disableTypography className="list">
                Buy With Us{" "}
                <KeyboardArrowDownIcon sx={{ fontSize: "1.2rem" }} />
              </ListItemText>
            </ListItemButton>
            <ListItemButton href="/">
              <ListItemText disableTypography className="list">
                Contact Us
              </ListItemText>
            </ListItemButton>

            <ListItemButton href="/">
              <Button
                variant="contained"
                sx={{
                  margin: "auto",
                  fontSize: "1.2rem",
                  "@media (max-width: 900px)": {
                    fontSize: "1.2rem",
                  },
                  "@media (max-width: 1100px)": {
                    fontSize: "1rem",
                  },
                  "&:hover": {
                    background: "#523d61",
                  },
                }}
              >
                <CallIcon sx={{ marginRight: "6px" }} /> 1300 459 162
              </Button>
            </ListItemButton>
          </List>
        </SwipeableDrawer>
        <Menu
          sx={{
            mt: "100px",
            background: "none",
            boxShadow: "none",
          }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "buttom",
            horizontal: "center",
          }}
          keepMounted
          transformOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          <MenuItem
            sx={{
              fontSize: "18px",
              margin: "4px 10px",
              "&:hover": { backgroundColor: "#eee4f5" },
            }}
          >
            <Box>Selling</Box>
          </MenuItem>
          <MenuItem
            sx={{
              fontSize: "18px",
              margin: "4px 10px",
              "&:hover": { backgroundColor: "#eee4f5" },
            }}
          >
            Completed
          </MenuItem>
          <MenuItem
            sx={{
              fontSize: "18px",
              margin: "4px 10px",
              "&:hover": { backgroundColor: "#eee4f5" },
            }}
          >
            Sold
          </MenuItem>
        </Menu>
      </AppBar>
    </Box>
  );
};

export default Navbar;
