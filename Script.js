
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

let currentZoom = 100;

function updateZoom(action) {
    if (action === 'plus') {
        currentZoom += 10;
    } else if (action === 'minus') {
        currentZoom -= 10;
    }

    if (currentZoom > 160) currentZoom = 160;
    if (currentZoom < 70) currentZoom = 70;

    document.documentElement.style.fontSize = currentZoom + "%";
}

function resetZoom() {
    currentZoom = 100;
    document.documentElement.style.fontSize = "100%";
}