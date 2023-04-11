import React, { Component, useState } from 'react';
import Navigation from './components/Navigation/Navigation.js';
import SignIn from './components/SignIn/SignIn.js';
import Register from './components/Register/Register.js';
import Sidebar from './components/Sidebar/Sidebar.js';
import TextBox from './components/TextBox/TextBox.js';
import ParticlesBg from 'particles-bg'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'signin',
      isSignedIn: false,
      msg: 'siema',
      text: ""
    }
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignedIn: false})
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

  handleClick = (newText) => {
      this.setState({ text: newText});
    }
  

  render() {
    const { isSignedIn, route} = this.state;
    return (
      <div className="App">
        <ParticlesBg type="cobweb" bg={true} color="#FFFFFF" />
        { route === 'home'
          ? <div className='row'> 
            <Sidebar  handleClick={this.handleClick} />
            <TextBox text={this.state.text}/> 
          </div>
          : (
             route === 'signin'
             ? <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
             : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
            )
        }
      </div>
    );
  }
}


export default App;

 // <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>