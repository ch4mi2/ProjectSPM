import { ref , getDownloadURL, uploadBytesResumable } from "firebase/storage";
import {storage} from "./config";

const uploadFileProgress = (file , subFolder , imageName , setProgress) => {
    return new Promise((resolve , reject)=>{
        const storageRef = ref(storage, subFolder + '/' + imageName)
        const upload = uploadBytesResumable(storageRef, file)
        upload.on('state_change',(snapshot) => {
            const progress = (snapshot.bytesTransferred/ snapshot.totalBytes)*100
            console.log(progress);
            setProgress(progress)
        } , (error)=>{
            reject(error)
        } ,async() => {
            try{
                const url = await getDownloadURL(storageRef)
                console.log('url');
                resolve(url)
            }catch (error){
                reject(error)
            }
        })
    })
}

export default uploadFileProgress