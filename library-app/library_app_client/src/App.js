import React, {Component} from 'react';
import GuestList from './components/GuestList'
import BookList from './components/BookList'
import CreateGuest from './components/CreateGuest'
import CreateBook from './components/CreateBook'
import BookByID from './components/BookByID';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render(){
    return(
      <BrowserRouter>
      <div className="modal-bg"/>
      <h1>Hello World</h1>
      <h2>New Guest</h2>
      <CreateGuest/>
      <h2>New Book</h2>
      <CreateBook/>
      {/* <div className="bigbox">
        <BookList/>
        <GuestList/>
      </div> */}
      <Switch>
        <Route path="/books/:id" component={BookByID}/>
        <Route path="/books" component={BookList}/>
        <Route path="/guests" component={GuestList}/>
      </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
