// shop-icon
var modal = document.getElementById('myModal');
var btn = document.getElementById('cartBtn');

btn.onclick = function(event) {
  event.preventDefault(); 
  modal.style.display = "block";
}

var span = document.getElementsByClassName("close")[0];

if(span) {
  span.onclick = function() {
    modal.style.display = "none";
  }
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}