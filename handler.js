let enterTerminal = document.querySelector('[name="setenter"]');
let textCommand = document.querySelector('[name="command"]');
var textTerminal = document.getElementById("terminaltext");

const typingTerminal = "><span name=cursor>_</span>";

function earlyTerminal() {
  textTerminal.innerHTML = typingTerminal;
}

earlyTerminal();

enterTerminal.addEventListener("click", function (event) {
  event.preventDefault();
  if (textCommand.value == "Circle") {
    textTerminal.innerHTML = "> Circle";
    textTerminal.innerHTML +=
      "<br /> Execute Make Circle <br />" + typingTerminal;

    flashType();
  }
  if (textCommand.value == "Square") {
    textTerminal.innerHTML = "> Square";
    textTerminal.innerHTML +=
      "<br /> Execute Make Square <br />" + typingTerminal;

    flashType();
  }
  if (textCommand.value == "Triangle") {
    textTerminal.innerHTML = "> Triangle";
    textTerminal.innerHTML +=
      "<br /> Execute Make Triangle <br />" + typingTerminal;

    flashType();
  }
  if (textCommand.value == "Clear") {
    textTerminal.innerHTML = typingTerminal;
    flashType();
  }
});

function flashType() {
  const cursor = document.querySelector('[name="cursor"]');

  setInterval(() => {
    cursor.style.visibility =
      cursor.style.visibility === "hidden" ? "visible" : "hidden";
  }, 500);
}

flashType();

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
