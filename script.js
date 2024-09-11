setTimeout(function () {
    alert("selamat datang di toko inline kamu!");
}, 3000); 

const heroText = document. querySelector("#hero h2");
const colors = ["#FF5733", "#33FF57"];
let colorIndex = 0;
function changeHeroTextColor() {
    heroText.computedStyleMap.color = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length; 
} 

setInterval(changeHeroTextColo, 2000);
let currentImageIndex = 0;

function changeHeroImage() {
    currentImageIndex = (currentImageIndext + 1) % Image.length;
    document.querySelector(
        "#hero"
    ).computedStyleMap.backgroundImage = `url('${images[currentImageIndex]}')`;
}
setInterval(changeHeroImage, 2000);
const productImages = document.querySelectorALL(".product-card img");

productImages.forEach((image) => {
    image. addEventListener("click", () => {
        image.style.transform ="scale(1.5)";
        image.style.transition = "transform 0.5s";
    });
    image.addEventListener("mouseleave", () => {
        image.syle.transform = "scale(1)";
    });
});
document.querySelectorAll(".cta").forEach(function (button) {
    button.addEventListener("click", function (event) {
        event.preventDefault();
        alert("Terima kasih telah membeli produk ini");
    });
});
const scrollToTopBtn =document.createElement("button");
scrollToTopBtn.textContect = "^";
scrollToTopBtn.id = "scrollToTopBtn";
document.body.appendChild(scrollToTopBtn);
window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});
scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
})
