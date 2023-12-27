import { useState } from "react";
import Hr from "../ui/Hr";
import { Rating } from "primereact/rating";
import { Link } from "react-router-dom";
import { BsFillInfoCircleFill } from "react-icons/bs";
import PropTypes from "prop-types";

const CategoriesCard = ({ service }) => {
  // eslint-disable-next-line no-unused-vars
  const [value, setValue] = useState(null);

  const { _id, image, name, author_name, category, rating } = service || {};
  const rat = Math.round(rating);
  return (
    <div className=" flex items-center justify-center">
      <div className="bg-white rounded-xl overflow-hidden shadow-xl hover:scale-105 hover:shadow-2xl transform duration-500 cursor-pointer w-[80%]">
        <div className="p-4">
          <h1 className="mt-4 text-3xl font-bold hover:underline cursor-pointer md:w-44">
            {name}
          </h1>
          <Hr></Hr>
          <p className="mt-2 font-semibold font-sans text-gray-700">
            Author : {author_name}
          </p>
          <p className="mt-2 font-semibold font-sans text-gray-700">
            Category: {category}
          </p>
          <div>
            <div className="card flex justify-content-center text-red-500">
              <h1 className="font-bold">Rating : {rating}</h1>
              <Rating
                value={rat}
                onChange={(e) => setValue(e.value)}
                cancel={false}
              />
            </div>
          </div>
        </div>
        <div className="">
          <img className="md:size-96" src={image} />
          <Link
            to={`/books/${_id}`}
            data-tip="Details Pages"
            className="flex btn btn-outline items-center justify-center w-full tooltip tooltip-top"
          >
            <BsFillInfoCircleFill className="text-5xl text-red-500 hover:text-red-700" />
          </Link>
        </div>
      </div>
    </div>
  );
};

CategoriesCard.propTypes = {
  service: PropTypes.object.isRequired,
};

export default CategoriesCard;
