import React from "react";
import '../Css/About.css'
import image from '../images/kiwi.jpg'
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import  {addCart} from "../Redux_Store/actions"



function Kiwi(){

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const kiwi = {name:"Kiwi        £2.50", link:"/kiwi.jpg", price: 2.50 , quantity: 1}

    return(
        <div className="about" style={{backgroundImage: 'url(' + image + ')'}}>
            <div className="textholder">
                <div className="title">Kiwi</div>
                <p className="text">
                Kiwifruit (often shortened to kiwi in North American, British and continental European English) or Chinese gooseberry is 
                the edible berry of several species of woody vines in the genus Actinidia. The most common cultivar group of kiwifruit 
                (Actinidia deliciosa 'Hayward') is oval, about the size of a large hen's egg: 5–8 centimetres in length and 4.5–5.5 cm 
                 in diameter. It has a thin, fuzzy, fibrous, tart but edible light brown skin and light green or golden flesh with rows 
                of tiny, black, edible seeds. The fruit has a soft texture with a sweet and unique flavour. Kiwifruit is native to central and eastern China.
                The first recorded description of the kiwifruit dates to the 12th century during the Song dynasty. In the early 20th century, cultivation of 
                kiwifruit spread from China to New Zealand, where the first commercial plantings occurred. The fruit became popular with British and American 
                servicemen stationed in New Zealand during World War II, and later became commonly exported, first to Great Britain and then to California in 
                the 1960s.
                </p>
                <div className="wrapper">
                    <div className="title">£2.50</div>
                    <button className="shopbtn" onClick={() => dispatch(addCart(kiwi))}><div className="title">Add to cart</div></button>
                </div>
                <button className="shopbtn" onClick={() => navigate(-1)} ><div className="title"> Go Back</div></button>
            </div>
        </div>
    )
}

export default Kiwi