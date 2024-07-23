import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Media from "./pages/Media";
import Gym from "./pages/Gym";
import GetFitWithPit from "./pages/GetfitWithPit";
import Portfolio from "./pages/Portfolio";

function App() {
  const [navItem, setNavItem] = useState(1);

  const homePressed = () => {
    setNavItem(1);
  };
  const aboutPressed = () => {
    setNavItem(2);
  };
  const projectsPressed = () => {
    setNavItem(3);
  };
  const mediaPressed = () => {
    setNavItem(4);
  };
  const gymPressed = () => {
    setNavItem(5);
  };

  const [theme, setTheme] = useState("light");

  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  // console.log(theme);

  return (
    <body data-theme={theme}>
      <header className="header">
        <div className="themeSwitch">
          <label>
            <input
              className="toggle-checkbox"
              onClick={handleToggleTheme}
              type="checkbox"
            />
            <div className="toggle-slot">
              <div className="sun-icon-wrapper">
                <div
                  className="iconify sun-icon"
                  data-icon="feather-sun"
                  data-inline="false"
                ></div>
              </div>
              <div className="toggle-button"></div>
              <div className="moon-icon-wrapper">
                <div
                  className="iconify moon-icon"
                  data-icon="feather-moon"
                  data-inline="false"
                ></div>
              </div>
            </div>
          </label>
        </div>
        <nav className="navPrimary">
          <div className="navDiv">
            <ul>
              <Link
                to={"/"}
                className={`navItem ${navItem === 1 ? "active" : ""}`}
                onClick={homePressed}
              >
                Home
              </Link>
              <Link
                to={"/about"}
                className={`navItem ${navItem === 2 ? "active" : ""}`}
                onClick={aboutPressed}
              >
                About
              </Link>
              <Link
                to={"/projects"}
                className={`navItem ${navItem === 3 ? "active" : ""}`}
                onClick={projectsPressed}
              >
                Projects
              </Link>
              <Link
                to={"/media"}
                className={`navItem ${
                  navItem === 4 ? "active" : ""
                } navItem-displayNone1`}
                onClick={mediaPressed}
              >
                Media
              </Link>
              <Link
                to={"/gym"}
                className={`navItem ${
                  navItem === 5 ? "active" : ""
                } navItem-displayNone2`}
                onClick={gymPressed}
              >
                Gym
              </Link>
            </ul>
          </div>
        </nav>
        <div className="navGradient">
          <a className="navA-Contact" href="#">
            <span className="navContact">Contact</span>
          </a>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home theme={theme} />}></Route>
        <Route path="/about" element={<About theme={theme} />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/media" element={<Media />}></Route>
        <Route path="/gym" element={<Gym />}></Route>
        <Route
          path="/projects/getfitwithpit"
          element={<GetFitWithPit />}
        ></Route>
        <Route path="/projects/portfolio" element={<Portfolio />}></Route>
      </Routes>

      <footer className="Copyright">
        <span>Copyright &copy; 2024 | Piotr Bednarski</span>
      </footer>
    </body>
  );
}

export default App;
