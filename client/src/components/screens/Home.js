import React, {useState,useEffect} from 'react';


const Home = ()=>{
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('/allpost',{
            headers:{
                "authorization":"Bearer "+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            setData(result.posts)
        })
    },[])

    return (
        <div className='home'>
                {   
                    data.map(item=>{
                        return(
                            <div className='card home-card' key={item._id}>
                                <h4>{item.postedBy.name}</h4>
                                <div className='card-image'>
                                    <img src= {item.photo} />
                                </div>
                                <div className='card-content'>
                                    <i className="material-icons">favorite_border</i>
                                    <h6>{item.title}</h6>
                                    <p>{item.body}</p>
                                    <input type="text" placeholder='comment what you want to say!' />
                                </div>
                            </div>
                        )
                    })
                }
        </div>
    )
}

export default Home;