const DuckCard = ({ imgUrl, name, quote }) => {
    return (
        <div className='card card-compact bg-base-100 w-96 shadow-xl'>
            <figure>
                <img src={imgUrl} alt={name} />
            </figure>
            <div className='card-body'>
                <h2 className='card-title'>{name}</h2>
                <p>{quote}</p>
            </div>
        </div>
    );
};

export default DuckCard;
