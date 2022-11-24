import React,{useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import M from 'materialize-css';


const Signup = ()=>{
    const navigate = useNavigate();
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const PostData = () =>{
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            M.toast({html: 'Invalid Email!', classes:'#ff1744 red accent-3'})
            return
        }
        fetch("/signup",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,
                email,
                password
            })
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.error){
                M.toast({html: 'Invalid Input!', classes:'#ff1744 red accent-3'})
            }
            else{
                M.toast({html: data.massage,classes:'#2e7d32 green darken-3'})
                navigate('/login');
            }
        })
    } 

    return (
        <div className='mycard'>
        <div className="card auth-card input-field">
            <h2>Instagram</h2>
            <input 
            type="text"
            placeholder='Name'
            value={name}
            onChange={(e)=>setName(e.target.value)}
            >
            </input>
            <input 
            type="text"
            placeholder='Email'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            >
            </input>
            <input 
            type="text"
            placeholder='Password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            >
            </input>
            <button className="btn waves-effect waves-light #42a5f5 blue lighten-1"
            onClick={()=>PostData()}>
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