import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/diamondtabel.css';

const DiamondTabel = () => {
    return ( 
        <div className='diamondtable'>
            <div className='diamond-cell'>
                <Link to="/home">home</Link>
            </div>
            <div className='diamond-cell'>
                <Link to="/about">about us</Link>
            </div>

            <div className='diamond-cell'>
                <Link to="/blog">blog</Link>
            </div>

            <div className='diamond-cell'>
                <Link to="/logout">out</Link>
            </div>




        </div>

     );
}
 
export default DiamondTabel;