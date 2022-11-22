import lightGallery from "lightgallery";
import lgThumbnail from "lightgallery/plugins/thumbnail"
import lgZoom from "lightgallery/plugins/zoom"

window.lightGallery = lightGallery;
window.lgThumbnail = lgThumbnail;
window.lgZoom = lgThumbnail;

window.$ = window.jQuery = require("jquery");

lightGallery(document.getElementById("event-galleryy"), {
    plugins: [lgZoom, lgThumbnail],
    speed: 500,
});
