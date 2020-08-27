// khai bao mang trong js
let arrNumber = new Array(1,2,3,4,5,6,7,8,9);
let arrNumber2 = [1,2,3,4,5,6,7,8,9];
// cac phan tu ben trong mang la 1 gia tri khong phai la mang : mang 1 chieu

// mang nhieu chieu
let arrNumber3 = [[1,2,3], [4,5,6], 'apple', 'samsung'];
// kiem tra so luong phan tu trong mang
let count = arrNumber3.length; // property : length
console.log(count);
// key - chi so / value - gia tri cua mang 
let firstElement = arrNumber[0]; // 0 : chi so (vi tri) cua phan tu nam trong mang, luon luon dc bat dau tu 0
console.log(firstElement); // value cua phan tu
// cach truy cap vao 1 phan tu trong mang
// TenMang[chi_so];
let count2 = arrNumber3[0].length;
console.log(count2);
// duyet qua cac phan tu trong mang
let myNumber = [1,2,3,4,5,6,7,8,9]; // 9 : 8
let lengths = myNumber.length;
for(let i = 0; i < lengths; i++){
  console.log(myNumber[i]);
}
// callback function
myNumber.forEach(function(item, index, array){
  // item : 1,2,3,4,5,6,7,8,9
  // index: 0,1,2,3,4,5,6,7,8
  // array: myNumber
  console.log(`key : ${index} - value : ${item}`);
});

for(let j of myNumber) {
  console.log(j);
}
let myNumber2 = [1,2,3,7,5,6,7,8,9];
myNumber2.push(10);
console.log(myNumber2);
let lastElement = myNumber2.pop();
console.log(lastElement, myNumber2);
myNumber2.unshift(lastElement);
console.log(myNumber2);
let firstEl = myNumber2.shift();
console.log(firstEl, myNumber2);

let position = myNumber2.indexOf(7);
console.log(position);

if(Array.isArray(myNumber2)){
  console.log('OK');
} else {
  console.log('NO');
}
let sortNumber = [99,1,3,4,10,6,11,100];
// viet ham sap xep
function sapXepMang(arr) {
  for(let i = 0; i < arr.length; i++) {
    for(let j = i+1; j <= arr.length; j++ ) {
      if(arr[i] > arr[j]) {
        let tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
      }
    }
  }
  return arr;
}
//console.log(sapXepMang(sortNumber));
sortNumber.sort(function(a, b) {
  return a - b;
});
console.log(sortNumber);

let sortNumber3 = [99,1,3,4,10,6,11,100];
let total = sortNumber.reduce( function(a,b) {
  return a + b;
});
console.log(total);
let newArr = sortNumber.filter(function(item){
  return item < 10;
});
console.log(newArr);

let newArr2 = sortNumber3.map(function(item, index){
  return (item % 2 !== 0) ? item * 2 : item;
});
console.log(newArr2);
let arr1 = [1,2,3];
let arr2 = [4,5,6];
// gop 2 mang lai thanh 1 mang - khong duoc phep lam thay doi 2 mang ban dau
let arr3 = arr1.concat(arr2);
console.log(arr1, arr2, arr3);

// tinh tong cac so le
let example = [[1,2,3],[4,5,6],[7,8,9]];
//viet ham;
function tinhTongSoLe(myArr = []) {
  let total = 0;
   myArr.map(function (val, index) {
     val.filter(function (item) {
      total += item % 2 !== 0 ?  item : 0;
    });
  });
  return total;
}
let example2 = [1,2,3,4,5,6,7,8,9];
let total2 = example2.filter( item => item % 2 == 0).reduce((a,b) => a + b);
console.log(tinhTongSoLe(example), total2);
// Arrow function
// let sumNumber = (a,b) => {
//   return a + b;
// }

// chi 1 lenh ko can ngoac nhon (ko dc return)
// let sumNumber3 = (a,b) => 
//   a + b

let sumNumber2 = a => b => {
  return a + b;
};
console.log(sumNumber2(3)(6));
function a (c){
  function b (d) {
    return c + d;
  }
  return b;
}
console.log(a(4)(5));