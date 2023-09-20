import PriceOption from "../priceOption/PriceOption";

/* eslint-disable no-undef */
const PriceOptions = () => {

    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "price": "$29.99/month",
            "features": [
                "Access to cardio equipment",
                "Basic workout classes",
                "Locker room access"
            ]
        },
        {
            "id": 2,
            "name": "Premium Membership",
            "price": "$49.99/month",
            "features": [
                "Access to all gym equipment",
                "Unlimited fitness classes",
                "Personal training session (1/month)",
                "Sauna and steam room access"
            ]
        },
        {
            "id": 3,
            "name": "VIP Membership",
            "price": "$99.99/month",
            "features": [
                "Access to all gym equipment",
                "Unlimited fitness classes",
                "Unlimited personal training sessions",
                "Priority scheduling",
                "Exclusive access to VIP lounge"
            ]
        }
    ];


    return (
        <div className="m-12">
            <h2 className="text-5xl">Best Price in the town</h2>
            <div className="grid grid-cols-3 gap-6">
                {
                    priceOptions.map(option => <PriceOption option={option} key={option.id}></PriceOption>)
                }
            </div>


        </div>
    );
};

export default PriceOptions;