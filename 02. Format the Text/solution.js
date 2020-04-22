// Condition of the task:




function solve() {
  let text = document.getElementById("input").innerHTML;
  let splitedText = text.split(". ");

  let br = 0
  for(let i =0;i<Math.ceil(splitedText.length/3);i++){
    
    let createP = document.createElement("p")
    for(let j=br; j<br+3;j++){

      if(j>=splitedText.length){
        break;
      }
      else{
        createP.innerHTML += splitedText[j] + '. ';
      }
      }
        
    let output = document.getElementById("output");
    output.appendChild(createP);
    br+= 3;
  }
}