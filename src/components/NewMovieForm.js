import React, { Component } from 'react'
import { Button, Form, Image, Message } from 'semantic-ui-react'
import InlineError from './InlineError'
import PropTypes from 'prop-types';


export default class NewMovieForm extends Component {
    state = {
        title : '',
        cover : '',
        // hata
        errors: {}
    };

    // Indentify the coming prop type
    static propTypes = {
        onNewMovieSubmit : PropTypes.func.isRequired
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    onSubmit = () => {
        // validation
        const errors = this.validate();
        // console.log('error: ', errors);
        // send the error to state
        this.setState({
            errors
        });

        if (Object.keys(errors).length === 0) {
            this.props.onNewMovieSubmit(this.state);
        }
        
    };

    validate = () => {
        const errors = {}
        if (!this.state.title) errors.title = "Can't be blanck";
        if (!this.state.cover) errors.cover = "Can't be blanck";
        return errors
        
    }

    render() {
        const { errors } = this.state;
        return (
            <div>
                <h2>New Movie</h2>
                <Form onSubmit={this.onSubmit} loading={this.props.newMovie.fetching}>
                    <Form.Field error={!!errors.title}>
                        <label>Title</label>
                        {errors.title && <InlineError message={errors.title}/>}
                        <input 
                        id="title"
                        name="title"
                        value={this.state.title}
                        onChange={this.handleChange}
                        placeholder='Title' />
                    </Form.Field>
                    <Form.Field error={!!errors.cover}>
                        <label>Cover</label>
                        {errors.cover && <InlineError message={errors.cover} />}
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
