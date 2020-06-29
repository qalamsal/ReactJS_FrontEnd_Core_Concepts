import React from 'react';
import { Component } from 'react';

class ArrayComponent extends Component {

    //constructor..
    constructor() {
        super();
        this.state={id:2}
        this.state={ names:["Sandesh","John","Prisha","Puspa"]}
    }


    render() {
        //var result= this.state.names.filter(item=>item.name==="sandesh")

        return (
            <div className="Hello">


                <h1>State component for id {this.state.id} and Names are
                {this.state.names.map(item=>"Elements" +item)}
                </h1>


                <h1>Filter List
                    {
                        this.state.names.filter(item=>item==="Sandesh" || item==="Puspa")
                    }
                </h1>

            </div>

        );
    }
}
export default ArrayComponent;
