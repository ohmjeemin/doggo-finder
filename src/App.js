import './App.scss';
import React, { useState, useEffect } from 'react'; // npm install react-router-dom 로 설치
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { actions } from 'my-redux/state';
import {
  getMainState,
  getType,
  isActive as _isActive,
} from './my-redux/selector';

import { APP_STATE } from 'constant/stringEnum';

import GuardRoute from './router/GuardRoute';
import Home from 'view/Home';
import Research from 'view/Research';
import Result from 'view/result';
import Description from 'view/desciption';
import NotFound from 'view/NotFound';
import Footer from 'components/Footer';

function App() {
  // const [mainState, setMainState] = useState(APP_STATE.HOME);
  // const [type, setType] = useState('');
  // const [isActive, setIsActive] = useState(false);

  // redux 사용
  const mainState = useSelector(getMainState);
  const type = useSelector(getType);
  const isActive = useSelector(_isActive);

  const dispatch = useDispatch();

  /**
   * state가 HOME 일 경우, type 을 초기화한다.
   * @author  uhjee
   */
  useEffect(() => {
    if (mainState && mainState === APP_STATE.HOME) {
      // setIsActive(false);
      // setType('');
      dispatch(actions.setActive(false));
      dispatch(actions.setType(''));
    }
  }, [mainState]);

  return (
    <div
      className={`main-container${
        mainState === APP_STATE.DESC ? ' dark-brown' : ''
      }`}
    >
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={({ history }) => <Home history={history} />}
          />
          <GuardRoute
            path="/research/:pageNum"
            component={Research}
            isActive={isActive}
          />
          <GuardRoute
            exact
            path="/result"
            component={Result}
            isActive={isActive}
          />
          <Route
            path="/desc/:dogType"
            render={({ history }) => (
              <Description
                type={type}
                history={history}
                // setMainState={setMainState}
              />
            )}
          />
          <Route path="*" component={NotFound} />
        </Switch>
        {mainState && mainState !== APP_STATE.DESC && <Footer />}
      </BrowserRouter>
    </div>
  );
}
export default App;
