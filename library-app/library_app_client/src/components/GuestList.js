import React, {Component} from 'react'

class GuestList extends Component{
    state={
        guests:[]
    }

    getGuests(){
        fetch('http://localhost:3000/guests')
        .then(response=>response.json())
        .then(json => this.setState({guests: json}))
    .catch(error => console.error(error))
    }

    componentDidMount(){
        this.getGuests();
    }

    render(){
        return(
            <div className="listbox">
                <h2>Guests</h2>
                {this.state.guests.map( guest => {
                    return(
                        <div className="guestbox">
                            <h3>{guest.name}</h3>
                            <p>{guest.address}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default GuestList