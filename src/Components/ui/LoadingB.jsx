
import { BarLoader } from 'react-spinners';

const LoadingB = () => {
    return (
        <BarLoader
        color="red"
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
        speedMultiplier={0.7}
        >

        </BarLoader>
    );
};

export default LoadingB;