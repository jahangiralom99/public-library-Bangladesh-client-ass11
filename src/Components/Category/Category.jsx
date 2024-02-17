import { Link } from "react-router-dom";
import { BsLink45Deg } from "react-icons/bs";
import Hr from "../ui/Hr";

const Category = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold mt-12 text-center" >All Book Categories </h1> <br />
      <div className="w-44 mx-auto">
        <Hr></Hr>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4 items-center justify-center mt-12">
        <div>
          {/* 1 number card */}
          <div className="border p-5 group rounded-md bg-cover bg-center bg-no-repeat max-w-sm flex justify-center items-center mx-auto relative ">
            <div className=" group-hover:opacity-40 hover:bg-opacity-60">
              <img
                className="md:w-96 md:h-60 w-full hover:bg-opacity-35"
                src="https://i.postimg.cc/TwCxHMLv/Computers-Tech.jpg"
                alt=""
              />
              <h1 className="font-bold text-2xl text-center ">
                Technology
              </h1>
            </div>
            <div className="absolute opacity-0 fd-sh group-hover:opacity-80">
              <div className="pt-8 text-center">
                <Link
                  to="/computer-tech"
                  data-tip="Link to Computers & Technology"
                  className="tooltip tooltip-top"
                >
                  <button className="text-center  bg-red-500 rounded-full p-4 hover:bg-red-700 font-bold text-lg">
                    <BsLink45Deg className="text-xl text-white font-bold " />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* 2 number card */}
          <div className="border p-5 group rounded-md bg-cover bg-center bg-no-repeat max-w-sm flex justify-center items-center mx-auto relative">
            <div className=" group-hover:opacity-40 hover:bg-opacity-60">
              <img
                className="md:w-96 md:h-60 w-full hover:bg-opacity-35"
                src="https://i.postimg.cc/50tTyH0D/history.jpg"
                alt=""
              />
              <h1 className="font-bold text-2xl text-center">History</h1>
            </div>
            <div className="absolute opacity-0 fd-sh group-hover:opacity-80">
              <div className="pt-8 text-center">
                <Link
                  to="/history"
                  data-tip="Link to History"
                  className="tooltip tooltip-top"
                >
                  <button className="text-center bg-red-500 rounded-full p-4 hover:bg-red-700 font-bold text-lg">
                    <BsLink45Deg className="text-xl text-white font-bold " />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* 3 number card */}
          <div className="border p-5 group rounded-md bg-cover bg-center bg-no-repeat max-w-sm flex justify-center items-center mx-auto relative">
            <div className=" group-hover:opacity-40 hover:bg-opacity-60">
              <img
                className="md:w-96 md:h-60 w-full hover:bg-opacity-35"
                src="https://i.postimg.cc/pLF2V67K/business.jpg"
                alt=""
              />
              <h1 className="font-bold text-2xl text-center">Business</h1>
            </div>
            <div className="absolute opacity-0 fd-sh group-hover:opacity-80">
              <div className="pt-8 text-center">
                <Link
                  to="/business"
                  data-tip="Link to Business"
                  className="tooltip tooltip-top"
                >
                  <button className="text-center bg-red-500 rounded-full p-4 hover:bg-red-700 font-bold text-lg">
                    <BsLink45Deg className="text-xl text-white font-bold " />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* 4 number card */}
          <div className="border p-5 group rounded-md bg-cover bg-center bg-no-repeat max-w-sm flex justify-center items-center mx-auto relative">
            <div className=" group-hover:opacity-40 hover:bg-opacity-60">
              <img
                className="md:w-96 md:h-60 w-full hover:bg-opacity-35"
                src="https://i.postimg.cc/kX8JqHLK/airt-and-music.jpg"
                alt=""
              />
              <h1 className="font-bold text-2xl text-center">Airt and Music</h1>
            </div>
            <div className="absolute opacity-0 fd-sh group-hover:opacity-80">
              <div className="pt-8 text-center">
                <Link
                  to="/airt-music"
                  data-tip="Link to Airt and Music"
                  className="tooltip tooltip-top"
                >
                  <button className="text-center bg-red-500 rounded-full p-4 hover:bg-red-700 font-bold text-lg">
                    <BsLink45Deg className="text-xl text-white font-bold " />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
