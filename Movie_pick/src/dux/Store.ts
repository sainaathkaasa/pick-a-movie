import { configureStore } from "@reduxjs/toolkit";
import Rootreducer from "./Rootreducer";

const mystore = configureStore({
    reducer: Rootreducer,
})

export default mystore