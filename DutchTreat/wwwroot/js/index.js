$(document).ready( function () {
    var contactForm = $("#contact-form");
    contactForm.hide();

    var button = $("#buy-button");
    button.on("click", function () {
        alert('buying');
    });

    var productInfo = $(".product-props li");
    productInfo.on("click", function () {
        alert("clicked on " + $(this).text());
    });

    var $loginToggle = $("#loginToggle");
    var $popupForm = $(".popup-form");

    $loginToggle.on("click", function () {
        $popupForm.fadeToggle(800);
    })


});


