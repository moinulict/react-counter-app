import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import Counter from './components/Counter';

const initialState = {
    counter: 0
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'INCREMENT':
            return {
                counter: state.counter + 1
            }
        case 'DECREMENT':
            return {
                counter: state.counter - 1
            }
        default:
            return state;
    }
}

const store = createStore(reducer);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="container">
                    <Counter/>
                </div>
            </Provider>
        );
    }
}
export default App;
