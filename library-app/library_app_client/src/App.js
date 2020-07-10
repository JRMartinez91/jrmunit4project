import React, {Component} from 'react';
import GuestList from './components/GuestList'
import BookList from './components/BookList'
import CreateGuest from './components/CreateGuest'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render(){
    return(
      <>
      <h1>Hello World</h1>
      <CreateGuest/>
      <div className="bigbox">
      <BookList/>
      <GuestList/>
      </div>
      </>
    )
  }
}

export default App;
