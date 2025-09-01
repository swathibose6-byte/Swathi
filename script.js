// Scroll to About section on button click

function scrollToAbout() {

  document.getElementById("about").scrollIntoView({ behavior: "smooth" });

}

// Contact form submission

document.getElementById("contactForm").addEventListener("submit", function(e) {

  e.preventDefault();

  alert("Thank you! Your message has been sent.");

});