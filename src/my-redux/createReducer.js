import produce from 'immer';

/**
 * 초기 상탯값과 액션별 핸들러 맵을 매개변수로 받아, reducer 함수를 리턴한다.
 *
 * @param   {object}  initialState  { 상태값 식별자: 초깃값 }
 * @param   {object}  handlerMap    { action: action들의 handler }
 *
 * @return  {function}                reducer function
 */
export default function createReducer(initialState, handlerMap) {
  return function (state = initialState, action) {
    // immer.produce() 사용 -> 새로운 객체 반환
    return produce(state, draft => {
      const handler = handlerMap[action.type];
      if (handler) {
        handler(draft, action);
      }
    });
  };
}
