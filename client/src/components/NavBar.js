import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ()=>{
    return (
        <nav>
        <div className="nav-wrapper white">
        <Link to="/" className="brand-logo left">Instagram</Link>
        <ul id="nav-mobile" className="right">
        <li><Link to="/Signup">Signup</Link></li>
        <li><Link to="/Login">Login</Link></li>
        <li><Link to="/Profile">Profile</Link></li>
        <li><Link to="/createpost">Create Post</Link></li>
        </ul>
        </div>
        </nav>
    )
}

export default NavBar;