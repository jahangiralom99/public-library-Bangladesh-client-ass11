import { Rating } from "primereact/rating";
import Hr from "../ui/Hr";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BsFillInfoCircleFill } from "react-icons/bs";
import PropTypes from "prop-types";

const Books = ({ allBook }) => {
  // eslint-disable-next-line no-unused-vars
  const [value, setValue] = useState(null);
  const {
    image,
    rating,
    name,
    quantity,
      author_name,
    _id
  } = allBook || {};

  const rat = Math.round(rating);

  return (
    <div className="card lg:card-side bg-base-300 shadow-xl">
      <figure>
        <img className="object-cover" src={image} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <Hr></Hr>
        <p>Author by -{author_name}</p>
        <p className="font-bold">Quantity -{quantity}</p>
        <div className="card flex justify-content-center text-red-500">
          <h1 className="font-bold">Rating : {rating}</h1>
          <Rating
            style={{ color: "var(--red-400)" }}
            value={rat}
            onChange={(e) => setValue(e.value)}
            cancel={false}
          />
        </div>
        <div className="card-actions justify-end">
          <Link data-tip="details" to={`/books/${_id}`} className="flex btn btn-outline items-center justify-center w-full tooltip tooltip-bottom">
            <BsFillInfoCircleFill className="text-5xl text-red-500 hover:text-red-700"/>
          </Link>
        </div>
      </div>
    </div>
  );
};
Books.propTypes = {
  allBook: PropTypes.object.isRequired,
};

export default Books;
