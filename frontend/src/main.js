const options = document.getElementById("options");
const langs = document.getElementById("langs");
const optBtn = document.getElementById("opt-butt");
const langBtn = document.getElementById("lang-butt");

let optOpen = false;
optBtn.addEventListener("click", () => {
  if (!optOpen) {
    //enable background
    if (!langOpen && !optOpen) setBack(true);
    optBtn.classList.add("open");
    optOpen = true;
    openL();
  } else {
    closeL();
  }
});

let langOpen = false;
langBtn.addEventListener("click", () => {
  //enable background
  if (!langOpen && !optOpen) setBack(true);
  if (!langOpen) {
    langOpen = true;
    openR();
  } else {
    closeR();
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
  if (!langOpen && !optOpen) {
    //disable background
    setBack(false);
  }
}

function openR() {
  langs.style.width = "300px";
  closeL();
}

function closeR() {
  langOpen = false;
  langs.style.width = "0";
  if (!langOpen && !optOpen) {
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
