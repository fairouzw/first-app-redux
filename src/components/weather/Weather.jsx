import React, { Component } from "react";
import { connect } from "react-redux";
import { getWeatherData } from "./weatherAction";

class Weather extends Component {
  constructor() {
    super();
    this.state = {
      city: ""
    };
  }
  inputHandler = e => {
    this.setState({
      city: e.target.value
    });
  };

  clickHandler = () => {
    this.props.getWeatherData(this.state.city);
  };

  // componentWillMount() {
  //   this.props.getWeatherData('berlin')
  // }

  render() {
    console.log(this.props);
    return (
      <div>
        <input
          type="text"
          value={this.state.city}
          onChange={this.inputHandler}
        />
        <button onClick={this.clickHandler}> Get weather!</button>
        <h1>
          {" "}
          The weather in {this.props.name} is{" "}
          {this.props.mainWeather && this.props.mainWeather.temp} degrees{" "}
        </h1>
      </div>
    );
  }
}

const MapStateToProps = state => ({
  name: state.weatherReducer.weatherData.name,
  mainWeather: state.weatherReducer.weatherData.main
});

export default connect(MapStateToProps, { getWeatherData })(Weather);
