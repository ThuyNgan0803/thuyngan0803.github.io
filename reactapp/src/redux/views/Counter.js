import React, { Component } from 'react';
import store from '../store/store'
// import { INCREASE, DECREASE, CHANGESTATUSCOUNTER} from '../constants/ActionType'
import { connect } from 'react-redux'
import {increase, decrease, changeStatusCounter} from '../action/ConterAction'

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: store.getState().counter,
        }
    }

    increase = () => {
       this.props.increase()
    }
    
    decrease = () => {
        this.props.decrease()
    }
    
    changeStatusCounter = () => {
        this.props.changeStatusCounter()
    }
    render() {
        console.log("Counter: ", this.props)
        return (
            <div>
                Counter: {this.props.counter && this.props.counter.value}
                <br/>
                {/* <Container counter={this.state.counter.value} /> */}
                <br/>
                <button onClick= {this.increase}>Increase</button>
                <br/>
                <button onClick= {this.decrease}>Decrease</button>
                <br/>
                <button onClick = {this.changeStatusCounter}>
                Change Status ({this.props.counter && this.props.counter.status ? "ON" : "OFF"})
                </button>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        counter: state.counter
    }
}

function mapDispatchToProps () {
    return {
        increase,
        decrease,
        changeStatusCounter
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(Counter)