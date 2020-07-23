import React, { useState, useEffect } from "react";

export default function App() {
    var [count, setCount] =  useState(0);
    
    useEffect(()=>{
        alert("useEffect called ")
    })
    return(
        <>
        <p>our val is: {count}</p>
      <button onClick={()=> {setCount(++count)}}>Click</button>
        </>
)
}