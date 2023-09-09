import React, { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/config";

const User = () => {
    const [currentUser , setCurrentUser] = useState(null);

    onAuthStateChanged(auth, (user) => {
        if (user) {
          setCurrentUser(user);
        } 
      });
      
    return (
        <ul className="menu bg-base-600 lg:menu-horizontal rounded-box">
        <li>
            {!currentUser ? (
                <button>Login</button>
            ) : (
                <p>
                {currentUser?.email?.toString(0)?.toUpperCase()}  
                </p>     
            )}
            <a href = '/profile'>
                Profile
            </a>
        </li>
        <li>
            <a href = '/uploadImage'>
      UploadImage
    </a>
  </li>
  <li>
    <a href = '/gallery'>
      Gallery
    </a>
  </li>
</ul>
    )
}

export default User;