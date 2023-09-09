import React from "react";
import { useState } from "react";
import ProgressBar from "../ProgressItem";

const ImageForm = () => {
    const [file,setFile] = useState(null);
    const [error,setError] = useState(null);

    const types = ['image/png','image/jpeg'];

    const handleChange = (e) => {
        let selected = e.target.files[0];
        
        if(selected && types.includes(selected.type)){
            console.log('selected');
            setFile(selected);
            setError('');
        }else{
            setFile(null);
            setError('Please select a image file (png/jpeg)');
        }
    } 
    


    return (
        <form>
        <input type="file" className="file-input file-input-bordered w-full max-w-xs" onChange={handleChange}/>
        <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile}/>} 
        </div>
        </form>
    )
}

export default ImageForm;