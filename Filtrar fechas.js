function searchDate() {
  var input_startDate, input_stopDate, table, tr, i;

  // get the values and convert to date
  input_startDate = new Date(document.getElementById("date-start").value);
  input_stopDate = new Date(document.getElementById("date-stop").value);

  table = document.getElementById("table");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    // you need to get the text and convert to date
    let td_date = new Date(tr[i].getElementsByTagName("td")[0].textContent);

    // now you can compare dates correctly
    if (td_date) {
      if (td_date >= input_startDate && td_date <= input_stopDate) {
        // show the row by setting the display property
        tr[i].style.display = 'table-row;';
      } else {
        // hide the row by setting the display property
        tr[i].style.display = 'none';
      }
    }

  }
}

function searchDateAlternative() {
  // get the values and convert to date
  const input_startDate = new Date(document.getElementById("date-start").value);
  const input_stopDate = new Date(document.getElementById("date-stop").value);

  // only process table body rows, ignoring footer/headers
  const tr = document.querySelectorAll("#table tbody tr")

  for (let i = 0; i < tr.length; i++) {
    // ensure we have a relevant td
    let td = tr[i].getElementsByTagName("td");
    if (!td || !td[0]) continue;

    // you need to get the text and convert to date
    let td_date = new Date(td[0].textContent);

    // now you can compare dates correctly
    if (td_date) {
      if (td_date >= input_startDate && td_date <= input_stopDate) {
        // show the row by setting the display property
        tr[i].style.display = 'table-row;';
      } else {
        // hide the row by setting the display property
        tr[i].style.display = 'none';
      }
    }

  }
}