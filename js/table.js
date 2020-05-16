const data = [
  { name: "abu adnaan", age: 32, birthday: "23/06/1987" },
  { name: "john doe", age: 35, birthday: "13/02/1984" },
  { name: "james smith", age: 20, birthday: "3/09/1999" },
];

buildTable(data);
function buildTable(data) {
  const dynamicTable = document.querySelector(".dynamic-table");
  const tbody = dynamicTable.querySelector("tbody");
  tbody.innerHTML = "";
  data.forEach(({ name, age, birthday }) => {
    const template = `
<tr>
  <td>${name}</td>
  <td>${age}</td>
  <td>${birthday}</td>
</tr>
`;
    tbody.innerHTML += template;
  });
}

(function sortArray(arr) {
  // add event handlers to table headers
  document.querySelectorAll(".dynamic-table th").forEach((th) => {
    th.addEventListener("click", handleSort);
  });

  function handleSort(event) {
    const col = event.target.getAttribute("data-col");
    const sort = event.target.getAttribute("data-sort");
    const caret = event.target.querySelector("i");
    console.log(caret);
    console.log(event.target);
    if (col == "name") {
      if (sort == "asc") {
        event.target.setAttribute("data-sort", "desc");
        arr.sort((a, b) => (a.name > b.name ? -1 : 1));
        caret.className = "fas fa-caret-down";
      } else {
        event.target.setAttribute("data-sort", "asc");
        arr.sort((a, b) => (a.name < b.name ? -1 : 1));
        caret.className = "fas fa-caret-up";
      }
    } else if (col == "age") {
      if (sort == "asc") {
        event.target.setAttribute("data-sort", "desc");
        arr.sort((a, b) => (a.age > b.age ? -1 : 1));
        caret.className = "fas fa-caret-down";
      } else {
        event.target.setAttribute("data-sort", "asc");
        arr.sort((a, b) => (a.age < b.age ? -1 : 1));
        caret.className = "fas fa-caret-up";
      }
    } else {
      if (sort == "asc") {
        event.target.setAttribute("data-sort", "desc");
        arr.sort((a, b) => (a.birthday > b.birthday ? -1 : 1));
        caret.className = "fas fa-caret-down";
      } else {
        event.target.setAttribute("data-sort", "asc");
        arr.sort((a, b) => (a.birthday < b.birthday ? -1 : 1));
        caret.className = "fas fa-caret-up";
      }
    }

    buildTable(arr);
  }
})(data);
