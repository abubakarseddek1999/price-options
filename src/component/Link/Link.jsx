/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ route }) => {
    return (
        <div>
            <li className="mr-3">
                <a href={route.path}>{route.name}</a></li>
        </div>
    );
};

Link.propTypes = {
    route:PropTypes.object
};

export default Link;