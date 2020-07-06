import React, { Component } from 'react';

export default class MyComponet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                counter: 0,
            }
        }
    }

    increase = () => {
        this.setState({
            // data: {
            //     counter: this.state.data.counter + 1
            // }
            data: {...this.state.data, counter: this.state.data.counter+1}
        })
    }

    changeNothing = () => {
        this.setState({
            // data: {
            //     counter: this.state.data.counter 
            // }
            data: this.state.data
        })
    }
    
    render() {
        return (
            <div>
                <Counter data={this.state.data}/>
                <CounterFunc data={this.state.data}/>
                <button onClick = {this.increase}>Increase</button>
                <button onClick = {this.changeNothing}>Change Nothing</button>
            </div>
        );
    }
}

class Counter extends React.PureComponent {
    // nếu dùng PureComponent không dùng shouldComponentUpdate
    // shouldComponentUpdate() {
    //     return true
    // }
    render() {
        console.log("Class counter rendering...")
        const {data} = this.props;
        return (
         <div>{ this.props.data.counter}</div>
        );
    }
}

const CounterFunc = React.memo (({data}) => {
    console.log("Function counter rendering...")
    return <div>{ data.counter}</div>
});