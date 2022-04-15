import { useEffect, useRef } from 'react';
import { actions } from 'my-redux/state';
import { useDispatch } from 'react-redux';
import { isNil } from 'utils/commonUtil';

/**
 * 클릭 이벤트 핸들러 함수를 인자로 받아, 해당 핸들러를 매핑할 ref element를 반환한다.
 * @author  uhjee
 * @param {[string]} onClick  클릭 이벤트 핸들러
 * @returns   {[object]}      클릭 이벤트 등록 객체
 */
export const useClick = onClick => {
  if (typeof onClick !== 'function') {
    throw new Error('click 이벤트 콜백함수  - 함수가 아님');
  }

  const element = useRef();

  useEffect(() => {
    const _current = element.current;
    if (element && _current) {
      _current.addEventListener('click', onClick);
    }
    return () => {
      if (element && _current) {
        _current.removeEventListener('click', onClick);
      }
    };
  });
  return element;
};

/**
 * 파라미터로 받는 cb 함수가 delay 이후에 호출되도록 처리한다.
 * @author  uhjee
 * @param   {[function]}  callback  지연 콜백
 * @param   {[number]}  delay     지연할 밀리초
 *
 * @return  {[function]}            interval을 종료할 수 있는 함수
 */
export const useInterval = (callback, delay) => {
  // useRef를 사용해 가장 마지막 콜백 기억
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // set up the interval
  useEffect(() => {
    const tick = () => {
      savedCallback.current();
    };

    if (!isNil(delay)) {
      let id = setInterval(tick, delay);

      return () => clearInterval(id);
    }
  });
};

/**
 * 상태를 변경한다.
 * 2022-03-09 @uhjee - 기본 컴포넌트 state에서 store의 state 변경 hook으로 수정
 * @author  uhjee
 * @param   {[string]}  state     (HOME, RESEARCH, RESULT, DESCRIPTION)
 * @param   {[function]}  setState  [setState description]
 */
export const useMainState = mainState => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.setMainState(mainState));
  }, [mainState]);
};
