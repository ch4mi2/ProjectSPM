import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/config";
import { getStorage, ref, listAll, getDownloadURL , deleteObject } from "firebase/storage";
import '../../CSS/menu.css';

const User = () => {
const storage = getStorage();

const [currentUser , setCurrentUser] = useState(null);
const [images, setImages] = useState([])

useEffect(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // console.log(user);
      setCurrentUser(user);
    }
  }
)
},[])



useEffect(() => {
  const loadImages = () => {
    if(currentUser) {
      const listRef = ref(storage, `gallery/${currentUser.uid}`);
  
      listAll(listRef)
      .then(async(res) => {
        res.prefixes.forEach((folderRef) => {
          
          
        });
        res.items.forEach(async(itemRef) => {
          // All the items under listRef.
          const url = await getDownloadURL(itemRef)
          setImages([...images, url]);
        });
      }).catch((error) => {
        alert(error)
      });
    }
  }
  
  loadImages();
  console.log(images);

},[currentUser])

function deleteImage(image){
  console.log(image);
  const desertRef = ref(storage, image);
  // Delete the file
  deleteObject(desertRef).then(() => {
    console.log('deleted');
    }).catch((error) => {
    console.log('not deleted');
  });
};

// Create a reference under which you want to list

    return (
      <div>
        <nav class="  bg-gray-900">
          <div>
            <div>
              <ul>
            <li>
            {!currentUser ? (
                <button>Login</button>
            ) : (
                <p>
                {currentUser?.email?.toString(0)?.toUpperCase()}  
                </p>     
            )}
            </li>
        <li>
    <a href = '/getstarted'>
      Home
    </a>
  </li>
        <li>
            <a href = '/uploadImage'>
      UploadImage
    </a>
  </li>
</ul>
</div>
</div>
</nav>
<div style={{padding:"100px"}}>
{images.map((image) => 
  <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} /></figure>
  <div className="card-body w-96 h-30">
    <div className="card-actions justify-end">
      <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 mt-4 rounded-full" onClick={() => deleteImage(image)}>Delete</button>
    </div>
  </div>
</div>
)}
 </div>
 </div>
    );

};

export default User;