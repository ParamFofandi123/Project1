import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Breadcrums.css";

export default function Breadcrums({ title, image }) {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div
      className="page-Breadcrums"
      style={{ backgroundImage: `url(${image})` }}
    >
      <h2>{title}</h2>

      <nav className="Breadcrums-nav">
     <Link to="/">Home</Link>
      {pathnames.map((name, index) => {
        const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
        const formattedName = name
          .replace(/-/g, " ") // replaces hyphens with spaces
          .replace(/\b\w/g, (char) => char.toUpperCase()); // capitalizes words

        return (
          <span key={index}>
            {" > "}
            <Link to={routeTo}>{formattedName}</Link>
          </span>
        );
      })}
      </nav>
    </div>
  );
}
