"use strict";
// // import {product} from './interfaces/interface'
// let box = document.getElementById("box") as HTMLElement;
// let ham = document.getElementById("hambur") as HTMLElement; 
// let down = false;
// function toggleMenu(e : any) {
//     if (!down) {
//         box.style.height = "288px";
//         box.style.opacity = "1";
//         down = true;
//     }
//     ham.addEventListener("mouseleave", function (e) {
//         box.style.height = "0px";
//         box.style.opacity = "0";
//         down = false;
//     });
// }
// // notification bar
// let notify = document.getElementById("notify") as HTMLElement;
// let menuitem = document.getElementById("menuitem") as HTMLElement; 
// let down1 = false;
// function toggleNotify(e : any) {
//     if (!down1) {
//         notify.style.height = "594px";
//         notify.style.opacity = "1";
//         down1 = true;
//         // box.style.display = inline - block;
//     }
//     menuitem.addEventListener("mouseleave", function (e) {
//         notify.style.height = "0px";
//         notify.style.opacity = "0";
//         // box.style.display = none;
//         down1 = false;
//     });
// };
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// let Alert = document.getElementById("alerts") as HTMLElement;
// let alertItem = document.getElementById("alert-item") as HTMLElement;
// let down2 = false;
// function toggleAlert(e : any) {
//     if (!down2) {
//         Alert.style.height = "582px";
//         Alert.style.opacity = "1";
//         down2 = true;
//         // box.style.display = inline - block;
//     }
//     alertItem.addEventListener("mouseleave", function (e) {
//         Alert.style.height = "0px";
//         Alert.style.opacity = "0";
//         // box.style.display = none;
//         down2= false;
//     });
// };
const menuContentSubHeading = document.getElementById("nav-content-heading");
const menuUsersSubHeading = document.getElementById("nav-users-heading");
const menuReportsSubHeading = document.getElementById("nav-reports-heading");
const menuAdminSubHeading = document.getElementById("nav-admin-heading");
const navClickHandler = (block, sub, arrow) => {
    const menuBlock = document.getElementById(block);
    const menuNavSub = document.getElementById(sub);
    const menuArrow = document.getElementById(arrow);
    const display = menuNavSub.style.display;
    if (display == 'none' || display == '') {
        menuNavSub.style.display = "block";
        menuBlock.style.backgroundColor = "#F3F3F3";
        menuArrow.style.transform = "rotate(180deg)";
    }
    else {
        menuNavSub.style.display = "none";
        menuBlock.style.backgroundColor = "#FFFFFF";
        menuArrow.style.transform = "";
    }
};
menuContentSubHeading.addEventListener('click', () => {
    navClickHandler("nav-content", "nav-content-sub", "nav-arrow-1");
});
menuUsersSubHeading.addEventListener('click', () => {
    navClickHandler("nav-users", "nav-users-sub", "nav-arrow-2");
});
menuReportsSubHeading.addEventListener('click', () => {
    navClickHandler("nav-reports", "nav-reports-sub", "nav-arrow-3");
});
menuAdminSubHeading.addEventListener('click', () => {
    navClickHandler("nav-admin", "nav-admin-sub", "nav-arrow-4");
});
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('../data/data.json');
        const course = yield response.json();
        const { data } = course;
        // console.log(data);
        return data;
    });
}
const renderData = (data) => {
    const courseContainer = document.querySelector(".courses");
    data.forEach((item) => {
        courseContainer.insertAdjacentHTML("beforeend", `  <div class="card">
            <div class="card-header">
                <div class="course-image">
                    <img src=${item.heading.cover} alt="course 1">
                </div>
                <div class="course-info">
                    <div class="title">
                    ${item.heading.isExpired ? (`<span class="expired">EXPIRED</span>`) : (`<span></span>`)} 
                        <h2 tabindex="0">${item.heading.title}</h2>
                        <img class=" ${item.favourite.isDisable ? 'disabled-star' : ''}" src="${item.favourite.icon}" alt="">
                    </div>
                    <div class="grade-info"><span class="subject">${item.class.subject}</span><span class="line">|</span><span
                            class="grade">${item.class.grade}</span>
                        <span class="green-text">${item.class.greenText}</span></div>
                    <p class="syllabus"><span class="units bold-text">${item.syllabus.units}</span> ${item.syllabus.unitsText} <span
                            class="lessons bold-text">${item.syllabus.lessons}</span> Lessons <span class="topics bold-text">${item.syllabus.topics}</span>
                            ${item.syllabus.topicsText}</p>
                    <div class="teacher">
                        <select id="teacher" aria-label="teacher" name="teacher">
                            <option value="frank">${item.teacher}</option>
                        </select>
                    </div>
                    <p class="students">${item.duration.students}${item.duration.isDashVisible ? (`<span class="line">|</span>`) : (`<span></span>`)} <span class="date">${item.duration.date}  </span></p>
                </div>
            </div>
            <div class="options">
            <img class="${item.preview.isDisable ? 'disabled' : ''}" src="${item.preview.icon}" alt="preview">
            <img class="${item.manage.isDisable ? 'disabled' : ''}" src="${item.manage.icon}" alt="manage">
            <img class="${item.submission.isDisable ? 'disabled' : ''}" src="${item.submission.icon}" alt="submission">
            <img class="${item.report.isDisable ? 'disabled' : ''}" src="${item.report.icon}" alt="report">
            </div>
        </div>`);
    });
};
(() => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield fetchData();
    renderData(products);
}))();
