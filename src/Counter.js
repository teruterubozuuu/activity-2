import React, {useState} from 'react';
import "./Counter.css"

function Counter(){
    const [count,setCount] = useState(0);
    

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