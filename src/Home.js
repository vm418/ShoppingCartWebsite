import React from 'react';
import './Css/Home.css'
import { NavLink } from 'react-router-dom';

function Home(){
    


    return(
       <div className="homepage">
        <p>Fresh Groceries ...</p>
        <button><NavLink to="/shop" id='nav'>Shop now  >>></NavLink></button>
       </div>

    );
};

export default Home