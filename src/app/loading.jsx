
import { RingLoader } from 'react-spinners';

const loading = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <RingLoader />
        </div>
    );
};

export default loading;