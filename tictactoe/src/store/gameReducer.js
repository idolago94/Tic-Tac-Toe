const initialState = {
    board: new Array(
        new Array(3),
        new Array(3),
        new Array(3)
    ),
    playerTurn: true
};

const gameReducer = ( state = initialState, action) => {
    switch (action.type) {
        case 'PLAY' :
        let updateBoard = {...state.board};
        if(state.playerTurn) {
            updateBoard[action.square.x][action.square.y] = 'X';
        }
        else {
            updateBoard[action.square.x][action.square.y] = 'O';
        }

        return {
            board: updateBoard,
            playerTurn: !state.playerTurn
        }

        case 'WIN' :
        return {
            board: new Array(
                new Array(3),
                new Array(3),
                new Array(3)
            ),
            playerTurn: action.win
        }
        default: return state
    }
    
}

export default gameReducer;