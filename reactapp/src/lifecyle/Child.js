import React, { Component } from 'react';

class Child extends Component {
    constructor (props) {
        super (props)
        console.log("Child contructoring...")
        this.state = {
            counter: props.counter,
        }
    }

    static getDerivedStateFromProps(props, state) {
        console.log("Child: Get Derived State From Props")
        return props;
        // return null;
    }

    shouldComponentUpdate (nextProps, nextState) {
        console.log("Child: Should Component Update!")
        if (this.state.counter == nextState.counter) {
            return false
        }
        return true
    }

    componentDidMount() {
        console.log("Child: componentDidMount")
        this.neverDie = setInterval(() => {
            console.log("I'm never die!")
        }, 1000)
        console.log(this.neverDie)
    }

    componentDidUpdate() {
        console.log("Child: Component Did Update!")
    }

    componentWillUnmount () {
        console.log("Component Will Unmount!")
        clearInterval(3)
    }

    render() {
        console.log("Child renderring... ")
        return (
            <div>
                Child: counter {this.state.counter}
                <br/> props counter {this.props.counter}
            </div>
        );
    }
}

export default Child;