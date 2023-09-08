import GlaucomaUpload from '../components/Glaucoma/GlaucomaUpload';
import { useState } from 'react';

const Glaucoma = () => {
  const [result, setResult] = useState(null);

  return (
    <div className="flex flex-wrap flex-col items-center my-12">
      <div className="">
        <GlaucomaUpload result={setResult} />
        {console.log(result)}
        {result && (
          <div>
            <span className="mt-10 mx-auto border border-2 p-4 table">
              <h4 className="text-center text-2xl font-semibold ">
                Your Result
              </h4>
              <p>Result : {result.result}</p>
              <p>Accuracy : {result.accuracy}</p>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Glaucoma;
