import { Outlet, Navigate } from "react-router";
import Sidebar from "./SideBar.jsx";
import { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Divider,
  CssBaseline,
} from "@mui/material";

const drawerWidth = 240;
import { SnackbarProvider } from "notistack";
const Layout = () => {
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => setOpen((prev) => !prev);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          height: 57,
          backgroundColor: "#fff",
          color: "#000",
          zIndex: 1300,
          transition: "margin-left 0.3s, width 0.3s",
          ml: open ? `${drawerWidth}px` : "64px",
          width: `calc(100% - ${open ? drawerWidth : 64}px)`,
        }}
      >
        <Toolbar sx={{ minHeight: 48, px: 2 }}>
          <Typography variant="h6" noWrap>
            Manifesto
          </Typography>
        </Toolbar>
        <Divider
          sx={{
            position: "fixed",
            top: "57px",
            width: open ? `calc(100% - ${drawerWidth}px)` : "calc(100% - 64px)",
            left: open ? `${drawerWidth}px` : "64px",
          }}
        />
      </AppBar>
      <Sidebar open={open} toggleDrawer={toggleDrawer} />
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 1, mt: 0, pt: "64px", height: "100vh" }}
      >
        <SnackbarProvider
          maxSnack={3}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          autoHideDuration={3000}
        >
          <Outlet />
        </SnackbarProvider>
      </Box>
    </Box>
  );
};

export default Layout;
