import { applyMiddleware, createStore } from 'redux';

import reducer from 'my-redux/state';

/**
 * state 가 변경될 때마다, 로그를 찍어주는 middleware
 *
 * @var {[type]}
 */
const printLog = store => next => action => {
  console.log(process.env.NODE_ENV);
  const { mainState, isActive, _type } = store.getState();
  console.log(`prev state = ${mainState}, ${isActive}, ${_type}`);
  const result = next(action);
  const {
    mainState: nextMainState,
    isActive: nextIsActive,
    _type: next_type,
  } = store.getState();
  console.log(`next state = ${nextMainState}, ${nextIsActive}, ${next_type}`);

  return result;
};

// store 생성 (dev mode 일 때만 위의 log middleware 등록)
const store =
  process.env.NODE_ENV === 'development'
    ? createStore(reducer, applyMiddleware(printLog))
    : createStore(reducer);

export default store;
