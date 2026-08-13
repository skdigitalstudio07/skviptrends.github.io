// ===============================
// MOBILE MENU
// ===============================

function toggleMenu() {

const menu = document.getElementById("navMenu");

if (menu) {

menu.classList.toggle("show");

}

}


// ===============================
// COPYRIGHT YEAR
// ===============================

const year = document.getElementById("year");

if (year) {

year.textContent = new Date().getFullYear();

}


// ===============================
// CONTACT FORM
// ===============================

const contactForm =
document.getElementById("contactForm");


if (contactForm) {

contactForm.addEventListener(
"submit",
function(event) {

event.preventDefault();


const name =
document.getElementById("name").value;

const phone =
document.getElementById("phone").value;

const car =
document.getElementById("car").value;

const message =
document.getElementById("message").value;


const whatsappText =
`Hello SK VIP Cars,

Name: ${name}

Phone: ${phone}

Car Interested In: ${car}

Message: ${message}`;


const whatsappURL =
"https://wa.me/919116007402?text=" +
encodeURIComponent(whatsappText);


window.open(
whatsappURL,
"_blank"
);

});

}
