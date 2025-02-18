

import React, { Component } from 'react';
import img1 from "../images/slaidimg.jpg";
import img2 from "../images/bodyimg.jpg";
import img3 from "../images/davood.3.jpg"
import "../styles/imagesstyle.css";

class Image extends Component {
    constructor() {
        super();
        this.state = {
            currentIndex: 0, // ایندکس تصویر فعلی
            images: [img1, img2, img3], // آرایه‌ای از تصاویر
            showImage: true // کنترل نمایش تصویر
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
                        <img className='img-heder' src={this.state.images[this.state.currentIndex]} alt='slideshow' onClick={this.changeImage} />
                        <button className='btn-hid' onClick={this.toggleImage}>Hide</button>
                    </>
                ) : (
                    <button className='btn-img' onClick={this.toggleImage}>Show</button>
                )}
            </>
        );
    }
}

export default Image;