import React from "react";
import { connect } from "react-redux";

function StarWarsCard(props) {
  console.log("card", props);
  return (
    <div className="starWarsCard">
      {props.data && props.data.map(e => {
        return(
        <ul className="dataWrapper">
          <li >{e.name} </li>
          <li>{e.skin_color} </li>
          <li>{e.gender} </li>
        </ul>
        )
      })}
    </div>
  );
}

const MapStateToProps = state => ({
  data: state.starWarsReducer.starWarsData.results
  //starWarsReducer is from rootReducer
});

export default connect(MapStateToProps, {})(StarWarsCard);

//we don't need to call action again because it has already been fired in the parent component
//so don't need pass second parameter in connect nor call  this.props.data

//rather use the MapStateToProps per component as opposed to passing it down as props.

//if you have /home & /profile - react doesn't reload and you still have access to same store
//action needs to be fired on each page
