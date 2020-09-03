// object trong js
const person = {}; // object rong
console.log(typeof person); // object
const student = {
  masv: 113,
  name: 'Van Teo',
  age: 20,
  address: 'Ha Noi',
  time: '02:00:00',
  playGame: function(game){
    return `Dang choi ${game}`;
  },
  sleep: () => {
    return this.time;
    // this ko phai la person 
    // this == window
  }
}
// truy cap cac thuoc tinh hay phuong thuc ben trong object
let myName = student.name; // truy cap vao thuoc tinh
let myName2 = student['name'];
console.log(myName, myName2);
let game = student.playGame('AOE');
console.log(game);
let myTime = student.sleep();
console.log(myTime);

let car = {
  name: 'BMW',
  color: 'red',
  weight: 500,
  price: 1000
}
for(let i in car) {
  console.log(i); // i : key cua object
  console.log(car[i]); // car[i]: value tuong ung cua key
}
// ket hop mang va object
const products = [
  {
    name: 'iphone 7',
    price: 1000,
    img: 'test.png',
    qty: 1
  },
  {
    name: 'iphone 8',
    price: 2000,
    img: 'test2.png',
    qty: 2
  },
  {
    name: 'iphone x',
    price: 2000,
    img: 'https://cdn.tgdd.vn/2020/08/campaign/8pro-360x432-360x432.png',
    qty: 3
  }
];
let namePd = products[2]['name']; //products[2].name;
console.log(namePd);

let tableHTML = `
  <table border="1" width="100%" cellspacing="0" cellpadding="0">
    <thead>
      <tr>
        <th>Name</th>
        <th>Image</th>
        <th>Price</th>
        <th>QTY</th>
      </tr>
    </thead>
    <tbody>
      ${products.map((item, index) => (
        `<tr>
          <td>${item.name}</td>
          <td>
            <img width="120px" height="120px" src=${item.img} />
          </td>
          <td>${item.price}</td>
          <td>
            ${item.qty}
          </td>
        </tr>`
      ))}
    </tbody>
  </table>
`;
console.log(tableHTML);
tableHTML = tableHTML.replace(',','');
tableHTML = tableHTML.replace(',','');
document.write(tableHTML);
// 
const cats = {}; // rong
// bo sung thuoc tinh vao object
cats.name = 'Tom';
cats.age = 2;
cats.color = 'black';
cats['weight'] = 3;
console.log(cats);
// tinh tong tien tu object product ben tren (don gia * soluong)

let totalMoney = 0;
products.map(( item, index) => {
  totalMoney += parseFloat(item.qty*item.price);
});
console.log(totalMoney);
