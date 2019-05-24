import React, { Component } from 'react'
import ActorList from '../ActorList';

export default class HomePage extends Component {
    state = {
        actors : [{
            name : "Marlon Brando",
            description: "Marlon Brando is widely considered the greatest movie actor of all time, rivaled only by the more theatrically oriented Laurence Olivier in terms of esteem. Unlike Olivier, who preferred the stage to the screen, Brando concentrated his talents on movies after bidding the Broadway stage adieu in 1949, a decision for which he was severely criticized"
        }]
    };
    render() {
        return (
            <div>
                <ActorList/>
            </div>
        )
    }
}
