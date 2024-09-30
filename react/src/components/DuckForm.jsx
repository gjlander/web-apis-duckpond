import { useState } from 'react';
import Button from './Button';
import { createDuck } from '../data/ducks';

const DuckForm = ({ setDucks }) => {
    const [form, setForm] = useState({
        name: '',
        imgUrl: '',
        quote: '',
    });
    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(form);
        const updatedDucks = await createDuck(form);
        console.log(updatedDucks);
        setDucks(updatedDucks);
        setForm({
            name: '',
            imgUrl: '',
            quote: '',
        });
    };
    // const [imgUrlValue, setImgUrlValue] = useState('');
    return (
        <section className='flex flex-col items-center gap-4 border-2 rounded-lg p-4 mx-8'>
            <h2 className='text-4xl'>Add a new duck to the pond!</h2>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-3/4'>
                <input
                    name='name'
                    type='text'
                    placeholder="What is your duck's name?"
                    className='input input-bordered w-full'
                    required
                    value={form.name}
                    onChange={handleChange}
                />
                <input
                    name='imgUrl'
                    type='url'
                    placeholder='What does your duck look like?'
                    className='input input-bordered w-full'
                    required
                    value={form.imgUrl}
                    onChange={handleChange}
                />
                <input
                    name='quote'
                    type='text'
                    placeholder='What does your duck say?'
                    className='input input-bordered w-full'
                    value={form.quote}
                    onChange={handleChange}
                />
                <Button type='submit' text='Add duck' color='btn-secondary' />
                {/* <button type='submit' className='btn btn-secondary'>
                    Add duck
                </button> */}
            </form>
        </section>
    );
};

export default DuckForm;
