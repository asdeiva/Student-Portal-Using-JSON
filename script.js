var myArray = fetch("MOCK_DATA.json")
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
    buildTable(data);
    var button = document.getElementById("sortAZ");
    button.addEventListener("click", sortAtoZ);

    function sortAtoZ() {
      hideTable2();
      console.log(data);

      data = data.sort((a, b) => {
        if (a.first_name < b.first_name) {
          return -1;
        }
      });
      buildTable(data);
    }

    var button = document.getElementById("sortZA");
    button.addEventListener("click", sortZtoA);

    function sortZtoA() {
      hideTable2();
      data = data.sort((a, b) => {
        if (a.first_name > b.first_name) {
          return -1;
        }
      });
      buildTable(data);
    }

    var button = document.getElementById("sortByMarks");
    button.addEventListener("click", sortByMarks);

    function sortByMarks() {
      hideTable2();
      data = data.sort((a, b) => {
        if (a.marks < b.marks) {
          return -1;
        }
      });
      buildTable(data);
    }

    var button = document.getElementById("sortByClass");
    button.addEventListener("click", sortByClass);

    function sortByClass() {
      hideTable2();
      data = data.sort((a, b) => {
        if (a.class < b.class) {
          return -1;
        }
      });
      buildTable(data);
    }

    var button = document.getElementById("sortByPass");
    button.addEventListener("click", sortByPass);
    function sortByPass() {
      hideTable2();
      var results = data.filter((obj) => obj.passing == true);
      buildTable(results);
    }

    var button = document.getElementById("sortByGender");
    button.addEventListener("click", sortByGender);
    function sortByGender() {
      showTable2();
      var results = data.filter((obj) => obj.gender == "Female");
      buildTable(results);

      var results1 = data.filter((obj) => obj.gender == "Male");
      buildTable2(results1);
    }

    var button = document.getElementById("searchBtn");
    button.addEventListener("click", searchFun);

    var mySearch = document.getElementById("searchInput");
    mySearch.addEventListener("input", searchFun());

    // buildTable(data);
    function buildTable(data) {
      var table = document.getElementById("data-output");

      table.innerHTML = "";
      for (var i = 0; i < data.length; i++) {
        if (data[i].passing == true) {
          var val = "passing";
        } else {
          val = "failed";
        }
        var row = `<tr>
                        <td>${data[i].id}  </td>
                        <td><img src="${data[i].img_src}" >  ${data[i].first_name} ${data[i].last_name}</td>
                        <td>${data[i].gender}</td>
                        <td>${data[i].class}</td>
                        <td>${data[i].marks}</td>
                        <td>${val}</td>
                        <td>${data[i].email}</td>

                  </tr>`;
        table.innerHTML += row;
      }
    }

    function buildTable2(data) {
      var table = document.getElementById("data-output2");
      table.innerHTML = "";
      for (var i = 0; i < data.length; i++) {
        if (data[i].passing == true) {
          var val = "passing";
        } else {
          val = "failed";
        }
        var row = `<tr>
                        <td>${data[i].id}  </td>
                        <td><img src="${data[i].img_src}" >  ${data[i].first_name} ${data[i].last_name}</td>
                        <td>${data[i].gender}</td>
                        <td>${data[i].class}</td>
                        <td>${data[i].marks}</td>
                        <td>${val}</td>
                        <td>${data[i].email}</td>

                  </tr>`;
        table.innerHTML += row;
      }
    }
  });
function hideTable2() {
  document.getElementById("table2").classList.add("hidden");
}

function showTable2() {
  document.getElementById("table2").classList.remove("hidden");
}

const searchFun = () => {
  console.log("search clicked");
  let filter = document.getElementById("searchInput").value.toUpperCase();

  let myTable = document.getElementById("data-output");

  let tr = myTable.getElementsByTagName("tr");

  for (var i = 0; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName("td")[1];
    let td1 = tr[i].getElementsByTagName("td")[6];
    if (td) {
      let txtvalue = td.textContent || td.innerHTML;
      console.log(txtvalue);
      if (txtvalue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
        if (td1) {
          let txtvalue1 = td1.textContent || td1.innerHTML;
          if (txtvalue1.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
    }
  }
};
