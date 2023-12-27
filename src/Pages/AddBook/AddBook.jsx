import { Link, useLocation, useNavigate } from "react-router-dom";
import useAxios from "../../Hooks/useAxios";
import toast from "react-hot-toast";
import LoadingB from "../../Components/ui/LoadingB";

const AddBook = () => {
  const axios = useAxios() 
  const location = useLocation();
  const navigate = useNavigate()


  const handleUpdateBtn = async(e) => {
    e.preventDefault();
    const form = e.target;
    const addBooks = {
      image: form.image.value,
      rating: form.rating.value,
      name: form.name.value,
      quantity: form.quantity.value,
      author_name: form.author_name.value,
      category: form.category.value,
      short_description: form.short_description.value,
    };

    const toastID = toast.loading("Please wait...")

    try {
      const res =await axios.post("/create-books", addBooks);
      if (res.data.acknowledged) {
        toast.success("Book Added successfully", { id: toastID });
        navigate(location?.state? location.state : "/")
     }

    } catch (err) {
      toast.error(err.message, {id: toastID})
      console.log(err);
    }
    
  };

  return (
    <div className="mt-12">
      <div className="bg-base-200 p-4 ">
        <div className="flex flex-col">
        <h1 className="text-4xl font-bold ">Add Books</h1>
        <LoadingB></LoadingB>
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
                  <span className="label-text font-bold">
                  Author Name
                  </span>
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
                <input
                  type="text"
                  required
                  placeholder="Category"
                  name="category"
                  className="input border-none  w-full "
                />
              </label>
              <label className="form-control md:w-1/2">
                <div className="label">
                  <span className="label-text font-bold">Short description</span>
                </div>
                <input
                  type="text"
                  required
                  name="short_description"
                  placeholder="Short description"
                  className="input border-none w-full "
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
