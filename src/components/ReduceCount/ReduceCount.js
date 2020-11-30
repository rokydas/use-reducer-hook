import React, { useReducer, useState } from 'react';

const initialState = {count: 0};

const reducer = (state, action) => {
    switch(action.type) {
        case 'INCREMENT': 
            return {count: state.count + 1}
            break;
        case 'DECREMENT':
            return {count: state.count - 1}
            break;
        default:
            return state;
    }
}

const ReduceCount = () => {

    // const [count, setCount] = useState(0);
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="text-center m-5">
            <h1>This is Reducer Count: {state.count}</h1>
            <button onClick={() => dispatch({type: 'INCREMENT'})} className="btn btn-primary m-5">Increment</button>
            <button onClick={() => dispatch({type: 'DECREMENT'})}className="btn btn-danger m-5">Decrement</button>
        </div>
    );
};

export default ReduceCount;