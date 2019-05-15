
//这是action
import { TEST } from "./Action.js";
import {combineReducers} from "redux";
import Headeruducer from "./components/headerlines/Headeruducer";
//这是reducer
let defauleState={
  test:0
}


const Reducer = (state = defauleState, action) => {
  debugger
  console.log(TEST)
    switch (action.type){
        case TEST:  
         let newstate= Object.assign({},state,{test:action.payload});
        console.log(newstate);
        return newstate;
        default:
        return state;
    }
    console.log('state',state)
}
let rootRuducer=combineReducers({
  Headeruducer,Reducer
});
export default  rootRuducer;