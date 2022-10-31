import React from "react";
import './Css/Shop.css'
import { NavLink } from "react-router-dom";



function Shop(){

    const content = [
        {name:"Blueberry   £3", link: "/blueberry.jpeg" },
        {name:"Pineapple   £5", link: "/pineapple.jpg"},
        {name:"Coconut     £4.50", link:"/coconut.jpg"},
        {name:"Mango       £3.50", link:"/mango.jpg"},
        {name:"Kiwi        £2.50", link:"/kiwi.jpg"},
        {name:"Honeydew    £6", link:"/honeydew.jpg"},
        {name:"Lychee      £7.50", link:"/lychee.jpg"},
        {name:"Pomegranate £5.75", link:"/pom.jpg"}
    ];

    return(
        <div className="store">
            {
                content.map((fruit,index) => (
                     
                    <NavLink to={fruit.link.slice(0,4)} id="nav" key={index}>
                        <div className="container">
                            <img src={require("./images"+fruit.link)}/>
                            <div className="text">{fruit.name}</div>
                        </div>
                    </NavLink>
                    
                ))
            }
        </div>
    );
};


export default Shop