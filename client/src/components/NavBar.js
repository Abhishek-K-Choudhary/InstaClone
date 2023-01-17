import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import {UserContext} from '../App';


const NavBar = ()=>{
    const{state, dispatch} = useContext(UserContext)
    const renderList = () =>{
        if(state){
            return [
                <li><Link to="/Profile">Profile</Link></li>,
                <li><Link to="/createpost">Create Post</Link></li>
            ]
        }else{
            return [
                <li><Link to="/Signup">Signup</Link></li>,
                <li><Link to="/Login">Login</Link></li>
            ]
        }
    }


    return (
        <nav>
        <div className="nav-wrapper white">
        <Link to={state?"/":"/Login"} className="brand-logo left">Instagram</Link>
        <ul id="nav-mobile" className="right">
            {renderList()}
        </ul>
        </div>
        </nav>
    )
}

export default NavBar;