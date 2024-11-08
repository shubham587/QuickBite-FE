import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: localStorage.getItem('token') || null,
    isAuthenticated: !!localStorage.getItem("token"),
    userName: null,
    email: null,
    ps: null,
}

const authSlice = createSlice({
    initialState: initialState,
    name: 'auth',
    reducers: {
        login(state, action) {
            const {token, username, email} = action.payload
            console.log(action,token, username, "in action slice")
            state.token = token;
            state.isAuthenticated = true;
            state.userName = username;
            state.email = action.payload.email;
            localStorage.setItem("token", token);
            localStorage.setItem("username", username);
        },
        logout(state){
            state.token = null
            state.isAuthenticated = false
            localStorage.removeItem("token")
            localStorage.removeItem("username")
        },
        setAuth(state, action){
            state.token = action.payload.token
            state.isAuthenticated = action.payload.isAuthenticated
        }
    }
})

export const { login, logout, setAuth } = authSlice.actions
export default authSlice