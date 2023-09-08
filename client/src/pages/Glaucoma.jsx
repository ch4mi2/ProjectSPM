import GlaucomaUpload from '../components/Glaucoma/GlaucomaUpload';
import { useState } from 'react';

const Glaucoma = () => {
  const [result, setResult] = useState(null);

  return (
    <div className="flex flex-wrap flex-col">
      <div className="">
        <GlaucomaUpload result={setResult} />
        {console.log(result)}
        {result && (
          <div className="content-justify">
            <h4 className="mb-12 text-2xl font-semibold text-white">
              Your Result
            </h4>
            <p>{result.result}</p>
            <p>{result.accuracy}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Glaucoma;
