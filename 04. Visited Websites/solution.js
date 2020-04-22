function solve() {
  document.querySelectorAll(".link-1").forEach(item => {
    item.addEventListener('click', function() {
      let par = item.children[1];
      let num = parseInt((par.innerHTML).split(' ')[1]) + 1;
      console.log(num);

      par.innerHTML = "visited" + " " + num + " " + "times";
    });
  })
}