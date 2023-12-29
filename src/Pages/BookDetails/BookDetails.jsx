import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import useAxios from "../../Hooks/useAxios";
import LoadingPage from "../../Components/ui/LoadingPage";
import TopBar from "../../Components/Common/TopBar";
import { Rating } from "primereact/rating";
import { useState } from "react";
import Button from "../../Components/ui/Button";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";

const BookDetails = () => {
  const { id } = useParams();
  const axios = useAxios();
  const { user } = useAuth();
  // eslint-disable-next-line no-unused-vars
  const [value, setValue] = useState(null);
  const [isMew, setNew] = useState("");
  const [disabled, setDisabled] = useState("");

  // Load Data \
  const { data, isLoading, } = useQuery({
    queryKey: ["business", isMew],
    queryFn: () => {
      return axios.get(`/all-books/${id}`);
    },
  });

  const {
    _id,
    image,
    name,
    author_name,
    category,
    rating,
    short_description,
    quantity,
  } = data?.data || {};
  const rat = Math.round(rating);


  // handle Submit btn
  const handleSubmit = async (e) => {
    e.preventDefault();

    const from = e.target;
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Months are zero-based (0-11)
    const day = currentDate.getDate();
    const borrowed_date = `${year}:${month}:${day}`;

    const profile = {
      image,
      returnDate: e.target.date.value,
      borrowed_date,
      userName: user?.displayName,
      userEmail: user?.email,
      category,
    };
    const toastId = toast.loading("Loading...");

    try {
      const { data } = await axios.post("/create-borrowed-books", profile);
   
      if (data.acknowledged) {
        toast.success("Borrowed Books Added Success", { id: toastId });
        if (quantity >= 1) {
          const updated = await axios.put(`quantity-update/${_id}`, {
            quantity: quantity -1,
          });
          console.log(updated);
          if (updated.data.acknowledged) {
            // return setNew("disabled")
            setNew(updated.data.modifiedCount + 1);
            
          }
          console.log(updated);
        } else {
          return setDisabled('disabled')
        }

        from.reset();
      }
    } catch (err) {
      toast.error(err.message, { id: toastId });
    }
  };

  if (isLoading) {
    return <LoadingPage></LoadingPage>;
  }


  return (
    <div>
      <TopBar>{name}</TopBar>
      <div className="mt-12">
        <div className="relative items-center lg:items-start flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full lg:flex-row ">
          <div className="w-[50%] relative overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0 space-y-10">
            <img
              src={image}
              alt="card-image"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-6 space-y-10">
            <h6 className="block mb-4 text-3xl font-bold text-gray-700 uppercase">
              {name}
            </h6>
            <h4 className="text-xl font-bold text-red-500">
              quantity : {quantity}
            </h4>
            <h4 className="text-xl font-bold text-red-500">
              Rating : {rating}
            </h4>
            <Rating
              value={rat}
              onChange={(e) => setValue(e.value)}
              cancel={false}
            />
            <p className="block mb-8 text-base antialiased font-normal leading-relaxed text-gray-700">
              {short_description}
            </p>
            <div className="flex justify-between">
              <div
              >
                <button onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                } disabled={disabled} className="btn">Borrowed</button>
              </div>
              <Link to={`/read/${_id}`}>
                <Button>Read</Button>
              </Link>
            </div>
            <div></div>
            <p>Author Name : {author_name}</p>
            <p>category : {category}</p>
          </div>
        </div>
      </div>
      {/* Modal data */}
      {
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block font-medium leading-6 text-xl "
                >
                  Return date
                </label>
                <div className="mt-2">
                  <input
                    id="date"
                    name="date"
                    type="date"
                    autoComplete="date"
                    required
                    className="block pl-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="text-white font-bold btn w-full btn-outline bg-red-400 hover:bg-red-600"
                >
                  Submit
                </button>
              </div>
            </form>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      }
    </div>
  );
};

export default BookDetails;
