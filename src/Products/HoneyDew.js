import React from "react";
import '../Css/About.css'
import image from '../images/honeydew.jpg'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"
import  {addCart} from "../Redux_Store/actions"


function HoneyDew(){

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const honey = {name:"Honeydew    £6", link:"/honeydew.jpg", price: 6, quantity: 1}

    return(
        <div className="about" style={{backgroundImage: 'url(' + image + ')'}}>
            <div className="textholder">
                <div className="title">Honeydew Melon</div>
                <p className="text">
                The honeydew melon is one of the two main cultivar types in Cucumis melo Inodorus Group. It is characterized by the smooth 
                rind and lack of musky odor. A honeydew has a round to slightly oval shape, typically 15–22 cm long. It generally ranges in 
                weight from 1.8 to 3.6 kg. The flesh is usually pale green in color, while the smooth peel ranges from greenish to yellow. 
                Like most fruit, honeydew has seeds. The inner flesh is eaten, often for dessert, and honeydew is commonly found in supermarkets 
                across the world alongside cantaloupe melons and watermelons. In California, honeydew is in season from August until October.
                This fruit grows best in semiarid climates and is harvested based on maturity, not size. Maturity can be hard to judge, but it 
                is based upon the ground color ranging from greenish white (immature) to creamy yellow (mature). Quality is also determined by 
                the honeydew having a nearly spherical shape with a surface free of scars or defects. A honeydew should also feel heavy for its 
                size and have a waxy rather than a fuzzy surface. This reflects the integrity and quality of its flesh as the weight can be attributed 
                to the high water content of the ripened fruit. A lack of fuzz distinguishes a ripened honeydew from an unripened one as it is a sign of 
                growth still having been underway when harvested.
                </p>
                <div className="wrapper">
                    <div className="title">£6</div>
                    <button className="shopbtn" onClick={() => dispatch(addCart(honey))}><div className="title">Add to cart</div></button>
                </div>
                <button className="shopbtn" onClick={() => navigate(-1)} ><div className="title"> Go Back</div></button>
            </div>
        </div>
    )
}

export default HoneyDew