document.addEventListener('DOMContentLoaded', function () {
  var canvas = document.querySelector('.canvas');
  var palette = document.querySelector('.palette')
  var color = '';
  var backgroundColor = "background-color";
  console.log("yes hello");

  canvas.addEventListener("click", paint, true);

  palette.addEventListener("click", selectColor, true);


  function selectColor(event) {
    console.log('selected')
    color = event.target.style.backgroundColor
    //also update the color selected section.
  }
  function paint(event) {
    console.log('it should change color')
    var selectedPixel = event.target
    selectedPixel.style.backgroundColor = color;
    event.stopPropagation();
  }
})
