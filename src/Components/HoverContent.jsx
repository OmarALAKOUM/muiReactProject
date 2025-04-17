import React from "react";
import { Typography, Button, Divider, Box } from "@mui/material";
import { useNavigate } from "react-router";

const HoverContent = ({ item, setHoveredItem, setHoverTop }) => {
  const navigate = useNavigate();

  const handleClick = (childPath) => {
    navigate(childPath);
    setHoveredItem(null);
    setHoverTop(null);
  };

  return (
    <Box sx={{ position: "relative", border: "1px solid black" }}>
      <Typography
        variant="h6"
        fontWeight="bold"
        sx={{
          backgroundColor: item.color || "#000",
          color: "#fff",
          py: 1,
          px: 2,
        }}
      >
        {item.label}
      </Typography>

      <Box display="flex" flexDirection="column" gap="5px" sx={{ p: 1 }}>
        {item.children?.map((child, idx) => (
          <Box key={idx} display="flex" alignItems="center">
            <Button
              onClick={() => handleClick(child.path)}
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
              {child.icon}
              <span style={{ fontSize: "13px",
                    textAlign: "left",
                    whiteSpace: "normal",
                    wordBreak: "break-word",}}>{child.textbutton}</span>
            </Button>
            <label
              style={{
                whiteSpace: "normal",
                wordBreak: "break-word",
                marginLeft: "5px",
              }}
            >
              {child.label}
            </label>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default HoverContent;
