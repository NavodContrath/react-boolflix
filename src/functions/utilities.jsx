import Languages from "../data/Language";

function showFlag(item) {
    const flagImage = Languages[item.original_language];
    if (flagImage) {
        return (
            <img src={flagImage} alt={item.original_language} width="30" height="20" className="my-3" />)
    } else {
        return (
            <h5 className="card-text text-white">{item.original_language}</h5>)
    }
}

function showRating(item) {
    const rating = [1, 2, 3, 4, 5]
    return (
        <>
            {
                rating.map((star) => (
                    star <= Math.ceil(item.vote_average / 2) ?
                        (<i key={star} className="fa-star me-1 fa-solid text-warning"></i>) :
                        (<i key={star} className="fa-star me-1 fa-regular text-secondary"></i>)
                ))
            }
        </>
    )
}
function showCards(arr) {
    return (
        <>
            {
                arr.map(card => {
                    return (
                        <div className="col-lg-2 col-md-4 col-sm-6  mb-4 d-flex " key={card.id}>
                            <div className="card bg-black h-100 w-100" >
                                <img className="card-img-top img-fluid" src={(card.poster_path !== null) ? `https://image.tmdb.org/t/p/w342` + card.poster_path : "/images/error.jpg"} alt="Title" />
                                <div className="card-body text-white">
                                    <h5 className="card-title">{card.title || card.name}</h5>
                                    <div className="flag-img mt-2">
                                        {showFlag(card)}
                                    </div>
                                    <div className="star-rating mt-2">
                                        {showRating(card)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </>
    )


}

export { showFlag, showRating, showCards }