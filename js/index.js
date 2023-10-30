var tagH3 = document.getElementById('title');

// .interHTML
tagH3.innerHTML = 'CyberSoft.edu.vn';

var tagInput = document.getElementById('txt');

tagInput.value = 'Hello Kai ngon zai';

var tagInputNumber = document.getElementById('number');

console.log(tagInputNumber.value);
// alert(tagInputNumber.value);

var tagImg = document.getElementById('hinhAnh');

tagImg.src = './Image/images 2.jpeg';

// Dịnh nghĩa hàm đẻ thực thi 1 loạt hành động

function sayHello() { //scope
    alert('Chào mọi người !');
}

//Lệnh gọi hàm
// sayHello();

/*
 Ví dụ : Viết chương trình để người dùng nhập giá trị và in ra màn hình
*/

function hienThiThongTin() {
    //lấy giá trị nhập khi gọi hàm hiển thị thông tin
    var input = document.getElementById('giaTriNhap');
    console.log(input.value);
    //output : string
    var output = input.value;
    //process :
    // output = input.value;
    //Xủ lý kết quả hiển thị lên giao diện

    var tagSpanKetQua = document.getElementById('ketQuaHienThi');
    tagSpanKetQua.innerHTML = output;
}

function tinhTongLuong() {
    var tienLuong = document.getElementById('tienLuong1h').value;
    var soGioLam = document.getElementById('soGioLam').value;
    var tongLuong = 0;
    tongLuong = tienLuong * soGioLam;

    document.getElementById('tongLuong').innerHTML = tongLuong.toLocaleString();
}

//Ví dụ 4 : Tính tiền tip

document.getElementById('btnTinhTienTip').onclick = function () {
    /* 
    input : 
    - tongTienThanhToan : number
    - phanTramtip : number
    - soNguoiTip : number

    progress :
    - Lấy thông tin người dùng nhập từ giao diện
    - Sử dụng công thức tính phần trăm tip quy ra tiền và chia cho số người

    output :
    - tienTipTrenNguoi : number
    */
    var tongTienThanhToan = document.getElementById('tongTienThanhToan').value;
    var phanTramtip = document.getElementById('phanTramtip').value;
    var soNguoiTip = document.getElementById('soNguoiTip').value;
    var tienTipTrenNguoi = 0;

    tienTipTrenNguoi = (tongTienThanhToan * phanTramtip / 100) / soNguoiTip;

    document.getElementById('tienTipTrenNguoi').innerHTML = tienTipTrenNguoi + ' $';
}

var a = 5;
var b = 10;
console.log(a < b);

// Cấu trúc rẽ nhanh'
document.getElementById('btnTinhTriTuyetDoi').onclick = function () {
    var iSo = document.getElementById('iSo_1').value;
    var ketQua = 0;

    ketQua = iSo;
    if (ketQua < 0) {
        ketQua = -iSo;
    }
    document.getElementById('ketQuaViDu1').innerHTML = ketQua;
}

// Cấu trúc if else
document.getElementById('btnKiemTraSo').onclick = function () {
    // input : number
    var iSo = document.getElementById('iSo_2').value;
    // output : string
    var ketQua = '';
    // process
    if (iSo % 2 == 0) {
        ketQua = 'Số chẵn';
    } else {
        ketQua = 'Số lẻ'
    }
    // Hiển thị ra giao diện
    document.getElementById('ketQuaViDu2').innerHTML = ketQua;
}

// Chương trình đọc số dùng switch

document.getElementById('btnDocSo').onclick = function () {
    //input
    var soDem = Number(document.getElementById('soDem').value);
    //output : string
    var ketQua = '';

    // Cách 1 dùng if esle if
    // Cách 2 dùng switch case
    switch(soDem) {
        case 1: {
            ketQua = 'Số một';
        }; break;
        case 2: {
            ketQua = 'Số hai';
        }; break;
        case 3: {
            ketQua = 'Số ba';
        }; break;
        case 4: {
            ketQua = 'Số bốn';
        }; break;
        default : {
            ketQua = 'Nhập số từ 1 đén 4 thôi nhé !';
        }
    }

    document.getElementById('ketQuaViDu5').innerHTML = ketQua;
}

// Bài tập 1 : Xây dựng chức năng zoomin zoomout cho 2 button bên dưới

document.getElementById('btnZoomInHome').onclick = function () {
    var fontSize = document.getElementById('home').style.fontSize;
    var fSize = Number(fontSize.replace('px',''));
    fSize += 5; 
    document.getElementById('home').style.fontSize = fSize + 'px';
    console.log(fSize);
}

document.getElementById('btnZoomOutHome').onclick = function () {
    var fontSize = document.getElementById('home').style.fontSize;
    var fSize = Number(fontSize.replace('px',''));
    fSize -= 5; 
    document.getElementById('home').style.fontSize = fSize + 'px';
    console.log(fSize);
}

// Viết hàm trả về 1 thẻ sau khi DOM

// Ví dụ vòng lặp
document.getElementById('btnInTheDiv').onclick = function () {
    var input = Number(document.getElementById('iSo').value);
    var output = '';
    var dem = 1;

    while (dem <= input) {
        var div = '<div class="alert alert-success mt-2">Hello CyberSoft</div>';
        output += div;
        dem ++;
       
    }
    document.getElementById('ketQua1').innerHTML = output;
}

// Ví dụ tính giai thừa

// var input4 = Number(document.getElementById('iSo4').value);
// var giaiThua = 1;

// while 