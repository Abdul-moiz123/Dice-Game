var user = document.getElementById("user_number");
var random = document.getElementById("random_number");
var result = document.getElementById("result");
var info_box_result = document.getElementById("info_box_result");
var win_html = document.getElementById("win");
var loss_html = document.getElementById("loss");
var total = document.getElementById("total");
var msg = document.getElementById("msg");



var count = 10;
var win = 0;
var loss = 0;


function tryLuck(userNum){
const randomNum = Math.floor(Math.random() * 6) + 1
console.log(randomNum);
user.innerText = userNum;
random.innerText = randomNum;

total.innerText = --count;

if (randomNum === +userNum) {
    console.log("user wins");
    result.innerText = "You won";
    info_box_result.style.backgroundColor = "Green";
    win_html.innerText = ++win;
  } else {
    result.innerText = "You Loss";
    info_box_result.style.backgroundColor = "red";
    loss_html.innerText = ++loss;
  }

  if (count ===0) {
    if (win >= 3) {
      msg.innerText = "Congratulations! You won";
    } else {
      msg.innerText = "You loss try again";
      msg.style
    }

    count = 10;
    win = 0;
    loss = 0;
    total.innerText = count;
    win_html.innerText = win;
    loss_html.innerText = loss;
  }
}