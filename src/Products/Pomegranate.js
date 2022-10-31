import React from "react";
import '../Css/About.css'
import image from '../images/pom.jpg'
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import  {addCart} from "../Redux_Store/actions"


function Pomegranate(){

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const pom = {name:"Pomegranate £5.75", link:"/pom.jpg", price: 5.75 , quantity: 1}

    return(
        <div className="about" style={{backgroundImage: 'url(' + image + ')'}}>
            <div className="textholder">
                <div className="title">Pomegranate</div>
                <p className="text">
                The pomegranate (Punica granatum) is a fruit-bearing deciduous shrub in the family Lythraceae, subfamily Punicoideae, 
                that grows between 5 and 10 m tall. The pomegranate was originally described throughout the Mediterranean region. 
                It was introduced into Spanish America in the late 16th century and into California by Spanish settlers in 1769.
                The fruit is typically in season in the Northern Hemisphere from October to February, and in the Southern Hemisphere 
                from March to May. As intact sarcotestas or juice, pomegranates are used in baking, cooking, juice blends, meal garnishes, 
                smoothies, and alcoholic beverages, such as cocktails and wine. Pomegranates are widely cultivated throughout the Middle East 
                and Caucasus region, north and tropical Africa, Iran, Armenia, the Indian subcontinent, Central Asia, the drier parts of Southeast 
                Asia, and the Mediterranean Basin. Red-purple in color, the pomegranate fruit husk has two parts: an outer, hard pericarp, and an 
                inner, spongy mesocarp (white "albedo"), which comprises the fruit inner wall where seeds attach. Membranes of the mesocarp are 
                organized as nonsymmetric chambers that contain seeds inside sarcotestas, which are embedded without attachment to the mesocarp.
                 Containing juice, the sarcotesta is formed as a thin membrane derived from the epidermal cells of the seeds. The number of seeds 
                 in a pomegranate can vary from 200 to about 1,400
                </p>
                <div className="wrapper">
                    <div className="title">£5.75</div>
                    <button className="shopbtn" onClick={() => dispatch(addCart(pom))}><div className="title">Add to cart</div></button>
                </div>
                <button className="shopbtn" onClick={() => navigate(-1)} ><div className="title"> Go Back</div></button>
            </div>
        </div>
    )
}

export default Pomegranate