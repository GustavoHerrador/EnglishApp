import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Components/Login";
import TestNivelator from "../Components/TestNivelator";

export default function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/test" element={<TestNivelator />} />
      </Routes>
    </BrowserRouter>
  );
}
