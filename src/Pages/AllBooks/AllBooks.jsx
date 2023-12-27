import { useQuery } from "react-query";
import useAxios from "../../Hooks/useAxios";
import LoadingPage from "../../Components/ui/LoadingPage";
import Books from "../../Components/Books/Books";

const AllBooks = () => {
  const axios = useAxios();

  const { data, isLoading } = useQuery({
    queryKey: ["history"],
    queryFn: () => {
      return axios.get(`/all-books`);
    },
  });

  if (isLoading) {
    return <LoadingPage></LoadingPage>;
  }


  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {data?.data.map((allBook) => (
          <Books key={allBook._id} allBook={allBook}></Books>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
