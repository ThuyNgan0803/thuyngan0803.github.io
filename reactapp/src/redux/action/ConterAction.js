import { INCREASE, DECREASE, CHANGESTATUSCOUNTER} from '../constants/ActionType'
import {fetchCounter} from '../api/FakeAoi'

const increasing = (data) => ({
    type: INCREASE,
    step: data.step
})
const increase = (data) => (dispatch) => {
    fetchCounter().then((data)=>{
        console.log("Data",data)
        return dispatch(increasing(data))
    })
}

const decreasing = () => ({
    type: DECREASE
})
const decrease = (data) => (dispatch) => {
    return dispatch(decreasing())
}

const changeStatusCountering = () => ({
    type: CHANGESTATUSCOUNTER
})
const changeStatusCounter = (data) => (dispatch) => {
    return dispatch(changeStatusCountering())
}

export {
    increase,
    decrease,
    changeStatusCounter
}