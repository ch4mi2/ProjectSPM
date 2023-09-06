import { Link } from "react-router-dom";

const GetStarted = () => {
  return (
    <div className="container mx-auto mt-10 flex flex-wrap justify-center">
      <div className="max-w-sm bg-white shadow-md rounded-md overflow-hidden m-2">
        <div className="p-4">
          <h2 className="text-2xl font-semibold text-gray-800">Cataract</h2>
          <p className="text-gray-600 mt-2">
            Cataract is a clouding of the eye's natural lens, which lies behind
            the iris and the pupil.
          </p>
          <Link to="/getstarted/cataract">
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 mt-4 rounded-full">
              Test now
            </button>
          </Link>
        </div>
      </div>

      {/* Empty Cards with Lorem Ipsum Text */}
      <div className="max-w-sm bg-white shadow-md rounded-md overflow-hidden m-2">
        <div className="p-4">
          <h2 className="text-2xl font-semibold text-gray-800">Lorem Ipsum</h2>
          <p className="text-gray-600 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            bibendum, neque ac efficitur varius, ex justo tristique urna, ut
            venenatis velit arcu a turpis.
          </p>
        </div>
      </div>

      <div className="max-w-sm bg-white shadow-md rounded-md overflow-hidden m-2">
        <div className="p-4">
          <h2 className="text-2xl font-semibold text-gray-800">Lorem Ipsum</h2>
          <p className="text-gray-600 mt-2">
            Vestibulum viverra libero nec justo viverra, vel bibendum est
            eleifend. Sed ac tristique tortor. Ut vel tellus in libero luctus
            suscipit eu quis justo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
