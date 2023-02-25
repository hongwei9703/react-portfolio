import React, { useState } from "react";
import axios from "axios";
import Image from "next/legacy/image";

const Form = () => {
  const [input, setInput] = useState("");
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${input.toLowerCase()}`)
      .then((res) => {
        setPokemon(res.data);
        setError("");
      })
      .catch((err) => {
        setPokemon(null);
        setError("Pokemon not found.");
      });
  };

  return (
    <section className="max-w-[1400px] h-[780px] w-full m-auto my-10 relative group rounded-2xl duration-500 shadow-lg dark:shadow-blue-500/50">
        <div className="p-10">
            <form onSubmit={handleSubmit}>
                <label>
                Enter Pokemon Name or Number:
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                </label>
                <button type="submit">Search</button>
            </form>
            {pokemon && (
                <div>
                <h2>{pokemon.name}</h2>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                </div>
            )}
            {error && <p>{error}</p>}
        </div>
    </section>
  );
};

export default Form;