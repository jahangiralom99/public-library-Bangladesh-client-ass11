import { useQuery } from "react-query";
import useAxios from "../../Hooks/useAxios";
import Hr from "../../Components/ui/Hr";
import LoadingPage from "../../Components/ui/LoadingPage";
import { useState } from "react";
import CategoriesCard from "../../Components/CategoriesCard/CategoriesCard";

const AirtMusic = () => {
  const axios = useAxios();
  // eslint-disable-next-line no-unused-vars
  const [value, setValue] = useState(null);

  const { data, isLoading } = useQuery({
    queryKey: ["history"],
    queryFn: () => {
      return axios.get(`/all-books?category=Arts and Music`);
    },
  });

  if (isLoading) {
    return <LoadingPage></LoadingPage>;
  }

  console.log(data);
  return (
    <div>
      <h1 className="text-4xl font-bold mt-8 ">All Airt & Music Books :</h1>
      <Hr></Hr>
      <div className="flex flex-wrap items-center justify-center gap-6 mt-12">
              {data?.data.map((service) => <CategoriesCard
                  key={service._id}
                  service={service}
              ></CategoriesCard>)}
      </div>
    </div>
  );
};

export default AirtMusic;
