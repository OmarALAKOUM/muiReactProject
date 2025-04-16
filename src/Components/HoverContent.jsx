import React from "react";
import { Typography, Button, Divider, Box } from "@mui/material";
import { WidthFull } from "@mui/icons-material";
import AssignmentIcon from "@mui/icons-material/Assignment"; 
import InventoryIcon from "@mui/icons-material/Inventory"; 
import GavelIcon from "@mui/icons-material/Gavel"; 

const HoverContent = ({ label }) => {
  switch (label) {
    case "Declarations":
      return (
        <Box sx={{ position: "relative", border: "1px solid black" }}>
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{
              backgroundColor: "#800080",
              color: "#fff",
              py: 1,
              px: 2,
              borderRadius: 0,
            }}
          >
            Declarations
          </Typography>

          <Box display="flex" flexDirection="column" gap="5px" sx={{ p: 1 }}>
            
            <Box display="flex" alignItems="center">
              <Button
                variant="outlined"
                sx={{
                  color: "black",
                  fontWeight: "bold",
                  width: "200px",
                  height: "60px",
                  borderRadius: "0px",
                  borderColor: "black",
                  justifyContent: "flex-start",
                  pl: "8px", 
                  display: "flex",
                  alignItems: "center",
                  gap: "8px", 
                  "&:hover": {
                    borderColor: "#000",
                  },
                }}
              >
                <AssignmentIcon />
                <span style={{ fontSize: "14px" }}>Declarations</span>
              </Button>
              <label
                style={{
                  whiteSpace: "normal",
                  wordBreak: "break-word",
                  marginLeft: "5px",
                }}
              >
                Search for Manifests Import and Modify Manifests
              </label>
            </Box>

            <Box display="flex" alignItems="center">
              <Button
                variant="outlined"
                sx={{
                  color: "black",
                  fontWeight: "bold",
                  width: "200px",
                  height: "60px",
                  borderRadius: "0px",
                  borderColor: "black",
                  justifyContent: "flex-start",
                  pl: "8px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  "&:hover": {
                    borderColor: "#000",
                  },
                }}
              >
                <InventoryIcon />
                <span style={{ fontSize: "14px" }}>Commodities</span>
              </Button>
              <label
                style={{
                  whiteSpace: "normal",
                  wordBreak: "break-word",
                  marginLeft: "5px",
                }}
              >
                Search for Manifests Import and Modify Manifests
              </label>
            </Box>

            <Box display="flex" alignItems="center">
              <Button
                variant="outlined"
                sx={{
                  color: "black",
                  fontWeight: "bold",
                  width: "200px",
                  height: "60px",
                  borderRadius: "0px",
                  borderColor: "black",
                  justifyContent: "flex-start",
                  pl: "8px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  "&:hover": {
                    borderColor: "#000",
                  },
                }}
              >
                <GavelIcon />
                <span
                  style={{
                    fontSize: "14px",
                    textAlign: "left",
                    whiteSpace: "normal",
                    wordBreak: "break-word",
                  }}
                >
                  Customs Procedure
                </span>
              </Button>
              <label
                style={{
                  whiteSpace: "normal",
                  wordBreak: "break-word",
                  marginLeft: "5px",
                }}
              >
                Search for Manifests Import and Modify Manifests
              </label>
            </Box>
          </Box>
        </Box>
      );
    case "Configuration":
      return (
        <Box sx={{ position: "relative" }}>
          <Typography
            variant="h6"
            fontWeight="bold"
            color="green"
            sx={{
              backgroundColor: "green",
              color: "#fff",
              py: 1,
              px: 2,
              borderRadius: 0,
            }}
          >
            Configuration
          </Typography>
          {/* <Divider sx={{ my: 1 }} /> */}
          <Box
            display="flex"
            flexDirection="column"
            gap="5px"
            sx={{ margin: 1 }}
          >
            <Button fullWidth variant="outlined">
              Settings
            </Button>
            <Button fullWidth variant="outlined">
              Permissions
            </Button>
          </Box>
        </Box>
      );
    case "Accounting":
      return (
        <Box sx={{ position: "relative" }}>
          <Typography
            variant="h6"
            fontWeight="bold"
            color="#000080"
            sx={{
              backgroundColor: "#000080",
              color: "#fff",
              py: 1,
              px: 2,
              borderRadius: 0,
            }}
          >
            Accounting
          </Typography>
          {/* <Divider sx={{ my: 1 }} /> */}
          <Box
            display="flex"
            flexDirection="column"
            gap="5px"
            sx={{ margin: 1 }}
          >
            <Button fullWidth variant="outlined">
              Invoice
            </Button>
            <Button fullWidth variant="outlined">
              Client Statement
            </Button>
            <Button fullWidth variant="outlined">
              Payment
            </Button>
          </Box>
        </Box>
      );
    case "Entities":
      return (
        <Box sx={{ position: "relative" }}>
          <Typography
            variant="h6"
            fontWeight="bold"
            color="#FFA500"
            sx={{
              backgroundColor: "#FFA500",
              color: "#fff",
              py: 1,
              px: 2,
              borderRadius: 0,
            }}
          >
            Entities
          </Typography>
          {/* <Divider sx={{ my: 1 }} /> */}
          <Box
            display="flex"
            flexDirection="column"
            gap="5px"
            sx={{ margin: 1 }}
          >
            <Button fullWidth variant="outlined">
              Entities
            </Button>
            <Button fullWidth variant="outlined">
              Clients
            </Button>
            <Button fullWidth variant="outlined">
              Suppliers
            </Button>
          </Box>
        </Box>
      );
    case "System":
      return (
        <Box sx={{ position: "relative" }}>
          <Typography
            variant="h6"
            fontWeight="bold"
            color="#FF0000"
            sx={{
              backgroundColor: "#FF0000",
              color: "#fff",
              py: 1,
              px: 2,
              borderRadius: 0,
            }}
          >
            System
          </Typography>
          {/* <Divider sx={{ my: 1 }} /> */}
          <Box
            display="flex"
            flexDirection="column"
            gap="5px"
            sx={{ margin: 1 }}
          >
            <Button fullWidth variant="outlined">
              Document Type
            </Button>
            <Button fullWidth variant="outlined">
              Declaration Type
            </Button>
            <Button fullWidth variant="outlined">
              Declaration SubType
            </Button>
          </Box>
        </Box>
      );
    case "Reports":
      return (
        <Box sx={{ position: "relative" }}>
          <Typography
            variant="h6"
            fontWeight="bold"
            color="#0000FF"
            sx={{
              backgroundColor: "#0000FF",
              color: "#fff",
              py: 1,
              px: 2,
              borderRadius: 0,
            }}
          >
            Reports
          </Typography>
          {/* <Divider sx={{ my: 1 }} /> */}
          <Box
            display="flex"
            flexDirection="column"
            gap="5px"
            sx={{ margin: 1 }}
          >
            <Button fullWidth variant="outlined">
              Petty Cash
            </Button>
            <Button fullWidth variant="outlined">
              Supplier
            </Button>
            <Button fullWidth variant="outlined">
              Client Statement
            </Button>
          </Box>
        </Box>
      );
    default:
      return null;
  }
};

export default HoverContent;
