//React framework
import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//Components
import GuestList from './components/GuestList'
import BookList from './components/BookList'
import CreateGuest from './components/CreateGuest'
import CreateBook from './components/CreateBook'
import BookByID from './components/BookByID';
import GuestByID from './components/GuestByID';
import NewCheckout from './components/NewCheckout';
//Styling
import './App.css';

class App extends Component {
  render(){
    return(
      <BrowserRouter>
      <div className="modal-bg"/>
      <h1>Rails React Library</h1>
      <nav>
        <a href="/newbook">Add New Book</a>
        <a href="/newguest">Add New Guest</a>
        <a href="/books">Book Index</a>
        <a href="/guests">Guests Index</a>
      </nav>
      <Switch>
        <Route path="/newbook" component={CreateBook}/>
        <Route path="/newguest" component={CreateGuest}/>
        <Route path="/books/:id" component={BookByID}/>
        <Route path="/books" component={BookList}/>
        <Route path="/guests/:id" component={GuestByID}/>
        <Route path="/guests" component={GuestList}/>
        <Route path="/newcheckout/:id" component={NewCheckout}/>
      </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
