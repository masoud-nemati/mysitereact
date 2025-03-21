

import React, { Component } from 'react';
import img1 from "../images/slaidimg.jpg";
import img2 from "../images/bodyimg.jpg";
import img4 from "../images/image.jpg";
import img5 from "../images/PICNEW.png";
import img6 from "../images/baner.webp";
import "../styles/imagesstyle.css";

class Image extends Component {
    constructor() {
        super();
        this.state = {
            currentIndex: 0,
            images: [img6,img2,img5, img4, img1],
            showImage: true
        };
    }

    changeImage = () => {
        this.setState(prevState => ({
            currentIndex: (prevState.currentIndex + 1) % prevState.images.length // رفتن به تصویر بعدی
        }));
    }

    toggleImage = () => {
        this.setState(prevState => ({
            showImage: !prevState.showImage
        }));
    }
    render() {
        return (
            <>
                {this.state.showImage ? (
                    <>
                        <div className="image-container" onClick={this.changeImage}>
                            <img className="img-heder" src={this.state.images[this.state.currentIndex]} alt="slideshow" />
                            <div className="overlay">🔄 Click to Change</div>
                        </div>
                        {/* <button className="btn-hid" onClick={this.toggleImage}>Hide</button> */}
                    </>
                ) : (
                    // <button className="btn-img" onClick={this.toggleImage}>Show</button>
                    null
                )}
            </>
        );
    }
}

export default Image;