import { Component } from "react";
export default class Factorial extends Component {
    constructor(props) {
        super(props)  
        this.a = props.num1
        this.eventHandler = this.myeventHandler.bind(this)
    }
    doOperation() {
        return (
        <>
        </>
        )
    }
    myeventHandler(e) {
        console.log(e.target);
        console.log(e.target.value);
        console.log("in event handler ")
        
        if (e.target.value === 'Factorial') {
            //this.doOperation();
        }
        if (e.target.value === 'Call') {
             //this.doOperation();
        }
        if (e.target.value === 'Call2') {
            //this.doOperation();
        }
    }
    render() {
        return (
            <>
            <hr></hr>
             <p>Question 3</p>
            <div className="Event">
                <h1>from Class Component</h1>
                Enter a number <input type="text" id="t1" className="input" placeholder="Enter the data"
                    onBlur={(e) => { console.log(e.target.value) }}></input>
                <br></br><br></br>
                <div className="btn">
                <button className="first" value="Factorial" onClick={this.myeventHandler}>Factorial</button>
                <button className="first" value="Call" onClick={this.myeventHandler} >First</button>
                <button className="first" value="Call2" onClick={this.myeventHandler}>Third</button>
                {this.doOperation()}
                </div>
            </div>
            </>
        )}
}