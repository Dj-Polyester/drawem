const options = document.getElementById("options");
const optBtn = document.getElementById("opt-butt");

let optOpen = false;
optBtn.addEventListener("click", () => {
  if (!optOpen) {
    //enable background
    if (!optOpen) setBack(true);
    optBtn.classList.add("open");
    optOpen = true;
    openL();
  } else {
    closeL();
  }
});

function openL() {
  closeR();
  options.style.width = "300px";
}

function closeL() {
  optBtn.classList.remove("open");
  optOpen = false;
  options.style.width = "0";
  if (!optOpen) {
    //disable background
    setBack(false);
  }
}

function openR() {
  langs.style.width = "300px";
  closeL();
}

function closeR() {
  langs.style.width = "0";
  if (!optOpen) {
    //disable background
    setBack(false);
  }
}

function setBack(bool) {
  let body = document.getElementsByTagName("body")[0];
  if (bool) {
    let div = document.createElement("div");
    div.id = "background";
    div.style.position = "fixed";
    div.style.top = "60px";
    div.style.zIndex = "1";
    div.style.backgroundColor = "#2d2d2d";
    div.style.width = "100%";
    div.style.height = "100%";
    div.style.opacity = "0.5";
    body.appendChild(div);
    div.onclick = () => {
      if (optOpen) {
        closeL();
      } else if (langOpen) {
        closeR();
      }
    };
  } else {
    let div = document.getElementById("background");
    body.removeChild(div);
  }
}
