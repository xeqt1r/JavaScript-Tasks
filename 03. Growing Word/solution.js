function growingWord() {
  let par = document.querySelector("#exercise p");

  if(par.style.color == ""){
    par.style.color = "blue"
    par.style.fontSize = "2px"
  }
  else if(par.style.color == "blue") {
    par.style.color = "green"
    let pix = par.style.fontSize;
    let pixN = pix.substring(0, pix.length-2);
    par.style.fontSize = pixN*2 + "px";
  }
  else if(par.style.color == "green") {
    par.style.color = "red"
    let pix = par.style.fontSize;
    let pixN = pix.substring(0, pix.length-2);
    par.style.fontSize = pixN*2 + "px";
  }
  else if(par.style.color == "red") {
    par.style.color = "blue"
    let pix = par.style.fontSize;
    let pixN = pix.substring(0, pix.length-2);
    par.style.fontSize = pixN*2 + "px";
  }
}