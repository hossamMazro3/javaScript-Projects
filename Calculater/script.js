function printSymbol(e) {
  const result = document.querySelector("#result");
  const obj = e.target;
  if (result.textContent == 0) {
    result.textContent = obj.textContent;
  } else {
    result.textContent += obj.textContent;
  }
}
const result = document.querySelector("#result");
// Create an array to store the button elements
const buttons = [];

// Loop through and populate the array with button elements
for (let i = 0; i < 9; i++) {
  buttons.push(document.querySelector(`#num${i}`));
}

buttons.push(document.querySelector("#plus"));
buttons.push(document.querySelector("#minus"));
buttons.push(document.querySelector("#multipy"));
buttons.push(document.querySelector("#divsion"));
buttons.push(document.querySelector("#mod"));
buttons.push(document.querySelector("#invert"));
buttons.push(document.querySelector("#decimal"));
// Add an event listener to each button
buttons.forEach((button) => {
  button.addEventListener("click", printSymbol);
});

// clear the result pane
const AC = document.querySelector("#AC");
AC.addEventListener("click", () => {
  result.textContent = 0;
});

// evaluation operator (=)
const equal = document.querySelector("#equal");
equal.addEventListener(
  "click",
  () => (result.textContent = eval(result.textContent))
);
