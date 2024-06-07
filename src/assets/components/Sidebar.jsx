import './styles/Sidebar.css';
import { Link } from 'react-router-dom';
import { getIconUrl } from "../../utils";
/// icon imports
function Sidebar () {
  return (
    <div>
      <nav className="main-menu">
        <ul>
          <li>
            <Link to="/linnn/">
              <img src={getIconUrl("sidebar/home.png")} className="nav-icon" alt=""/>
              <p className="nav-text">Home</p>
            </Link>
          </li>

          <li>
            <a href="https://lit.link/linn1103" target="_blank" rel="noreferrer">
              <img src={getIconUrl("sidebar/blog.png")} className="nav-icon" alt=""/>
              <p className="nav-text">Blog</p>
            </a>
          </li>

          <li>
            <Link to="/linnn/note">
              <img src={getIconUrl("sidebar/note.png")} className="nav-icon" alt=""/>
              <p className="nav-text">Note</p>
            </Link>
          </li>
          
          <li>
            <Link to="/linnn/about">
              <img src={getIconUrl("sidebar/profile-user.png")} className="nav-icon" alt=""/>
              <p className="nav-text">About</p>
            </Link>
          </li>

          
        </ul>

        <ul className="logout">
          <li>
            <Link to="/linnn/settings">
              <img src={getIconUrl("sidebar/settings.png")} className="nav-icon" alt=""/>
              <p className="nav-text">Settings</p>
            </Link>
          </li>
        </ul>

      </nav>
    </div>
  );
}

export default Sidebar;