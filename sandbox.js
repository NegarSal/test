const ul = document.querySelector('.people');

const people = ['Mario', 'Luigi', 'Ryu', 'Shaun', 'Chun-li'];

let html = ``;

people.forEach(person => {
    // create html template
    html += `<li style='color: purple'>${person}</li>`
})

ul.innerHTML = html;