import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { RestaurantContext } from '../context/RestaurantProvider';
import RestaurantStockImg from "../images/restaurant-stock.jpg";
import EditRestaurantCard from './EditRestaurantCard';


function RestaurantCard({ restaurant }) {
    let {restaurants, setRestaurants} = useContext(RestaurantContext)
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    function handleDelete(){
        fetch(`/eateries/${restaurant.id}`, {
            method: "DELETE"
        })
        deletedRestaurant()
    }

    function deletedRestaurant() {
        const updatedRestaurantList = restaurants.filter(deletedRestaurant => {
            return deletedRestaurant.id !== restaurant.id
        })
        setRestaurants(updatedRestaurantList)
    }

    return (
        <div>
            <div class="flex justify-between py-4 mb-6 border-2 hover:shadow-xl">
                <div class="px-4">
                    <Link to={`/restaurants/${restaurant.id}`} >
                        <h2 class="font-bold text-3xl">{restaurant.eatery_name}</h2>
                    </Link>
                    <h3 class="font-bold text-xl">{restaurant.eatery_type}</h3>
                    <h4 class="font-bold text-lg">{restaurant.eatery_address}</h4>
                    {/* <p>Notes: {restaurant.eatery_notes}</p> */}
                    <div class="flex justify-around pt-20">
                        <button
                        type="button"
                        class="inline-block px-2 py-2 mt-4 bg-tan text-white font-bold text-sm leading-snug uppercase rounded shadow-lg hover:bg-green hover:shadow-lg focus:bg-green focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green active:shadow-lg transition duration-150 ease-in-out w-1/3"
                        onClick={() => setIsPopupOpen(true)}
                        >
                            Edit
                        </button>
                        <button
                        class="inline-block px-2 py-2 mt-4 bg-tan text-white font-bold text-sm leading-snug uppercase rounded shadow-lg hover:bg-green hover:shadow-lg focus:bg-green focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green active:shadow-lg transition duration-150 ease-in-out w-1/3"
                        onClick={() => { window.confirm( `Are you sure you want to delete ${restaurant.eatery_name}?`, ) && handleDelete(restaurant.id)}}>
                            Delete
                        </button>
                    </div>
                </div>

                <div>
                    <img class="w-80" className="eateryImg" src={RestaurantStockImg} alt="eateryImg"/>
                </div>

                <div>
                    {isPopupOpen ? (
                        <EditRestaurantCard
                            onClose={() => setIsPopupOpen(false)}
                            restaurant={restaurant}
                        />
                    ) : null}
                </div>
            </div>
        </div>
    );
}

export default RestaurantCard;