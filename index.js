// import ducksInThePond from './ducks.js';

const ducksInThePond = JSON.parse(localStorage.getItem('ducks')) || [];

console.log(ducksInThePond);
const summonBtn = document.querySelector('#summon');
const pond = document.querySelector('#pond');
const form = document.querySelector('#add-form');
// console.log(summonBtn);

const renderDucks = (ducksArray) => {
    // console.log('You clicked the summon button!');
    pond.innerHTML = '';
    console.log(ducksArray);
    ducksArray.forEach((duck) => {
        pond.innerHTML += `<div class="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
        <img
        src=${duck.imgUrl}
        alt=${duck.name} />
        </figure>
        <div class="card-body">
        <h2 class="card-title">${duck.name}</h2>
        <p>${duck.quote}</p>
        </div>
        </div>`;
    });
};
summonBtn.addEventListener('click', () => {
    renderDucks(ducksInThePond);
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.querySelector('#name');
    const imgUrl = document.getElementById('img-url');
    const quote = document.getElementById('quote');

    const newDuck = {
        _id: crypto.randomUUID(),
        name: name.value,
        imgUrl: imgUrl.value,
        quote: quote.value,
    };

    // console.log(newDuck);
    ducksInThePond.push(newDuck);
    localStorage.setItem('ducks', JSON.stringify(ducksInThePond));

    renderDucks(ducksInThePond);
});
