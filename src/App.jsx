// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { AppBar,Toolbar,Box, Typography, CssBaseline, Divider } from '@mui/material';
import Sidebar from './Components/SideBar';
import ProductPie from './Components/ProductPieChart'
// const Page = ({ title }) => (
//   <Box sx={{ p: 4 }}>
//     <Typography variant="h3">{title}</Typography>
//   </Box>
// );

// export default function App() {
//   return (
//     <Router>
//       <Box sx={{ display: 'flex' }}>
//         <Sidebar />
//         <Box sx={{ flexGrow: 1 }}>
//           <Routes>
//             <Route path="/" element={<Page title="Home" />} />
//             <Route path="/declarations" element={<Page title="Declarations" />} />
//             <Route path="/configuration" element={<Page title="Configuration" />} />
//             <Route path="/accounting" element={<Page title="Accounting" />} />
//             <Route path="/entities" element={<Page title="Entities" />} />
//             <Route path="/system" element={<Page title="System" />} />
//             <Route path="/reports" element={<Page title="Reports" />} />
//           </Routes>
//         </Box>
//       </Box>
//     </Router>
//   );
// }
// src/App.jsx


const drawerWidth = 240;
const Page = ({ title }) => (
  <Box sx={{ p: 4 }}>
    <Typography variant="h4"></Typography>
    {/* {title} */}
  </Box>
);

export default function App() {
  const [open, setOpen] = useState(true);

  const toggleDrawer = () => {
    setOpen((prev) => !prev);
  };

  return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />

        <AppBar
          position="fixed"
          elevation={0} 
          sx={{
            height: 57,
            backgroundColor: '#fff', 
            color: '#000',  
            zIndex: 1300,
            transition: 'margin-left 0.3s, width 0.3s',
            ml: open ? `${drawerWidth}px` : '64px',
            width: `calc(100% - ${open ? drawerWidth : 64}px)`,
          }}
        >
          <Toolbar sx={{ minHeight: 48, px: 2 }}>
            <Typography variant="h6" noWrap>
              Manifesto
            </Typography>
            <Divider sx={{ position: 'fixed', top: '57px',width: open ? `calc(100% - ${drawerWidth}px)` : 'calc(100% - 64px)', left: open ? `${drawerWidth}px` : '64px', }} />
          </Toolbar>
        </AppBar>
        
        <Sidebar open={open} toggleDrawer={toggleDrawer} />
        {/* <Divider sx={{ position: 'fixed', top: '48px', width: '100%', zIndex: 1200, height:'1px' }} /> */}
        <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
          <Routes>
            
            {/* <Route path="/" element={<Page title="Home" />} />
            <Route path="/declarations" element={<Page title="Declarations" />} />
            <Route path="/configuration" element={<Page title="Configuration" />} />
            <Route path="/accounting" element={<Page title="Accounting" />} />
            <Route path="/entities" element={<Page title="Entities" />} />
            <Route path="/system" element={<Page title="System" />} />
            <Route path="/reports" element={<Page title="Reports" />} /> */}
          </Routes>
        </Box>
      </Box>
    
  );
}
