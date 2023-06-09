import React,{useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import M from 'materialize-css';


const Signup = ()=>{
    const navigate = useNavigate();
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [image, setImage] = useState("")
    const [url,setUrl] = useState(undefined)

    useEffect(()=>{
        if(url){
            uploadField()
        }
    },[url]) 

    const uploadPic = () =>{
        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", "insta-clone")
        data.append("cloud_name", "di4eqhwzy")
        fetch("https://api.cloudinary.com/v1_1/di4eqhwzy/image/upload",{
            method:"post",
            body:data
        })
        .then(res=>res.json())
        .then(data=>{
            setUrl(data.url)
        }).catch(err=>{
            console.log(err)
        })
    }

    const uploadField = () => {
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
                password,
                pic:url
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
        }).catch(err=>{
            console.log(err)
        })
    }

    const PostData = () =>{
        if(image){
            uploadPic()
        }else{
            uploadField()
        }
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
            />
            
            <input 
            type="text"
            placeholder='Email'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
        
            <input 
            type="password"
            placeholder='Password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
            <div className="file-field input-field">
            <div className="btn #42a5f5 blue darken-1">
                <span>Upload pic</span>
                <input type="file" onChange={(e)=>setImage(e.target.files[0])} />
            </div>
            <div className="file-path-wrapper">
                <input className="file-path validate" type="text" />
            </div>
            </div>
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