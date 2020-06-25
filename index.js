console.log("Hello world")

/* variables and data types undefiend, null,string,symbol,object,number */
/*varibale names are case sensitive*/

var a ; //declaring a variable
console.log(a) // will give null as nothing is assigned
a = 10; // assigining a value to a
console.log(a)
//console.log(b) // b is not defined yet hence will give error : b is not defined
var b;
b = a;  //assigning a to b
console.log(b)


var Myfname = "harshad" ; //assigning and declaring a variable //set as string can be changed later to any datatype availbale to all
let Mylname = "chavan"; //set as string can be changed but only available in its scope
const pi = 3.14; //set as number can be used anywhere cannot be changed 
//pi = 33 // will give error if chanegd  Uncaught TypeError: Assignment to constant variable.



//operators
a = 10 + 10;
console.log(a);
a = 20 - 10;
console.log(a);
a = 8 * 10;
console.log(a);
quotient = 66 / 33; //gives quotient
console.log(quotient);
remainder = 11 % 3;  //gives remainder
console.log(remainder);

a++; //increment
a--; //decrement

a += 12; //shortcut
a -= 12; 
a *= 5; 
a /= 2;

var name = Myfname + " " + Mylname;
name += "is my name" //str concat
console.log(name)

console.log("length of name:" + name.length); //find length of string using .length func
console.log(name[0]); //bracket notation indexing starts with zero use any number to get the correspondign letter
console.log(name[name.length - 1]) //gives the last letter


//strings are immutable
var teststr = "this is my string";
teststr[0] = "ssss"; // cannot be done
console.log(teststr)

//arrays
var myarray = ["harsahd",21];
console.log(myarray);
console.log(myarray[1]);
console.log(myarray[2]); //fetching index 2 but length is 2 hence last index is 1 will return undefined
myarray[1] = 25;
console.log(myarray);

var mynestedarray = [["harshad",21],["chavan",22]]; //nested array
console.log(mynestedarray[0][0]);
console.log(mynestedarray[2]); //fetching index 2 but length is 2 hence last index is 1 will return undefined

mynestedarray.push(["bhagyesh",28]) //adding element to the end of an array
console.log(mynestedarray);

var removed = mynestedarray.pop() //removing element from the end of an array
console.log(removed);

var removed = mynestedarray.shift() //removing element from the front of an array
console.log(removed);

mynestedarray.unshift(["first element",22]) //adding element to the beginning of an array
console.log(mynestedarray);


//functions
function reusable()
{                               
console.log("Hey from function"); // fucntion body 
}
reusable(); //fucntion invoking

function reusablewithargs(a,b) //with parameters
{                               
console.log(a + b); // fucntion body 
}
reusablewithargs(10,11); //fucntion invoking


//global scope and fucntions
var myGlobal = 5;
function myfunc1(){
    var mylocal = 10; //var is necessary to specify it as local scope/ fucntioan scope
    //mylocal = 10; //var if not written makes it global by default can be accessed anywhere in the program
}
function myfunc2(){
    var output = "";
    if(typeof myGlobal != "undefined"){  output +=  "myglobal:" + myGlobal }
    if(typeof mylocal != "undefined"){  output +=  "mylocal:" + mylocal }
    console.log(output)
}
myfunc1();
myfunc2();