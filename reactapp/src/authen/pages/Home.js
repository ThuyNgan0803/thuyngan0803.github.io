import React, { Component } from 'react';
import {fetchStatistic} from '../api/index'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        }
    }

    componentDidMount() {
        fetchStatistic()
        .then((resp) => {
            console.log(resp);
            this.setState({
                data: resp.data,
            })
        }).catch(err =>{
            console.log(err)
        })
    }
    
    render() {
        // console.log("token")
        let {data} = this.state;
        return (
            <div>
                Home Page: <br/>
                NumberCustomer: {data.numberCustomer} <br/>
                NumberMedicine: {data.numberMedicine} <br/>
                NumberMedicineOutStock: {data.numberMedicineOutStock} <br/>
                NumberPres: {data.numberPres} <br/>
                <button onClick={
                    () => {
                        localStorage.removeItem("token")
                    }
                }>Logout</button>
            </div>
        );
    }
}

export default Home;