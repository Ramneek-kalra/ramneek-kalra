var i = 0;
var txt = document.getElementById("hello_greet").textContent;
var speed = 500;


  if (i < txt.length) {
    document.getElementById("hello_greet").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }

