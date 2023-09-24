// tạo array dssv chứa object sv
var dssv = [];
const DSSV_LOCAL = "DSSV_LOCAL";
// render lại data từ localStorage khi user reload
var dataJson = localStorage.getItem(DSSV_LOCAL);
// convert từ json sang array
if (dataJson != null) {
  // kiểm tra dữ liệu dưới local storage có tồn tại hay ko trước khi đi render
  dssv = JSON.parse(dataJson).map(function (sv) {
    return new SinhVien(
      sv.ma,
      sv.ten,
      sv.matKhau,
      sv.email,
      sv.toan,
      sv.ly,
      sv.hoa
    );
  });
  renderDSSV(dssv);
}

function themSV() {
  var sv = layThonTinTuForm();
  //  validate dữ liệu trước khi thêm
  var isValid =
    kiemtraRong(sv.ma, "spanMaSV") &
    kiemtraRong(sv.ten, "spanTenSV") &
    kiemTraTrung(sv.ma, "spanMaSV", "Mã SV đã tồn tại", "ma");
  isValid &
    kiemTraTrung(sv.email, "spanEmailSV", "Email đã được sử dụng", "email");
  if (!isValid) {
    return;
  }
  //   thêm sv vừa được tạo vào array dssv
  dssv.push(sv);
  console.log("😀 - themSV - dssv", dssv);
  renderDSSV(dssv);
  // localStorage , json stringtify , json parse
  //   convert array thành json để lưu xuống local
  var dataJson = JSON.stringify(dssv);
  //   lưu json vào localStorage => khi user load trang thì data ko bị mất
  localStorage.setItem(DSSV_LOCAL, dataJson);
}

function xoaSV(id) {
  console.log("👨🏻‍💻 ~ xoaSV ~ id:", id);
  // tìm vị trí sv nằm trong dssv có mã trùng với id
  var index = () => {
    for (var i = 0; i < dssv.length; i++) {
      var sv = dssv[i];
      if (sv.ma == id) {
        return i;
      }
    }
  };
  if (index() != undefined) {
    //* splice(index, number) xoá phần tử tại vị trí index, xoá number phần tử
    dssv.splice(index(), 1);
    renderDSSV(dssv);
    var dataJson = JSON.stringify(dssv);
    localStorage.setItem(DSSV_LOCAL, dataJson);
  }
}

function suaSV(id) {
  var index = dssv.findIndex(function (item) {
    return item.ma == id;
  });
  var sv = dssv[index];
  // hiển thị thông tin lên form
  var ma = (document.getElementById("txtMaSV").value = sv.ma);
  var ten = (document.getElementById("txtTenSV").value = sv.ten);
  var matKhau = (document.getElementById("txtPass").value = sv.matKhau);
  var email = (document.getElementById("txtEmail").value = sv.email);
  var toan = (document.getElementById("txtDiemToan").value = sv.toan);
  var ly = (document.getElementById("txtDiemLy").value = sv.ly);
  var hoa = (document.getElementById("txtDiemHoa").value = sv.hoa);
  alert("Khi sửa nhớ cập nhật nhé");
}

function resetSV() {
  document.getElementById("txtMaSV").value = "";
  document.getElementById("txtTenSV").value = "";
  document.getElementById("txtPass").value = "";
  document.getElementById("txtEmail").value = "";
  document.getElementById("txtDiemToan").value = "";
  document.getElementById("txtDiemLy").value = "";
  document.getElementById("txtDiemHoa").value = "";
  document.getElementById("txtSearch").value = "";
}

function capNhatSV() {
  var maSV = document.getElementById("txtMaSV").value;
  var tenSV = document.getElementById("txtTenSV").value;
  var matKhau = document.getElementById("txtPass").value;
  var email = document.getElementById("txtEmail").value;
  var diemToan = parseFloat(document.getElementById("txtDiemToan").value);
  var diemLy = parseFloat(document.getElementById("txtDiemLy").value);
  var diemHoa = parseFloat(document.getElementById("txtDiemHoa").value);

  // Tìm vị trí của sinh viên
  var index = dssv.findIndex((item) => {
    return item.ma == maSV;
  });

  //* Nếu tìm thấy sinh viên, cập nhật thông tin của nó
  if (index !== -1) {
    dssv[index].ten = tenSV;
    dssv[index].matKhau = matKhau;
    dssv[index].email = email;
    dssv[index].toan = diemToan;
    dssv[index].ly = diemLy;
    dssv[index].hoa = diemHoa;
    dssv[index].tinhDTB = function () {
      return (this.toan + this.ly + this.hoa) / 3;
    };
  }
  renderDSSV(dssv);
  var dataJson = JSON.stringify(dssv);
  localStorage.setItem("DSSV", dataJson);
}
