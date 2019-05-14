import React, { Component } from 'react'
import { Button, Form, Image } from 'semantic-ui-react'

export default class NewMovieForm extends Component {
    state = {
        title : '',
        cover : ''
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <div>
                <h2>New Movie</h2>
                <Form>
                    <Form.Field>
                        <label>Title</label>
                        <input 
                        id="title"
                        name="title"
                        value={this.state.title}
                        onChange={this.handleChange}
                        placeholder='Title' />
                    </Form.Field>
                    <Form.Field>
                        <label>Cover</label>
                        <input 
                        id="cover"
                        name="cover"
                        value={this.state.cover}
                        onChange={this.handleChange}
                        placeholder='Cover' />
                    </Form.Field>
                    <Image 
                        src={this.state.cover}
                        size = 'small' />
                    <div className="clearFix"></div>
                    <Button 
                        primary 
                        type='submit'>
                        Submit
                        </Button>
                </Form>
            </div>
        )
    }
}
