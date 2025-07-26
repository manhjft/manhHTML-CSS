var x = 7;
var a =5;
var b = 8;

console.log(x+x);

var arr = [9];
arr.push(9);

for(var i=0; i<arr.length; i++){
    console.log(arr[i]);
}

arr.sort();
//tìm kiếm 

arr.includes(9);


var pi = 5674382901;


function tinhtong(a,b){
    var c = a+b;
    return c;
}

const phep_tru =function(a,b){
    var c = a-b;
    console.log(c); 
}


const phep_nhan = (a,b) =>{
    var c = a * b;
    console.log(c);
}


//hàm tác động dao diện

//return void

confirm("xác nhận bạn 18+");

if(confirm("xác nhận đạo hữu 18+")){
    alert("chào mừng đạo hữu");
    var s = prompt("vui lòng nhập danh tính");
    var t = prompt("nhập tu vi");
    alert("xin chào " + s);
} else{
    alert("về nhà đi bé");
}

// giá trị

var r = Math.random(); //return number -> double/float 0->1: 
r = r *100;
r = parseInt(r);
// tạo một số ngẫu nhiên từ 0->99 (<100)
// cho người chơi nhập số dự đoán của mình
// và nhập số tiền muốn đầu tư -> lợi nhuận x70
// đối chiếu và thông báo kết quả trúng thưởng hay không


