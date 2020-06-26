const ValueReducer=(state, action)=>{
    switch (action.type){
        case 'Increment':
        return ++state
        case 'Decrement':
        return --state
        case 'Square':
        return state*state
        case 'Reset':
        return state*0
        case 'Cube':
        return state*state*state
    }
    
}
export default ValueReducer;