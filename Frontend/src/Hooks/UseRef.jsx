import { useEffect, useState, useRef } from "react";

const UseRef = () => {
  const [count, setCount] = useState(0);
  const value = useRef(0);        // render counter
  const inputRef = useRef();  // input reference
  useEffect(()=>{
    setTimeout(()=>{
      setCount(count+1)
    },2000)
  },[count])
  useEffect(() => {
    value.current = value.current + 1;
  });

  const handleClick = () => {
    inputRef.current.focus();
    inputRef.current
  };

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>Inc</button>

      <p>{value.current} times component rendered</p>

      <input type="text" ref={inputRef} />

      <button onClick={handleClick}>Submit</button>
           </div>
  );
};

export default UseRef;