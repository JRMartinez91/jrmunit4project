import React, {Component} from 'react'

class BookList extends Component{
    state={
        books:[]
    }

    getBooks(){
        fetch('http://localhost:3000/books')
        .then(response=>response.json())
        .then(json => this.setState({books: json}))
    .catch(error => console.error(error))
    }

    componentDidMount(){
        this.getBooks();
    }


    render(){
        return(
            <div className="listbox">
                <h2>Library Catalogue</h2>
                {this.state.books.map( book => {
                    return(
                        <div className="bookwrapper" id={book.id}>
                            <div className="bookbox">
                                <h3>{book.title}</h3>
                                <h4>By {book.author}</h4>
                                <p>Genre: {book.genre}</p>
                                <p>Published on {book.pubdate}</p>
                                <p>ISBN: {book.isbn}</p>
                            </div>
                            <div className="bookmodal">
                                <h1>{book.title}</h1>
                                <h2>By {book.author}</h2>
                                <p>Genre: {book.genre}</p>
                                <p>Published on {book.pubdate}</p>
                                <p>ISBN: {book.isbn}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default BookList