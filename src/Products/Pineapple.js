import React from "react";
import '../Css/About.css'
import image from '../images/pineapple.jpg'
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import  {addCart} from "../Redux_Store/actions"


function Pineapple(){

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const pineapple = {name:"Pineapple   £5", link: "/pineapple.jpg", price: 5 , quantity: 1}
    
    return(
        <div className="about" style={{backgroundImage: 'url(' + image + ')'}}>
            <div className="textholder">
                <div className="title">Pineapple</div>
                <p className="text">
                The pineapple (Ananas comosus) is a tropical plant with an edible fruit; it is the most economically significant plant
                in the family Bromeliaceae. The pineapple is indigenous to South America, where it has been cultivated for many centuries. 
                The introduction of the pineapple to Europe in the 17th century made it a significant cultural icon of luxury. Since the 1820s, 
                pineapple has been commercially grown in greenhouses and many tropical plantations.Pineapples grow as a small shrub; the individual 
                flowers of the unpollinated plant fuse to form a multiple fruit. The plant is normally propagated from the offset produced at the top 
                of the fruit, or from a side shoot, and typically mature within a year.The pineapple is a herbaceous perennial, which grows to 1.0 to 
                1.5 m (3 ft 3 in to 4 ft 11 in) tall, although sometimes it can be taller. The plant has a short, stocky stem with tough, waxy leaves. 
                When creating its fruit, it usually produces up to 200 flowers, although some large-fruited cultivars can exceed this.
                </p>
                <div className="wrapper">
                    <div className="title">£5</div>
                    <button className="shopbtn" onClick={() => dispatch(addCart(pineapple))}><div className="title">Add to cart</div></button>
                </div>
                <button className="shopbtn" onClick={() => navigate(-1)}><div className="title"> Go Back</div></button>
            </div>
        </div>
    )
}

export default Pineapple