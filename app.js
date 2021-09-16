let count = 0;
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");

function increment() {
  count = count + 1; //count +=1
  countEl.textContent = count;
}
function save() {
  let countString = count + " - ";
  saveEl.textContent += countString;
  countEl.textContent = 0;
  count = 0;
}
