/** Bài tập 1
 * - Input: Nhập vào điểm chuẩn, điểm 3 môn thi, khu vực ưu tiên, đối tượng ưu tiên
 * - Process:
 *  + Khai báo các biến đầu vào
 *  + Tổng điểm = 3 môn thi cộng với điểm ưu tiên khu vực và đối tượng, so sánh với điểm chuẩn để biết đậu rớt, và xuất ra kết quả tổng điểm
 *  + Nếu có 1 điểm là 0 thì sẽ rớt ngay và ko quan tâm đến tổng điểm
 * - Output: Kết quả đậu or rớt và tổng điểm
 */

function tinhDiemTong(diemKhuVuc,diemDoiTuong,diemMon1,diemMon2,diemMon3) {
    var tongDiem = diemMon1 + diemMon2 + diemMon3 + diemDoiTuong + diemKhuVuc;
    return tongDiem;
}

document.getElementById('tinhKetQua').onclick = function () {
    var diemChuan = document.getElementById('diemChuan').value*1;
    var diemKhuVuc = document.getElementById('khuVucUuTien').value*1;
    var diemDoiTuong = document.getElementById('doiTuongUuTien').value*1;
    var diemMon1 = document.getElementById('mon1').value*1;
    var diemMon2 = document.getElementById('mon2').value*1;
    var diemMon3 = document.getElementById('mon3').value*1;
    var content = '';
    var tongSoDiemThi = tinhDiemTong(diemKhuVuc,diemDoiTuong,diemMon1,diemMon2,diemMon3);
   if (diemMon1 != 0 && diemMon2 != 0 && diemMon3 != 0) {
    if (tongSoDiemThi > diemChuan) {
        content = 'Bạn đã Đậu' ;
    } else {
        content = 'Bạn đã Rớt' ;
    }
   } else {
    content = 'Bạn đã Rớt';
   } 
   document.getElementById('showKetQua').innerHTML = `${content} - Tổng điểm là : ${tongSoDiemThi}`;
}

/** Bài tập 2
 * - Input: nhập tên và số điện
 * - Process:
 *  + Khai báo biến 
 *  + Xử lý tính tổng tiền điện 
 * - Output: Số tiền điện
 */

function tinhTienDien(soDien) {
    var tienDien = 0;
    if (soDien <= 50) {
        tienDien = soDien * 500;
    } else if (soDien > 50 && soDien <= 100) {
        tienDien = 50*500 + (soDien-50)*650;
    } else if (soDien > 100 && soDien <= 200) {
        tienDien = 50*500 + (soDien-50)*650 + (soDien-100)*850;
    } else if (soDien > 200 && soDien <= 350) {
        tienDien = 50*500 + (soDien-50)*650 + (soDien-100)*850 + (soDien-200)*1100;
    } else {
        tienDien = 50*500 + (soDien-50)*650 + (soDien-100)*850 + (soDien-200)*1100 + (soDien-350)*1300;
    }
    return tienDien;
}

document.getElementById('tinhTienDien').onclick = function () {
    var soDien = document.getElementById('soDien').value*1;
    var tongTienDien = tinhTienDien(soDien);
    document.getElementById('tienDien').innerHTML = 'Tổng tiền điện là : ' +  tongTienDien.toLocaleString() + ' VND';
}

/** Bài tập 3
 * - Input: nhập họ và tên, tổng thu nhập năm, số người phụ thuộc
 * - Process:
 *  + Khai báo các biến đầu vào
 *  + tạo hàm function tính thu nhập chịu thuế = tổng thu nhập - 4tr -số ng phụ thuộc * 1.6. và hàm function lấy giá trị thuế thu nhập
 * - Output: tính và xuất thuế thu nhập cá nhân
 */

function tinhThuNhapChiuThue(tongThuNhap,soNguoiPhuThuoc) {
    var TNCT = tongThuNhap - 4 - soNguoiPhuThuoc*1.6 ;
    return TNCT;
}

function thueThuNhap(thuNhapChiuThue) {
    var thue = '';
    if (thuNhapChiuThue < 60 ) { 
        thue = '5%' ;
    } else if (thuNhapChiuThue >= 60 && thuNhapChiuThue <= 120 ) {
        thue = '10%';
    } else if (thuNhapChiuThue >= 120 && thuNhapChiuThue <= 210 ) {
        thue = '15%';
    } else if (thuNhapChiuThue >= 210 && thuNhapChiuThue <= 384 ) {
        thue = '20%';
    } else if (thuNhapChiuThue >= 384 && thuNhapChiuThue <= 624 ) {
        thue = '25%';
    } else if (thuNhapChiuThue >= 624 && thuNhapChiuThue <= 960 ) {
        thue = '30%';
    } else {
        thue = '35%';
    } 
    return thue;
}
document.getElementById('tinhThuNhap').onclick = function () {
    var tongThuNhap = document.getElementById('tongThuNhap').value*1;
    var soNguoiPhuThuoc = document.getElementById('soNguoi').value*1;
    var thuNhapChiuThue = tinhThuNhapChiuThue(tongThuNhap,soNguoiPhuThuoc);
    var thueThuNhapCaNhan = thueThuNhap(thuNhapChiuThue) ;

    document.getElementById('showThuNhapThue').innerHTML = `Số tiền chịu thuế là : ${thuNhapChiuThue} triệu - thuế thu nhập cá nhân là : ${thueThuNhapCaNhan}`;
}


/** Bài tập 4
 * - Input: Mã KH, Loại KH, Số kết nối và Số kênh cao cấp
 * - Process:
 *  + Khai báo các biến đầu vào
 *  + Xử lý nút ẩn hiện cho ô số kết nối khi chọn KH là Nhà dân và hiện khi là Doanh nghiệp.
 *  + Số tiền cáp của nhà dân = 4.5 + 20.5 + 7.5*số kênh cao cấp
 *  + Số tiền cáp của doanh nghiệp = 15 + 75*soketnoi + 50*số kênh cao cấp ( soketnoi <=10)
 *  + Số tiền cáp của doanh nghiệp = 15 + 10*75 + (soketnoi-10)*5 + 50*số kênh cao cấp ( soketnoi > 10)
 * - Ouput: Mã KH và số tiền cáp
 */

document.getElementById('loaiKH').onclick = function () {
    var loaiKH = document.getElementById('loaiKH').value;
    switch (loaiKH) {
        case 'ND':
            document.getElementById('soKN').style.display = 'none';break;
        case 'DN': 
            document.getElementById('soKN').style.display = 'block';break;
    }
}

function tinhTienCap(soKetNoi,soKenhCaoCap,loaiKH) {
    var tienCap =0;
    switch (loaiKH) {
        case 'ND': 
            tienCap = 4.5 + 20.5 + 7.5*soKenhCaoCap; break;
        case 'DN':
            if (soKetNoi <=10) {
                tienCap = 15 + 75 + 50*soKenhCaoCap;
            } else {
                tienCap = 15 + 75 + (soKetNoi-10)*5 + 50*soKenhCaoCap;
            }; break;
    }
    return tienCap;
}

document.getElementById('tinhTienCap').onclick = function () {
    var maKH = document.getElementById('maKH').value;
    var loaiKH = document.getElementById('loaiKH').value;
    var soKetNoi = document.getElementById('soKetNoi').value*1;
    var soKenhCaoCap = document.getElementById('soKenhCaoCap').value*1;
    var hoaDonTiencap = tinhTienCap(soKetNoi,soKenhCaoCap,loaiKH);
    document.getElementById('hoaDon').innerHTML = `Mã khách hàng : ${maKH} - Hóa đơn tiền cáp : ${hoaDonTiencap} $`;
}

































