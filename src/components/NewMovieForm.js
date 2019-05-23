import React, { Component } from 'react'
import { Button, Form, Image, Message } from 'semantic-ui-react'
import InlineError from './InlineError'
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';


export default class NewMovieForm extends Component {
    state = {
        title : this.props.movie ? this.props.movie.title : '',
        cover : this.props.movie ? this.props.movie.cover : '',
        // hata
        errors: {},
        redirect: false
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
            errors,
            redirect: true
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
        console.log(this.props)
        const { errors } = this.state;
        const form = (
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
        )
        
        return (
            <div>
            {
                // if done is true redict to movie or show the form
                    this.props.newMovie.done && this.state.redirect
                        ? <Redirect to="/movies" /> : form
            }
            </div>
        )
    }
}
