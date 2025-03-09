import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Breadcrumbs.css";

const Breadcrumbs = () => {
  const location = useLocation();
  const paths = location.pathname.split("/").filter(path => path);

  return (
    <nav>
      <ul className="breadcrumb">
        <li><Link className="link-bread" to="/">mysite</Link></li>
        {paths.map((path, index) => {
          const routeTo = "/" + paths.slice(0, index + 1).join("/");
          let name = path;

          if (name === "ArticlePage") name = "Blog";
          if (index === paths.length - 1 && !isNaN(name)) {
            name = "full blog";
          }

          return (
            <li key={index}>
              {index === paths.length - 1 ? (
                <span className="link-bread">{name}</span> 
              ) : (
                <Link className="link-bread" to={routeTo}>{name}</Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
