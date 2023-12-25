import { Link } from "react-router-dom";

const AddBook = () => {

    const handleUpdateBtn = (e) => {
        e.preventDefault();
    }

    return (
        <div className="mt-12">
      <div className="bg-base-200 p-4">
        <h1 className="text-4xl font-bold text-center">Add Books</h1>
        <form onSubmit={handleUpdateBtn}>
          <div className="mt-12">
            {/* 1st row */}
            <div className="md:flex gap-8">
              <label className="form-control md:w-1/2 ">
                <div className="label">
                  <span className="label-text font-bold">Name</span>
                </div>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input border-none w-full "
                />
              </label>
              <label className="form-control md:w-1/2">
                <div className="label">
                  <span className="label-text">Brand Name</span>
                </div>
                <input
                  type="text"
                  placeholder="Brand Name"
                  name="brandName"
                  className="input border-none w-full "
                />
              </label>
            </div>
            {/* 2nd row */}
            <div className="md:flex gap-8">
              <label className="form-control md:w-1/2 ">
                <div className="label">
                  <span className="label-text font-bold">Price</span>
                </div>
                <input
                  type="text"
                  placeholder="Price"
                  name="price"
                  className="input border-none  w-full "
                />
              </label>
              <label className="form-control md:w-1/2">
                <div className="label">
                  <span className="label-text font-bold">
                    Short description
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="description"
                  name="description"
                  className="input border-none w-full "
                />
              </label>
            </div>
            {/* 3rd row */}
            <div className="md:flex gap-8">
              <label className="form-control md:w-1/2 ">
                <div className="label">
                  <span className="label-text font-bold">Rating</span>
                </div>
                <input
                  type="text"
                  placeholder="Rating"
                  name="rating"
                  className="input border-none  w-full "
                />
              </label>
              <label className="form-control md:w-1/2">
                <div className="label">
                  <span className="label-text font-bold">Type</span>
                </div>
                <input
                  type="text"
                  name="type"
                  placeholder="Type"
                  className="input border-none w-full "
                />
              </label>
            </div>
            <div className="mb-6">
              <label className="form-control md:w-full ">
                <div className="label">
                  <span className="label-text font-bold">Photo URL</span>
                </div>
                <input
                  type="text"
                  placeholder="photo URL"
                  name="photo"
                  className="input border-none w-full "
                />
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="Add Books"
            className="font-bold text-red-500 btn btn-outline w-full"
          />
        </form>
       <Link to="/" className="font-bold mt-3 text-red-500 btn btn-outline w-full">Go Home</Link>
      </div>
    </div>
    );
};

export default AddBook;