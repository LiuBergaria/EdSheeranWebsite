var iFrameContainer = document.getElementById("iFrameContainer");

function closeIFrame() {
	iFrameContainer.style.display = "none";
}

function openIFrame(site) {
	iFrameContainer.style.display = "flex";
}

/* Adiciona o evento para quando scrollar a página */
document.addEventListener("scroll", function() {
	if (window.pageYOffset > 200) {
		document.getElementById('toTopMenu').classList.remove("fade-out");
	} else {
		document.getElementById('toTopMenu').classList.add("fade-out");
	}
});