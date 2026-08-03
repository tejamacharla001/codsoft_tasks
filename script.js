// Mobile Menu

const menuBtn=document.querySelector(".menu-btn");
const navLinks=document.querySelector(".nav-links");

menuBtn.addEventListener("click",()=>{

navLinks.classList.toggle("active");

});

// Contact Form Validation

const form=document.getElementById("contactForm");

form.addEventListener("submit",function(e){

e.preventDefault();

const name=document.getElementById("name").value.trim();

const email=document.getElementById("email").value.trim();

const message=document.getElementById("message").value.trim();

const error=document.getElementById("error");

const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(name===""){

error.innerHTML="Please enter your name.";

return;

}

if(!emailPattern.test(email)){

error.innerHTML="Enter a valid email.";

return;

}

if(message.length<10){

error.innerHTML="Message should contain at least 10 characters.";

return;

}

error.style.color="green";

error.innerHTML="Form submitted successfully!";

form.reset();

});