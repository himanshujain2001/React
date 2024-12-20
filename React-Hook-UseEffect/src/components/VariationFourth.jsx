import React from 'react'
import { useState, useEffect } from 'react';

function VariationFourth() {
    const [count, setCount] = useState(0);
    const [total, setTotal] = useState(1);

    function handleClick(){
        setCount(count+1);
    }

    function handleTotalClick(){
        setTotal(total+1);
    }

    useEffect(() => {
        alert("Runs when count/total gets updated");
    }, [count, total]);

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

export default VariationFourth