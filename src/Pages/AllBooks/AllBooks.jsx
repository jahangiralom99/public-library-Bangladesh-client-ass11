import { useQuery } from "react-query";
import useAxios from "../../Hooks/useAxios";
import LoadingPage from "../../Components/ui/LoadingPage";
import Books from "../../Components/Books/Books";
import { useState } from "react";

const AllBooks = () => {
  const axios = useAxios();
  const [order, setOrder] = useState('');

  const { data, isLoading,isFetching } = useQuery({
    queryKey: ["history", order],
    queryFn: () => {
      return axios.get(`/all-books?sortField=quantity&sortOrder=${order}`);
    },
  });
  if (isFetching) {
    return <LoadingPage></LoadingPage>
  }

  if (isLoading) {
    return <LoadingPage></LoadingPage>;
  }

  return (
    <div>
      <div className="border h-20 flex justify-end items-center">
        <div className=" p-4">
          <div className="font-bold">Sort by Quantity</div>
          <select
            onChange={(e) => setOrder(e.target.value)}
            className="select select-error w-full max-w-xs "
          >
            <option value="desc">desc</option>
            <option value="asc">asc</option>
          </select>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {data?.data.map((allBook) => (
          <Books key={allBook._id} allBook={allBook}></Books>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
