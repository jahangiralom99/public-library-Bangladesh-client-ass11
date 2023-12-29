import {  useMutation, useQuery, useQueryClient } from "react-query";
import useAxios from "../../Hooks/useAxios";
import LoadingPage from "../../Components/ui/LoadingPage";
import { auth } from "../../firebase/firebase.confiq";
import TopBar from "../../Components/Common/TopBar";
import toast from "react-hot-toast";

const BorrowedBooks = () => {
  
  const axios = useAxios();
  // const [isDelate, setDelate] = useState()

  const { data, isLoading ,} = useQuery({
    queryKey: ["borrowed"],
    queryFn: async () => {
      const email = auth.currentUser.email;
      return await axios.get(`/borrowed-books?userEmail=${email}`);
    },
  });


  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: ["borrowed"],
    mutationFn: async (id) => {
      return await axios.delete(`/delete-book/${id}`);
     

    }, 
    onSuccess: () => {
      toast.success("Book Returns successfully");
      queryClient.invalidateQueries({queryKey : "borrowed"})
    }
  })

  if (isLoading) {
    return <LoadingPage></LoadingPage>;
  }

  return (
    <div className="mt-4">
      <TopBar>Borrowed-book</TopBar>
      <div className="overflow-x-auto mt-12">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="font-bold text-xl">Photo</th>
              <th className="font-bold text-xl">Name</th>
              <th className="font-bold text-xl">Return Date</th>
              <th className="font-bold text-xl">Borrowed Date</th>
              <th className="font-bold text-xl">category</th>
              <th className="font-bold text-xl">Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {data?.data.map((book) => {
              const { image, returnDate, borrowed_date, userName, category, _id } =
                book || {};
              return (
                <tr key={book._id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {userName}
                    <br />
                  </td>
                  <td>{returnDate}</td>
                  <td>{borrowed_date}</td>
                  <th>
                    {category}
                  </th>
                  <th>
                    <button onClick={()=>mutate(_id)} className="btn btn-ghost btn-xs">Return</button>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BorrowedBooks;
