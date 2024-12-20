import React from 'react'
import { useState, useEffect } from 'react';

function VariationSecond() {
    const [count, setCount] = useState(0);

    function handleClick(){
        setCount(count+1);
    }

    useEffect(() => {
      alert("Runs only on first render");
    }, [])
    

  return (
    <div>
        <button onClick={handleClick}>Click</button>
        Count is: {count}
    </div>
  )
}

export default VariationSecond