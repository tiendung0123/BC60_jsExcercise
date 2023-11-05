// Học về DOM
// Tính tiền tip
var btnTinhNao = document.getElementById("btnTinhNao");
btnTinhNao.onclick = function () {
  var tongTien = document.getElementById("tongTien").value * 1;
  var slcTip = document.getElementById("slcTip").value * 1;
  var share = document.getElementById("share").value * 1;

  // Xử lý :

  var total = (tongTien * (slcTip / 100)) / share;
  var result = "";
  result += "<p>Tip Amount</p>";
  result += "<p>" + total + "</p>";
  result += "<p>Mỗi người</p>";

  // Đầu ra
  var footerTip = document.getElementById("footerTip");
  footerTip.innerHTML = result;
}

/* Làm thử bài tính tổng số tiền cho mỗi người
input
- số tiền cần thanh toán
- số phần trăm muốn bo
- số người muốn chia

process
- Chuẩn bị hàm thực hiện tính số tiền cho mỗi người
  + Khai báo biến cho action click : btnMoney
  + gán action onclick cho button.
- Khai báo biến
  + số tiền cần thanh toán : nhapTien
  + số phần trăm muốn bo : tienBo
  + số người muốn chia : sharePeople
  + số tiền mỗi người cần thanh toán : campuchia
- Xử lý tính toán
  campuchia = (nhapTien / sharePeople ) + (nhapTien * % tienBo)/sharePeople
- In ra footer số tiền mỗi người cần thanh toán

output
- Kết quả mỗi người cần thanh toán

*/
var btnMoney = document.getElementById("btnMoney");
btnMoney.onclick = function () {
  var nhapTien = document.getElementById("nhapTien").value;
  var tienBo = document.getElementById("tienBo").value;
  var sharePeople = document.getElementById("sharePeople").value;
  console.log(nhapTien, tienBo, sharePeople);
  var campuchia = 0;

  campuchia = (nhapTien / sharePeople) + (nhapTien * tienBo / 100) / sharePeople;


  document.getElementById("campuchia").innerHTML = 'Mỗi người ' + campuchia + ' $';
}

/*
Bài tập tính tiền lương nhân viên
■ Input
- Nhập số ngày làm
- Lương 1 ngày : 100.000

■ Process
- Tạo biến input ngày làm : ngayLam
- Tạo biến chứa kết quả : tienLuong
- Công thức tính :
  tienLuong = ngayLam * 100000
- In tienLuong đã tính ra ngoài màn hình.
■　Output
- In ra tiền lương
*/
var tinhLuong = document.getElementById("tinhLuong");
tinhLuong.onclick = function () {
  var ngayLam = document.getElementById("ngayLam").value;
  var tienLuong = 0;

  tienLuong = ngayLam * 100000;

  document.getElementById("tienLuong").innerHTML = 'Lương tháng của bạn là : ' + tienLuong + ' VND';
}

/*
Bài tập nhập 5 số thực và tính số trung bình
■ Input
- Nhập 5 số
■ Process
- Tạo biến & gán action (onclick) cho function tính toán : btnTB
- Tạo html 5 text-group để input 5 số & tạo biến
  + so1, so2, so3, so4, so5 
- Tạo biến để in kết quả, ban đầu gán giá trị : result_TB = 0 ;
- Biểu thức tính :
  result_TB = (so1 + so2 + so3 + so4 + so5)/5 ;
- Gán trá trị cho innerHTML của biến kết quấ

■　Output
- In ra trung bình của 5 số đã nhập
*/



/*
Bài tập quy đổi ra tiền đô $ . 1$ = 23.500 VND
■ Input
- Nhập số tiền đô($) muốn đổi
■ Process
- Xủ lý : 
■　Output
- In ra số tiền VND tương ứng
*/

/*
Tính diện tích, chu vi hình chữ nhật
■ Input
- Nhập chiều dài
- Nhập chiều rộng

■ Process
- Tạo biến & hàm cho action
  + btnTinh
  + onclick
- Tạo biến : (DOM đến các id tương ứng)
  + chieuDai (quy định kiểu number or * 1)
  + chieuRong
  + chuVi
  + dienTich
- Xủ lý : 
  + chuVi = (chieuDai + chieuRong) * 2 ;
  + dienTich = chieuDai * chieuRong
- In kết quả (DOM đến id kết quả)
  + ...innerHTML = 
  + click vào 1 button, ra kết quả của cả 2

■　Output
- In ra diện tích
- In ra chu vi
*/

var btnTinh = document.getElementById("btnTinhHCN");
btnTinhHCN.onclick = function () {
  var chieuDai = document.getElementById("chieuDai").value * 1;
  var chieuRong = document.getElementById("chieuRong").value * 1;
  var chuVi = 0;
  var dienTich = 0;

  chuVi = (chieuDai + chieuRong) * 2;
  dienTich = chieuDai * chieuRong;

  document.getElementById("resultHCN").innerHTML = "Diện tích : " + dienTich + "; Chu vi : " + chuVi;
}

/*
Tính tổng 2 ký tự của số có 2 chữ số đã nhập.
■ Input
- Nhập chữ số có 2 chữ số

■ Process
- Tạo biến & hàm cho action
  + btnTinh
  + onclick
- Tạo biến : (DOM đến các id tương ứng)
  + nhapSo (quy định kiểu number or * 1)
  + tong2so
- Xủ lý : 
  + tong2so = nhapSo/10 + nhapSo % 10 ;
- In kết quả (DOM đến id kết quả)
  + ...innerHTML = 

■　Output
- Tổng 2 ký tự của số có 2 chữ số đã nhập.
*/

var btnTinh = document.getElementById("btnTinh");
btnTinh.onclick = function () {
  var nhapSo = document.getElementById("nhapSo").value * 1 ;
  var tong2so = 0;

  tong2so = Math.floor(nhapSo/10) + nhapSo % 10 ;

  document.getElementById("tong2so").innerHTML = "Tổng 2 ký tự là : " + tong2so ;
}

