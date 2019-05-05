const initialState = {
    true: 0,
    false: 0
};

const scoresReducer = ( state = initialState, action) => {
    switch (action.type) {
        case 'WIN': 
            if(action.win) {
                return {
                    true: state.true*1 +1,
                    false: state.false
                }
            }
            else return {
                    true: state.true,
                    false: state.false*1 +1
                }            
        default: return state
    }
}

export default scoresReducer;