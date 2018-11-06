var slider = document.getElementById("slider");
slider.style.backgroundImage = "url('webagency_images/images/slider/bg1.jpg')";

var flecheDroite = document.getElementById("fleche-droite");
flecheDroite.addEventListener("click",function(){
  slider.style.backgroundImage = "url('webagency_images/images/slider/bg2.jpg')";
});

var flecheGauche = document.getElementById("fleche-gauche");
flecheGauche.addEventListener("click",function(){
  slider.style.backgroundImage = "url('webagency_images/images/slider/bg1.jpg')";
});
