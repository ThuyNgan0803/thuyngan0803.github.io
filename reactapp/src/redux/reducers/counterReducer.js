import { INCREASE, DECREASE, CHANGESTATUSCOUNTER} from '../constants/ActionType'

const innitialState = {
    counter: {
        value: 0,
        status: false,
    }
}

const counteReducer = (state = innitialState, action ) =>{
    // console.log('Action', action)
    switch (action.type) {
        case INCREASE:
            let value = state.counter.value;
            // if (state.counter.status) {
            //     value++
            // }
            value += action.step;
            return {
                counter: {
                    ...state.counter,
                    value,
                }
            }
        case DECREASE:
            return {
                counter: {
                    ...state.counter,
                    value: state.counter.value - 1,
                }
            }
        case CHANGESTATUSCOUNTER:
            return {
                counter: {
                    ...state.counter,
                    status: !state.counter.status,    
                }
            }
    }
    return state;
};

export {
    counteReducer
}