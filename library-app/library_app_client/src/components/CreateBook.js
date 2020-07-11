import React, {Component} from 'react'
import { Redirect } from 'react-router-dom';

class CreateBook extends Component{
    constructor(props) {
		super(props)
		this.state = {
            title:'',
            author:'',
            genre:'',
            pubdate:'',
            isbn:'',
            redirect:false,
            redirectID:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderRedirect = this.renderRedirect.bind(this);
	}

    handleChange(event){
        this.setState({[event.target.id]: event.target.value});
    }

    handleSubmit(event){
        event.preventDefault()
        fetch('https://jamesrm-rails-library.herokuapp.com/books',{
            body: JSON.stringify({
                title: this.state.title,
                author: this.state.author,
                genre: this.state.genre,
                pubdate: this.state.pubdate,
                isbn: this.state.isbn

            }),
            method: 'POST',
            headers:{
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(createdBook => {
            return createdBook.json();
        }).then(jsonBook => {
            this.setState({redirectID: jsonBook.id})
            console.log(jsonBook);
        }).catch(error=> console.log(error));
        this.setState({redirect: true})
    }

    renderRedirect(){
        if(this.state.redirect){
            return(
                <Redirect to={'/books/'+this.state.redirectID}/>
            )
        }
    }

    render(){
        return(
            <>
            <h1>Add a New Book</h1>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='title'>Title</label>
                <input type='text' value={this.state.title} onChange={this.handleChange} id='title'/>
                <label htmlFor='author'>Author</label>
                <input type='text' value={this.state.author} onChange={this.handleChange} id='author'/>
                <label htmlFor='genre'>Genre</label>
                <input type='text' value={this.state.genre} onChange={this.handleChange} id='genre'/>
                <label htmlFor='pubdate'>Publication Date</label>
                <input type='text' value={this.state.pubdate} onChange={this.handleChange} id='pubdate'/>
                <label htmlFor='isbn'>ISBN Number</label>
                <input type='text' value={this.state.isbn} onChange={this.handleChange} id='isbn'/>
                <input className="submit-button" type='submit'/>
            </form>
            {this.renderRedirect()}
            </>
        )
    }
}

export default CreateBook