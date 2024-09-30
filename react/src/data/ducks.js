const getDucks = async () => {
    try {
        const res = await fetch('https://duckpond-89zn.onrender.com/ducks');
        console.log(res);
        if (!res.ok) {
            throw new Error(`Something went wrong! Error: ${res.status}`);
        }
        const data = await res.json();

        return data;
    } catch (err) {
        console.error(err);
    }
};

const createDuck = async (newDuck) => {
    try {
        const res = await fetch('https://duckpond-89zn.onrender.com/ducks', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(newDuck),
        });

        const data = await res.json();
        return data;
    } catch (err) {
        console.error(err);
    }
};

export { getDucks, createDuck };
