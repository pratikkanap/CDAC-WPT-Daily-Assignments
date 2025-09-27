import { useState } from "react"
export default function FromViewToComp() {
    let str = " "
    const [data, change] = useState("");
    function textfield(event) {
        str = event.target.value
        console.log("you have entered the data : ", str)
    }
    function btn() {
        change(str);
        console.log(str.toUpperCase())
        console.log(str.toLowerCase())
    }
    return (
    <div className="Para">
        <hr></hr>
        <h1>Question 2</h1>
        <input className="t1" type="text" onBlur={textfield} />

        <button className="t2" onClick={btn}>Show the Data</button>
        <h1> Your Entered string : {data} </h1>

        <h3>The Upper case value is : {data.toUpperCase()}</h3>
        <h3>The Lower case value is : {data.toLowerCase()}</h3>

        <h3></h3>
    </div>
    )
}