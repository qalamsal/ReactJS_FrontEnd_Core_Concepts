import React from 'react';
import { Component } from 'react';

class Hi extends Component {
    /*
    ReactJs is a JavaScript Library to built Front end app or UI
    Makes to reusable UI component ( Best features)
    Building block of React
    ------------------
    Component = Class or function  (holding the Ui, data, function)
     */

    render() {
        return (
            <div className="Hello"><h1>Hi Class Component</h1></div>
        );
    }
}
export default Hi;

/*
index.js, uses render method to use Hello component as funtional way...

ReactDOM.render(
  <React.StrictMode><Hello/></React.StrictMode>,
  document.getElementById('root')
);
 */
