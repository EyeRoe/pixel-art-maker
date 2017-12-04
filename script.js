document.addEventListener('DOMContentLoaded', function () {
  var canvas = document.querySelector('.canvas');
  console.log("yes hello");
  
  canvas.addEventListener("click", function(event){
    var selectedPixel = event.target;
    selectedPixel.className += " red";
  })
})