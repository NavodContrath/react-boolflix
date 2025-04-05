import { createContext, useContext, useEffect, useState } from "react";
const api_key = import.meta.env.VITE_MOVIE_DB_API_KEY;
const GlobalContext = createContext()
console.log(api_key)

function GlobalProvider({ children }) {
    const [movies, setMovies] = useState([]);
    const [moviesName, setMoviesName] = useState("")
    const [searchQuery, setSearchQuery] = useState("")
    const base_movies_api_url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${moviesName}`
    console.log(moviesName)


    useEffect(() => {
        fetch(base_movies_api_url)
            .then(res => res.json())
            .then(data => {
                setMovies(data.results)
            })
            .catch(err => console.log(err.message))
    }, [searchQuery])
    console.log(movies)


    return (
        <GlobalContext.Provider value={{ movies, moviesName, setMoviesName, setSearchQuery }}>
            {children}
        </GlobalContext.Provider>
    );
}

function useGlobalContext() {
    const context = useContext(GlobalContext);
    return context;
}

export { GlobalProvider, useGlobalContext }
