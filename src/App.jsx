// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  CssBaseline,
  Divider,
} from "@mui/material";
import Sidebar from "./Components/SideBar";
import ProductPie from "./Components/ProductPieChart";
import Layout from "./Components/Layout";
import Declarationtypes from "./Components/Declarationtypes";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/reports/product" element={<ProductPie />} />
        <Route path="/system/declarationtypes" element={<Declarationtypes />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
