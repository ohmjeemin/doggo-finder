
/**
 * redux의 useSelector() 매개변수로 사용할 함수들
 * store의 state를 각각 반환한다.
 */

export const getMainState = state => state.mainState;
export const getType = state => state._type;
export const isActive = state => state.isActive;
