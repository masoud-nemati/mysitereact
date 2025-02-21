
import React, { Component } from 'react';
import "../styles/heder.css";

class HEDER extends Component {
    constructor() {
        super();
        this.state = {
            name: "masoud",
            family: "nemati.com"
        };
    }
    
    render() { 
        const { name, family } = this.state;

        return (
            <div className='heder-box'> 
                
                <h1>{name}{family}</h1>
            </div>
        );
    }
}
 
export default HEDER;