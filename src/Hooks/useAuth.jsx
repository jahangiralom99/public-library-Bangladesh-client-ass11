import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvide";

const useAuth = () => {
    const context = useContext(AuthContext)
    return context;
};

export default useAuth;