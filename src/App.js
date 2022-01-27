import './App.scss';
import React, { useState, useEffect } from 'react'; // npm install react-router-dom 로 설치
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { APP_STATE } from 'constant/stringEnum';

import GuardRoute from './router/GuardRoute';
import Home from 'view/Home';
import Research from 'view/Research';
import Result from 'view/result';
import Description from 'view/desciption';
import NotFound from 'view/NotFound';
import Footer from 'components/Footer';
import {useSelector} from "react-redux";
//import store from './store'

//import {useSelector} from "react-redux";
//import {next} from "actions"; //액션 크리에이터 임포트

// console.log(store.getState(next()));
//
// // 상태가 바뀔때마다 기록합니다.
// let unsubscribe = store.subscribe(() =>
//     console.log(store.getState())
// );
//
// // 액션들을 보냅니다.
// store.dispatch();
//
// // 상태 변경을 더 이상 받아보지 않습니다.
// unsubscribe();

function App() {
  //useSelector(state => this.state)
  const [mainState, setMainState] = useState(APP_STATE.HOME);


  const [type, setType] = useState('');
  const [isActive, setIsActive] = useState(false);

  /**
   * state가 HOME 일 경우, type 을 초기화한다.
   * @author  uhjee
   */
  useEffect(() => {
    if (mainState && mainState === APP_STATE.HOME) {
      setIsActive(false);
      setType('');
    }
  }, [mainState]);

  return (
    <div
      className={`main-container${
        mainState === APP_STATE.DESC ? ' olive' : ''
      }`}
    >
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={({ history }) => (
              <Home
                history={history}
                setIsActive={setIsActive}
                setMainState={setMainState}
              />
            )}
          />
          <GuardRoute
            path="/research/:pageNum"
            component={Research}
            isActive={isActive}
            setMainState={setMainState}
            setType={setType}
          />
          <GuardRoute
            exact
            path="/result"
            component={Result}
            isActive={isActive}
            setMainState={setMainState}
            type={type}
          />
          <Route
            path="/desc/:dogType"
            render={({ history }) => (
              <Description
                type={type}
                history={history}
                setMainState={setMainState}
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
