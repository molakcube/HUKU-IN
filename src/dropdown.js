const themeDrops = document.getElementById("theme-drops");
const foodTheme = document.getElementById("food-theme");
const healingTheme = document.getElementById("healing-theme");
const shoppingTheme = document.getElementById("shopping-theme");
const tourTheme = document.getElementById("tour-theme");

const themeSelect = document.getElementById("theme-select");

const selectTheme = event => {
    themeDrops.innerText = event.target.innerText;
}

foodTheme.addEventListener("click", selectTheme);
healingTheme.addEventListener("click", selectTheme);
shoppingTheme.addEventListener("click", selectTheme);
tourTheme.addEventListener("click", selectTheme);