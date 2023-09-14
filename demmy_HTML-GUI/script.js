var tagName = document.querySelector("#tag-name");
var color = document.querySelector("#color");
var text = document.querySelector("#text-area");

var result = document.getElementById("result");

var btnCreat = document.getElementById("btn-creatElem");
btnCreat.onclick = () => {
  const new_element = document.createElement(tagName.value);
  new_element.textContent = text.value;
  new_element.style.color = color.value;
  result.append(new_element);
};
