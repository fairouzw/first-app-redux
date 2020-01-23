const initialState = {
  //this is basiclaly this.state
  weatherData : [] 
  }

  export const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_WEATHER" : 
        return {
          ...state,
          //want to get whatever is inside state and what you change
          weatherData: action.payload
        }
      break;
      default:
        //can do error handling here-console.log()...
        return state;
      break;
    }
  }