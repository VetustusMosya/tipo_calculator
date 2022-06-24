  let inp1 = document.querySelector("input[name=num1]");
  let inp2 = document.querySelector("input[name=num2]");
  let btn = document.querySelector(".button");
  let span = document.querySelector(".res");
  let action = document.querySelector("#action");

  btn.onclick = function () {
    let operation = action.value;
    let a = parseInt(inp1.value);
    let b = parseInt(inp2.value);
    let result;
    switch (operation) {
      case "sum":
        result = a + b; break;
      case "min":
        result = a - b; break;
      case "mul":
        result = a * b; break;
      case "divide":
        result = a / b; break;
      default:
        result = "Не выбрано действие"; break;
    }
    span.innerHTML = result;
    btn.disabled = true;
  };

  inp1.addEventListener('change', makeDisabled);
  inp2.addEventListener('change', makeDisabled);
  action.addEventListener('change', makeDisabled);

  function makeDisabled(){
    btn.disabled = false;
  }
