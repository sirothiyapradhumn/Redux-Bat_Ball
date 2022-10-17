const intialState = {
    bats: 50
}

const BatReducer = (state=intialState, action) =>{
    switch(action.type){
        case "BUY_BAT":
            return {...state, bats: state.bats-1}
        default:
            return state;    
    }
    //return state;
}

export default BatReducer