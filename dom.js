var tagButton = document.getElementsByTagName("button")


var tagClass = document.getElementsByClassName("btn");

var selector = document.querySelector(".container input#number");

var z= document.querySelectorAll(".container button");

document.querySelector(".container button#btn1").onclick = function() {
    var number = document.getElementById("input1").value*1;

    listNumber.push(number);
}

document.querySelector("#btn2").onclick = function() {
    document.getElementById("kQua1").innerHTML = show();

}


//sum
function sum(listNumber){
    var count = 0;
    for(var i =0;i < listNumber.length;i++){
        if(listNumber[i] %2==0){
            count+=listNumber[i];
        }
    }
    return count;
}

//dem so duong
function count(listNumber){
    var count = 0;
    for(var i =0 ; i< listNumber.length;i++){
        if(listNumber[i] > 0){
            count++;
        }
    }
    return count;
}
//so duong nho nhat trong mang
function min(listNumber){
    var min = listNumber[0];
    for(var i = 0; i<listNumber.length;i++){
        if(min>listNumber[i]){
            min = listNumber[i];
        }
    }
    return min;
}
//tim so duong nho nhat trong mang
function ReMin(listNumber){
    var min = listNumber[0];
    for(var i= 0;i<listNumber.length;i++){
        if(listNumber[i] > 0){
            if(min > listNumber[i]){
                min = listNumber[i];
            }
        }
    }
    return min;
}
//tim so chan cuoi cung trong mang
function finalRe(listNumber){
    var z;
    for(var i = listNumber.length-1;i >= 0;i--){
        if(listNumber[i] %2 == 0){
            z = listNumber[i];
            break;
        }
    }
    if(z === undefined){
        z = -1;
    }
    return z;
    
}
//doi cho cho 2 gia tri trong mang theo vi tri
function changeLocation(listNumber,a,b){
    var z = listNumber[a-1];
    var y = listNumber[b-1];
    for(var i =0;i<listNumber.length;i++){
        if(i == a-1){
            listNumber[i] = y;
        }
        if(i == b-1){
            listNumber[i] = z;
        }
    }
    return listNumber;
}

//sap xep man theo thu tu  tang dan
function Increase(listNumber){
    var j,k,temp;
    for(var j = 0;j<listNumber.length;j++){
        for(k = j+1;k<listNumber.length;k++){
            if(listNumber[j] > listNumber[k]){
                temp =  listNumber[j];
                listNumber[j] = listNumber[k];
                listNumber[k]  = temp;
            }
        }
    }
    return listNumber;
}
//tim so nguyen to dau tien trong mang
function soNto(n){
    var count = 0;
    if(n < 2){
    }
    else {
        for(var i = 2;i <= Math.sqrt(n);i++){
            if(n%i == 0){
                count++;
            }
        }
        if(count == 0){
            return true;
        }
    }
}
function FirstNto(listNumber){
    var f;
    for(var i = 0; i< listNumber.length;i++){
        if(soNto(listNumber[i]) == true){
            f = listNumber[i];
            g = i+1
            break;
        }
    }
    return f; 
}
//dem so nguyen duong trong ca 2 mang
function countRe(listNumber,add){
    var count = 0;
    for(var i = 0;i<listNumber.length;i++){
        if(listNumber[i] !== 0){
            if(listNumber[i]%2 == 0 || listNumber[i] %2 ==1){
                count++
            }       
        }
    }
    for(var i =0;i<add.length;i++){
        if(add[i] !== 0){
            if(add[i]%2 == 0 || add[i] %2 ==1){
                count++
            }       
        }
    }
    return count;
}
function compare(listNumber){
    var countRe = 0;
    var countNe = 0;
    var result;
    for(var i = 0;i<listNumber.length;i++){
        if(listNumber[i] > 0){
            countRe++;
        }else if(listNumber[i] < 0){
            countNe++;
        }
    }
    if(countRe > countNe ){
        result = true
    }else if(countRe < countNe){
        result = false
    }
    else{
        result = 0;
    }
    return result;
}
function compareResult(){
    var i = compare(listNumber);
    var result;
    if(i ===true){
        result = "số dương nhiêu hơn"
    }else if(i === false){
        result = "số âm nhiều hơn"
    }else{

        result = "âm dương bằng nhau nhau"
    }
    return result;
}