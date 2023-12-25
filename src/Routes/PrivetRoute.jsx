import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import PropTypes from 'prop-types';

const PrivetRoute = ({ children }) => {
   
    const { user,  loading } = useContext(AuthContext);

    const location = useLocation();

    if (loading) {
        return <h1 className="text-5xl font-bold flex h-screen items-center justify-center"><span className="loading loading-spinner text-error w-40"></span></h1>
    }

    if (!user) {
        return <Navigate state={location.pathname} to="/login"></Navigate>
    }

    return children
};


PrivetRoute.propTypes = {
    children: PropTypes.node.isRequired,
}

export default PrivetRoute;