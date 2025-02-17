

import React, { Component } from 'react';
import img1 from "../images/slaidimg.jpg";
import "../styles/imagesstyle.css";

class Image extends Component {
    constructor() {
        super();
        this.state = {
            flag: true
        };
    }

    changestateimg = () => {
        const { flag } = this.state;
        this.setState({ flag: !flag });
    }

    render() {
        return (
            <>
                {
                    this.state.flag ? (
                        <>
                            <img className='img-heder' src={img1} alt='' />
                            <button className='btn-hid' onClick={this.changestateimg}>hide</button>
                        </>
                    ) : (
                        <button className='btn-img' onClick={this.changestateimg}>show</button>
                    )
                }
            </>
        );
    }
}

export default Image;