console.log("Advanced concepts")


//
console.log("buidling Objects")
//defining a class
var Harshad = {
    'name':'Harshad',
    'age' : 23,
    'marks': [10,20,30],
    'full name': "harshad chavan"
};

//accsing the class properties using dot notation
console.log(Harshad)
console.log(Harshad.name)
console.log(Harshad.age)
console.log(Harshad.marks)

//assigning the class properties using dot varibale
Harshad.age = 24
Harshad.marks[2] = 40
console.log(Harshad.age)
console.log(Harshad.marks)

//Cannot use .notation to fetch property names having spaces hence use [] notation
//console.log(Harshad.full name) // gives error
console.log(Harshad["full name"])
var val = 'age'
console.log(Harshad[val])

//adding properties to object...if not present it will be added..id present it will be updated
Harshad['scholarship'] = true
console.log(Harshad)

//delete a property
delete Harshad.scholarship
console.log(Harshad)

//Note: object can be used a key valeu pair to store pairs..instead of swtichcase to lookup values

//To check if the object has a property or not
var propy = 'age' //check with deiff values
if (Harshad.hasOwnProperty(propy)){ console.log("has property with value==" + Harshad[propy])}
else { console.log("has no property")}


//complex objects
//array of objects
var warriors = [

    //first object
    {
        "name": 'bahubali',
        'age': '28',
        'skills' :  ['bow arrow','sword fighting']  
    },
     //second object
     {
        "name": 'bhallaldeva',
        'age': '28',
        'skills' :  ['horse riding','bull fighting']  
    }

];
console.log(warriors)

//objects of objects
var warriors = {

    //first object
    "king" : {
        "name": 'bahubali',
        'age': '28',
        'skills' :  ['bow arrow','sword fighting']  
    },
     //second object
    "army cheif" : {
        "name": 'bhallaldeva',
        'age': '28',
        'skills' :  ['horse riding','bull fighting']  
    }

};

//Notice below the differnce while accseing the inner objects
console.log(warriors.king.name)
console.log(warriors["army cheif"].name)

//copying objects
//var warriorscopy = warriors // copies reference that is warriors and warriorscopy refer to the same object
var warriorscopy = JSON.parse(JSON.stringify(warriors)) //copies content of the object
console.log('warriorscopy')
console.log(warriorscopy)
warriorscopy.king.dead = true
console.log(warriorscopy)
console.log(warriors)

//While loop
var myarr = [];
var cnt = 1;
while (cnt < 5 ){
    myarr.push(cnt);
    cnt++;
    console.log(myarr)
}

// for loop syntax for( var i = 0; i<5; i++) notice the var 

//to traverse the array use for and condtion as length.array ans use arr[i] to get the element


//random fucntion
console.log(Math.random()) //betwwen 0 - 1 can be zero can never be 1
console.log(Math.floor(Math.random()*20)) //will give numbers from 0 to 19 .. as the 1 can naver be generated

//generate random number within range
var min = 5
var max = 10
console.log(Math.floor(Math.random() * (max - min) + 1) + min) 

//ParseInt : takes string return an integer... returns not a number ( NAN )
console.log("type of string '30'-->" + typeof(parseInt("30")))


//ParseInt  with radix : takes string return an integer with the given base... returns not a number ( NAN )
console.log("type of string '101'-->" + parseInt("101",2))


//Difference between var and let variable
//let does not allow declaration of a vairable twice
let myvar = "hello"
//let myvar = "world" // this is not  (declaration) allowed int the same scope
//aove statment gives SyntaxError: redeclaration of let myvar error
myvar = "there" // this is allowed as this is assignment



//scope of the var variable is based on where it is declared global if oustide a funtion
// local if inside a fucntion

//scope of the let vairbale depends on the block of code where it is declared

//const has same feature of let but can never be changed

//Mutate a constant array
const s = [2,3,7] //this makes the array const ie properties of array such as length an so on 
s[1] = 4 // but the inner content can be changed
console.log(s)



// how to prevent object mutation
const obj = [2,3,7] //this makes the array const ie properties of array such as length an so on 
Object.freeze(obj)
try {obj[1] = 4}
catch(ex){console.log(ex)}
 /// once freezed the object value cannot be change


 //use arrow funtions to write annoymous functions

 //before
 var magic = function(){ return new Date};

 //after
 var magic =  () => new Date;
 
 //arrow fucntions with params
 const arrowWithparams = (a,b) => a + b;
 console.log(arrowWithparams("hello","world"))


 //higher order arrow functions
const increment = (number,value = 1) => number + value;
console.log(increment(10,5))
console.log(increment(10))


//rest operator and map fucntion
//pass a fucntion to map it will perform operation on every element of the array an return an array
const sqaurefunc = (...args) => args.map(x => x * x);
var nargs = sqaurefunc(1,2,3,4,5)
console.log(nargs)

//spread operator same as rest operator can be used to desegregate the elements
var nsargs = [...nargs]
console.log(nsargs)


//Using string with template literal
const person = {
    name : "harshad",
    lastname : "chavan",
}

var fullname = `my name is ${person.name} ${person.lastname}`;
console.log(fullname)

//Create a object (type 1)
var createPerson = (name,age,gender) => ({name,age,gender,checkage(){ return age }});
var personone = createPerson("adam",21,"male");
var persontwo = createPerson("eve",22,"female");

console.log(personone)
console.log(persontwo)
console.log(persontwo.checkage())






