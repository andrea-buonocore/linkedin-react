import { combineReducers, configureStore } from "@reduxjs/toolkit";
import SaveMyInfoReducer from "../reducers/SaveMyInfoReducer";


const store = configureStore({
    reducer: combineReducers({
        userInfo: SaveMyInfoReducer
    })
})

export default store;