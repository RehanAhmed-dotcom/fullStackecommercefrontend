import Home from "./pages/Home";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import { useState } from "react";
import "./styles.css";
import { GrMenu } from "react-icons/gr";
import { GiCrossedSwords } from "react-icons/gi";
import { BrowserRouter, Routes, Route, Switch, Link } from "react-router-dom";
export default function Navbar() {
  const [show, setShow] = useState(false);
  return (
    <>
      {show && (
        <div className="menuShow">
          <GiCrossedSwords className="cross" onClick={() => setShow(!show)} />
          {/* <div className="menuShowdown"> */}
          <ul className="menuShowdown">
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
        // </div>
      )}
      <nav className="nav">
        <a className="three" onClick={() => setShow(true)}>
          <GrMenu />
        </a>
        <Link to="/" className="title">
          Site Name
        </Link>
        <ul className="ulli">
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          {/* <li>
            <a href="/pricing">Pricing</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/pricing">Pricing</a>
          </li> */}
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </>
  );
}
