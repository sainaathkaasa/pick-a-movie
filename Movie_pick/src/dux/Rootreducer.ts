import { combineReducers } from "redux";
import searchSliceReducer from "./SearchSlice";
import GenerScliceReducer from "./GenerSclice";
import ActorSliceReducer from "./ActorSlice";
import LoginsliceReducer from "./Loginslice";

const Rootreducer = combineReducers({

    searchitems:searchSliceReducer,
    GenerMovies:GenerScliceReducer,
    movieActor: ActorSliceReducer,
    user:LoginsliceReducer

})
export default Rootreducer