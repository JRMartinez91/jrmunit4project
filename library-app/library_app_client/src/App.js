import React, {Component} from 'react';
import GuestList from './components/GuestList'
import BookList from './components/BookList'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render(){
    return(
      <>
      <h1>Hello World</h1>
      <div className="bigbox">
      <BookList/>
      <GuestList/>
      </div>
      </>
    )
  }
}

export default App;
