export default function Calculation(props) {
    let n1 = parseFloat(props.num1);
    let n2 = parseFloat(props.num2);
    function Addition() {
        return (n1 + n2);
    }
    return (
        <>
        <div className="App">
            <div className="First">
            <p>Question 1</p>
            <h1>The Calculation is : </h1>
            <h2> Addition  : {Addition()} </h2>
            <h2> Multiplication   : {n1 * n2} </h2>
            </div>
        </div>
        <hr></hr>
        </>
    )}