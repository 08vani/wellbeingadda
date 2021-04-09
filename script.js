var slideIndex = [1,1,1,1,1,1];
var slideId = ["mySlides1", "mySlides2","mySlides3","mySlides4","mySlides5","mySlides6"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);
showSlides(1, 5);



function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}
// Get the modal
var modal = document.getElementById("myModal1");
// Get the <span> element that closes the modal
var span1 = document.getElementById("close1");[0];
// When the user clicks on <span> (x), close the modal
span1.onclick = function() { 
  modal.style.display = "none";
}
var img1 = document.getElementById("myImg1");
img1.onclick = function(){
  modal.style.display = "block";
}

// Get the modal
var modal2 = document.getElementById("myModal2");
// Get the <span> element that closes the modal
var span2 = document.getElementById("close2");[0];
// When the user clicks on <span> (x), close the modal
span2.onclick = function() { 
  modal2.style.display = "none";
}
var img2 = document.getElementById("myImg2");
img2.onclick = function(){
  modal2.style.display = "block";
}

var modal3 = document.getElementById("myModal3");
// Get the <span> element that closes the modal
var span3 = document.getElementById("close3");[0];
// When the user clicks on <span> (x), close the modal
span3.onclick = function() { 
  modal3.style.display = "none";
}
var img3 = document.getElementById("myImg3");
img3.onclick = function(){
  modal3.style.display = "block";
}

var modal4 = document.getElementById("myModal4");
// Get the <span> element that closes the modal
var span4 = document.getElementById("close4");[0];
// When the user clicks on <span> (x), close the modal
span4.onclick = function() { 
  modal4.style.display = "none";
}
var img4 = document.getElementById("myImg4");
img4.onclick = function(){
  modal4.style.display = "block";
}

var modal5 = document.getElementById("myModal5");
// Get the <span> element that closes the modal
var span5= document.getElementById("close5");[0];
// When the user clicks on <span> (x), close the modal
span5.onclick = function() { 
  modal5.style.display = "none";
}
var img5 = document.getElementById("myImg5");
img5.onclick = function(){
  modal5.style.display = "block";
}
var modal6 = document.getElementById("myModal6");
// Get the <span> element that closes the modal
var span6= document.getElementById("close6");[0];
// When the user clicks on <span> (x), close the modal
span6.onclick = function() { 
  modal6.style.display = "none";
}
var img6 = document.getElementById("myImg6");
img6.onclick = function(){
  modal6.style.display = "block";
}

