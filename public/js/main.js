document.getElementById("my-button").onclick = function() {
  var number = Math.random();
  
  document.getElementById("memory").innerHTML = number + "<br>";
  
  if (number >= 0.5) {
    document.getElementById("memory").innerHTML += "あたり！";
  } else {
    document.getElementById("memory").innerHTML += "残念、はずれ";
  }
  
};

// フォームでの足し算
document.getElementById("my-form").onsubmit = function() {
  document.getElementById("box").innerHTML =
  document.getElementById("num1").value +
  document.getElementById("num2").value;
  return false;
};