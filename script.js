const menubar = document.querySelector("#menu-icon");
const slidebar = document.querySelector(".sidebar");
const container = document.querySelector(".main-video-content")

menubar.addEventListener("click", function () {
    slidebar.classList.toggle("icon-change");
    container.classList.toggle("big-main-video-content");
    container.classList.toggle("big-contant");
});
