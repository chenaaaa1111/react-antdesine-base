let defaultstate={
test:1
}
function Headeruducer (state=defaultstate,action){
    switch(action.type){
        case "TEST":
        return Object.assign({},state,{test:action.payload});
        default :
        return state;
    }
}

export default Headeruducer;