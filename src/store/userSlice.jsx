import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username : null,
    email : null,
    ps: null,
    location: null,
    "fav-cart": [],
}

const userSlice = createSlice({
    initialState: initialState,
    name: "user",
    reducers: {
        addItem(state, action) {
            console.log(state, "state from add item")
            console.log(action, "action from add item")
            if(!state["fav-cart"].includes({"prod_id": action.payload})){
                state["fav-cart"].push({"prod_id": action.payload});
            }
        },
        removeItem(state, action){
            const cart = state["fav-cart"]
            cart.filter((ele) => ele["prod_id"] != action.payload)
            state["fav-cart"] = cart
            console.log("addItemStore", cart,  action.payload)
        },
        setUser(state, action){
            console.log(action, "in setuser")
            state.username = action.payload.username
            state.email = action.payload.email;
            state.location = action.payload.location
            state.ps = action.payload.ps
            state["fav-cart"] = action.payload["fav-cart"]
        }
    },
    // extraReducers: {
    //     // add cases for any other actions that might be dispatched
        
    // }
})

export const { addItem, removeItem, setUser} = userSlice.actions
export default userSlice