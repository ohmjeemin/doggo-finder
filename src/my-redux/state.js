import createReducer from './createReducer';
import { APP_STATE } from 'constant/stringEnum';

// action identifier 상수
export const types = {
  SET_MAIN_STATE: 'SET_MAIN_STATE',
  SET_TYPE: 'SET_TYPE',
  SET_ACTIVE: 'SET_ACTIVE',
};

// actions
export const actions = {
  setMainState: mainState => ({ type: types.SET_MAIN_STATE, mainState }),
  setType: _type => ({ type: types.SET_TYPE, _type }), // naming 실수...
  setActive: isActive => ({ type: types.SET_ACTIVE, isActive }),
};

// state 초깃값
const INITIAL_STATE = {
  mainState: APP_STATE.HOME,
  _type: '',
  isActive: false,
};

// action 별 handler Map
const actionHandlerMap = {
  [types.SET_MAIN_STATE]: (state, action) =>
    (state.mainState = action.mainState),
  [types.SET_TYPE]: (state, action) => (state._type = action._type),
  [types.SET_ACTIVE]: (state, action) => (state.isActive = action.isActive),
};

// reducer
export default createReducer(INITIAL_STATE, actionHandlerMap);
