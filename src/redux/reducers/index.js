import { useReducer } from "react"

const InitialState = {
    userInfo: {
        me: {}
    }
}


const MainReducer = (state = InitialState, action) => {
    switch (action.type) {
        case 'SAVE_MY_INFO': 
            return {
                ...state,
                userInfo: {
                    ...state.userInfo, 
                    me:  action.payload
                }
            }
        default: return state
    }
}

export default MainReducer;



// 1) state
// 2) REDUCER
// 3) ACTION --> DISPATCH


