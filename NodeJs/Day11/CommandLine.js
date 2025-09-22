//the program for the command line arguments in js 
function Fact() {
    console.log("The value is : ", process.argv);
    // read the command line arg
    let fact = process.argv[2];
    console.log("The factorial is : ");
    for (i = 1; i < 6; i++) {

    }
    console.log(fact * i);
}
Fact();