import React, {Component} from 'react'

class CreateGuest extends Component{
    constructor(props) {
		super(props)
		this.state = {
            name:'',
            address:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
	}

    handleChange(event){
        this.setState({[event.target.id]: event.target.value});
    }

    handleSubmit(event){
        event.preventDefault()
        fetch('http://localhost:3000/guests',{
            body: JSON.stringify({name: this.state.name,address: this.state.address}),
            method: 'POST',
            headers:{
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(createdGuest => {
            return createdGuest.json();
        }).then(jsonGuest => {
            console.log(jsonGuest);
        }).catch(error=> console.log(error));
    }

    render(){
        return(
            <>
            <h1>Add a New Guest</h1>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='name'>Name</label>
                <input type='text' value={this.state.name} onChange={this.handleChange} id='name'/>
                <label htmlFor='address'>Address</label>
                <input type='text' value={this.state.address} onChange={this.handleChange} id='address'/>
                <input type='submit'/>
            </form>
            </>
        )
    }
}

export default CreateGuest