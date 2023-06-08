
function menuClick() {
  let naviList = document.getElementById('navi-list')
  naviList.classList.toggle('active');
}

let slideImageIndex;

function showImageSlides(n, buildingType){
  slideImageIndex = n;
  let i;
  let slides;
  if(buildingType == "apartments")
    slides = document.getElementsByClassName("apartmentsSlides");
  else if(buildingType == "duplex")
    slides = document.getElementsByClassName("duplexSlides");
  else if(buildingType == "house")
    slides = document.getElementsByClassName("houseSlides");

  if (n > slides.length) { slideImageIndex = 1 }
  if (n < 1) { slideImageIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideImageIndex - 1].style.display = "block";

}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n, buildingType) {
  if(buildingType == '')
    showSlides(slideIndex += n);
  else if(buildingType == 'apartments')
    showImageSlides(slideImageIndex += n, 'apartments');
  else if(buildingType == 'duplex')
    showImageSlides(slideImageIndex += n, 'duplex');
  else if(buildingType == 'house')
    showImageSlides(slideImageIndex += n, 'house');
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
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
  setTimeout("changeImg()", 3000)
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