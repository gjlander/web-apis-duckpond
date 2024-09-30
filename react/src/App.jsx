import { useState, useEffect } from 'react';

import Header from './components/Header';
import DuckPond from './components/DuckPond';
import DuckForm from './components/DuckForm';
import { getDucks } from './data/ducks';

function App() {
    const [ducks, setDucks] = useState([]);

    useEffect(() => {
        const renderDucks = async () => {
            const ducksFromDatabase = await getDucks();
            setDucks(ducksFromDatabase);
        };
        renderDucks();
    }, []);
    return (
        <div className='p-4'>
            <Header setDucks={setDucks} />
            <main>
                <DuckPond ducks={ducks} />
                <DuckForm setDucks={setDucks} />
            </main>
        </div>
    );
}

export default App;
