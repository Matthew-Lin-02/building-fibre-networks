/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2025 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

var stickyBanner = document.querySelector('.sticky-banner');
var upArrow = document.querySelector('.fixed-up-arrow')
console.log(document.querySelector('.sticky-banner'));


var stickyOn = 130;
var upArrowOn = 350;
// const windowInnerWidth = window.innerWidth;
// if(windowInnerWidth <= 993){
//     stickyOn = 2;
// }


function scrollPage(){
    var sy = window.scrollY;
    if(sy >= stickyOn){
        stickyBanner.setAttribute("id", 'navbar-fixed-top');
        // stickyBanner.classList.add('navbar-fixed-top');  
    }else{
        // stickyBanner.classList.remove('navbar-fixed-top');
        stickyBanner.removeAttribute("id", 'navbar-fixed-top');
    }

    if(sy >= upArrowOn){
        upArrow.classList.add("show-up-arrow");
    }else{
        upArrow.classList.remove("show-up-arrow");
    }
}
// window.addEventListener('scroll', () => console.log('Scrolling!'));
window.addEventListener('scroll', scrollPage);

// Get the button that opens the modal
var modalButtons = document.querySelectorAll(".modal-button");
var modal = document.querySelector(".modal-background");
var sidenav = document.querySelector(".sidenav");

// Open sidebar
for (btn of modalButtons) {
    btn.onclick = function () {
        modal.classList.add("visible");
        sidenav.classList.add("visible");
    };
}

// Close sidebar when clicking outside
window.onclick = function (event) {
    if (event.target == modal) {
        modal.classList.remove("visible");
        sidenav.classList.remove("visible");
    }
};

var modalCloseButton = document.querySelector(".modal-close-button");

modalCloseButton.onclick = function() {
    modal.classList.remove("visible");
    sidenav.classList.remove("visible");
}

const form = document.getElementById("contact-form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const phone = document.getElementById('phone');
    const company = document.getElementById('company');

    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const messageValue = message.value.trim();
    const companyValue = company.value.trim();

    let isValid = true;
    console.log("formentered")
    // Validate Name (non-empty)
    if (nameValue === "") {
        console.log("namenempty")
        name.classList.add("error");
        isValid = false;
    } else {
        name.classList.remove("error");
    }

    // Validate Email (valid email format)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailValue)) {
        email.classList.add("error");
        isValid = false;
    } else {
        
    }

    // Validate Message (non-empty)
    if (messageValue === "") {
        message.classList.add("error");
        isValid = false;
    } else {
        message.classList.remove("error");
    }

    // Submit the form if all validations pass
    if (isValid) {
        const subject = `Contact Form Submission from ${nameValue}`;
        const body = `
            Name: ${nameValue}
            Email: ${emailValue}
            Phone: ${phoneValue}
            Company: ${companyValue}
            Message: ${messageValue}
        `;
    
        const mailtoURL = `mailto:info@buildingfibrenetworks.com.au?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
        // Trigger the email client
        window.location.href = mailtoURL;
        name.textContent = "";
        email.textContent = "";
        phone.textContent ="";
        company.textContent = "";
        message.textContent = "";
    }


});