let input = document.getElementById("todoinput");
let todo = document.getElementById("todolist");
let addtodo = document.getElementById("add");
let deltodo = document.getElementById("del");
let count = 0;
const arrays = [];
addtodo.addEventListener("click", () => {
  if (input.value === "") {
    alert("Input Field Required");
  } else {
    arrays.push(input.value);
    text();
    input.value = "";
  }
});
deltodo.addEventListener("click", () => {
  arrays.pop();
  text();
});

function text() {
  todo.innerHTML = arrays
    .map((texts, ind) => `${ind + 1} . ${texts}`)
    .join("<br>");
}
