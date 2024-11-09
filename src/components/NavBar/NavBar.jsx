import React, { useState } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png';

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className='navbar'>
      <Link to='/' onClick={() => setMenu("home")} className="nav-logo">
        <img src={logo} alt="logo" />
      </Link>

      <ul className="nav-menu">
        <li onClick={() => setMenu("introduction")}>
          <Link to='/introduction'>Introduction</Link>
          {menu === "introduction" && <hr />}
        </li>
        <li onClick={() => setMenu("setup")}>
          <Link to='/setup'>Setup</Link>
          {menu === "setup" && <hr />}
        </li>
        <li onClick={() => setMenu("modules")}>
          <Link to='/modules'>Modules</Link>
          {menu === "modules" && <hr />}
        </li>
        <li onClick={() => setMenu("npm")}>
          <Link to='/npm'>NPM</Link>
          {menu === "npm" && <hr />}
        </li>
        <li onClick={() => setMenu("web-server")}>
          <Link to='/web-server'>Web Server</Link>
          {menu === "web-server" && <hr />}
        </li>
        <li onClick={() => setMenu("file-system")}>
          <Link to='/file-system'>File System</Link>
          {menu === "file-system" && <hr />}
        </li>
        <li onClick={() => setMenu("debugging")}>
          <Link to='/debugging'>Debugging</Link>
          {menu === "debugging" && <hr />}
        </li>
        <li onClick={() => setMenu("events")}>
          <Link to='/events'>Events</Link>
          {menu === "events" && <hr />}
        </li>
        <li onClick={() => setMenu("express")}>
          <Link to='/express'>Express.js</Link>
          {menu === "express" && <hr />}
        </li>
        <li onClick={() => setMenu("static-resources")}>
          <Link to='/static-resources'>Static Resources</Link>
          {menu === "static-resources" && <hr />}
        </li>
        <li onClick={() => setMenu("database")}>
          <Link to='/database'>Database</Link>
          {menu === "database" && <hr />}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
