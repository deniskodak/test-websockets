import React, { Suspense, lazy, useEffect } from "react";
import { Route, Routes, Navigate, Link } from "react-router-dom";
import { HomePage, AboutPage, ServicesPage } from "./pages";

import "./App.scss";

function App() {
  return (
    <>
      <section className="main-section">
        <header className="app-header">
          <div className="container">
            <nav>
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/about" className="nav-link">
                About
              </Link>
              <Link to="/services" className="nav-link">
                Services
              </Link>
            </nav>
          </div>
        </header>

        <div className="container">
          <Suspense fallback={<h1>Wait a moment :)</h1>}>
            <Routes>
              <Route exact path="/" element={<HomePage />} />

              <Route exact path="/about" element={<AboutPage />} />
              <Route exact path="/services" element={<ServicesPage />} />
              <Route path="*" element={<h1>Page not found</h1>} />
              {/* <Navigate to="/" /> */}
            </Routes>
          </Suspense>
        </div>
      </section>
    </>
  );
}

export default App;
