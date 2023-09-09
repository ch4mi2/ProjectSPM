import ImageForm from "../components/Gallery/upload/ImageForm";

const UploadImage = () => {
    return(
        <div className="uploadImage">
            <div><h2>Upload eye Image</h2></div>
            <br/>
            <div><h2>Instructions</h2>
            <br />
                <ol>
                    <li>Obtain the necessary equipment </li>
                    <ul>
                        <li>High-resolution digital camera or smartphone with a good camera.</li>
                        <li>A tripod or stable surface to reduce camera shake.</li>
                        <li>External lighting source (if needed).</li>
                    </ul>
                    <li>Prepare the environment</li>
                    <ul>
                        <li>Ensure a well-lit, clean, and controlled environment to minimize external interference.</li>
                        <li>Use a uniform, non-reflective background to improve contrast.</li>
                    </ul>
                    <li>Prepare the subject</li>
                    <ul>
                        <li>
                        If wearing eyeglasses or contact lenses, remove them unless they are medically necessary.
                        </li>
                    </ul>
                    <li>Positioning</li>
                    <ul>
                        <li>Properly position the camera or smartphone at eye level with the subject.</li>
                        <li>Maintain a distance of 2-4 feet (0.6-1.2 meters) from the subject to capture a clear and focused image.</li>
                    </ul>
                    <li>Lightning</li>
                    <ul>
                        <li>Ensure uniform, diffused lighting that eliminates shadows and glare. Avoid harsh, direct light.</li>
                        <li>Use external lighting sources like softboxes or ring lights for better illumination if needed.</li>
                    </ul>
                    <li>Focus and Framing</li>
                    <ul>
                        <li>Set the camera to macro mode or manual focus to ensure sharpness on the eye.</li>
                        <li>Frame the shot to include the entire eye region, including the iris, sclera, and eyelids.</li>
                    </ul>
                    <li>Camera Setting</li>
                    <ul>
                        <li>Use the highest available resolution setting for the camera.</li>
                        <li>Adjust the ISO, aperture, and shutter speed settings as needed for proper exposure without blurring or overexposing the image.</li>
                    </ul>
                    <li>Capture multiple images</li>
                    <ul>
                        <li>Adjust the ISO, aperture, and shutter speed settings as needed for proper exposure without blurring or overexposing the image.</li>
                    </ul>
                </ol>
            </div>
            <br />
            <ImageForm/>
        </div>
    );
}

export default UploadImage;