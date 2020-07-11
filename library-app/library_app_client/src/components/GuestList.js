import React, {Component} from 'react'

class GuestList extends Component{
    state={
        guests:[]
    }

    getGuests(){
        fetch('https://jamesrm-rails-library.herokuapp.com/guests')
        .then(response=>response.json())
        .then(json => this.setState({guests: json}))
    .catch(error => console.error(error))
    }

    componentDidMount(){
        this.getGuests();
    }

    deleteGuest(guest){
        let answer = prompt(`Are you sure you want to delete ${guest.name}? Y/N`)
        if(answer=="y"||answer=="Y"){
            fetch(`https://jamesrm-rails-library.herokuapp.com/guests/${guest.id}`,{
                method: 'DELETE'
            })
        }
        this.getGuests()
    }

    render(){
        return(
            <div className="listbox">
                <h2>Guests</h2>
                {this.state.guests.map( guest => {
                    return(
                        <div className="guestbox" key={guest.id}>
                            <h3>{guest.name}</h3>
                            <p>{guest.address}</p>
                            <a href={"/guests/"+guest.id}>View/Edit</a>
                                <button onClick={()=>{this.deleteGuest(guest)}}>Delete</button>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default GuestList