import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState: {
        items:[]
    },
    reducers:{
        addItem: (state, action)=>{
            state.items.push(action.payload)
            // this doesn't returns anything, it just takes the state and modifies it. So, don't use return 
        },
        removeItem: (state, action)=>{
            state.items.pop();
        },
        clearCart: (state)=>{
            state.items=[]
        }
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;