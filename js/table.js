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
