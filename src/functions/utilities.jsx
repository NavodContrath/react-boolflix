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
export default showFlag