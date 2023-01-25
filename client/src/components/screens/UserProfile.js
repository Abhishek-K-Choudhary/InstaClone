import React,{useState,useEffect,useContext} from 'react';
import { UserContext } from '../../App';
import { useParams } from 'react-router-dom';

const Profile = ()=>{
    const [userProfile, setProfile] = useState(null)
    const {state, dispatch} = useContext(UserContext)
    const {userid} = useParams
    
    useEffect(()=>{
        fetch(`/user/:id${userid}`,{
            headers:{
                "authorization":"Bearer "+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            setProfile(result)
        })
    },[])
    
    return (
        <>
        {userProfile ? 
        <div style={{maxWidth:800, margin:"0px auto"}}>
        <div style={{
        display:"flex",
        justifyContent:"space-around",
        margin:"18px 0px",
        borderBottom:"1px solid grey"
        }}>
            <div>
            <img style={{width:"160px", height:"160px", borderRadius:"80px"}} src="https://media.istockphoto.com/id/1371301907/photo/friendly-young-man-wearing-denim-shirt.jpg?b=1&s=170667a&w=0&k=20&c=uvclBOQrU3gd4_FMwzmTNK1PY4ydO_SlEgELJYj5mVI=" />
            </div>
            <div>
                <h4>{userProfile.user.name}</h4>
                <div style={{
                    display:"flex",
                    justifyContent:"space-between",
                    width: "110%"
                }}>
                    <h5>{userProfile.posts.length}</h5>
                    <h5>101 Following</h5>
                    <h5>157 Follower</h5>
                </div>
            </div>
        </div>
        <div className='gallery'>
            {
                userProfile.posts.map(item=>{
                    return (
                        <img key={item._id} className='item' src={item.photo} alt={item.title}/>
                    )
                })
            }
        </div>
    </div>
        : 
        <h2>"loading.........!"</h2>}
        </>
    )
}

export default Profile;