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

    deleteBook(book){
        let answer = prompt(`Are you sure you want to delete ${book.title}? Y/N`)
        if(answer=="y"||answer=="Y"){
            fetch(`http://localhost:3000/books/${book.id}`,{
                method: 'DELETE'
            }).then(response => {return response.json()})
            .then(res => console.log(res))
        }
    }


    render(){
        return(
            <div className="listbox">
                <h2>Library Catalogue</h2>
                {this.state.books.map( book => {
                    return(
                        <div className="bookwrapper" key={book.id}>
                            <div className="bookbox">
                                <h3>{book.title}</h3>
                                <h4>By {book.author}</h4>
                                <p>Genre: {book.genre}</p>
                                <p>Published on {book.pubdate}</p>
                                <p>ISBN: {book.isbn}</p>
                                <a href={"/books/"+book.id}>View/Edit</a>
                                <button onClick={()=>{this.deleteBook(book)}}>Delete</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default BookList