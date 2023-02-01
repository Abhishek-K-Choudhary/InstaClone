import React,{useState,useEffect,useContext} from 'react';
import { UserContext } from '../../App';

const Profile = ()=>{
    const [mypics, setPics] = useState([])
    const {state, dispatch} = useContext(UserContext)
    console.log(state)
    useEffect(()=>{
        fetch('/mypost',{
            headers:{
                "authorization":"Bearer "+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            setPics(result.mypost)
        })
    },[])

    return (
        <div style={{maxWidth:800, margin:"0px auto"}}>
            <div style={{
            display:"flex",
            justifyContent:"space-around",
            margin:"18px 0px"
            }}>
                <div>
                <img style={{width:"160px", height:"160px", borderRadius:"80px"}} src="https://media.istockphoto.com/id/1371301907/photo/friendly-young-man-wearing-denim-shirt.jpg?b=1&s=170667a&w=0&k=20&c=uvclBOQrU3gd4_FMwzmTNK1PY4ydO_SlEgELJYj5mVI=" />
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