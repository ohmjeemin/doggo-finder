/*
* reducers
* */

import { combineReducers } from "redux" //많은 리듀서들을 이렇게 하나하나 합치는 작업을 해주는 함수
import { HOME, RESEARCH, RESULT, DESC } from "actions"

//=============================================================================================================
//HOME-CONTENTS-RESULT 이동하는 reducer
function changeMainState(state="init main state", action) {
    switch(action.type) {
        case HOME:
             return "10"
        case RESEARCH:
            return "20"
        case RESULT:
            return "20"
        case DESC:
            return "20"
        default: return null
    }
}

//위의 리듀서들이 state의 각 값들을 핸들링 할 수 있게 매칭 - combineReducer 사용
export const reducer = combineReducers({
    changeMainState
})
