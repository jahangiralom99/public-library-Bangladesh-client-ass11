import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import LoadingB from "../../Components/ui/LoadingB";
import { useQuery } from "react-query";
import useAxios from "../../Hooks/useAxios";
import LoadingPage from "../../Components/ui/LoadingPage";
import toast from "react-hot-toast";

const UpdateBook = () => {
  const [isCategory, setCategory] = useState('');
  const { id } = useParams();
  const axios = useAxios();

  const { data, isLoading } = useQuery({
    queryKey: ["business"],
    queryFn: () => {
      return axios.get(`/all-books/${id}`);
    },
  });

  if (isLoading) {
    return <LoadingPage></LoadingPage>;
  }

  const {
    _id,
    image,
    name,
    author_name,
    category,
    rating,
    short_description,
    quantity,
  } = data.data || {};

  // Handler function for when the selection changes
    const handleSelectChange = (e) => {
        setCategory(e.target.value);
    };
    // console.log(isCategory);

  const handleUpdateBtn = async(e) => {
      e.preventDefault();
      const form = e.target;
      const updateBooks = {
        image: form.image.value,
        rating: form.rating.value,
        name: form.name.value,
        quantity: form.quantity.value,
        author_name: form.author_name.value,
        category: isCategory || category,
        short_description: form.short_description.value,
      };
      const tostID = toast.loading("please wait...");

      try {
          const res = await axios.patch(`/update-books/${_id}`, updateBooks);
          if (res.data.modifiedCount > 0) {
              toast.success("Book updated successfully", {id: tostID })
          }
      } catch (err) {
        //   console.log(err);
        toast.error(err.message, {id: tostID})
      }

      
  };

  return (
    <div className="mt-12">
      <div className="bg-base-200 p-4 ">
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold ">Update Book</h1>
                  <div className="mt-4">
                  <LoadingB></LoadingB>
          </div>
        </div>
        <form onSubmit={handleUpdateBtn}>
          <div className="mt-12">
            <div className="mb-6">
              <label className="form-control md:w-full ">
                <div className="label">
                  <span className="label-text font-bold">Image</span>
                </div>
                <input
                  type="text"
                  required
                  placeholder="image url"
                  name="image"
                  defaultValue={image}
                  className="input border-none w-full "
                />
              </label>
            </div>
            {/* 1st row */}
            <div className="md:flex gap-8">
              <label className="form-control md:w-1/2 ">
                <div className="label">
                  <span className="label-text font-bold">Rating</span>
                </div>
                <input
                  type="text"
                  required
                  placeholder="Rating"
                  name="rating"
                  defaultValue={rating}
                  className="input border-none w-full "
                />
              </label>
              <label className="form-control md:w-1/2">
                <div className="label">
                  <span className="label-text">Name</span>
                </div>
                <input
                  type="text"
                  required
                  placeholder="Name"
                  name="name"
                  defaultValue={name}
                  className="input border-none w-full "
                />
              </label>
            </div>
            {/* 2nd row */}
            <div className="md:flex gap-8">
              <label className="form-control md:w-1/2 ">
                <div className="label">
                  <span className="label-text font-bold">Quantity</span>
                </div>
                <input
                  type="text"
                  required
                  placeholder="Quantity"
                  name="quantity"
                  defaultValue={quantity}
                  className="input border-none  w-full "
                />
              </label>
              <label className="form-control md:w-1/2">
                <div className="label">
                  <span className="label-text font-bold">Author Name</span>
                </div>
                <input
                  type="text"
                  required
                  placeholder="Author Name"
                  name="author_name"
                  defaultValue={author_name}
                  className="input border-none w-full "
                />
              </label>
            </div>
            {/* 3rd row */}
            <div className="md:flex gap-8">
              <label className="form-control md:w-1/2 ">
                <div className="label">
                  <span className="label-text font-bold">Category</span>
                </div>
                <select
                  className="h-12 rounded-lg px-3"
                    defaultValue={isCategory}
                  onChange={handleSelectChange}
                >
                  <option  disabled value="">Category</option>
                  <option  value="Computers and Tech">
                    Computers & Technology
                  </option>
                  <option value="History">History</option>
                  <option value="Business">Business</option>
                  <option value="Arts and Music">Airt and Music</option>
                </select>
              </label>
              <label className="form-control md:w-1/2">
                <div className="label">
                  <span className="label-text font-bold">
                    Short description
                  </span>
                </div>
                <input
                  type="text"
                  required
                  name="short_description"
                  defaultValue={short_description}
                  placeholder="Short description"
                  className="input border-none w-full "
                />
              </label>
            </div>
          </div>
          <div className="mt-6">
            <input
              type="submit"
              value="AppDate Book"
              className="font-bold text-red-500 btn btn-outline w-full"
            />
          </div>
        </form>
        <Link
          to="/"
          className="font-bold mt-3 text-red-500 btn btn-outline w-full"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default UpdateBook;
