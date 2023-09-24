function layThonTinTuForm() {
  //   lấy thông tin từ form
  var ma = document.getElementById("txtMaSV").value;
  var ten = document.getElementById("txtTenSV").value;
  var matKhau = document.getElementById("txtPass").value;
  var email = document.getElementById("txtEmail").value;
  var toan = document.getElementById("txtDiemToan").value;
  var ly = document.getElementById("txtDiemLy").value;
  var hoa = document.getElementById("txtDiemHoa").value;
  //   tạo object
  var sv = new SinhVien(ma, ten, matKhau, email, toan, ly, hoa);
  return sv;
}
function renderDSSV(dssv) {
  //   show array dssv lên layout, mỗi item ~ 1 thẻ tr
  var contentHTML = "";
  //   duyệt mảng để update dữu liệu của contentHTML
  for (var index = 0; index < dssv.length; index++) {
    var sv = dssv[index];
    // tạo chuỗi tr
    var trString = ` <tr>
                              <td>${sv.ma}</td>
                              <td>${sv.ten}</td>
                              <td>${sv.email}</td>
                              <td>${sv.tinhDTB()}</td>
  
                              <td>
                                  <button class='btn btn-danger' onClick="xoaSV('${
                                    sv.ma
                                  }')">Xoá</button>
                                  <button class='btn btn-warning' onClick="suaSV('${
                                    sv.ma
                                  }')">Sửa</button>
                              </td>
                      </tr>`;

    // cộng dồn chuổi tr và contentHTML
    contentHTML = contentHTML + trString;
  }
  document.querySelector("#tbodySinhVien").innerHTML = contentHTML;
  //   dom vào tbody và show contentHTML
}

// array

// xoá sv ,splice
