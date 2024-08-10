import React, {useState, useEffect, useRef} from 'react'

function Content() {
    const refElement = useRef("")
    const [count,setCount] = useState(0)
    const [name,setName] = useState("Dipanita")
    const [color,setColor] = useState("Black")
    const buttonClick = (n,naam,c) =>{
       setCount(n+1)
       if (naam === "Ratul"){
        setName("Dipanita")
       }else{
        setName("Ratul")
       }
       if (c == "Red"){
        setColor("Blue")
       }
       else if (c == "Blue" || c == "Black"){
        setColor("Red")
       }
       refElement.current.style.color = c
    }
    useEffect (()=>{
        console.log("Hellow there.....")
    },[count]) // useEffect will always run whenever you change any state on the function. To prevent this I added an array. Inside the array whichever state I will mention the useState function will run for that only.

  return (
    <>
    <h1 ref={refElement}>The button clicked {count} times. | Name: {name}</h1>
    <button onClick={() => buttonClick(count,name,color)}>Click</button>
    </>
  )
}

export default Content
