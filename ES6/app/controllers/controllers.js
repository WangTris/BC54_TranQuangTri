export let renderFoodList = (foodArr) => {
  let contentHTML = "";
  foodArr.forEach((food) => {
    let { ma, ten, gia, khuyenMai, loai, tinhTrang } = food;
    let giaKM = gia - (gia * khuyenMai) / 100;
    let trString = ` <tr>
                          <td>${ma}</td>
                          <td>${ten}</td>
                          <td>${loai == chay ? "Chay" : "Mặn"}</td>
                          <td>${gia}</td>
                          <td>${khuyenMai}</td>
                          <td>${giaKM}</td>
                          <td>${tinhTrang == 1 ? "Còn" : "Hết"}</td>
                          <td>
                          <button onclick=deleteFood(${ma}) class="btn btn-danger">Xoá</button>
                          <button onclick=editFood(${ma}) class="btn btn-primary">Sửa</button></td>
                      </tr> `;
    contentHTML = contentHTML + trString;
  });

  document.getElementById("tbodyFood").innerHTML = contentHTML;
};

const monChay = "loai1";
const monMan = "loai2";
const chay = true;

export let showDataForm = (food) => {
  document.getElementById("foodID").value = food.ma;
  document.getElementById("tenMon").value = food.ten;
  document.getElementById("giaMon").value = food.gia;
  document.getElementById("khuyenMai").value = food.khuyenMai;
  document.getElementById("loai").value = food.loai == chay ? monChay : monMan;
  document.getElementById("tinhTrang").value = food.tinhTrang;
  document.getElementById("hinhMon").value = food.hinhAnh;
  document.getElementById("moTa").value = food.moTa;
};

let getData = (idValue) => document.getElementById(idValue).value;

export let layThongTinTuForm = () => {
  let ma = getData("foodID");
  let ten = getData("tenMon");
  let loai = getData("loai");
  let gia = getData("giaMon");
  let khuyenMai = getData("khuyenMai");
  let tinhTrang = getData("tinhTrang");
  let hinhAnh = getData("hinhMon");
  let moTa = getData("moTa");
  return {
    ma,
    ten,
    loai,
    gia,
    khuyenMai,
    tinhTrang,
    hinhAnh,
    moTa,
  };
};
