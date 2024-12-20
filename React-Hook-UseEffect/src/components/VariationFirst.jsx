import React from 'react'
import { useState, useEffect } from 'react';

function VariationFirst() {
    const [count, setCount] = useState(0);

    function handleClick(){
        setCount(count+1);
    }

    useEffect(() => {
        alert("Runs on each render(refresh/reload)");
    });

  return (
    <div>
        <button onClick={handleClick}>Click</button>
        Count is: {count}
    </div>
  )
}

export default VariationFirst