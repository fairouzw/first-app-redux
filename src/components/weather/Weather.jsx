import React, { Component } from 'react'
import { connect } from "react-redux";
import {getWeatherData} from './weatherAction';

class Weather extends Component {
  constructor() {
    super();
  }
  componentWillMount() {
    this.props.getWeatherData()
  }
  render() {
    console.log(this.props)
    return (
      <div>
  <h1> The weather in {this.props.name} is {this.props.mainWeather && this.props.mainWeather.temp} degrees </h1>
      </div>
    )
  }
}

const MapStateToProps = state => ({
  name: state.weatherReducer.weatherData.name,
  mainWeather: state.weatherReducer.weatherData.main
})

export default connect(MapStateToProps, {getWeatherData}) (Weather); 