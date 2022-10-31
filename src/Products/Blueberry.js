import React from "react";
import '../Css/About.css'
import image from '../images/blueberry.jpeg'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../Redux_Store/actions";



function Blueberry(){

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const blueberry = {name:"Blueberry   £3", link: "/blueberry.jpeg", price: 3 , quantity: 1}



    return(
        <div className="about" style={{backgroundImage: 'url(' + image + ')'}}>
            <div className="textholder">
                <div className="title">Blueberries</div>
                <p className="text">
                Blueberries are a widely distributed and widespread group of perennial flowering plants with blue or purple berries. 
                They are classified in the section Cyanococcus within the genus Vaccinium. Vaccinium also includes cranberries, bilberries, 
                huckleberries and Madeira blueberries.Commercial blueberries—both wild (lowbush) and cultivated (highbush)—are all native 
                to North America. The highbush varieties were introduced into Europe during the 1930s.Blueberries are usually prostrate shrubs 
                that can vary in size from 10 centimeters (4 inches) to 4 meters (13 feet) in height. In commercial production of blueberries, 
                the species with small, pea-size berries growing on low-level bushes are known as "lowbush blueberries" (synonymous with "wild"), 
                while the species with larger berries growing on taller, cultivated bushes are known as "highbush blueberries". Canada is the leading 
                producer of lowbush blueberries, while the United States produces some 40% of the world supply of highbush blueberries.
                </p>
                <div className="wrapper">
                    <div className="title">£3</div>
                    <button className="shopbtn" onClick={() => dispatch(addCart(blueberry))}><div className="title">Add to cart</div></button>
                </div>
                <button className="shopbtn" onClick={() => navigate(-1)}><div className="title"> Go Back</div></button>
            </div>
        </div>
    )
}

export default Blueberry