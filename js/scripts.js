document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".f-carousel__slide");

    slides.forEach(slide => {
        const img = slide.querySelector("img");
        const fileName = decodeURIComponent(img.src.split('/').pop());
        const xpComment = EXIF.getData(img, function() {
            const xpComment = EXIF.getTag(this, 'XPComment');
            console.log("XPComment:", xpComment);
        });

        const caption = slide.querySelector(".caption");
        caption.innerHTML = `${fileName}<br>${xpComment}`;
    });
});