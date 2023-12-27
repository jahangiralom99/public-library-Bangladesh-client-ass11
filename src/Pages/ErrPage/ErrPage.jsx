import { Navigate } from "react-router-dom";

const ErrPage = () => {
  return (
    <div>
      <div className="flex h-screen items-center justify-center ">
        <div className="text-center">
          <h1 className="text-4xl">
            Error <span className="text-red-500">404</span> not found !!!!
          </h1>{" "}
          <br />
          <button className="btn btn-outline text-center"><Navigate to={-1}></Navigate>Go back home</button>
        </div>
      </div>
    </div>
  );
};

export default ErrPage;
