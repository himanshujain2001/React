import React from 'react'
import { useState, useEffect } from 'react';

function VariationThird() {
    const [count, setCount] = useState(0);
    const [total, setTotal] = useState(1);

    function handleClick(){
        setCount(count+1);
    }

    function handleTotalClick(){
        setTotal(total+1);
    }

    useEffect(() => {
        alert("Runs only when count gets updated");
    }, [count]);

  return (
    <div>
        <button onClick={handleClick}>Click</button>
        Count is: {count}
        <br />
        <button onClick={handleTotalClick}>Click Total</button>
        Total Count is: {total}
    </div>
  )
}

export default VariationThird