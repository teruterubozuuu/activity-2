import React, {useState,useEffect} from 'react';

function Counter(){
    const [count,setCount] = useState(0);
    
    useEffect(()=> {
        document.title = `You clicked ${count} times`

}, [count]);

    return(
        <div className="main">
        <div className="counter-wrapper">
        <p className="label">You clicked <span>{count}</span> times</p>
        <button onClick={()=>setCount(0)}>Reset</button>
        <button onClick={()=> setCount(prev=>prev+1)}>Increment</button>
        <button onClick={()=> setCount(prev=>prev-1)}>Decrement</button>
        </div>
        </div>
    );
}

export default Counter;