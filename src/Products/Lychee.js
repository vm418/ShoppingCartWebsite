import React from "react";
import '../Css/About.css'
import image from '../images/lychee.jpg'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"
import  {addCart} from "../Redux_Store/actions"




function Lychee(){


    const navigate = useNavigate()
    const dispatch = useDispatch()

    const lychee = {name:"Lychee      £7.50", link:"/lychee.jpg", price: 7.50 , quantity: 1}
    
   

    return(
        <div className="about" style={{backgroundImage: 'url(' + image + ')'}}>
            <div className="textholder">
                <div className="title">Lychee</div>
                <p className="text">
                Lychee is a monotypic taxon and the sole member in the genus Litchi in the soapberry family, Sapindaceae. It is a tropical 
                tree native to the Guangdong, Fujian, and Yunnan provinces of Southeast and Southwest China, where cultivation is documented 
                from the 11th century. China is the main producer of lychees, followed by Vietnam, India, other countries in Southeast Asia, 
                the Indian Subcontinent, Madagascar and South Africa. A tall evergreen tree, the lychee bears small fleshy fruits. The outside of 
                the fruit is pink-red, roughly textured, and inedible, covering sweet flesh eaten in many different dessert dishes. Lychee seeds 
                contain methylene cyclopropyl glycine which can cause hypoglycemia associated with outbreaks of encephalopathy in undernourished 
                Indian and Vietnamese children who had consumed lychee fruit. The lychee bears fleshy fruits that mature in 80–112 days depending 
                on climate, location, and cultivar. Fruits vary in shape from round to ovoid to heart-shaped, up to 5 cm long and 4 cm wide , 
                weighing approximately 20 g. The thin, tough skin is green when immature, ripening to red or pink-red, and is smooth or covered 
                with small sharp protuberances roughly textured. The rind is inedible but easily removed to expose a layer of translucent white 
                fleshy aril with a floral smell and a sweet flavor.
                </p>
                <div className="wrapper">
                    <div className="title">£7.50</div>
                    <button className="shopbtn" onClick={() => dispatch(addCart(lychee))}><div className="title">Add to cart</div></button>
                </div>
                <button className="shopbtn" onClick={() => navigate(-1)} ><div className="title"> Go Back</div></button>
    
            </div>
        </div>
    
    )
}

export default Lychee