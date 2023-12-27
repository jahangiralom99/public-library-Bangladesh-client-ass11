import { useQuery } from "react-query";
import useAxios from "../../Hooks/useAxios";
import Hr from "../../Components/ui/Hr";
import { useState } from "react";
import CategoriesCard from "../../Components/CategoriesCard/CategoriesCard";
import LoadingPage from "../../Components/ui/LoadingPage";

const Technology = () => {
    const axios = useAxios();
    // eslint-disable-next-line no-unused-vars
  const [value, setValue] = useState(null);

    const { data ,isLoading} = useQuery({
        queryKey: ["technology"],
        queryFn: () => {
             return axios.get(`/all-books?category=Computers and Tech`)
        }
    })
    if (isLoading) {
        return <LoadingPage></LoadingPage>;
      }

    return (
        <div>
        <h1 className="text-4xl font-bold mt-8 ">All Computer & technology Books :</h1>
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

export default Technology;