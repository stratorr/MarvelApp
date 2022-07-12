import { Link, NavLink } from "react-router-dom";
import "./appHeader.scss";

const AppHeader = () => {
  let activeStyle = {
    color: "#9f0013",
  };

  return (
    <header className="app__header">
      <h1 className="app__title">
        <Link to="/">
          <span>Marvel</span> information portal
        </Link>
      </h1>
      <nav className="app__menu">
        <ul>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) =>
                isActive ? activeStyle : { color: "black" }
              }
            >
              Characters
            </NavLink>
          </li>
          /
          <li>
            <NavLink
              to="/comics"
              style={({ isActive }) =>
                isActive ? activeStyle : { color: "black" }
              }
            >
              Comics
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AppHeader;
