import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username : null,
    email : null,
    ps: null,
    location: null,
    cart: [],
}

const userSlice = createSlice({
    initialState: initialState,
    name: "user",
    reducers: {
        locationChange(state, action){
            state.cart = []
            state.location = action.payload.location
            console.log("location changed", state.location)
        },
        addItem(state, action) {
            console.log(state, "state from add item")
            console.log(action, "action from add item")
            if(!state.cart.includes(action.payload)){
                state.cart.push(action.payload)
            }

            // if(!state.cart.includes({"prod_id": action.payload})){
            //     state.cart.push({"prod_id": action.payload});
            // }
        },
        removeItem(state, action){
            const cart = state.cart
            let cartVal = cart.filter((ele) => ele != action.payload)
            state.cart = cartVal
            console.log("addItemStore", cart,  action.payload)
        },
        setUser(state, action){
            console.log(action, "in setuser")
            state.username = action.payload.username
            state.email = action.payload.email;
            state.location = action.payload.location
            state.ps = action.payload.ps
            state.cart = action.payload["fav-cart"]
        }
    },
    // extraReducers: {
    //     // add cases for any other actions that might be dispatched
        
    // }
})

export const { addItem, removeItem, setUser, locationChange} = userSlice.actions
export default userSlice