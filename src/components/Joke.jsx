import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import '../styles/Joke.css'
import rings from '../images/rings.svg'; 

const Joke = () => {
    
    const [joke, getJoke] = useState(""); 
    const [loading, setLoading] = useState(true); 
    const [fetching, setFetching] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            const result = await axios("https://v2.jokeapi.dev/joke/Miscellaneous,Pun,Spooky")

            console.log(result.data)
            getJoke(`${result.data.setup} 
            ${result.data.delivery}`)
            setLoading(false)
        }
        fetchData();
    }, [fetching])

    return (
        <div className="joke-container">
            <section>
                { loading ? (
                    <img src={rings} alt="loading"/>
                ) : (
                    <h1>{joke}</h1>
                )}
            </section>
            <button onClick={() => setFetching(!fetching)}>
                Tell me another joke
            </button>
        </div>
    )
}

export default Joke; 