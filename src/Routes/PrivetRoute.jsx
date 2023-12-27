
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import useAuth from "../Hooks/useAuth";
import LoadingPage from "../Components/ui/LoadingPage";

const PrivetRoute = ({ children }) => {
   
    const { user,  loading } = useAuth()

    const location = useLocation();

    if (loading) {
        return <LoadingPage></LoadingPage>
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