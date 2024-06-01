


const InitialState={
    count:0
}

const counterReducer=(state=InitialState,actioin)=>{
    switch(actioin.type){
      case "ADD":
        return {...state,count:state.count+1};
        case "REDUCE" :
            return {...state,count:state.count-1};
            case "RESET":
                return {...state,count:0}
        default:
            return state;

    }
}
export default counterReducer;