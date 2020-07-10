import React, {Component} from 'react'

class GuestByID extends Component {
    state={
        guest: {}
    }

    getGuests(){
        fetch(`http://localhost:3000/guests/${this.props.match.params.id}`)
        .then(response=>response.json())
        .then(json => this.setState({guest: json}))
    .catch(error => console.error(error))
    }

    componentDidMount(){
        this.getGuests();
        console.log(this.props.match.params);
    }
    render(){
        return(
            <>
                <h1>Hello world: Guest by ID</h1>
                <h2>{this.state.guest.name}</h2>
            </>
        )
    }
}

export default GuestByID