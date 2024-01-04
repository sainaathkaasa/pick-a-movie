import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    actormovies : []
}
const ActorSlice = createSlice({
    name:'movieActor',
    initialState,
    reducers:{
        moviebyactor:(state,{payload})=>{
            state.actormovies =  payload
        }
    }
})

export const getmoviebyactor = (state:any) =>state.movieActor.actormovies
export default ActorSlice.reducer
export const {moviebyactor}  = ActorSlice.actions