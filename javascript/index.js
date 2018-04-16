var instagramContainer = document.getElementById("instaPhotosContainer");
var fotosInsta = instagramContainer.querySelectorAll("img");
var telaCheia = document.getElementById("imageOverPage");
var imgTelaCheia = telaCheia.querySelector("img");
var linkTelaCheia = telaCheia.querySelector("a");

function aumentarImgInsta(numImg) {
	telaCheia.style.display = "flex";
	imgTelaCheia.src = "imgs/instagram/insta-ed"+ numImg +".jpg"
	linkTelaCheia.href = fotosInsta[numImg-1].dataset.link;

}

function fecharImgInsta() {
	telaCheia.style.display = "none";
}