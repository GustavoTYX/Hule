const clickButton = document.getElementById('clickButton');
const expValue = document.getElementById('expValue');
const expRequired = document.getElementById('expRequired');
const moneyValue = document.getElementById('moneyValue');
const levelValue = document.getElementById('levelValue');
const shopButton = document.getElementById('shopButton');
const profileButton = document.getElementById('profileButton');
const overlay = document.getElementById('overlay');
const shopPopup = document.getElementById('shopPopup');
const profilePopup = document.getElementById('profilePopup');
const closeShop = document.getElementById('closeShop');
const closeProfile = document.getElementById('closeProfile');
const playTime = document.getElementById('playTime');

let exp = 0;
let money = 0;
let level = 1;
let playHours = 0;

clickButton.addEventListener('click', () => {
    exp += 10;
    expValue.textContent = exp;

    if (exp >= parseInt(expRequired.textContent)) {
        level++;
        exp = 0;
        expValue.textContent = exp;
        levelValue.textContent = level;
        expRequired.textContent = level * 10;
    }
});

shopButton.addEventListener('click', () => {
    overlay.style.display = 'flex';
    shopPopup.style.display = 'block';
});

profileButton.addEventListener('click', () => {
    overlay.style.display = 'flex';
    profilePopup.style.display = 'block';
});

closeShop.addEventListener('click', () => {
    overlay.style.display = 'none';
    shopPopup.style.display = 'none';
});

closeProfile.addEventListener('click', () => {
    overlay.style.display = 'none';
    profilePopup.style.display = 'none';
});

setInterval(() => {
    playHours++;
    playTime.textContent = playHours + " hours";
}, 3600000); // Update playtime every hour (in milliseconds)
