document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".f-carousel__slide");

    slides.forEach(slide => {
        const img = slide.querySelector("img");
        const fileName = decodeURIComponent(img.src.split('/').pop()); // Извлечение и декодирование имени файла из пути
        const xpComment = img.getAttribute('data-xpcomment') || "No XPComment available";

        const caption = slide.querySelector(".caption");
        caption.innerHTML = `${fileName}<br>${xpComment}`;
    });
});