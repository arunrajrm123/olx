import React from 'react'

const UseReduce = () => {
    const [number,setNumber]=useState(0)
    
  return (
    <div>
    <button onClick={()=>{setNumber(number+1)}}>+</button>
       {number}
    <button onClick={()=>{setNumber(number<1?0:number-1)}}>-</button>

    </div>
  )
}

export default UseReduce