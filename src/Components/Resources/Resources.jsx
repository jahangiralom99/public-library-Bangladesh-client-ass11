import { BsBookHalf } from "react-icons/bs";
import { FaLaptopMedical } from "react-icons/fa6";
import { FaGuitar } from "react-icons/fa6";
import { FaHeadset } from "react-icons/fa6";
import { FaNewspaper } from "react-icons/fa6";


const Resources = () => {
  return (
    <div
      style={{ backgroundImage: "url()" }}
      className="lg:h-96 mt-12 bg-red-500"
    >
      <h1 className="text-4xl font-bold text-white text-center pt-5">
        Digital Resources
      </h1>
      <hr className="w-12 border-2 mx-auto" />
      <div className="flex flex-wrap gap-24 items-center justify-around mt-12 p-5">
        <div>
          <div className="bg-red-700 p-8 rounded-full flex items-center justify-center">
            <BsBookHalf className="text-7xl text-white " />
          </div>
          <h1 className="text-3xl font-bold text-white text-center">EBooks</h1>
        </div>
        <div>
          <div className="bg-red-700 p-8 rounded-full flex items-center justify-center">
            <FaLaptopMedical className="text-7xl text-white " />
          </div>
          <h1 className="text-3xl font-bold text-white text-center">Videos</h1>
        </div>
        <div>
          <div className="bg-red-700 p-8 rounded-full flex items-center justify-center">
            <FaGuitar className="text-7xl text-white " />
          </div>
          <h1 className="text-3xl font-bold text-white text-center">Music</h1>
        </div>
        <div>
          <div className="bg-red-700 p-8 rounded-full flex items-center justify-center">
            <FaHeadset className="text-7xl text-white " />
          </div>
          <h1 className="text-3xl font-bold text-white text-center">
            AudioBooks
          </h1>
        </div>
        <div>
          <div className="bg-red-700 p-8 rounded-full flex items-center justify-center">
            <FaNewspaper className="text-7xl text-white " />
          </div>
          <h1 className="text-3xl font-bold text-white text-center">
            MagaZine
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Resources;
