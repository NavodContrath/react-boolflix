import { createContext, useContext, useEffect, useState } from "react";
const api_key = import.meta.env.VITE_MOVIE_DB_API_KEY;
const GlobalContext = createContext()
const base_movies_api_url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=avatar`
console.log(api_key)

function GlobalProvider({ children }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(base_movies_api_url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setMovies(data.results)
            })
            .catch(err => console.log(err.message))
    }, [])

    console.log(movies)


    return (
        <GlobalContext.Provider value={{ movies, setMovies, }}>
            {children}
        </GlobalContext.Provider>
    );
}

function useGlobalContext() {
    const context = useContext(GlobalContext);
    return context;
}

export { GlobalProvider, useGlobalContext }
