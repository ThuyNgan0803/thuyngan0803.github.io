import React from 'react'

class MainGame extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            numberOfGuessing: 0,
            currentOfGuessing: 0,
            message: "",
        }
    }

    onGuessingChange = (event) => {
        this.setState({
            currentOfGuessing: Number(event.target.value)
        })
    }

    guessing = () => {
        let {
            currentOfGuessing,
            message,
            numberOfGuessing,
        } = this.state;
        if (currentOfGuessing > this.props.randomNumber) {
            message = "Your guessing is bigger"
        } else if (currentOfGuessing < this.props.randomNumber) {
            message = "Your guessing is small"
        } else {
            message = "You win"
        }
        numberOfGuessing++;
        // this.setState({message, numberOfGuessing});
        // this.props.numberOfGuessingChange(numberOfGuessing)
        if (numberOfGuessing <= 10) {
            this.setState({ message, numberOfGuessing })
            this.props.numberOfGuessingChange(numberOfGuessing)
        } else {
            alert("Hết lượt!")
        }
    };
    render() {
        let {
            numberOfGuessing,
            currentOfGuessing,
            message,
        } = this.state;
        let { randomNumber } = this.props;
        return ( <
            div className = "main" >
            <
            button onClick = { this.resetGame } > New Game < /button> <
            hr / >
            <
            p className = "text-bold" > Số lần bạn đã đoán là: { numberOfGuessing } < /p> <
            p className = "text-bold" > Số bạn đã đoán là: { currentOfGuessing } < /p> <
            input type = "text"
            onChange = { this.onGuessingChange }
            value = { currentOfGuessing }
            /> <
            button onClick = { this.guessing } > Đoán < /button> <
            p > { message } < /p> <
            /div>
        );
    }
}

export default MainGame;