import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

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
              <Link to="/About">
                <Button
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    margin: "0 2rem",
                  }}
                >
                  About me
                </Button>
              </Link>
              <Link to="/Portfolio">
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
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
