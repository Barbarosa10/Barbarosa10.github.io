
function menuClick() {
  // let toggleButton = document.getElementById('toggle-button')
  let naviList = document.getElementById('navi-list')
  naviList.classList.toggle('active');
}


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  //   let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  //   for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  //   }
  slides[slideIndex - 1].style.display = "block";
  //   dots[slideIndex-1].className += " active";
}
let slide = 1;
function changeImg() {
  let slides = document.getElementsByClassName("mySlides");
  let i;
  if (slideIndex > slides.length) { slideIndex = 1 }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
  slideIndex += 1;
  setTimeout("changeImg()", 4000)
}
window.onload = changeImg;


function phone(){
  let phone = document.getElementById("phone");
  setTimeout(function () {
    phone.style = "font-size: 49px;";
  }, 500);
setTimeout(function () {
    phone.style = "font-size: 50px;";
  }, 550);
setTimeout(function () {
    phone.style = "font-size: 51px;";
  }, 600);
  setTimeout(function () {
    phone.style = "font-size: 52px;";
  }, 650);
  setTimeout(function () {
    phone.style = "font-size: 53px;";
  }, 700);
}
function whatsapp(){
  let phone = document.getElementById("whatsapp");
  setTimeout(function () {
    phone.style = "font-size: 49px;";
  }, 500);
setTimeout(function () {
    phone.style = "font-size: 50px;";
  }, 550);
setTimeout(function () {
    phone.style = "font-size: 51px;";
  }, 600);
  setTimeout(function () {
    phone.style = "font-size: 52px;";
  }, 650);
  setTimeout(function () {
    phone.style = "font-size: 53px;";
  }, 700);
}
phone();
setInterval(phone, 700);
whatsapp();
setInterval(whatsapp, 700);
