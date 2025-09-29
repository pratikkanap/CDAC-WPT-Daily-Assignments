import { useEffect, useState } from "react"


export default function UseEffect(){
        let [count,setcount] = useState(0);
       useEffect(() => {
 
  }, [count]);

  return (
    <div className="App">
        <h1>UseEffect Counter</h1>
      <h1>Count: {count}</h1>
      <button className="btn" onClick={() => setcount(count + 1)}>Click Me !</button>
      <br></br>
    </div>
  );
}
