var listNumber = [];
var add = [];

document.getElementById("btn1").onclick = function() {

   var number = document.getElementById("input1").value*1;

    listNumber.push(number);
}
document.getElementById("btn3").onclick = function() {

    var number = document.getElementById("input4").value*1;
 
     add.push(number);
 }
function show(){
    var  a = "";
    for(var i = 0;i< listNumber.length;i++){
        a += listNumber[i]+" ";
    }
    return a;
}
//xuat so
document.getElementById("btn2").onclick = function() {
    document.getElementById("kQua1").innerHTML = show();
}
//tong cac so duong trong mang
document.querySelector('#btn4').onclick= function(){
    document.querySelector('#kQua1').innerHTML = "tổng các số dương là   " + sum(listNumber);
}
//Dem co bnh so duong trong mang
document.querySelector('#btn5').onclick = function(){
    document.querySelector('#kQua1').innerHTML = "có tất cả "+ count(listNumber)+"  số dương trong mảng";
}
//tim so nho nhat trong mang
document.querySelector('#btn6').onclick= function(){
    document.querySelector('#kQua1').innerHTML = "số nhỏ nhất trong mảng là   " + min(listNumber);
}
//tim so duong nho nhat 
document.querySelector('#btn7').onclick= function(){
    document.querySelector('#kQua1').innerHTML = "số dương nhỏ nhất trong mảng là  " + ReMin(listNumber);
}
//tim  so chan cuoi cung cua mang
document.querySelector('#btn8').onclick= function(){
    document.querySelector('#kQua1').innerHTML = "số chẵn cuối cùng trong mảng là   " + finalRe(listNumber);
}
//doi cho 2 gia tri trong mang theo vi tri
document.querySelector('#btn9').onclick = function(){
    var a = document.querySelector('#input2').value*1;
    var b = document.querySelector('#input3').value*1;

    document.querySelector('#kQua1').innerHTML = changeLocation(listNumber,a,b)
}
//sap xep mang theo thu tu tang dan
document.querySelector('#btn10').onclick = function() {
    document.querySelector('#kQua1').innerHTML = Increase(listNumber)
}
//tim so nguyen to dau tien trong mang
document.querySelector('#btn11').onclick = function() {
    document.querySelector('#kQua1').innerHTML = "số nguyên tố đầu tiên trong mảng là " + FirstNto(listNumber)
}
//dem so nguyen khi cho them 1 mang
document.querySelector('#btn12').onclick = function(){
    document.querySelector('#kQua1').innerHTML = "có "+countRe(listNumber,add)+" số nguyên dương trong cả 2 mảng"
}
//so sanh so duong va so am
document.querySelector('#btn13').onclick = function(){
    document.querySelector('#kQua1').innerHTML = compareResult();
    console.log(123);
}