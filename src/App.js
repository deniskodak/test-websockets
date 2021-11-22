import React, { Suspense, lazy, useEffect, useState } from "react";
import { Route, Routes, NavLink as Link } from "react-router-dom";
import { HomePage, AboutPage, ServicesPage } from "./pages";
import { SocketContext } from "./context";
import io from "socket.io-client";

import "./App.scss";

const initialUserId = 123;

function App() {
  const [websocket, setWebsocket] = useState(null);
  const [userId, setuserId] = useState(initialUserId);

  useEffect(() => {
    const newSocket = io(`http://${window.location.hostname}:4000`);

    setWebsocket(newSocket);
    return () => newSocket.close();
  }, [setWebsocket]);

  return (
    <>
      <SocketContext.Provider value={{ websocket, userId }}>
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
      </SocketContext.Provider>
    </>
  );
}

export default App;
