import React,{Component} from 'react'
import { NavLink } from 'react-router-dom';

class NewCheckout extends Component{
    constructor(props){
        super(props)
        this.state={
            book: {},
            guests: [],
            checkoutForm:{
                guests:1,
                returned: '0000-00-00'
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    getGuests(){
        fetch('http://localhost:3000/guests')
        .then(response=>response.json())
        .then(json => this.setState({guests: json}))
    .catch(error => console.error(error))
    }

    getBook(){
        fetch(`http://localhost:3000/books/${this.props.match.params.id}`)
        .then(response=>response.json())
        .then(json => this.setState({book: json}))
    .catch(error => console.error(error))
    }

    componentDidMount(){
        this.getGuests()
        this.getBook()
    }

    handleChange(event){
        let currentForm = this.state.checkoutForm
        currentForm[event.target.id] = event.target.value;
        this.setState({checkoutForm:{...currentForm}});
    }

    handleSubmit(event){
        event.preventDefault()
        let myForm = this.state.checkoutForm;
        if(!myForm.guests || !myForm.start || !myForm.due){
            alert("Please fill out all form areas.")
        } else {
            fetch('http://localhost:3000/checkouts',{
                body: JSON.stringify({
                    book_id: this.props.match.params.id,
                    guest_id: this.state.checkoutForm.guests,
                    start: this.state.checkoutForm.start,
                    due: this.state.checkoutForm.due
                }),
                method: 'POST',
                headers:{
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                }
            }).then(createdCheckout => {
                return createdCheckout.json();
            }).then(jsonCheckout => {
                console.log(jsonCheckout);
            }).catch(error=> console.log(error));
        }
    }



    render(){
        return(
            <>
            <h1>Hello World: New Checkout</h1>
            <h2>Checking Out: {this.state.book.title} by {this.state.book.author}</h2>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="guests">Who is checking out the book?</label>
                <select name="guests" id="guests" value={this.state.checkoutForm.guest_id} onChange={this.handleChange}>
                    {this.state.guests.map(guest=>{
                        return(
                            <option value={guest.id} key={guest.id}>{guest.name}</option>
                        )
                    })}
                </select>
                <label htmlFor="start">Today's Date</label>
                <input type="date" id="start" name="start" onChange={this.handleChange}/>
                <label htmlFor="due">Due Date</label>
                <input type="date" id="due" name="due" onChange={this.handleChange}/>
                <input type='submit'/>
            </form>
            </>
        )
    }

}

export default NewCheckout