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
