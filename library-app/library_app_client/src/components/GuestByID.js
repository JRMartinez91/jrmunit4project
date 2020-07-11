import React, {Component} from 'react'

class GuestByID extends Component {
    constructor(props){
        super(props)
        this.state={
            guest: {},
            editedGuest: {}
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.parseBooks = this.parseBooks.bind(this);
    }

    getGuest(){
        fetch(`http://localhost:3000/guests/${this.props.match.params.id}`)
        .then(response=>response.json())
        .then(json => this.setState({guest: json,editedGuest: json}))
    .catch(error => console.error(error))
    }

    handleChange(event){
        this.setState({editedGuest:{[event.target.id]: event.target.value}});
    }

    handleSubmit(event){
        fetch(`http://localhost:3000/guests/${this.props.match.params.id}`,{
            body: JSON.stringify({
                name: this.state.editedGuest.name,
                address: this.state.editedGuest.address
            }),
            method: 'PUT',
            headers:{
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(createdGuest => {
            return createdGuest.json();
        }).then(jsonBook => {
            console.log(jsonBook);
        }).catch(error=> console.log(error));
    }

    componentDidMount(){
        this.getGuest();
        console.log(this.props.match.params);
    }

    matchID(checkout,id){
        return id == checkout.book_id
    }
    
    getCheckoutFromBook(book_id){
        const myCheckouts = this.state.guest.checkouts
        let datelist = []
        if(myCheckouts){
            myCheckouts.map(element=>{
                if(element.book_id = book_id){
                    datelist = (
                        <li><ul>
                        <li>Checked Out:{element.start}</li>
                        <li>Due: {element.due}</li>
                        <li>Returned: {element.returned}</li>
                        </ul></li>
                    )
                }
            })
            return datelist;
        }
    }

    parseBooks(){
        let bookList =[]
        const myBooks = this.state.guest.books
        const myCheckouts = this.state.guest.checkouts
        if(myBooks){
            if(myBooks.length>0){
            myBooks.map(book=>{
                bookList.push(<li>{book.title}</li>)
                bookList.push(this.getCheckoutFromBook(book.id))
            })
            } else {
                bookList = <li>No books currently checked out!</li>
            }
        } else {
            bookList = <li>Loading book list...</li>
        }
        return bookList;
    }

    render(){
        const myBooks = this.state.guest.books;
        // console.log(myBooks)
       
        return(
            <>
            {/* guest data */}
            <h1>Hello world: Guest by ID</h1>
            <h2>{this.state.guest.name}</h2>
            <h2>{this.state.guest.address}</h2>
            {/* books and checkouts */}
            <h3>Checkout History:</h3>
            <ul>
            {this.parseBooks()}
            </ul>
            <h3>Edit Guest Data:</h3>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='name'>Name</label>
                <input type='text' value={this.state.editedGuest.name} onChange={this.handleChange} id='name'/>
                <label htmlFor='address'>Address</label>
                <input type='text' value={this.state.editedGuest.address} onChange={this.handleChange} id='address'/>
                <input type='submit'/>
            </form>
            </>
        )
    }
}

export default GuestByID