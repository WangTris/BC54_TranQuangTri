import {combineReducers, createStore} from "redux";
import ThongTinDatVeReducer from "./reducer/ThongTinDatVeReducer";



const rootReducer = combineReducers({
    ThongTinDatVeReducer
});

export const store = createStore(rootReducer);