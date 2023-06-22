import { useReducer } from 'react';

function reducer(state, action) {
  if(action === 'increment') {
    return state + 1
  }

  if(action === 'decrement') {
    return state - 1
  }

  return state // no debería pasar po aquí 
}

export default function Demo () {
  const [count, dispatch ] = useReducer(reducer, 0)

  return (
    <>
        <h1>{count}</h1>
        <button onClick={() => dispatch('increment')}>+</button>
        <button onClick={() => dispatch('decrement')}>-</button>
        {/* <button onClick={() => dispatch({ type: 'increment' })}>+</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>-</button> */}
    </>
  );
}
