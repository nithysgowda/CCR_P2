$(document).ready(function(){
    // Contact form submission using AJAX
    $("#contactForm").on("submit", function(e){
        e.preventDefault();
        const name = $("#name").val();
        const email = $("#email").val();
        const message = $("#message").val();

        // Here, you would handle the AJAX request to your server or API.
        // For this example, we'll just log the data.
        console.log({ name, email, message });

        alert("Form submitted!");
    });
});
