import Button from './Button';

const DuckForm = () => {
    return (
        <section className='flex flex-col items-center gap-4 border-2 rounded-lg p-4 mx-8'>
            <h2 className='text-4xl'>Add a new duck to the pond!</h2>
            <form id='add-form' className='flex flex-col gap-4 w-3/4'>
                <input
                    id='name'
                    type='text'
                    placeholder="What is your duck's name?"
                    className='input input-bordered w-full'
                    required
                />
                <input
                    id='img-url'
                    type='url'
                    placeholder='What does your duck look like?'
                    className='input input-bordered w-full'
                    required
                />
                <input
                    id='quote'
                    type='text'
                    placeholder='What does your duck say?'
                    className='input input-bordered w-full'
                />
                <Button type='submit' color='btn-secondary' text='Add duck' />
                {/* <button type='submit' className='btn btn-secondary'>
                    Add duck
                </button> */}
            </form>
        </section>
    );
};

export default DuckForm;
