import logo from "./Bookverse_logo.svg";
import "./App.css";
import Search from "./Search";
import Intro from "./Intro";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light ps-5 pe-5 mt-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="logo" width="60" height="60" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link px-5" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-5" href="#">
                  Trending
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle px-5"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  My Books
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Favorites
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#"></a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Saved for later
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link px-5" href="#">
                  Quotes
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <nav className="navbar navbar-light mt-3">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="logo" width="60" height="60" />
          </a>
        </div>
      </nav>{" "} */}
      <div className="container">
        <br />
        <section>
          <Search />
        </section>
        <section>
          <Intro />
        </section>
        <footer className="App-footer">
          <small>
            This is an open-source code by{" "}
            <a
              href="https://www.linkedin.com/in/ksenya-pavlova-k/"
              target="blank"
              rel="noreferrer"
            >
              Xenia Pavlova
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
