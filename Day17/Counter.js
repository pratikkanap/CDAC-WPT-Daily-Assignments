import { useState } from "react";

export default function Counter(){
     let [count,setCount] = useState(0);
     function display(){
         count= count + 1;
         setCount(count)
     }
     return(    
        <>
        
        <hr></hr>
        <div className="App">
        <h1>Normal Counter</h1>
            <h1>count : {count}</h1>
            <button className="btn" onClick={display}>Click Me !</button>
             <br></br><br></br>
        </div>
        </>
     )
} 


 