//reducer is a function that 

const initialState = {
  //this is basiclaly this.state
  starWarsData : [] 
  }

  export const starWarsReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_STARWARS" : 
        return {
          ...state,
          //want to get whatever is inside state and what you change
          starWarsData: action.payload
        }
      break;
      default:
        //can do error handling here-console.log()...
        return state;
      break;
    }
  }

//if action.type is the same 
//takes two arguments a. the initial state that the reducer wants to give away b. name of action that it is looking for to get the data.
//use switch statements as convention because sometimes reducers are huge. 