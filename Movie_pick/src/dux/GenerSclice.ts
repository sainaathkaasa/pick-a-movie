import { createSlice } from "@reduxjs/toolkit";

const initialState={
    movieGeners : []
}
const GenerSclice = createSlice({
    name:"GenerMovies",
    initialState,
    reducers:{
        MoviesbyGener:(state,{payload})=>{
            state.movieGeners = payload
        }
    }
})

export const {MoviesbyGener} = GenerSclice.actions
export default GenerSclice.reducer
export const getmoviebyGener=(state:any) => state.GenerMovies. movieGeners 
