import React from 'react';
import './homepage.styles.scss';
const HomePage =() =>(
    <div className='homepage'>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'> 
                <h1 className='title'> FRUIT & VEG </h1>
                <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'> 
                <h1 className='title'> SEAFOOD </h1>
                <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className='menu-item'>
            <div className='content'> 
            <h1 className='title'> MEAT </h1>
            <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
            <div className='menu-item'>
                <div className='content'> 
                <h1 className='title'> SNEAKS </h1>
                <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'> 
                <h1 className='title'> BEAUTY </h1>
                <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
        </div>
    </div>  
    
);
export default HomePage;