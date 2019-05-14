import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'

export default class NewMovieForm extends Component {
    render() {
        return (
            <div>
                <h2>New Movie</h2>
                <Form>
                    <Form.Field>
                        <label>Title</label>
                        <input placeholder='Title' />
                    </Form.Field>
                    <Form.Field>
                        <label>Cover</label>
                        <input placeholder='Cover' />
                    </Form.Field>
                    <Button primary type='submit'>Submit</Button>
                </Form>
            </div>
        )
    }
}
