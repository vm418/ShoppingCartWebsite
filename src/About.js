import React from "react";
import './Css/About.css'
import image from './images/fruit.jpg'

function About(){

    return(
        <div className="about" style={{backgroundImage: 'url(' + image + ')'}}>
            <div className="textholder">
                <div className="title">What is Lorem Ipsum?</div>
                <p className="text">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book. It has survived not only five centuries, but also the leap into 
                    electronic typesetting, remaining essentially unchanged. It was popularised in 
                    the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                    and more recently with desktop publishing software like Aldus PageMaker including 
                    versions of Lorem Ipsum.
                </p>
                <p className="text">
                    It is a long established fact that a reader will be distracted by the readable content 
                    of a page when looking at its layout. The point of using Lorem Ipsum is that it has a 
                    more-or-less normal distribution of letters, as opposed to using 'Content here, content 
                    here', making it look like readable English. Many desktop publishing packages and web page 
                    editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover 
                    many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, 
                    sometimes on purpose (injected humour and the like).
                </p>
                <p className="text">The standard Lorem Ipsum passage, used since the 1500s :</p>
                <p className="text"><em>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </em></p>
            </div>
        </div>
    )
}

export default About