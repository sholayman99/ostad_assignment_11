import { NavLink } from "react-router-dom";
import "../assets/css/Navbar.css";

const Navbar = () => {
    return (
        <nav className="nav-container">
           <div>
            <h2>Ostad <span>Assignment</span> </h2>
           </div> 
           <div>
            <ul className="nav-list">
                <li >
                    <NavLink className={({isActive})=> isActive? "active-navLink":"navLink"} to={"/"} >Home</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive})=> isActive? "active-navLink":"navLink"} to={"/service"} >Service</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive})=> isActive? "active-navLink":"navLink"} to={"/project"} >Project</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive})=> isActive? "active-navLink":"navLink"} to={"/blog"} >Blog</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive})=> isActive? "active-navLink":"navLink"} to={"/about"} >About</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive})=> isActive? "active-navLink":"navLink"} to={"/contact"} >Contact</NavLink>
                </li>
            </ul>
           </div>
        </nav>
    );
};

export default Navbar;