function showModal() {
    let modal = document.getElementById("model-pelicula");
    modal.classList.add("active");
}
function closeModal(){
    let modal = document.getElementById("model-pelicula");
    modal.classList.remove("active");
}
function openPanel(){
    let panel = document.querySelector(".cont-home__panel");
    panel.classList.add("active");
}
function closePanel(){
    let panel = document.querySelector(".cont-home__panel");
    panel.classList.remove("active");
}