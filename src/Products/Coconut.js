import React from "react";
import '../Css/About.css'
import image from '../images/coconut.jpg'
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import  {addCart} from "../Redux_Store/actions"


function Coconut(){

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const coconut = {name:"Coconut     £4.50", link:"/coconut.jpg", price: 4.5 , quantity: 1}

    return(
        <div className="about" style={{backgroundImage: 'url(' + image + ')'}}>
            <div className="textholder">
                <div className="title">Coconut</div>
                <p className="text">
                The coconut tree (Cocos nucifera) is a member of the palm tree family (Arecaceae) and the only living species of the genus Cocos. 
                The term "coconut" (or the archaic "cocoanut") can refer to the whole coconut palm, the seed, or the fruit, which botanically is 
                a drupe, not a nut. The name comes from the old Portuguese word coco, meaning "head" or "skull", after the three indentations on 
                the coconut shell that resemble facial features. They are ubiquitous in coastal tropical regions and are a cultural icon of the tropics.
                The coconut tree provides food, fuel, cosmetics, folk medicine and building materials, among many other uses. The inner flesh of the mature 
                seed, as well as the coconut milk extracted from it, form a regular part of the diets of many people in the tropics and subtropics. Coconuts 
                are distinct from other fruits because their endosperm contains a large quantity of clear liquid, called coconut water or coconut juice. Mature, 
                ripe coconuts can be used as edible seeds, or processed for oil and plant milk from the flesh, charcoal from the hard shell, and coir from the 
                fibrous husk.
                </p>
                <div className="wrapper">
                    <div className="title">£4.50</div>
                    <button className="shopbtn" onClick={() => dispatch(addCart(coconut))}><div className="title">Add to cart</div></button>
                </div>
                <button className="shopbtn" onClick={() => navigate(-1)}><div className="title"> Go Back</div></button>
            </div>
        </div>
    )
}

export default Coconut