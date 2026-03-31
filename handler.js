let enterTerminal = document.querySelector('[name="setenter"]');
let textCommand = document.querySelector('[name="command"]');

enterTerminal.addEventListener("click", function (event) {
  event.preventDefault();
  var textTerminal = document.getElementById("terminaltext");
  if (textCommand.value == "Circle") {
    textTerminal.innerHTML += "<br /> Execute Make Circle";
  }
  if (textTerminal.value == "Square") {
    textTerminal.innerHTML += "<br /> Execute Make Square";
  }
});

function Circle(nameId, cont) {
  var cir = document.getElementById(nameId);
  var ctx = cir.getContext(cont);
  ctx.beginPath();
  ctx.arc(50, 50, 30, 0, 2 * Math.PI);
  ctx.stroke();
}
function tes() {
  console.log("ayama");
}

async function terminalIdle(name) {
  let choice = 1;
  switch (choice) {
    case 1:
      document.getElementById(name).innerHTML = "<";
      await delay(1000);
      choice = 2;
      break;
    case 2:
      document.getElementById(name).innerHTML = "<_";
      await delay(1000);
      choice = 1;
      break;
  }
}

terminalIdle(terminaltext);
Circle("draw", "2d");
