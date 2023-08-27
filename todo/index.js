function save() {
  let newlist = document.getElementById("new");
  let cdate = document.getElementById("cdate");
  let table = document.getElementById("myTable");

  let date = cdate.value;
  let array = date.split("-");
  let newdate = array[1] + "/" + array[2] + "/" + array[0];

  let row = table.insertRow(1);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  cell1.innerHTML = newlist.value;
  cell2.innerHTML = newdate;
  cell3.innerHTML =
    "<lable id='delete' type='' onclick='doClose(this)' >Delete</lable>";
}
function doClose(element) {
  let d = element.parentNode.parentNode.rowIndex;
  document.getElementById("myTable").deleteRow(d);
}
