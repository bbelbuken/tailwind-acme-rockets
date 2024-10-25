const initApp = () => {
    const hamburgerBtn = document.getElementById("hamburger-button")
    const mobileMenu = document.getElementById("mobile-menu")

    const toggleMenu = () => {
        mobileMenu.classList.toggle("hidden")
        mobileMenu.classList.toggle("flex")
        hamburgerBtn.classList.toggle("toggle-btn")
    }

    hamburgerBtn.addEventListener("click", toggleMenu)
    mobileMenu.addEventListener("click", toggleMenu)

}
document.addEventListener('DOMContentLoaded', initApp) 
// we don't directly call the function bc the buttons won't be able to selected yet.