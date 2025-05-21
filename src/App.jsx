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
import Translations from "./Components/translations";
import PostWord from './Components/postword';
import PermissionRole from './Components/PermissionRole.jsx'
import { LicenseInfo } from '@mui/x-license-pro';

// Register your license key here
LicenseInfo.setLicenseKey('e0d9bb8070ce0054c9d9ecb6e82cb58fTz0wLEU9MzI0NzIxNDQwMDAwMDAsUz1wcmVtaXVtLExNPXBlcnBldHVhbCxLVj0y');
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/reports/product" element={<ProductPie />} />
        <Route path="/system/declarationtypes" element={<Declarationtypes />} />
        <Route path ="/translations/translate" element={<Translations />} />
        <Route path='/translations/post' element = {<PostWord />}/>
        <Route path='/configuration/permissions' element = {<PermissionRole />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
