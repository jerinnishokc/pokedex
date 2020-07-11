import React from 'react';
import './homepage.styles.scss';
import Typed from 'react-typed';

const HomePage = () => { 
    return (
        <div>
            <h1 className="title">HomePage</h1>
            <Typed
                    strings={['Here you can find anything']}
                    typeSpeed={40}
                />
                <br/>

                <Typed
                strings={[
                    'Search for products',
                    'Search for categories',
                    'Search for brands']}
                    typeSpeed={40}
                    backSpeed={50}                    
                    loop >
                </Typed>
        </div>
    ); 
}

export default HomePage;