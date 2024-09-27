import Header from './components/Header';
import DuckPond from './components/DuckPond';
import DuckForm from './components/DuckForm';
import { useState } from 'react';

function App() {
    const [ducks, setDucks] = useState([]);
    return (
        <div className='p-4'>
            <Header setDucks={setDucks} />
            <main>
                <DuckPond ducks={ducks} />
                <DuckForm />
            </main>
        </div>
    );
}

export default App;
