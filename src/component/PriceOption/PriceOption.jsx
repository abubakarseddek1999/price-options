/* eslint-disable react/prop-types */

import Feature from "../Feature/Feature";

/* eslint-disable no-unused-vars */
const PriceOption = ({ option }) => {
    const { name, price, features } = option;
    return (
        <div className="bg-yellow-500 p-5 flex  flex-col rounded-lg hover:bg-black hover:text-white ease-in duration-500">
            <div className="text-center">
                <h2 className="text-5xl font-extrabold">{price}</h2>
                <h2 className="text-2xl">/mon</h2>
            </div>
            <h4 className="text-3xl text-center my-8">{name}</h4>
            <div className=" pl-6 flex-grow">
                {
                    features.map((feature,index) => <Feature key={index} feature={feature}></Feature>)
                }
            </div>
            <button className="btn w-full p-5 bg-yellow-200">Buy now</button>

        </div>
    );
};

export default PriceOption;