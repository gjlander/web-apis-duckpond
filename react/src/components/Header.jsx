import Button from './Button';

const ducksInThePond = [
    {
        _id: 1,
        name: 'Sir Quacks-a-lot',
        imgUrl: 'https://cdn11.bigcommerce.com/s-nf2x4/images/stencil/1280x1280/products/430/7841/Knight-Rubber-Duck-Yarto-2__93062.1576270637.jpg?c=2',
        quote: 'I will slay your bugs!',
    },
    {
        _id: 2,
        name: 'Captain Quack Sparrow',
        imgUrl: 'https://www.veniceduckstore.it/cdn/shop/products/Captain-Quack-Rubber-Duck-slant.jpg',
        quote: "You'll always remember this as the day you almost squeezed Captain Quack Sparrow.",
    },
    {
        _id: 3,
        name: 'Ruder Duck',
        imgUrl: 'https://i.ebayimg.com/images/g/vToAAOSwr6hdW8L8/s-l1600.jpg',
        quote: '#@*% off! Debug your own code!',
    },
    {
        _id: 4,
        name: 'Darth Quacker',
        imgUrl: 'https://www.duckshop.de/media/image/3c/ce/25/Black_Star_Badeente_58495616_4_600x600.jpg',
        quote: 'No, I am your debugger!',
    },
    {
        _id: 5,
        name: 'Spider-Duck',
        imgUrl: 'https://i5.walmartimages.com/seo/Spidy-Super-Hero-Rubber-Duck_a42dbd68-e8cd-41f2-ac6d-c812a3a00339.bc3415f3b98088ac58eaeda1f06c10c9.png?odnHeight=640&odnWidth=640&odnBg=FFFFFF',
        quote: 'Does whatever a Spider-Duck can!',
    },
    {
        _id: 6,
        name: 'Sr Developer Duckbert',
        imgUrl: 'https://images.promotionsonly.com.au/product/it--rubber-duck.jpg',
        quote: 'Come to me with your BIG bugs!',
    },
    {
        _id: 7,
        name: 'Quacker',
        imgUrl: 'https://m.media-amazon.com/images/I/61iqP4VFsEL.__AC_SX300_SY300_QL70_ML2_.jpg',
        quote: 'Why so serious?',
    },
    {
        _id: 8,
        name: 'Mad Quacker',
        imgUrl: 'https://duckycity.com/cdn/shop/products/SG-REYTD-JCNYO_1024x1024_clipped_rev_1-min_540x.jpeg?v=1505504539',
        quote: 'Be careful, or I might just make your bugs into SUPER bugs!',
    },
    {
        _id: 9,
        name: 'Ducklock Holmes',
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbw5dFwbwPw_Uf_KTKU94mljxvtCcZzMCmKA&s',
        quote: '',
    },
];
const Header = ({ setDucks }) => {
    return (
        <header className='text-center'>
            <h1 className='text-6xl mb-4'>The Duck Pond</h1>
            <Button
                onClick={() => setDucks(ducksInThePond)}
                text='Summon the ducks'
                type='button'
                color='btn-primary'
            />
        </header>
    );
};

export default Header;
