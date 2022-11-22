import React from 'react';

const Profile = ()=>{
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
                    <h4>Chober Choudhary</h4>
                    <div style={{
                        display:"flex",
                        justifyContent:"space-between",
                        width: "110%"
                    }}>
                        <h5>18 Post</h5>
                        <h5>101 Following</h5>
                        <h5>157 Follower</h5>
                    </div>
                </div>
            </div>
            <div className='gallery'>
                <img className='item' src="https://media.istockphoto.com/id/1371301907/photo/friendly-young-man-wearing-denim-shirt.jpg?b=1&s=170667a&w=0&k=20&c=uvclBOQrU3gd4_FMwzmTNK1PY4ydO_SlEgELJYj5mVI="/>
                <img className='item' src="https://media.istockphoto.com/id/1371301907/photo/friendly-young-man-wearing-denim-shirt.jpg?b=1&s=170667a&w=0&k=20&c=uvclBOQrU3gd4_FMwzmTNK1PY4ydO_SlEgELJYj5mVI="/>
                <img className='item' src="https://media.istockphoto.com/id/1371301907/photo/friendly-young-man-wearing-denim-shirt.jpg?b=1&s=170667a&w=0&k=20&c=uvclBOQrU3gd4_FMwzmTNK1PY4ydO_SlEgELJYj5mVI="/>
                <img className='item' src="https://media.istockphoto.com/id/1371301907/photo/friendly-young-man-wearing-denim-shirt.jpg?b=1&s=170667a&w=0&k=20&c=uvclBOQrU3gd4_FMwzmTNK1PY4ydO_SlEgELJYj5mVI="/>
                <img className='item' src="https://media.istockphoto.com/id/1371301907/photo/friendly-young-man-wearing-denim-shirt.jpg?b=1&s=170667a&w=0&k=20&c=uvclBOQrU3gd4_FMwzmTNK1PY4ydO_SlEgELJYj5mVI="/>
                <img className='item' src="https://media.istockphoto.com/id/1371301907/photo/friendly-young-man-wearing-denim-shirt.jpg?b=1&s=170667a&w=0&k=20&c=uvclBOQrU3gd4_FMwzmTNK1PY4ydO_SlEgELJYj5mVI="/>
            </div>
        </div>
    )
}

export default Profile;