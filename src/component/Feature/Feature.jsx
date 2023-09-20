import PropTypes from 'prop-types';
import { TiTick } from 'react-icons/ti';

const Feature = ({feature}) => {
    return (
        <div className=''>
            
            <h2 className='flex gap-2 p-2 '><TiTick className='bg-yellow-200 rounded-lg'/>{feature}</h2>
            
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.string
};

export default Feature;