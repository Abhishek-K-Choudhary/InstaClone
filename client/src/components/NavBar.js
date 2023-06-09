import React,{useContext} from 'react';
import { Link, useNavigate} from 'react-router-dom';
import {UserContext} from '../App';


const NavBar = ()=>{
    const{state, dispatch} = useContext(UserContext)
    const navigate = useNavigate()
    const renderList = () =>{
        if(state){
            return [
                <li><Link to="/Profile">Profile</Link></li>,
                <li><Link to="/createpost">Create Post</Link></li>,
                <li><Link to="/myfollowingpost">My Follwing Post</Link></li>,
                <li>
                    <button className="btn #d32f2f red darken-2"
                onClick={()=>{
                    localStorage.clear()
                    dispatch({type:"CLEAR"})
                    navigate.push("/Login")
                }}
                >
                    Logout
                </button>
                </li>
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