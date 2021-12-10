import { Link, NavLink } from "react-router-dom";
import './MainHeader.css';


export default function MainHeader() {
    const active = (navData) => navData.isActive ? "active" : "";
    return (
        <nav>
            <ul>
                <li><NavLink to="Home"> Home </NavLink></li>
                <li><NavLink to="About"> About </NavLink></li>
                <li><NavLink to="Projects"> Projects </NavLink></li>
                <li className='contact'><NavLink to="Contact"> Contact </NavLink></li>
            </ul>
        </nav>
    );
}