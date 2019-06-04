import React, { Component } from 'react'

export default function(ComposedComponent) {
    class Authenticate extends Component {
        render() {
            return (
                <ComposedComponent 
                {...this.props} />
            )
        }
    }
    return Authenticate;
}

