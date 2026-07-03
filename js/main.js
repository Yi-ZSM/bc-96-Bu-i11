document.querySelector("button").onclick = function () {
  alert("Bạn vừa bấm đăng nhập");
};

console.log(1 + 1);
console.log("2");

console.error("Lỗi");
console.info("Thông tin");
console.warn("Cảnh báo");

let students = ["An", "Bình", "Cường", "Dung"];

console.table(students);
// console.log(age)
// biến trong js
// let ten_bien = giatri;
let age = 25;
// age : tên biến
// 25 giá trị
console.log(age); // 25
// nối chuỗi
console.log("age: " + age); // age: 25
// thay doi gia tri cua bien
age = 30; //
console.log("age sau khi thay doi: " + age); // 30

//const =  api_url

const soPi = 3.14; //

// soPi = 10;// const là hằng số , không được gán lại giá trị khác
console.log("hèdsfsd");

console.log(tuoi);
var tuoi = 10;
console.log(tuoi);

var tuoi = "hello";
console.log(tuoi);
// Quy tắc đặt tên biến
// không bắt đầu bằng số,
// bắt đầu bằng chữ , _, $
// không có khoảng trắng,
// không chứa kí tự đặc biệt
// không phải là từ khoá
// từ khoá : vd: let, var, const, console, Math, ....

// quy ước
let a1 = 170000; // so tien phat
// có ý nghĩa, ngắn gọn
// camelCase
// PascalCase
//  studentName =
// biến không đặt trungf tên

//  cho nhập vào tên và log ra tên người đó
// let ten = prompt()
// console.log("Xin chào : " + ten)
// let ngheNghiep = prompt("Bạn làm nghề gì : ")
// console.log("Nghề : " + ngheNghiep)

// // yêu cầu nhập cạnh hình vuông -> tính diênn tích
// let canh = prompt("cạnh: ")
// console.log("diện tích hình vuông: " + canh*canh)
// + , - , * , /
console.log("========= Toán tử số học =========");
let a = 10;
let b = 20;

let tong = a + b;
let hieu = a - b;
let tich = a * b;
let thuong = a / b;
let mod = a % b; // phép chia lấy dư. EX 7 % 3 = 1
console.log("a + b = ", a + b);
console.log("a - b = ", hieu);
console.log("a * b = " + tich);
console.log("a / b = " + thuong);
console.log("a % b = " + mod);

console.log("====== Ép Kiểu ======");

// let so1 = prompt("Nhập số thứ nhất: ")
// let so2  = prompt("Nhập số thứ hai: ")
// console.log(so1 + so2) // nối chuỗi "10" + "20" = "1020"
// console.log(Number(so1) + Number(so2)) // 10 + 20 = 30

// Number(prompt("Nhập số thứ nhất: ")) // nhập liệu xong chuyển về số
//parseInt -> dưa về số nguyên
console.log(parseInt("123")); // 123 - màu xanh
console.log(parseInt("123abc")); // 123 - màu xanh
console.log(parseInt("19.6")); // 19
console.log(parseFloat("19.6")); //19.6
console.log(Number("19.6")); //sẽ đưa về số chính xác

console.log(Number("100")); //100
console.log(Number("100abc")); // NaN: not a number
console.log(parseInt("100abc")); // 100

// chuỗi : string,
// số : Number  40 , 4.8, 15000000
// boolean : true, false
// undefined: không xác định,
// null: hiện tại KHÔNG có giá trị

//  typeof : kiểm tra kiểu dữ liệu
console.log(typeof 123); // number
let bien1 = "hello";
console.log(typeof bien1); // string
console.log(typeof "hello"); // string
console.log(typeof "123"); // string
console.log(typeof true); // boolean
console.log(typeof 19.8); // number
console.log(typeof undefined); //undefined
console.log(typeof null); // object là lỗi của JS , nghiên cứu sau

//  Nối chuỗi
// + :
//  ` ` : template string
let hoTen = "Nguyễn Văn A";
let tuoi1 = 25;
let ngheNghiep = "Lập trình viên";
console.log(
  "Họ tên: " + hoTen + ", Tuổi: " + tuoi1 + ", Nghề nghiệp: " + ngheNghiep,
);

console.log(`Họ tên: ${hoTen} , Tuổi: ${tuoi}, Nghề nghiệp: ${ngheNghiep}`);

// MATH

console.log(Math.PI);

console.log(Math.floor(9.9)); // làm tròn xuống -> 9
console.log(Math.ceil(9.1)); // làm tròn lên -> 10
console.log(Math.round(9.5)); // làm tròn bình thường .5 -> 10
console.log(Math.round(9.4)); // làm tròn bình thường .4 -> 9

console.log(Math.floor(Math.random() * 10)); // random từ 0 -> 9
//Math.random() ra kết quả từ 0 -> ~1
// Math.random() * 10 ra kết quả từ 0 -> 9.9999999
//  0-> 9

console.log("====== Toán Tử Gán =======");
// +=, -=, *=, /=, %=
let x = 8;
x += 2; // x = x + 2 =>  8 + 2 = 10
x -= 3; // x = x - 3 =>  10 - 3 = 7
x *= 4; // x = x * 4 => 7 * 4 = 28
x /= 2; // x = x /2 => 28 /2 = 14
x %= 3; // x = x % 3 => 14 % 3 = 2
