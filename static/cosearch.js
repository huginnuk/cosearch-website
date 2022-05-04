function filterFunction(){
  // Declare variables
  var input, filter, table, tr, td, i, txtValue, fieldName, subtotal, row, subtotal_cell;
  input = document.getElementById("searchField");
  filter = input.value.toUpperCase();
  table = document.getElementById("searchTable");
  tr = table.getElementsByTagName("tr");
  
  // Loop through all table rows, and hide those who don't match the search query
  for (i = 1; i < tr.length; i++) {
    row = tr[i].getElementsByTagName("td");
    td = row[0];
//    console.log(parseFloat(row[8].textContent.replace(",", "")));
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}