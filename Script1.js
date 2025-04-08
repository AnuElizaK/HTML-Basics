//output possiblilities in JS
document.writeln("<h2>Hello World!</h2>");
console.log("Hello World!");
console.warn("Warning!"); //shows a warning in the console during inspection
console.error("Error!"); //shows an error in the console during inspection


//constants
const pi=3.14;
console.log(pi); //shows the value of pi in the console during inspection
/*pi=9;
console.log(pi); // pi was declared a constant, so this will throw an error*/


//variable declaration
let x=5; //let is used to declare a variable that can be changed later, but is cannot be re-declared in the same scope
console.log(x);
x=10; //this is allowed, as we are not re-declaring the variable, just changing its value, i.e. it has block scope
console.log(x);

var y=10;
console.log(y);
var y=20; //this is allowed, as var is used to declare a variable that can be re-declared in the same scope, i.e. it has function scope
console.log(y);

let isValid=false; //boolean value
let fullName="John Doe"; //string value


//increment and decrement operators
let n1=4;
n1+=3;
console.log(n1); //this will show 7 in the console during inspection
console.log(n1++); //postfix: this will show 7 in the console during inspection, after which n1 will be incremented to 8
console.log(++n1); //prefix: this will show 9 in the console duletring inspection, as n1 is incremented before it is printed
console.log(n1--); //this will show 9 in the console during inspection, after which n1 will be decremented to 8
console.log(--n1); //this will show 7 in the console during inspection, as n1 is decremented before it is printed

//note:
let n2=n1++;
console.log(n2); //this will show 7 in the console during inspection, as n1 is incremented after it is assigned to n2
++n2;
console.log(n2); //this will show 8 in the console during inspection, as n2 is incremented before it is printed


//logical operators
let flag1=true;
let flag2=false;
console.log((flag1!=flag2) || (2==3));
//this will show true in the console during inspection, as both flags are not true
console.log((flag1!=flag2) && (2==3));
//this will show false in the console during inspection, as both flags are not true


//conditional statements
let i=5;
if (i>3) {
    console.log("i is greater than 3");
}
else if (i==3) {
    console.log("i is equal to 3");
}
else {
    console.log("i is less than or equal to 3");
}

let s=4;
for (let i=0; i<=5; i++) {
    s+=i;
}
console.log(s); //this will show 10 in the console during inspection, as the sum of 0 to 4 is 10


//objects: collection of key-value pairs, where key is a string and value can be any data type
let student={
    name:"ABC",
    age:20,
    course: "BCA"
}
console.log(student.name);


//functions with no parameters
function greet(){
    alert("Hello World!");
}
greet(); //this will show an alert box with the message "Hello World!"

//functions with parameters
function add(a, b){
    return a+b
}
let r=add(5, 10);
console.log(r); //this will show 15 in the console during inspection


//arrays
const season = ["Spring", "Summer", "Fall", "Winter"];
console.log(season[0]); //this will show "Spring" in the console during inspection

let numbers = [5, 10, 15, 20, 25];
let doubles=numbers.map(item=>item*2); //this will create a new array with the double of each element in the numbers array
console.log(doubles); //this will show [10, 20, 30, 40, 50] in the console during inspection


//Exercise
function calc(p, q, op){
    if (op=="+"){
        return p+q;
    }
    else if (op=="-"){
        return p-q;
    }
    else if (op=="*"){
        return p*q;
    }
    else if (op=="/"){
        return p/q;
    }
    else {
        return "Invalid operator";
    }
}
output=calc(35, 65, "*");
console.log(output); //this will show 2275 in the console during inspection