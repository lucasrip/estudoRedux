import React from "react";
import Routes from './router';
import {BrowserRouter} from 'react-router-dom';
import Header from "./components/Header";
import store from './store/index';
import {Provider} from 'react-redux';

function App() {
  return (
    <Provider store={store}>
     <BrowserRouter>
       <Header/>
       <Routes/>
     </BrowserRouter>
    </Provider>
  );
}

export default App;
