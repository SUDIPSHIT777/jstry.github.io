const btn = document.getElementById("btn");
btn.addEventListener("mouseover", function () {
  this.style.left = Math.random() * 70 + "vw";
  this.style.top = Math.random() * 60 + "vh";
});
const btn1 = document.getElementById("btn1");
let change = document.getElementById("change");
let on = document.getElementById("on");
btn1.addEventListener("click", function () {
  change.style.display = "none";
  on.style.display = "block";
});
