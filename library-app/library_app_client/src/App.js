import React, {Component} from 'react';
import GuestList from './components/GuestList'
import BookList from './components/BookList'
import CreateGuest from './components/CreateGuest'
import CreateBook from './components/CreateBook'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render(){
    return(
      <>
      <h1>Hello World</h1>
      <h2>New Guest</h2>
      <CreateGuest/>
      <h2>New Book</h2>
      <CreateBook/>
      <div className="bigbox">
      <BookList/>
      <GuestList/>
      </div>
      </>
    )
  }
}

export default App;
