import React, { Component } from 'react';
import { createStore} from 'redux' ; 

const counteReducer = (state, action) =>{
    // console.log('Action', action)
    switch (action.type) {
        case 'INCREASE':
            let value = state.counter.value;
            if (state.counter.status) {
                value++
            }
            return {
                counter: {
                    ...state.counter,
                    value,
                }
            }
        case 'DECREASE':
            return {
                counter: {
                    ...state.counter,
                    value: state.counter.value - 1,
                }
            }
        case 'CHANGESTATUSCOUNTER':
            return {
                counter: {
                    ...state.counter,
                    status: !state.counter.status,    
                }
            }
    }
    return state;
}
const innitialState = {
    counter: {
        value: 0,
        status: false,
    }
}
const store = createStore(counteReducer, innitialState)

// store.subscribe(() => {
//     console.log(store.getState())
// })

class Counter extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     counter: 0,
        // }
        this.state = {
            counter: store.getState().counter,
        }
    }

    componentDidMount() {
        store.subscribe(() => {
            this.setState({counter: store.getState().counter})
        })        
    }

    increase = () => {
        store.dispatch({type: 'INCREASE' })
    }
    
    decrease = () => {
        store.dispatch({type: 'DECREASE' })
    }
    
    changeStatusCounter = () => {
        store.dispatch({type: 'CHANGESTATUSCOUNTER' })
    }
    render() {
        return (
            <div>
                {/* Counter: {this.state.counter.value}
                <br/> */}
                <Container counter={this.state.counter.value} />
                <br/>
                <button onClick= {this.increase}>Increase</button>
                <br/>
                <button onClick= {this.decrease}>Decrease</button>
                <br/>
                <button onClick = {this.changeStatusCounter}>
                Change Status ({this.state.counter.status ? "ON" : "OFF"})
                </button>
            </div>
        );
    }
}
class Container extends Component {
    render() {
        return (
            <div>
                <h3>Container: </h3>
                <ChildCounter counter={this.props.counter} />
            </div>
        );
    }
}
class ChildCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    componentDidMount() {
        store.subscribe(() => {
            this.setState({counter: store.getState().counter.value})
        })      
    }
    
    render() {
        return (
            <div>
                ChildCounter: {this.state.counter}
            </div>
        );
    }
}




export default Counter;