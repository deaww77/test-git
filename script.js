console.log("บวมZA007"); //ปริ้นหน้าconsole

/*document.getElementById("text").innerHTML = "zaaac";*/ //ปริ้นหน้าเว็บ
/*document.write("baba");*/
/*window.alert("hello alert box"); */

/*var x = 10;
var t = 5;
var z = x + t;

console.log(z);*/

/*var firstname = "chanon";
var lastname = "roopkhum";
var fullname = firstname + " " + lastname;
console.log(fullname);*/

function myfuntion(value1, value2) {
    return value1 * value2;
}
console.log(myfuntion(5, 2));

function changebg() {
    document.body.style.backgroundColor = "blue";
}

function ctof(celsius) {
    var ctemp = celsius;
    var ctofahr = ctemp * 9 / 5 + 32;
    var message = ctemp + "\xB0C is " + ctofahr + " \xB0F ";
    console.log(message);
}

function ftoc(fahrenheit) {
    var ftemp = fahrenheit;
    var ftocel = (ftemp - 32) * 5 / 9;
    var message = ftemp + "\xB0F is " + ftocel + "\xB0C";
    console.log(message);
}
ctof(30);
ftoc(86);

var me = {
    firstname: "chanon",
    lastname: "roopkhum",
    age: "17",
    fullname: function() {
        return this.firstname + " " + this.lastname;
    }
};
console.log(me.fullname());
var mycar = {
    brand: "ford",
    model: "1",
    color: "red"
};
console.log(mycar.brand);
console.log(mycar["model"]);
console.log(mycar["color"]);

function displaydate() {
    document.getElementById('demo').innerHTML = Date();
}
var j = "chanon \"deaw\" roopkhum";
var l = "lorem odfnv;sklrmbowier \n jbdkfnsokfmbperopebmer"
console.log(l);

// array literral
var mykk = ["hiv", "fhh", "fuk"];
// array constructor
var myrr2 = new Array("hiv", "fhh", "fuk");
console.log(mykk[0]);

var fruits = ["banana", "orang", "appel", "mango"];

/*fruits[0] = "kovi";
delete fruits[1];*/
fruits.splice(0, 1);
console.log(fruits);

var arr1 = ["value1", "value2", "value3", "value4", "value5"];
var mynewarray = arr1.slice(1, 3);

//deta type
var mynum = 10;
var mystring = "chanon";
var bool = true;
var bool2 = false;
var mynull = null;
var myundefined;
var myobject = {};

var time = 50;

if (time > 20) {
    console.log("goodmorning");
} else if (time < 15) {
    console.log("sleep now");
} else {
    console.log("kk");
}
var myphone = "iphone";
switch (myphone) {
    case "iphone":
        console.log("35000");
        break;
    case "sumsung":
        console.log("5000");
        break;
    default:
        console.log("we don't have phone");
}
//loop
for (x = 0; x <= 2; x++) {
    console.log(x);
}
var cars = ["bmw", "ford", "honda", "audi"];

for (i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

var person = {
    fname: "chanon",
    gr: "roopkhum",
    pion: 17
};
for (var x in person) {
    console.log(person[x]);
}

var cat = ["ford", "max", "bom"];
for (var x of cat) {
    console.log(x);
}
let conten = document.getElementById('mn');
let texthtml = '<b>prjrpogfkmperogkbkdo</b>'
conten.innerHTML = texthtml;

/*var mystring = "javascript";
var y;
for (y of mystring) {
    console.log(y);
}*/
// javascript deta type
// how to change

// backthis ====== (``)กด alt 96

var name = "chanon";

console.log(`hi bro i'm ${name} nice to meet you `);

function oe(nam) {
    console.log(`hi myname is${nam}`);
}
oe("chanon");

class myclass {
    constructor(nn) {
        this.myname = nn;
    }
    full() {
        return "hi my name " + this.myname;
    }
}
var rb = new myclass("chanon");
console.log(rb.full());
console.log("hello world")