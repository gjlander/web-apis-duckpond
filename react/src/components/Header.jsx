// import Button from './Button';
// import ducksInThePond from '../ducks';
// import { getDucks } from '../data/ducks';

// {
//     /*setDucks*/
// }
const Header = () => {
    // const handleClick = async () => {
    //     const ducksFromDatabase = await getDucks();
    //     setDucks(ducksFromDatabase);
    // };

    return (
        <header className='text-center'>
            <h1 className='text-6xl mb-4'>The Duck Pond</h1>
            {/* <Button
                onClick={handleClick}
                text='Summon the ducks'
                type='button'
                color='btn-primary'
            /> */}
        </header>
    );
};

export default Header;
