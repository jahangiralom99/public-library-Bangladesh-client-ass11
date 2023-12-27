import { useState } from "react";
import useAxios from "../../Hooks/useAxios";
import { useQuery } from "react-query";
import LoadingPage from "../../Components/ui/LoadingPage";
import Hr from "../../Components/ui/Hr";
import CategoriesCard from "../../Components/CategoriesCard/CategoriesCard";

const Business = () => {
  const axios = useAxios();
  // eslint-disable-next-line no-unused-vars
  const [value, setValue] = useState(null);

  const { data, isLoading } = useQuery({
    queryKey: ["business"],
    queryFn: () => {
      return axios.get(`/all-books?category=Business`);
    },
  });

  if (isLoading) {
    return <LoadingPage></LoadingPage>;
  }

  return (
    <div>
      <h1 className="text-4xl font-bold mt-8 ">All Business Books :</h1>
      <Hr></Hr>
      <div className="flex flex-wrap items-center justify-center gap-6 mt-12">
        {data?.data.map((service) => (
          <CategoriesCard key={service._id}></CategoriesCard>
        ))}
      </div>
    </div>
  );
};

export default Business;
