import { Link, useLocation, useNavigate } from "react-router-dom";
import useAxios from "../../Hooks/useAxios";
import toast from "react-hot-toast";
import { useState } from "react";
import Hr from "../../Components/ui/Hr";

const AddBook = () => {
  const axios = useAxios();
  const [isCategory, setCategory] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleSelectChange = (e) => {
    setCategory(e.target.value);
  };

  const handleUpdateBtn = async (e) => {
    e.preventDefault();
    const form = e.target;
    const addBooks = {
      image: form.image.value,
      rating: form.rating.value,
      name: form.name.value,
      quantity: form.quantity.value,
      author_name: form.author_name.value,
      category: isCategory,
      short_description: form.short_description.value,
    };
    console.log(addBooks);

    const toastID = toast.loading("Please wait...");

    try {
      const res = await axios.post("/create-books", addBooks);
      if (res.data.acknowledged) {
        toast.success("Book Added successfully", { id: toastID });
        navigate(location?.state ? location.state : "/");
      }
    } catch (err) {
      toast.error(err.message, { id: toastID });
      console.log(err);
    }
  };

  return (
    <div className="mt-12">
      <div className=" p-4 ">
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold ">Add Books</h1>
          <div className="w-96 mt-3">
            <Hr />
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
                  onChange={handleSelectChange}
                  value={isCategory}
                  id="dropdown"
                >
                  <option value="">Select Category</option>
                  <option value="Computers and Tech">
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
                  placeholder="Short description"
                  className="input border-none w-full"
                />
              </label>
            </div>
          </div>
          <div className="mt-6">
            <input
              type="submit"
              value="Add Books"
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

export default AddBook;
