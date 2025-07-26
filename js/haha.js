
var soNgauNhien = Math.random(); 
soNgauNhien = soNgauNhien * 6;   
soNgauNhien = parseInt(soNgauNhien); 

alert("Chào mừng bạn đến với trò chơi dự đoán số!");
alert("Hãy thử vận may của bạn!");


var soDuDoan = prompt("Hãy nhập số bạn muốn dự đoán (từ 0 đến 99):");

soDuDoan = parseInt(soDuDoan);


var soTienDauTu = prompt("Bạn muốn đặt cược bao nhiêu tiền?");

soTienDauTu = parseFloat(soTienDauTu); 
if (isNaN(soDuDoan) || soDuDoan < 0 || soDuDoan > 6) {
    alert("Số dự đoán không hợp lệ. Vui lòng nhập một số từ 0 đến 99.");
} else if (isNaN(soTienDauTu) || soTienDauTu <= 0) {
    alert("Số tiền đặt cược không hợp lệ. Vui lòng nhập một số dương.");
} else {

    alert("------------------------------------");
    alert("Số bạn đã chọn: " + soDuDoan);
    alert("Số tiền bạn đặt cược: " + soTienDauTu + " VND");
    alert("Số may mắn hôm nay là: " + soNgauNhien);

    if (soDuDoan === soNgauNhien) {
        var loiNhuan = soTienDauTu * 70;
        alert("Chúc mừng! Bạn đã trúng thưởng!");
        alert("Số tiền bạn nhận được là: " + loiNhuan + " VND");
    } else {
        alert("Rất tiếc, bạn đã không trúng thưởng. Chúc bạn may mắn lần sau!");
    }
    alert("------------------------------------");
}