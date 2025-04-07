import Languages from "../data/Language";

function showFlag(item) {
    const flagImage = Languages[item.original_language];
    if (flagImage) {
        return (
            <img src={flagImage} alt={item.original_language} width="30" height="20" className="my-3" />)
    } else {
        return (
            <h5 className="card-text">{item.original_language}</h5>)
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

export { showFlag, showRating }