import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchItem :[]
}

const Searchslice = createSlice({
    name : "searchitems",
    initialState,
    reducers:{
        SearchedMovies :(state,{payload})=>{
            console.log(payload);
            
            state.searchItem=payload;
            
        }
    }
})

export const getSearchedMovies=(state:any)=>state.searchitems.searchItem;
export const {SearchedMovies} = Searchslice.actions
export default Searchslice.reducer