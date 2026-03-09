
document.addEventListener("DOMContentLoaded", function(){

    const form = document.querySelector("form");

    form.addEventListener("submit", function(e){
        e.preventDefault();

        alert("✅ تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.");

        form.reset();
    });

});