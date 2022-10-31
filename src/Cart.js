import React from "react";
import './Css/Cart.css'
import { plusOne, minusOne, removeCart } from "./Redux_Store/actions";
import { useDispatch, useSelector } from "react-redux";


function Cart() {

    const current = useSelector(state => (state))
    const dispatch = useDispatch()
    const total = () => {
        let sum = 0
        for(let i =0; i < current.length; i++ ){
            sum += current[i].quantity * current[i].price
            console.log(current[i])
        }
        
        return sum.toFixed(2)
    }




    if (current !== undefined){
        return(
            
            <div id="container">
                <div className="cart">
                    {current.map((fruit,index) => (
                        <div className="container" key={index}>
                    
                            <img src={require("./images"+fruit.link)}/>
                    
                    
                            <div className="right">
                            <div className="caption">{fruit.name}</div>
                                <div className="left">
                                    <button onClick={() => (dispatch(minusOne(index)))}>-</button>
                                    <div>{fruit.quantity}</div>
                                    <button onClick={() => (dispatch(plusOne(index)))}>+</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div id="total">Total : £{total()}</div>
            </div>

        )
    }else{
        return (<div id="container">
                    <div className="cart"></div>
                    <div id="total">Total : £0.00</div>
                </div>
            )
    }
}









export default Cart