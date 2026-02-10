import React from "react";
// import ReactDOM from "react-dom"
import ReactDOM from "react-dom/client"//latest

// const heading = React.createElement("h1",{},"I am h1 from App.js");

const Heading = () =>{
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://static.vecteezy.com/system/resources/previews/009/944/948/original/food-company-logo-design-free-vector.jpg"></img>
      </div>
      <div className="nav-items"> 
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>

  );
};

const RestaurantCard =()=>{
return(
  <div className="res-card"> 
     <img className="res-logo" 
     alt="rest-logo"
      src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/f0e97f3a-c96a-413f-8c37-6e58d6572c0a_722374.JPG"
     />
     <h3>Meghana Foods</h3>
     <h4>Biryani, North Indian</h4>
     <h4>Ratings 4.3</h4>
     <h4>38 mins</h4>
  </div>
 
);

}

const Body =()=>{
return(
  <div className="body">
    <div className="search"></div>
     {/* Restaurant card */}
     <div className="res-container">
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
     </div>
  

  </div>

);
};

const AppLayout = ()=>{
  return(
    <div>
      <Heading />
      <Body />
    </div>

  );
};
  const root= ReactDOM.createRoot(document.getElementById("root"));
  root.render(<AppLayout/>);


  // const styleCard={
  //   backgroundColor :ReactDOM;
  // }  //in my js I can write style ={styleCard}
  

  //or we can also write it as style ={{backgroundColor : pink}}