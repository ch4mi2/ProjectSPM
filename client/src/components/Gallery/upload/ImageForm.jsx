import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../firebase/config"
import uploadFileProgress from "../../../firebase/uploadFIleProgress";

const ImageForm = () => {
    const [file,setFile] = useState(null);
    const [error,setError] = useState(null);
    const [currentUser , setCurrentUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUser(user)
                console.log(user.email);
            } 
        });
    },[])
    

    const types = ['image/png','image/jpeg'];

    const handleChange = async(e) => {
        let selected = e.target.files[0];
        
        if(selected && types.includes(selected.type)){
            console.log('selected');
            setFile(selected);
            setError('');
        }else{
            setFile(null);
            setError('Please select a image file (png/jpeg)');
        }

            const imageName = new Date().getTime() + selected.name;
            //  uuidv4() + "."+ file.name.split('.').pop()
            try{
                const url = await uploadFileProgress(
                    selected,
                    `gallery/${currentUser.uid}`,
                    imageName,
                    // setProgress
                )
                console.log(url)
            }catch(error){
                alert(error.message)
                console.log(error)
            }
    } 
    


    return (
        <div>
        <form>
        <input type="file" className="file-input file-input-bordered w-full max-w-xs bg-orange-500" onChange={handleChange}/>
        <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <div>{file.name}</div>}
        </div>
        </form>
         <div>
         <a href = "/profile">
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 mt-4 rounded-full">
            Back
          </button>
          </a>  
      </div>
    </div>  
    )
}

export default ImageForm;