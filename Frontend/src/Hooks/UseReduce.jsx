import React, { useReducer } from 'react'
const initialvalue = {count:0};
const reducer =(state,action)=>{
  switch(action.type){
    case "INCREMENT":
      return {count:state.count + 1};
    case "DECREMENT":
      return {count:state.count - 1};
    case "RESET":
      return initialvalue;
    default:
      return {count:state.count};
  }
}
const UseReduce = () => {
  const [state,dispatch] = useReducer(reducer,initialvalue);

  return (
    <div>
      <h1>Count : {state.count}</h1>
      <button onClick={()=>dispatch({type:"INCREMENT"})}>Increment</button>
      <button onClick={()=>dispatch({type:"RESET"})}>↻</button>
      <button onClick={()=>dispatch({type:"DECREMENT"})}>Decrement</button>

    </div>
  )
}

export default UseReduce