import React, { useEffect, useState } from "react";
// import {v4 as uuidv4} from 'uuid'
import uploadFileProgress from "../../firebase/uploadFIleProgress";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "../";

 const ProgressBar = ({file, user}) => {
    const [progress , setProgress] = useState(100);
    const [imageURL , setImageURL] = useState(null);
    const [currentUser , setCurrentUser] = useState(null);

    

    useEffect(() =>{
       
    },[]);

    return (
        <div>
            <progress className="progress w-56" ng-show="progress < 100"></progress>
        </div>
    );
};

 export default ProgressBar;

