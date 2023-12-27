import axios from "axios";
import useAuth from "./useAuth";

const instance = axios.create({
  baseURL: "http://localhost:3000/api/v1/",
  withCredentials: true,
});
const useAxios = () => {
  const { logOut } = useAuth();
  instance.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if (error.response.status === 401 || error.response.status === 403) {
        logOut();
      }
    }
  );
  return instance;
};

export default useAxios;
