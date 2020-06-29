import React from 'react';
import { Component } from 'react';

class Prop extends Component {

    //constructor..
    constructor(props) {
        super(props);  //props param is default 
    }

    render() {
        return (
            <div className="Hello"><h1>Prop component, {this.props.name}</h1></div>
        );
    }
}
export default Prop;
