import React,{useState,useEffect,useContext} from 'react';
import { UserContext } from '../../App';

const Profile = ()=>{
    const [mypics, setPics] = useState([])
    const {state, dispatch} = useContext(UserContext)
    const [image, setImage] = useState("")
    
    useEffect(()=>{
        fetch('/mypost',{
            headers:{
                "authorization":"Bearer "+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            console.log(result)
            setPics(result.mypost)
        })
    },[])

    useEffect(()=>{
        if(image){
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
            fetch('/updatepic',{
            method:"put",
            headers:{
                "Content-Type":"application/json",
                "authorization":"Bearer "+localStorage.getItem("jwt")
            },

            body:JSON.stringify({
                pic:data.url
            })
            }).then(res=>res.json())
            .then(result=>{
                localStorage.setItem("user", JSON.stringify({...state, pic: result.pic}))
                dispatch({type:"UPDATEPIC", payload:result.pic})
            })
        }).catch(err=>{
            console.log(err)
        })
        }
    },[image])

    const updatePic = (file) =>{
        setImage(file)
        
    }

    return (

        <div style={{maxWidth:800, margin:"0px auto"}}>
            <div style={{
                margin:"18px 0px",
                borderBottom: "1px solid grey"
            }}>


            <div style={{
            display:"flex",
            justifyContent:"space-around"
            }}>

                <div>
                <img style={{width:"160px", height:"160px", borderRadius:"80px"}} 
                src= {state?state.pic:"loading"} alt=''/>
                </div>

                <div>
                    <h4>{state?state.name:"loading"}</h4>
                    <div style={{
                        display:"flex",
                        justifyContent:"space-between",
                        width: "110%"
                    }}>
                        <h6>{mypics.length} posts</h6>
                       <h6>{state?state.followers.length:"loading"} Followers</h6>
                       <h6>{state?state.following.length:"loading"} Following</h6>
                    </div>
                </div>
            </div>
            <div className="file-field input-field" style={{margin: "10px"}}>
            <div className="btn #42a5f5 blue darken-1">
                <span>Update pic</span>
                <input type="file" onChange={(e)=>updatePic(e.target.files[0])} />
            </div>
            <div className="file-path-wrapper">
                <input className="file-path validate" type="text" />
            </div>
            </div>
            </div>
            <div className='gallery'>
                {
                    mypics.map(item=>{
                        return (
                            <img key={item._id} className='item' src={item.photo} alt={item.title}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Profile;