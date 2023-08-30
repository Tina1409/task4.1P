import React from 'react';
import  './Nav.css';
import Picture from './Picture.js';
import SeeAllArticles from './SeeAllArticles.js';
import Gallery from './Gallery.js';
import FeaturedTutorials from './FeaturedTutorials.js';
import LastHeading from './LastHeading.js';
import SignUpBox from './SignUpBox.js';
import StayConnected from './StayConnected.js';

function Nav(){
    return (
        <>
        <div className='navbar'>
            <h2>DEV@Deakin</h2>
            <input className='user_input' type='search' placeholder='Search' />
            <p className='buttons'>Post</p>
            <p className='buttons'>Login</p>
        </div>
        <div className='imgage'>
            <img src='img/astronaut.jpg' alt='img' />
        </div>
        <h1 className='caption'>Featured Articles</h1>  
        <div>
        
        <Picture/>
        <SeeAllArticles/>
        <FeaturedTutorials/>
        <Gallery/>
        <LastHeading/>
        <SignUpBox/>
        <StayConnected/>
        
        
     </div>
        
           
       
        
       
        </>
    )
}
export default Nav;