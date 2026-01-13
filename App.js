import React from "react";
// import ReactDOM from "react-dom"
import ReactDOM from "react-dom/client"//latest

const heading = React.createElement("h1",{},"I am h1 from App.js");
  const root= ReactDOM.createRoot(document.getElementById("root"));
  root.render(heading);
