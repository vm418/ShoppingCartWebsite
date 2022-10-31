import { createStore } from "redux";

let lastId = 0;

function reducer(state = [], action){
    switch(action.type){

        case  "ADDTOCART":
            return [
                ...state,
                {id:lastId++,
                    ...action.payload}
            ]

        case "REMOVEFROMCART":
            return state.filter(item => item.id !== action.payload)
        
        case "PLUSONE":
            return state.map(item => {
                if (item.id === action.payload){
                    return {...item,quantity: item.quantity + 1}
                }else{
                    return item
                }
            })

        case "MINUSONE":
            if(state[action.payload].quantity > 1){
                return state.map(item => {
                    if (item.id === action.payload){
                        
                            return {...item,quantity: item.quantity - 1}
                        }
                    else{
                        return item
                    }
                }) 
            }else{
                let arr = [...state.slice(0,action.payload), ...state.slice(action.payload + 1)]
                return arr.map((item,index) => {
                    return {...item, id: index}
                })
            }
    }
}


const store  = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())



export default store