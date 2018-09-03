import React, { Component } from 'react';
import './App.css';
import fetch from 'node-fetch';
import AnimalCall from './AnimalCall';
import MoreCute from './MoreCute';

export default class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      borderColor: null,
      image:null
    }
    this.handleBorderColor = this.handleBorderColor.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
  }

  handleBorderColor (){
    const colors = [];
    let random = Math.floor(Math.random()*colors.length);
    let newBorderColor = colors[random];
    this.setState({borderColor: newBorderColor});
  }

  handleImageChange(){
    console.log('yolo');
  }
  render() {
    return (
      <div className="App">
        <div>
          <h1>Exhale</h1>
        </div>
        <MoreCute />
        <AnimalCall />
      </div>
    );
  }
}
