let input2 = document.getElementById('numberinput')

let number = parseInt(numberinput.value);
let form = document.getElementById('form');
let p = document.getElementById('text-content');

form.addEventListener('submit', onButtonClicked);

function onButtonClicked(event) {
    let number = parseInt(numberinput.value);
    event.preventDefault();
    p.innerHTML = "";
for (let i = 0; i < numberinput.value; i++) {
    
    p.innerHTML += "Test" + "<br>";
    
    
}
}
