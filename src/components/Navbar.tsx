import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import ScrollIntoView from "react-scroll-into-view";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";

export default function Navbar() {
  return (
    <div className="navbar">
      <AppBar
        position="static"
        sx={{ background: "transparent", boxShadow: "none" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              sx={{
                flexGrow: 1,
                display: {
                  xs: "none",
                  md: "flex",
                  justifyContent: "flex-end",
                },
              }}
            >
              <Box
                sx={{
                  flexGrow: 1,
                  display: {
                    xs: "none",
                    md: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  },
                }}
              >
                <ScrollIntoView selector="#start">
                  <Link to="./">
                    <Button
                      sx={{
                        my: 2,
                        color: "white",
                        display: "block",
                        margin: "0 2rem",
                      }}
                    >
                      Start
                    </Button>
                  </Link>
                </ScrollIntoView>
              </Box>
              <ScrollIntoView selector="#portfolio">
                <Link to="./">
                  <Button
                    sx={{
                      my: 2,
                      color: "white",
                      display: "block",
                      margin: "0 2rem",
                    }}
                  >
                    Portfolio
                  </Button>
                </Link>
              </ScrollIntoView>

              <ScrollIntoView selector="#about">
                <Link to="./">
                  <Button
                    sx={{
                      my: 2,
                      color: "white",
                      display: "block",
                      margin: "0 2rem",
                    }}
                  >
                    About
                  </Button>
                </Link>
              </ScrollIntoView>

              <ScrollIntoView selector="#contact">
                <Link to="./">
                  <Button
                    sx={{
                      my: 2,
                      color: "white",
                      display: "block",
                      margin: "0 2rem",
                    }}
                  >
                    Contact
                  </Button>
                </Link>
              </ScrollIntoView>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
