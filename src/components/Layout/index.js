import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="mainnav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* An <Outlet> renders whatever child route is currently active
        (a placeholder for the child routes we defined above) */}
      <Outlet />

      <footer>
        <h4>Student Assignment for Seneca College by Diem Hang Pham, 2023</h4>
      </footer>
    </>
  )
};

export default Layout;
