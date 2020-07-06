import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <div style={this.props.numberOfGuessing >= 7 ? {backgroundColor: 'red'}:{}} className ="jumbotron text-center">
                <h1>
                    Getting random number 
                    {/* - {this.props.randomNumber}  */}
                </h1>
                <p>Hãy đoán ra số tôi đã Random từ 1-100</p>
            </div>
        );
    }
}

export default Header;