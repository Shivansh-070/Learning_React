import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body =()=>{
return(
  <div className="body">
    <div className="search"></div>
     <div className="res-container">
        {
          resList.map((restaurant)=><RestaurantCard key ={restaurant.info.id} resData= {restaurant}/>)
        }
        {/* here resData must be as it is as it is the key to component RestaurantCard */}
        {/* <RestaurantCard resName = "KFC" cuisine = "Burger" /> */}
     </div>
  </div>

);
};

export default Body;