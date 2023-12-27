import { ClipLoader } from "react-spinners";


const LoadingPage = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <ClipLoader
                color="red"
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
                speedMultiplier={1}
            ></ClipLoader>
      </div>
  )


};

export default LoadingPage;


