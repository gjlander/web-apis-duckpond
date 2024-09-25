// import ducksInThePond from './ducks.js';

// const ducksInThePond = JSON.parse(localStorage.getItem('ducks')) || [];

// console.log(ducksInThePond);
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

const errorHandler = (error) => {
    console.error(error);
    const h2 = document.createElement('h2');
    h2.classList.add(
        'inline-block',
        'm-auto',
        'text-6xl',
        'mb-6',
        'text-red-600'
    );
    h2.textContent = error;
    pond.appendChild(h2);
};
// summonBtn.addEventListener('click', () => {
//     fetch('https://duckpond-89zn.onrender.com/ducks')
//         .then((res) => {
//             console.log(res);
//             if (!res.ok) {
//                 throw new Error(`Something went wrong! Error: ${res.status}`);
//             }
//             return res.json();
//         })
//         .then((data) => renderDucks(data))
//         .catch((err) => errorHandler(err));

//     // renderDucks(ducksInThePond);
// });

summonBtn.addEventListener('click', async () => {
    try {
        const res = await fetch('https://duckpond-89zn.onrender.com/ducks');
        console.log(res);
        if (!res.ok) {
            throw new Error(`Something went wrong! Error: ${res.status}`);
        }
        const data = await res.json();

        renderDucks(data);
    } catch (err) {
        errorHandler(err);
    }
    // renderDucks(ducksInThePond);
});

// form.addEventListener('submit', (event) => {
//     event.preventDefault();

//     const name = document.querySelector('#name');
//     const imgUrl = document.getElementById('img-url');
//     const quote = document.getElementById('quote');

//     const newDuck = {
//         _id: crypto.randomUUID(),
//         name: name.value,
//         imgUrl: imgUrl.value,
//         quote: quote.value,
//     };

//     // console.log(newDuck);
//     ducksInThePond.push(newDuck);
//     localStorage.setItem('ducks', JSON.stringify(ducksInThePond));

//     renderDucks(ducksInThePond);
// });

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = document.querySelector('#name');
    const imgUrl = document.getElementById('img-url');
    const quote = document.getElementById('quote');

    const newDuck = {
        name: name.value,
        imgUrl: imgUrl.value,
        quote: quote.value,
    };
    try {
        const res = await fetch('https://duckpond-89zn.onrender.com/ducks', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(newDuck),
        });

        const data = await res.json();
        // console.log(data);
        renderDucks(data);
        form.reset();
    } catch (err) {
        errorHandler(err);
    }
});
