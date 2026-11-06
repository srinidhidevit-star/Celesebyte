// Load Navbar
fetch("./navbar.html")
    .then(response => {
        if (!response.ok) {
            throw new Error("Navbar file not found");
        }
        return response.text();
    })
    .then(data => {
        document.getElementById("navbar").innerHTML = data;

        const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".nav-items a").forEach(link => {

    if (
        link.getAttribute("href") === currentPage &&
        !link.classList.contains("nav-btn")
    ) {
        link.classList.add("active");
    }

});
    })
    .catch(error => console.error("Navbar loading error:", error));

// Load Footer
fetch("./footer.html")
    .then(response => {
        if (!response.ok) {
            throw new Error("Footer file not found");
        }
        return response.text();
    })
    .then(data => {
        document.getElementById("footer").innerHTML = data;
    })
    .catch(error => console.error("Footer loading error:", error));


// Hamburger menu
function toggleMenu() {
    const navItems = document.getElementById("navItems");
    const menuIcon = document.querySelector(".menu-toggle i");

    if (!navItems || !menuIcon) return;

    navItems.classList.toggle("active");

    if (navItems.classList.contains("active")) {
        menuIcon.classList.replace("fa-bars", "fa-xmark");
    } else {
        menuIcon.classList.replace("fa-xmark", "fa-bars");
    }
}