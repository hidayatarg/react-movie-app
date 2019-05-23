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
        if (!this.state.title) errors.title = "Can't be blank";
        if (!this.state.cover) errors.cover = "Can't be blank";
        return errors
        
    }

    render() {
        const { errors } = this.state;
        console.log('Gelen Props: ',this.props);
        
        return (
            <div>
                <h2>New Movie</h2>
                <Form onSubmit={this.onSubmit} loading={this.props.newMovie.fetching}>
                    <Form.Field>
                        <label>Title</label>
                        {errors.title && <InlineError message={errors.title} />}
                        <input
                            id="title"
                            name="title"
                            value={this.state.title}
                            onChange={this.handleChange}
                            placeholder='Title' />
                    </Form.Field>
                    <Form.Field>
                        <label>Cover Url</label>
                        {errors.cover && <InlineError message={errors.cover} />}
                        <input
                            id="cover"
                            name="cover"
                            value={this.state.cover}
                            onChange={this.handleChange}
                            placeholder='Cover Url' />
                    </Form.Field>
                    <Image src={this.state.cover} size='small' />
                    <div className="clearfix"></div>
                    <Button type='submit'>Submit</Button>

                    {
                        this.props.newMovie.error.response
                        &&
                        (
                            <Message negative>
                                <Message.Header>We're Sorry</Message.Header>
                                <p>A problem occured.</p>
                            </Message>
                        )
                    }
                </Form>
            </div>
        )
    }
}
