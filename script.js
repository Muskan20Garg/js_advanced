//creation of instances using function construtctors..
/*
var Person = function(name,job,birthYear){
    this.name = name;
    this.job = job;
    this.birthYear = birthYear;
}

var mike = new Person('Mike','doctor',1787);
var nike = new Person('Nike','scientist',1998);

console.log(mike);
console.log(nike);
console.log(Person);
*/

//inheriting the properties by prototype.
/*
var Student = function(name,year)
{
    this.name = name;
    this.year = year;
    
}
Student.prototype.hobbies = ['writing','travelling','reading'];
Student.prototype.marks = [2,3,4,5];


Student.prototype.calcAge = function()
{
    this.age = 2020-this.year;
    return this.age;
}

console.log(Student);

var john = new Student('John', 1998);
console.log(john);

console.log(john.hobbies);
console.log(john.marks);
console.log(john.calcAge());

console.log(john);
*/
//creating objects using Object.create() method.
/*
var Person = function()
{
    this.name = name;
    this.age = age;
}

var john = Object.create(Person);
john.name = "John";
john.age = 56;
console.log(john);
console.log(Person);
*/
/*
var Person = function(name,age){
    this.name = name;
    this.age = age;
}
var john = new Person();
console.log(Person);
console.log(john);
*/



//primitives vs objects.
/*
 var a = 23;
var obj = {
    name:'muskan',
    age:21
}
function manipulate(b,obj){
    b =67;
    obj.name = 'mike';
}
manipulate(a,obj);
console.log(a);  //hence, the values doesn't get change.
console.log(obj);
*/

//passing functions as arguments in functions.
/*
array = [1998,1999,1990,1979];
function abc(arr,fn)
{
   var aage=[];
    for(var i = 0;i<arr.length;i++){
        aage.push(fn(arr[i]))
    }
    return aage;
}
function calcAge(year)
{
    return 2020-year;
}
function calcLimit(age){
    return(age>=18);
}
var a = abc(array,calcAge); 
console.log(a);

var b = abc(a,calcLimit);
console.log(b);
*/
//iife9

//this is the code we use to hide our code from external variables to make it private.
/*
(function game(){
    var a =Math.floor(Math.random()*10);
    console.log(a>5);
})();

*/


//closures - the function which is lexically written inside the another function can acess the variables of parent function(scoping chain).
/*
function abc()
{
    var a ="hello";
    return function()
    {
       b = "hi";
        console.log(a+" "+b);
    }
}
var def=abc();
def();
*/

//bind,call and apply methods
//these methods are used to borrow methods from another objects.
/*
var john = {
    name:'John',
    year:1998,
    calcAge:function()
    {
    return 2020-this.year;
}
}

var mike = {
    name:'Mike',
    year:1990
    
}


console.log(john);
console.log(mike);
*/
/*
console.log(john.calcAge());
mike.calcAge = john.calcAge;
console.log(mike.calcAge());
*/
//or we can use these methods...
/*
var a = john.calcAge.call(mike); //call(obj_name,argument1,argument2...).
console.log(a);
*/
/*
var a = john.calcAge.bind(mike); //creates a copy of function.
console.log(a);
*/



