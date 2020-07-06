import React, { Children } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RandomGame from './App';
import * as serviceWorker from './serviceWorker';
import Calculate from './calculate/Calculate';
import JsxExtend from './jsxextend/JsxExtend';
import Parent from './lifecyle/Parent';
import Auth from './authen/App';
import Child from './children/Children';
import MyComponet from './class-function-component/MyComponet'
import Counter from './redux/Counter';
import Counter1 from './redux/views/Counter';
import store from './redux/store/store';
import { Provider } from 'react-redux';
// ReactDOM.render(
//     <RandomGame />,document.getElementById('root')
// );
// ReactDOM.render(
//     <Calculate />,document.getElementById('root')
// );
// ReactDOM.render(
//     <JsxExtend />,document.getElementById('root')
// );
// ReactDOM.render(
//     <Parent />,document.getElementById('root')
// );
// ReactDOM.render(
//     <Auth />,document.getElementById('root')
// );
// ReactDOM.render(
//     <Child/>,document.getElementById('root')
// );
// ReactDOM.render(
//     <MyComponet/>,document.getElementById('root')
// );
// ReactDOM.render(
//     <Counter/>,document.getElementById('root')
// );

const App = function() {
    return (
        <Provider store = { store}>
            <Counter1></Counter1>
        </Provider>
    )
}

ReactDOM.render(
    <App/>,document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
