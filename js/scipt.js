let button_ins = document.getElementById("invis");
const info_cont = document.querySelectorAll('.info_container');

button_ins.addEventListener("click", () => {
    info_cont.forEach(element => element.remove());
});
