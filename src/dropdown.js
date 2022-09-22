const themeDrops = document.getElementById("theme-drops");
const locationDrops = document.getElementById("location-drops");

const selectTheme = event => {
    if(event.target.classList.contains("theme-item")) {
    themeDrops.innerText = event.target.innerText;
    } else if(event.target.classList.contains("location-item")) {
    locationDrops.innerText = event.target.innerText;
    }
}

window.addEventListener("click", selectTheme);