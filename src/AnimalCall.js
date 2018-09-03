import React, { Component } from 'react';
import fetch from 'node-fetch';
import './App.css';

class AnimalCall extends Component {
  render(){
    fetch('http://aws.random.cat/meow')
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
    return (
      <div>
        <div>hey</div>
        <div className='square'></div>
      </div>
    );
  }
}
export default AnimalCall;
