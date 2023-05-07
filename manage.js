var data = [
  { ID: "H1", TEN: "Hạ Long", DD: "Du lịch dài hạn", Gia: "1000000" },
  { ID: "H2", TEN: "Hội An", DD: "Du lịch dài hạn", Gia: "2000000" },
];
render();

function add() {
  var item_ID = document.getElementById("ID").value;
  var item_TEN = document.getElementById("TEN").value;
  var item_DD = document.getElementById("DD").value;
  var item_Gia = document.getElementById("Gia").value;

  if (item_ID && item_TEN && item_DD && item_Gia) {
    var item = {
      ID: item_ID,
      TEN: item_TEN,
      DD: item_DD,
      Gia: item_Gia,
    };
    let index = data.findIndex((c) => c.ID == item.ID);

    if (index >= 0) {
      data.splice(index, 1, item);
    } else {
      data.push(item);
    }
    render();
    clear();
  } else {
    alert("Vui lòng nhập đầy đủ thông tin!");
  }
}

function render() {
  table = `<tr>
       <th> ID</th>
       <th>Tên tour</th>
       <th>Loại</th>
       <th>Giá</th>
       <th>Action</th>
     </tr>`;

  for (let i = 0; i < data.length; i++) {
    table += `<tr>
         <td>${data[i].ID}</td>
         <td>${data[i].TEN}</td>
         <td>${data[i].DD}</td>
         <td>${data[i].Gia}</td>
         <td>
           <button type="button" onclick="editTour('${data[i].ID}')">Sửa</button>
           <button type="button" onclick="deleteTour('${data[i].ID}')">Xóa</button>
         </td>
       </tr>`;
  }

  document.getElementById("render").innerHTML = table;
}

function clear() {
  document.getElementById("ID").value = "";
  document.getElementById("TEN").value = "";
  document.getElementById("DD").value = "";
  document.getElementById("Gia").value = "";
}

function deleteTour(x) {
  let found = false;
  for (let i = 0; i < data.length; i++) {
    if (data[i].ID == x) {
      data.splice(i, 1);
      render();
      found = true;
      break;
    }
  }
  if (!found) {
    alert("Không tìm thấy tour để xóa!");
  }
}

function editTour(x) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].ID == x) {
      document.getElementById("ID").value = data[i].ID;
      document.getElementById("TEN").value = data[i].TEN;
      document.getElementById("DD").value = data[i].DD;
      document.getElementById("Gia").value = data[i].Gia;
      break;
    }
  }
}
