document.write('<h1>Chung ta hoc JS</h1>');
//alert('Hello word');
console.log('Hello you');
/*
* khai bao bien
*/
var number = 10; // number
let name = 'Van Teo'; // string
const PI = 3.14; // number

// kiem tra kieu du lieu
console.log(typeof number);
console.log(typeof name);
console.log(typeof PI);

// phan biet var - let - const
var number = 30; // van hop le
//let name = 'Van Ty'; // khong duoc phep dinh nghia lai no
name = 'Van Ty';
console.log(number); // ??? 30
console.log(name); // ??? 

const AGE = {age: 20, name: 'a'}; // object
//AGE.email = 'a@example.com'; // hop le
//console.log(AGE);
// AGE = 'a@example.com'; // sai : thay doi truc tiep gia tri cua hang so
console.log(AGE);

var a = 12;
if(a < 5){ 
  var a = 8;
  console.log(a); // ??? 8
} else {
  var a = 8;
  console.log(a); // ??? 8
}
console.log(a); // ??? 10

if(a == 11) {
  // do something
} else if (a >= 12) {
  // do something
} else if (a == 12) {
  // do something
} else {
  // do something
}
switch (a) {
  case 11:
    // do something
    break;
  case 12:
    // do something
    break;
  case 13:
    // do something
    break;
  default:
    // do something
    break;
}
// kiem tra xem 1 so co phai so NT hay ko?
// 113;
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
let flag = true;
for (let i = 2; i <= Math.sqrt(113); i++) {
  if(113 % i === 0){
    flag = false;
    // ko phai thi dung luon
    break;
  }
}
console.log(flag);

let n = 10;
while ( n < 30) {
  console.log(n);
  n++;
}
//console.log(n);
do {
  console.log(n);
  n++;
} while (n < 20);

let n1 = '10';
let n2 = 20;
let n3 = n1 + n2; // ??? 1020 / 30// -10
console.log(n3);

let check = '1';
if(check === true){
  console.log('A');
} else {
  console.log('B');
}
let x = 10; //
let y = 30; //
//x = (x % y == 0) ? ( y + x) : ( x - y > y -x ? x /y : y/x);
//console.log(x); // -20; 

// if(x % y == 0){
//   x += y; 
// } else {
//   x -= y;
// }
// console.log(x);
let t = (++x) - (++y) + (x--) + (y--) - (--x) - (--y);
//    =  11   -  31   +  11   + 31    - 9    - 29
console.log(t); // 22 ; -18; -20; -16

// khai bao ham
function sumNumber(a, b) {
  return a + b;
}
let result = sumNumber(9,10);
console.log(result);
let kiemTraSoNguyenTo = function(n){
  if(n <= 1) {
    return false;
  }
  if(n === 2) {
    return true;
  } 
  //let flag = true;
  for(let i = 2; i<= Math.sqrt(n); i++) {
    if(n % i === 0) {
      //flag = false;
      //break;
      return false;
    }
  }
  //return flag;
  return true;
}
//console.log(typeof kiemTraSoNguyenTo);
let myNumber = 113;
if(kiemTraSoNguyenTo(113)){
  console.log(myNumber + ' la so nguyen to');
} else {
  console.log(`${myNumber} ko la so nguyen to`);
}
// viet ham kiem tra tu 1 - 300 co bao nhieu snt

function demSNT(i,j) {
  let count = 0;
  for(let k = i; k <= j; k++) {
    if(kiemTraSoNguyenTo(k)){
      count++;
    }
  }
  return count;
}

let test = 'a1212';
test = parseInt(test);
console.log(test);

let testNumber = '123';
if(!isNaN(testNumber)) {
  console.log('ok');
} else {
  console.log('No');
}

let t1 = prompt('moi nhap so t1');
t1 = parseFloat(t1);
let t2 = prompt('moi nhap so t2');
t2 = parseFloat(t2);
let t3 = t1 + t2;
alert(t3);