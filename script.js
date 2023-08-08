const clickButton = document.getElementById('clickButton');
const expValue = document.getElementById('expValue');
const moneyValue = document.getElementById('moneyValue');

let exp = 0;
let money = 0;

clickButton.addEventListener('click', () => {
    exp += 10;
    money += 5;
    expValue.textContent = exp;
    moneyValue.textContent = money;
});
