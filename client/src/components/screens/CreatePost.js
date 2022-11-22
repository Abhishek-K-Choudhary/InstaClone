import React from "react";

const CreatePost = () =>{
    return(
        <div className="card input-field" style={{
            margin:"30px auto",
            maxWidth:"500px",
            padding:"20px",
            textAlign:"center"
        }}>
            <input type="text" placeholder="Title" />
            <input type="text" placeholder="Body" />
            <div className="file-field input-field">
            <div className="btn #42a5f5 blue darken-1">
                <span>Upload the image</span>
                <input type="file" />
            </div>
            <div className="file-path-wrapper">
                <input className="file-path validate" type="text" />
            </div>
            </div>
            <button className="btn waves-effect waves-light #42a5f5 blue darken-1">
                    Submit Post
            </button>
        </div>
)}

export default CreatePost;