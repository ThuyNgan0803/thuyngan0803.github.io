import React from 'react';
import Header from './component/Header';
import MainGame from './component/MainGame'

class RandomGame extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                randomNumber: 0,
                numberOfGuessing: 0,
            }
        }

        componentDidMount() {
            this.setState({
                randomNumber: this.random(),
            })
        }

        random = () => {
            return Math.floor(Math.random() * 100) + 1
        }
 
        numberOfGuessingChange  =( numberOfGuessing) => {
            // alert(numberOfGuessing)
            this.setState({
                numberOfGuessing
            })
        }

        render() {
            return ( 
            < div >
                < Header numberOfGuessing={this.state.numberOfGuessing} randomNumber = { this.state.randomNumber }/> 
                < MainGame numberOfGuessingChange={this.numberOfGuessingChange} randomNumber = { this.state.randomNumber }/> 
                </div>
            );
        }
    }
    // ReactDOM.render(<RandomGame/>, document.getElementById("app"));

// export function App() {
//   return (<h1>Hello</h1>)
// }

export default RandomGame;