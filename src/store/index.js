import { configureStore } from "@reduxjs/toolkit";
import listSlice from "./listSlice";
const store = configureStore({
    reducer:{
        listSlice:listSlice
    }
})
export default store;