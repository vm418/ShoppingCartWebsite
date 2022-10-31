import React from "react";
import '../Css/About.css'
import image from '../images/mango.jpg'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"
import  {addCart} from "../Redux_Store/actions"


function Mango(){

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const mango = {name:"Mango       £3.50", link:"/mango.jpg", price: 3.50 , quantity: 1}

    return(
        <div className="about" style={{backgroundImage: 'url(' + image + ')'}}>
            <div className="textholder">
                <div className="title">Mango</div>
                <p className="text">
                A mango is an edible stone fruit produced by the tropical tree Mangifera indica. It is believed to have originated 
                in the region between northwestern Myanmar, Bangladesh, and northeastern India. M. indica has been cultivated in 
                South and Southeast Asia since ancient times resulting in two types of modern mango cultivars: the "Indian type" 
                and the "Southeast Asian type". Other species in the genus Mangifera also produce edible fruits that are also called 
                "mangoes", the majority of which are found in the Malesian ecoregion. Worldwide, there are several hundred cultivars 
                of mango. Depending on the cultivar, mango fruit varies in size, shape, sweetness, skin color, and flesh color which 
                may be pale yellow, gold, green, or orange. Mango is the national fruit of India, Pakistan and the Philippines,
                 while the mango tree is the national tree of Bangladesh.
                </p>
                <div className="wrapper">
                    <div className="title">£3.50</div>
                    <button className="shopbtn" onClick={() => dispatch(addCart(mango))}><div className="title">Add to cart</div></button>
                </div>
                <button className="shopbtn" onClick={() => navigate(-1)} ><div className="title"> Go Back</div></button>
            </div>
        </div>
    )
}

export default Mango