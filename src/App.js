import React from "react";
import "./App.css";
import {Provider} from "react-redux"; 
//this can go in index.js as well
import store from "./store";
import StarWars from "./components/starWars/starWars.jsx";
import Weather from "./components/weather/Weather"


function App(props) {
  return (
    <div className="App">
      <Provider store={store}>
      <h1> Redux Workshop Things </h1>
      <StarWars/>
      <Weather/>
      </Provider> 
    </div>
  );
}

export default App;

//GENERAL NOTES:
//here you can keep it functional component - because you don't need a state here.
//side note if you use hooks you don't need class component at all
//1. create store - this needs to wrap globally - only set it up once
//2. get data and send to store 
//want to provide store to app - this is called a provider
//provide component is coming from redux-react 