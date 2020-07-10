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

    getGuests(){
        fetch(`http://localhost:3000/guests/${this.props.match.params.id}`)
        .then(response=>response.json())
        .then(json => this.setState({guest: json}))
    .catch(error => console.error(error))
    }

    componentDidMount(){
        this.getGuest();
        console.log(this.props.match.params);
    }
    render(){
        return(
            <>
                <h1>Hello world: Guest by ID</h1>
                <h2>{this.state.guest.name}</h2>
                <h2>{this.state.guest.address}</h2>
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