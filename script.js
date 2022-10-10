const header = document.getElementById('header');
const content = document.getElementById('content');
const container = document.querySelector('.app');

const btn = document.querySelector('button');

function getJoke() {

    fetch('https://api.blablagues.net/?rub=blagues')
    .then((res) => res.json())
    .then((data) => {
        console.log(data)

        header.textContent = data.data.content.text_head;
        content.textContent = data.data.content.text !== ""
            ? data.data.content.text : data.data.content.text_hidden;
    });
}

getJoke();

container.addEventListener('click' , getJoke);
btn.addEventListener('click' , getJoke);