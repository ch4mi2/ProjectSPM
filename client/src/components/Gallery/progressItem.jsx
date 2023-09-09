import React, { useEffect, useState } from "react";
// import {v4 as uuidv4} from 'uuid'
import uploadFileProgress from "../../firebase/uploadFIleProgress";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/config";

 const ProgressBar = ({file}) => {
    const [progress , setProgress] = useState(100);
    const [imageURL , setImageURL] = useState(null);
    const [currentUser , setCurrentUser] = useState(null);

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setCurrentUser(user)
        } 
    });

    // const currentUser = {uid:{uid}}
    // console.log(currentUser);

    useEffect(() =>{
        const uploadImage = async()=>{
            const imageName =new Date().getTime() + file.name;
            //  uuidv4() + "."+ file.name.split('.').pop()
            try{
                const url = await uploadFileProgress(
                    file,
                    `gallery/${currentUser.uid}`,
                    imageName,
                    setProgress
                )
                console.log(url)
                setImageURL(null)
            }catch(error){
                alert(error.message)
                console.log(error)
            }
        }
        // setImageURL(URL.createObjectURL(file));
        uploadImage()
    },[]);

    return (
        <div>
            <progress className="progress w-56" ng-show="progress < 100"></progress>
        </div>
    );
};

 export default ProgressBar;

