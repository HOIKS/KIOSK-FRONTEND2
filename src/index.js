import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import axios  from 'axios';

axios.defaults.baseURL = "http://3.34.245.45:3000";
axios.defaults.withCredentials = true;

// 새로운 서버 설정 (예: raymondcty 서버)
const additionalBaseURL = "http://172.20.10.5:8001";
axios.defaults.additionalBaseURL = additionalBaseURL; // 추가 서버를 위해 설정합니다.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

