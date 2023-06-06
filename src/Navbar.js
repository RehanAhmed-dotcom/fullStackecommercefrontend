import Home from "./pages/Home";
import { useState } from "react";
import "./styles.css";
import { GrMenu } from "react-icons/gr";
import { GiCrossedSwords } from "react-icons/gi";
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
              <a href="/pricing">Pricing</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/pricing">Pricing</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/pricing">Pricing</a>
            </li>
          </ul>
        </div>
        // </div>
      )}
      <nav className="nav">
        <a className="three" onClick={() => setShow(true)}>
          <GrMenu />
        </a>
        <a href="/" className="title">
          Site Name
        </a>
        <ul className="ulli">
          <li>
            <a href="/pricing">Pricing</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/pricing">Pricing</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/pricing">Pricing</a>
          </li>
        </ul>
      </nav>
      {/* <Home /> */}
    </>
  );
}
