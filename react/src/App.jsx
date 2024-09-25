import Header from './components/Header';
import DuckPond from './components/DuckPond';
import DuckForm from './components/DuckForm';

function App() {
    return (
        <div className='p-4'>
            <Header />
            <main>
                <DuckPond />
                <DuckForm />
            </main>
        </div>
    );
}

export default App;
