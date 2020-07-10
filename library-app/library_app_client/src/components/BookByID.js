import React, {Component} from 'react'
import BookList from './BookList'

class BookByID extends Component {
    state={
        book: {}
    }

    getBooks(){
        fetch(`http://localhost:3000/books/${this.props.match.params.id}`)
        .then(response=>response.json())
        .then(json => this.setState({book: json}))
    .catch(error => console.error(error))
    }

    componentDidMount(){
        this.getBooks();
        console.log(this.props.match.params);
    }
    render(){
        return(
            <>
                <h1>Hello world: book by ID</h1>
                <h2>{this.state.book.title}</h2>
            </>
        )
    }
}

export default BookByID