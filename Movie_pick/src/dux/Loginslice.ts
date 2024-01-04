import { createSlice } from "@reduxjs/toolkit";


const LoginSlice = createSlice(
    {
        name:'user',
        initialState :{
            userInfo:[null]
           
        },
        reducers:{
            userRigester:(state,action)=> {
                if(state.userInfo[0] === null) {
                    state.userInfo.shift()
                }
                state.userInfo.push(action.payload); 
            }
        }
    
    
})
export const {userRigester} = LoginSlice.actions
export const getlogincred = (state:any) => state.user.userInfo
export default LoginSlice.reducer

