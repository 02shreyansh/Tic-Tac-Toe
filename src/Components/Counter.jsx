import React, { useState } from 'react'
const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

function Counter() {
  const [count,setCount]=useState(0);
  
  const increment=()=>{
    setCount(count+1);
  }
  const decrement=()=>{
    setCount(count-1);
  }
  const handleChange = (event) => {
    setCount(Number(event.target.value));
  };
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );
  return (
    <div>
      <input type="number" value={(count)}  onClick={increment}  inlistInput={handleChange}/>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <ul>{listItems}</ul>
    </div>
  )
}

export default Counter
