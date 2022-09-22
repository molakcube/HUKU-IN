const themeDrops = document.getElementById("theme-drops");

const selectTheme = event => {
    if(event.target.classList == "dropdown-item") {
    themeDrops.innerText = event.target.innerText;
    }
};

window.addEventListener("click", selectTheme);