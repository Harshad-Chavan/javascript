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

