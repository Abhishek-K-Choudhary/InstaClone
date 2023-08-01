import React,{useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import M from 'materialize-css';


const CreatePost = () =>{
    const navigate = useNavigate()
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [image, setImage] = useState("")
    const [url,setUrl] = useState("")

    useEffect(()=>{
        if(url){
        fetch("/createpost",{
            method:"post",
            headers:{
                "Content-Type":"application/json",
                "authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                title,
                body,
                pic:url
            })
        })
        .then(res=>res.json())
        .then(data=>{

            if(data.error){
                M.toast({html: data.error, classes:'#ff1744 red accent-3'})
            }
            else{
                M.toast({html: "Posted Successfully!",classes:'#2e7d32 green darken-3'})
                navigate('/');
            }
        }).catch(err=>{
            console.log(err)
        })
    }
    },[url])
    

    const postDetails = () =>{
        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", "Upload_preset_name")
        data.append("cloud_name", "Product_Environment_Name_Of_Cloud")
        fetch("source for default pic",{
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

    return(
        <div className="card input-field" style={{
            margin:"30px auto",
            maxWidth:"500px",
            padding:"20px",
            textAlign:"center"
        }}>
            <input type="text" 
            placeholder="Title"
            value={title}
            onChange={(e)=>setTitle(e.target.value)} 
            />
            <input type="text" 
            placeholder="Body" 
            value={body}
            onChange={(e)=>setBody(e.target.value)}
            />
            <div className="file-field input-field">
            <div className="btn #42a5f5 blue darken-1">
                <span>Upload Image</span>
                <input type="file" onChange={(e)=>setImage(e.target.files[0])} />
            </div>
            <div className="file-path-wrapper">
                <input className="file-path validate" type="text" />
            </div>
            </div>
            <button className="btn waves-effect waves-light #42a5f5 blue darken-1"
            onClick={()=>postDetails()}
            >
                    Submit Post
            </button>
        </div>
)}

export default CreatePost;