let sum = 0;
var ob = {
    a: 1, b: 2, c: 3, d: 4, e: 5
}
debugger;
let value = [];
for(let key in ob){
    value.push([key]);
    sum = sum + ob[key];
}
ob.newProperty = sum;
console.log(value);
console.log(ob.newProperty);
console.log(ob);