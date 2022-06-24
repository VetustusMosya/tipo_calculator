window.onload = function (e) {
  let num1 = document.querySelector("input[name=num1]");
  let num2 = document.querySelector("input[name=num2]");
  let btn = document.querySelector(".button");
  let span = document.querySelector(".res");
  let action = document.querySelector("#action");

  btn.onclick = function () {
    let a = action.value;
    switch (a) {
      case "sum":
        sum();
        break;
      case "min":
        minus();
        break;
      case "mul":
        mul();
        break;
      case "divide":
        divide();
        break;
      default:
        span.innerHTML = 0;
        break;
    }
  };

  function sum() {
    span.innerHTML = parseInt(num1.value) + parseInt(num2.value);
  }

  function minus() {
    span.innerHTML = parseInt(num1.value) - parseInt(num2.value);
  }

  function mul() {
    span.innerHTML = parseInt(num1.value) * parseInt(num2.value);
  }

  function divide() {
    span.innerHTML = parseInt(num1.value) / parseInt(num2.value);
  }
};
