import React from "react";
import { Link } from "react-router-dom";

const Tabs = () => {
  return (
    <div>
      <ul className="nav nav-pills mt-5 mb-5 box2 p-2">
        <li className="nav-item">
            <Link to='/all' className="nav-link navy">All</Link>
        </li>
        <li className="nav-item">
            <Link to='/full-stack-development' className="nav-link navy">Full Stack Development</Link>
        </li>
        <li className="nav-item">
            <Link to='/data-science' className="nav-link navy">Data Science</Link>
        </li>
        <li className="nav-item">
            <Link to='/cyber-security' className="nav-link navy">Cyber Security</Link>
        </li>
        <li className="nav-item">
        <Link to='/career' className="nav-link navy">Career</Link>
        </li>
      </ul>
    </div>
  );
};

export default Tabs;
