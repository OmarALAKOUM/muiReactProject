// // src/Components/Sidebar.jsx
// import React from 'react';
// import { Box, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
// import DescriptionIcon from '@mui/icons-material/Description';
// import SettingsIcon from '@mui/icons-material/Settings';
// import CalculateIcon from '@mui/icons-material/Calculate';
// import GroupsIcon from '@mui/icons-material/Groups';
// import ComputerIcon from '@mui/icons-material/Computer';
// import PieChartIcon from '@mui/icons-material/PieChart';

// const menuItems = [
//   { label: 'Declarations', icon: <DescriptionIcon />, color: '#800080', path: '/declarations' }, // Purple
//   { label: 'Configuration', icon: <SettingsIcon />, color: '#008000', path: '/configuration' },   // Green
//   { label: 'Accounting', icon: <CalculateIcon />, color: '#000080', path: '/accounting' },         // Dark Blue
//   { label: 'Entities', icon: <GroupsIcon />, color: '#FFA500', path: '/entities' },                // Orange
//   { label: 'System', icon: <ComputerIcon />, color: '#FF0000', path: '/system' },                  // Red
//   { label: 'Reports', icon: <PieChartIcon />, color: '#0000FF', path: '/reports' },                // Bright Blue
// ];

// const Sidebar = () => {
//   return (
//     <Box sx={{ width: 240, height: '100vh', display: 'flex', flexDirection: 'column' }}>
//       <List disablePadding>
//         {menuItems.map((item) => (
//           <ListItemButton
//             key={item.label}
//             href={item.path}
//             sx={{
//               bgcolor: item.color,
//               color: '#fff',
//               '&:hover': {
//                 bgcolor: item.color,
//                 opacity: 0.9,
//               },
//               py: 3, // more vertical padding
//             }}
//           >
//             <ListItemIcon sx={{ color: '#fff', minWidth: 40 }}>
//               {item.icon}
//             </ListItemIcon>
//             <ListItemText primary={item.label} />
//           </ListItemButton>
//         ))}
//       </List>
//     </Box>
//   );
// };

// export default Sidebar;
// src/Components/Sidebar.jsx
import React, { useState, useRef } from "react";
import HoverContent from "../Components/HoverContent.jsx";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Divider,
  Tooltip,
  Box,
} from "@mui/material";
import {
  Menu as MenuIcon,
  ChevronLeft,
  Description,
  Settings,
  Calculate,
  Groups,
  Computer,
  PieChart,
} from "@mui/icons-material";

const drawerWidth = 240;
//const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

const menuItems = [
  {
    label: "Declarations",
    icon: <Description />,
    color: "#800080",
    path: "/declarations",
  },
  {
    label: "Configuration",
    icon: <Settings />,
    color: "#008000",
    path: "/configuration",
  },
  {
    label: "Accounting",
    icon: <Calculate />,
    color: "#000080",
    path: "/accounting",
  },
  { label: "Entities", icon: <Groups />, color: "#FFA500", path: "/entities" },
  { label: "System", icon: <Computer />, color: "#FF0000", path: "/system" },
  { label: "Reports", icon: <PieChart />, color: "#0000FF", path: "/reports" },
];

const Sidebar = ({ open, toggleDrawer }) => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [hoverTop, setHoverTop] = useState(null);
  const itemRefs = useRef([]);

  return (
    <Drawer
      variant="permanent"
      open={open}
      sx={{
        width: open ? drawerWidth : 64,
        flexShrink: 0,
        whiteSpace: "nowrap",
        boxSizing: "border-box",
        "& .MuiDrawer-paper": {
          width: open ? drawerWidth : 64,
          transition: "width 0.3s",
          overflowX: "hidden",
        },
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: open ? "flex-end" : "center",
          padding: "8px",
        }}
      >
        <IconButton onClick={toggleDrawer}>
          {open ? <ChevronLeft /> : <MenuIcon />}
        </IconButton>
      </div>
      <Divider />
      <List sx={{ mt: "-2px" }}>
        {menuItems.map((item, index) => (
          <Box
            key={item.label}
            sx={{ position: "relative"}}
            // onMouseEnter={() => setHoveredItem(item.label)}
            // onMouseLeave={() => setHoveredItem(null)}
            onMouseEnter={() => {
              setHoveredItem(item.label);
              const el = itemRefs.current[index];
              console.log('index',el);
              if (el) {
                 const top = el.getBoundingClientRect().top;
                // const rect = el.getBoundingClientRect();
                // const top = rect.top + window.scrollY;
                setHoverTop(top);
              }
            }}
            onMouseLeave={() => {
              setHoveredItem(null);
              setHoverTop(null);
            }}
          >
            <Tooltip title={!open ? item.label : ""} placement="right">
              <ListItemButton
               ref={(el) => (itemRefs.current[index] = el)}
                href={item.path}
                sx={{
                  bgcolor: item.color,
                  color: "#fff",
                  py: 2,
                  mb: "3px",
                  height:'70px',
                  "&:hover": {
                    bgcolor: item.color,
                    color:"#fff",
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    color: "#fff",
                    minWidth: 0,
                    mr: open ? 2 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                {open && <ListItemText primary={item.label} />}
              </ListItemButton>
            </Tooltip>

            {hoveredItem === item.label && open && (
              <Box
                sx={{
                  position: "fixed",
                  // top: `${index * 56 + 64}px`,
                  top: `${hoverTop}px`,
                  left: open ? `${drawerWidth}px` : "64px",
                  width: 475,
                  backgroundColor: "#fff",
                  color: "#000",
                  boxShadow: 0,
                  margin:0,
                  padding:0,
                  border: "1px solid #ccc",
                  zIndex: 1301,
                  borderRadius:1,
                  // p: 2,
                }}
              >
                <HoverContent label={item.label} />
              </Box>
            )}
          </Box>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
