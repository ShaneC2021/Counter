let num = 0;

function increment() { // increments counter when button is clicked
  num += 1;
  document.getElementById("display").innerText = num; //corresponding div element displays value of num
}

let decrement = () => {
  num -= 1;
  document.getElementById("display").innerText = num;
  }

  
