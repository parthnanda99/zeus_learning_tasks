let box = document.getElementById("box") as HTMLElement;
let ham = document.getElementById("hambur") as HTMLElement; 
let down = false;
function toggleMenu(e : any) {
    if (!down) {
        box.style.height = "288px";
        box.style.opacity = "1";
        down = true;
    }
    ham.addEventListener("mouseleave", function (e) {
        box.style.height = "0px";
        box.style.opacity = "0";
        down = false;
    });
}
// notification bar
let notify = document.getElementById("notify") as HTMLElement;
let menuitem = document.getElementById("menuitem") as HTMLElement; 
let down1 = false;
function toggleNotify(e : any) {
    if (!down1) {
        notify.style.height = "594px";
        notify.style.opacity = "1";
        down1 = true;
        // box.style.display = inline - block;
    }
    menuitem.addEventListener("mouseleave", function (e) {
        notify.style.height = "0px";
        notify.style.opacity = "0";
        // box.style.display = none;
        down1 = false;
    });
}
