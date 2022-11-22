import React from 'react';
import { Link } from 'react-router-dom';

const Signup = ()=>{
    return (
        <div className='mycard'>
        <div className="card auth-card input-field">
            <h2>Instagram</h2>
            <input 
            type="text"
            placeholder='Name'
            >
            </input>
            <input 
            type="text"
            placeholder='Email'
            >
            </input>
            <input 
            type="text"
            placeholder='Password'
            >
            </input>
            <button className="btn waves-effect waves-light #42a5f5 blue lighten-1">
                SignUp
            </button>
            <h5>
                <Link to="/login">
                    Already have an account?
                </Link>
            </h5>

        </div>
        </div> 
    )
}

export default Signup;