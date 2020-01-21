//action is function that builds the data from reducer up.
//action job is to provide the data for the reducer
//create reducer and action for each page - not for each component

import axios from "axios";

export const getStarWarsData = () => dispatch => {

  axios.get(" https://swapi.co/api/people").then(
    res => dispatch({
      type: "GET_STARWARS",
      payload: res.data
    }) 
  )

}


//dispatch is object - that allows us to talk to reducer 
//introduce the action object 
//what dispatch does
//1. what is name of action 
//2. data