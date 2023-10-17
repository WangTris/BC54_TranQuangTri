import { https } from "../service/service.js";
import {
  layThongTinTuForm,
  renderFoodList,
  showDataForm,
} from "./controllers.js";

let fetchFoodList = () => {
  https
    .get("/food")
    .then((res) => {
      console.log(res);
      // reverse() => đảo ngược mảng
      renderFoodList(res.data.reverse());
    })
    .catch((err) => {
      console.log(err);
    });
};

// lần đầu load trang
fetchFoodList();

function deleteFood(id) {
  https
    .delete(`/food/${id}`)
    .then((res) => {
      fetchFoodList();
      // sau khi xoá thành công => gọi lại api lấy data mới nhất => update layout
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}
window.deleteFood = deleteFood;

window.addFood = () => {
  let food = layThongTinTuForm();
  https
    .post("/food", food)
    .then((res) => {
      $("#exampleModal").modal("hide");
      console.log(res);
      fetchFoodList();
    })
    .catch((err) => {
      console.log(err);
    });
};

window.editFood = (id) => {
  $("#exampleModal").modal("show");

  https
    .get(`/food/${id}`)
    .then((res) => {
      console.log(res);
      showDataForm(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

window.updateFood = () => {
  let food = layThongTinTuForm();
  https
    .put(`/food/${food.ma}`, food)
    .then((res) => {
      console.log(res);
      $("#exampleModal").modal("hide");
      fetchFoodList();
    })
    .catch((err) => {
      console.log(err);
    });
};

// Filter Food List select option
// Loại 1 = Chay
// Loại 2 = Mặn
window.filterFoodList = () => {
  let selectFood = document.getElementById("selLoai").value;
  if (selectFood == "all") {
    fetchFoodList();
  } else {
    https
      .get(`/food?loai=${selectFood}`)
      .then((res) => {
        console.log(res);
        renderFoodList(res.data.reverse());
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

// Search Food List
window.searchFoodList = () => {
  let keyword = document.getElementById("searchFood").value;
  if (keyword === "") {
    fetchFoodList();
  } else {
    https
      .get(`/food?ten=${keyword}`)
      .then((res) => {
        console.log(res);
        renderFoodList(res.data.reverse());
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
