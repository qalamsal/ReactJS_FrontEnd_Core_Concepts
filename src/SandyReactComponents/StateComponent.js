import React from 'react';
import { Component } from 'react';

class State extends Component {

    //constructor..
    constructor() {
        super();
        this.state={ name:"sandesh"};
    }

    render() {
        return (
            <div className="Hello"><h1>State component, {this.state.name}</h1></div>
        );
    }
}
export default State;
