
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            alert("✅ تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.");
            form.reset();
        });
    }
});
var mySize = 100;

function updateZoom(type) {
    if (type === 'plus') {
        mySize = mySize + 10;
    } else if (type === 'minus') {
        mySize = mySize - 10;
    }

    if (mySize > 160) { mySize = 160; }
    if (mySize < 70) { mySize = 70; }

    document.documentElement.style.fontSize = mySize + "%";
}

function resetZoom() {
    mySize = 100;
    document.documentElement.style.fontSize = "100%";
}