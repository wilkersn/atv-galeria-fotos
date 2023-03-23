import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Gallery from "../pages/Gallery";
import AlbumPage from "../pages/Album";
import PhotoPage from "../pages/Photo";

export default function RoutesApp() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Gallery />} />
        <Route exact path="/album/:id" element={<AlbumPage />} />
        <Route exact path="/photo/:id" element={<PhotoPage />} />
      </Routes>
    </Router>
  );
}