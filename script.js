document.addEventListener('DOMContentLoaded', (event) => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.documentElement;

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
        updateIcon(savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        body.classList.add('dark-mode');
        updateIcon('dark-mode');
    }

});



    // Show Certificates List Modal
    document.getElementById("view-certificates").onclick = function() {
        document.getElementById("certificate-modal").style.display = "flex";
        document.body.classList.add("modal-open"); // lock background scroll
    };

    // Close Certificates List Modal
    document.getElementById("close-modal").onclick = function() {
        document.getElementById("certificate-modal").style.display = "none";
        document.body.classList.remove("modal-open"); // unlock scroll
    };

    // Open single certificate modal
    function openCert(imgSrc, title) {
        document.getElementById("cert-image").src = imgSrc;
        document.getElementById("cert-title").innerText = title;
        document.getElementById("certificate-modal").style.display = "none"; 
        document.getElementById("image-modal").style.display = "flex"; 
        document.body.classList.add("modal-open");
    }

    // Close single certificate modal
    function closeImageModal() {
        document.getElementById("image-modal").style.display = "none";
        document.body.classList.remove("modal-open");
    }
