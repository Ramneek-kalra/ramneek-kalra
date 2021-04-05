var i = 0;
var txt = document.getElementById("hello_text").textContent;
var speed = 500;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("hello_greet").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
