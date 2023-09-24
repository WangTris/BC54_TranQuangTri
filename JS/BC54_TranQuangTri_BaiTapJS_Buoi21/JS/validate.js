function kiemtraRong(value, idErr) {
  if (value.trim() == "") {
    document.getElementById(idErr).innerHTML = "Không được bỏ trống";
    return false;
  }
  document.getElementById(idErr).innerHTML = "";
  return true;
}

function kiemTraTrung(value, idErr, message, key) {
  var viTri = dssv.findIndex(function (item) {
    return item[key] == value;
  });
  if (viTri != -1) {
    document.getElementById(idErr).innerHTML = message;
    return false;
  }
  document.getElementById(idErr).innerHTML = "";
  return true;
}
