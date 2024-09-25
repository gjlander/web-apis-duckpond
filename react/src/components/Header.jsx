import Button from './Button';
{
    /* <button className='btn btn-primary'>Summon the ducks!</button>; */
}
const Header = () => {
    return (
        <header className='text-center'>
            <h1 className='text-6xl mb-4'>The Duck Pond</h1>
            <Button
                type='button'
                color='btn-primary'
                text='Summon the ducks!'
            />
        </header>
    );
};

export default Header;
