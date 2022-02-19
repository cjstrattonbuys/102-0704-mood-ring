var dropDown = document.querySelector("#moods");
console.log(dropDown);
var body = document.querySelector("body");
console.log(body);

dropDown.addEventListener("change", function (e) {
  var mood = e.target.value;
  if (mood === "happy") {
    body.classList.remove("sad");
    body.classList.remove("passionate");
    body.classList.add("happy");
  } else if (mood === "sad") {
    body.classList.remove("passionate");
    body.classList.remove("happy");
    body.classList.add("sad");
  } else if (mood === "passionate") {
    body.classList.remove("happy");
    body.classList.remove("sad");
    body.classList.add("passionate");
  }
});
