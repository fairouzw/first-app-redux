import React, { Component } from "react";
import { connect } from "react-redux";
import { getStarWarsData } from "./starWarsAction";
import StarWarsCard from "./StarWarsCard";

class starWars extends Component {
  componentDidMount() {
    this.props.getStarWarsData();
    //this funciton comes from Actionreau
  }

  render() {
    console.log("Checking my starwars", this.props);
    return (
      <div >
        <h1>Starwars Component </h1>
        <h1>Count: {this.props.count} </h1>
        <StarWarsCard />
      </div>
    );
  }
}

const MapStateToProps = state => ({
  count: state.starWarsReducer.starWarsData.count
  //starWarsReducer is from rootReducer
});

export default connect(MapStateToProps, { getStarWarsData })(starWars);
//bring everythign from insides redux store: the state, the data - its connect now
//first parameter is reduers informaiton, and second is action function

//gets api from the action and displays it in our ui
//high order components react comp brings info to another component - usually its child - high order bring redux to our component.

//connect is a higher order component that givers you access - this happens before render()
//withRouter - is also a higher order component that gives you access to the browser history.

//explanation of normal react app:
//in class component
//high order component is executed first.
//then constructer()
//then render()
//and then lifecyle method()
//then constructer()
//then render()

//
