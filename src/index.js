import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from 'my-redux/store';
import { Provider } from 'react-redux';

require('dotenv').config();

/*
 * index.js : src 폴더에 포함되어 있다. 최상위 컴포넌트인 <App />을 DOM에 렌더링하는 index.js에서 작업을 진행.
 * App.js : src 폴더에 포함되어 있고, 컴포넌트를 정의하는 프로그램이다.
 * index.html : public 폴더에 있고 메인 프로그램인 index.js에 대응되는 것으로 HTML 템플릿 파일이다.y
 * */
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
