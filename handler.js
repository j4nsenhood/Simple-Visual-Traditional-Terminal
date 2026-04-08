let enterTerminal = document.querySelector('[name="setenter"]');
let textCommand = document.querySelector('[name="command"]');
var textTerminal = document.getElementById("terminaltext");
let cirvisVisual = document.querySelector('[class="cirvis"]');

const typingTerminal = "><span name=cursor>_</span>";

function earlyTerminal() {
  textTerminal.innerHTML += typingTerminal;
}

earlyTerminal();

enterTerminal.addEventListener("click", function (event) {
  event.preventDefault();
  if (textCommand.value == "Circle") {
    // textTerminal.innerHTML = "";
    textTerminal.innerHTML +=
      " Circle <br /> Execute Make Circle <br />" + typingTerminal;

    flashType();
    CirvisVisualCircle();
  }
  if (textCommand.value == "Square") {
    // textTerminal.innerHTML = "";
    textTerminal.innerHTML +=
      " Square <br /> Execute Make Square <br />" + typingTerminal;

    flashType();
    CirvisVisualSquare();
  }
  if (textCommand.value == "Triangle") {
    // textTerminal.innerHTML = "";
    textTerminal.innerHTML +=
      " Triangle <br /> Execute Make Triangle <br />" + typingTerminal;

    flashType();
    CirvisVisualTriangle();
  }
  if (textCommand.value == "Clear") {
    textTerminal.innerHTML = typingTerminal;
    flashType();
    CirvisClear();
  }
});

function flashType() {
  let id = null;
  const cursor = document.querySelector('[name="cursor"]');
  clearInterval(id);
  id = setInterval(visibilityCursor, 500);
  function visibilityCursor() {
    cursor.style.visibility =
      cursor.style.visibility === "hidden" ? "visible" : "hidden";
  }
}

flashType();

function CirvisVisualSquare() {
  cirvisVisual.style.width = "50px";
  cirvisVisual.style.height = "50px";
  cirvisVisual.style.borderRadius = "0px";
  cirvisVisual.style.animationName = "cirvisSquareTransform";
  cirvisVisual.style.animationDuration = "8s";
  cirvisVisual.style.border = "0";
}

function CirvisVisualCircle() {
  cirvisVisual.style.width = "50px";
  cirvisVisual.style.height = "50px";
  cirvisVisual.style.borderRadius = "50px";
  cirvisVisual.style.animationName = "cirvisCircleTransform";
  cirvisVisual.style.animationDuration = "12s";
  cirvisVisual.style.border = "0";
}
function CirvisVisualTriangle() {
  cirvisVisual.style.borderRadius = "0";
  cirvisVisual.style.width = "0px";
  cirvisVisual.style.height = "0px";
  cirvisVisual.style.borderRight = "50px solid transparent";
  cirvisVisual.style.borderLeft = "50px solid transparent";
  cirvisVisual.style.borderBottom = "50px solid var(--catpputhin)";
  cirvisVisual.style.animationName = "cirvisTriangleTransform";
  cirvisVisual.style.animationDuration = "16s";
}

function CirvisClear() {
  cirvisVisual.style.borderRadius = "0px";
  cirvisVisual.style.animationName = "none";
}

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
