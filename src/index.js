import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import Team from './pages/Team/Team.js';
import Topper from './pages/Topper/Topper.js';
import Projects from "./pages/Projects/Projects";
import Layout from './pages/Layout/Layout.js';
import Home from './pages/Home/Home.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Topper/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Team />} />
          <Route path="projects" element={<Projects />} />
          <Route path="home" element={<Home />} />

        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
