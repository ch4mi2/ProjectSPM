import React, { useEffect, useState } from "react";
import { PhotoIcon } from "@heroicons/react/24/solid";
import img from "../../assets/img.png";
const CataractUpload = () => {
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isFileSet, setIsFileSet] = useState(false);
  const [fetchResult, setFetchResult] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setIsFileSet(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("Please select a file.");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    try {
      setIsLoading(true);

      const response = await fetch("/api/predict/cataract", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Error uploading file");
      }

      const data = await response.json();
      console.log("Response from server:", data);
      setFetchResult(data);
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="h-[100vh]" onSubmit={handleSubmit}>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="col-span-full">
          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            <div className="text-center">
              <PhotoIcon
                className="mx-auto h-12 w-12 text-gray-300"
                aria-hidden="true"
              />
              <div className="mt-4 flex justify-center text-sm leading-6 text-gray-600">
                <label
                  htmlFor="file"
                  className="relative cursor-pointer rounded-md bg-white font-semibold text-orange-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-orange-600 focus-within:ring-offset-2 hover:text-orange-500"
                >
                  <span>Upload a file</span>
                  <input
                    type="file"
                    id="file"
                    name="file"
                    onChange={handleFileChange}
                    accept="image/*"
                    className="sr-only"
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs leading-5 text-gray-600">
                PNG, JPG, GIF up to 10MB
              </p>

              <div className=" mt-2">
                {file && (
                  <div>
                    <img src={URL.createObjectURL(file)} alt="Uploaded" />
                  </div>
                )}
              </div>
              <div className=" mt-2">
                {isFileSet && (
                  <button
                    type="submit"
                    className="rounded-full bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                  >
                    Submit
                  </button>
                )}
              </div>
              <div className="mt-2">
                {isLoading ? (
                  <p>Loading...</p>
                ) : (
                  fetchResult && (
                    <div>
                      <p>Prediction: {fetchResult.predictions[0][0]}</p>
                      <img src={img} />
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CataractUpload;
