import React  from 'react';
import  ReactDOM  from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/app';
// import store from './tools/store';
import {store} from './tools/store';



// const store = createStore(reducer);

console.log(store.getState());


 ReactDOM.render( <Provider store={store}>
   <App />
 </Provider>,
    document.getElementById('root'));


