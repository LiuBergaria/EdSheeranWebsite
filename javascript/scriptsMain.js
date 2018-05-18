var iFrameContainer = document.getElementById("iFrameContainer");
var topMenu = document.getElementById("toTopMenu");

function closeIFrame() {
	iFrameContainer.style.display = "none";
	topMenu.style.display = "initial";
}

function openIFrame(site) {
	iFrameContainer.style.display = "flex";
	topMenu.style.display = "none";
}

/* Adiciona o evento para quando scrollar a página */
document.addEventListener("scroll", function() {
	if (window.pageYOffset > 200) {
		topMenu.classList.remove("fade-out");
	} else {
		topMenu.classList.add("fade-out");
	}
});