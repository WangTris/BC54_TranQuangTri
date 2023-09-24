function SinhVien(ma, ten, matKhau, email, toan, ly, hoa) {
  this.ma = ma;
  this.ten = ten;
  this.matKhau = matKhau;
  this.email = email;
  this.toan = toan;
  this.ly = ly;
  this.hoa = hoa;
  this.tinhDTB = function () {
    var dtb = (Number(this.toan) + Number(this.ly) + Number(this.hoa)) / 3;
    return dtb;
  };
}
