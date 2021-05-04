
/*jshint esversion: 6 */
/* jslint node: true */
/* jshint browser: true */

const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(index => {
        index.addEventListener('click', function(e) {
            e.preventDefault();
            const blockID = index.getAttribute('href');
            document.querySelector('' + blockID).scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });

//menu ============================================
const burgerWrp = document.querySelector(".burger-wrp");
const burger = document.querySelectorAll(".burger");
const menu = document.querySelector('.menu');

const burgerClick = () => {
    burgerWrp.addEventListener("click", () => {
        burger.forEach((item) => {
            item.classList.toggle("active");
        });
        menu.classList.toggle('active');
    });
};
burgerClick();



