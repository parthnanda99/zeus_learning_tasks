"use strict";
let box = document.getElementById("box");
let ham = document.getElementById("hambur");
let down = false;
function toggleMenu(e) {
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
let notify = document.getElementById("notify");
let menuitem = document.getElementById("menuitem");
let down1 = false;
function toggleNotify(e) {
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
