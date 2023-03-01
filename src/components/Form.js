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
        console.log(res.data);
      })
      .catch((err) => {
        setPokemon(null);
        setError("Pokemon not found.");
      });
  };

  return (
    <section>
      <h3 className="text-2xl uppercase py-1 text-gray-500 tracking-[20px] dark:text-white m-auto text-center font-bold">
        Playing with API
      </h3>
      <div className="p-10 max-w-[1400px] h-[780px] w-full m-auto my-10 relative group rounded-2xl duration-500 shadow-lg dark:shadow-blue-500/50">
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center">
            <div className="mb-3 xl:w-96">
              <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="relative m-0 block w-[1%] min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary-600 focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                  placeholder="Enter Pokemon Name or Number"
                  aria-label="Search" />
                <button
                  type="submit"
                  className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
                  id="basic-addon2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5">
                    <path
                      fillRule="evenodd"
                      d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                      clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </form>
        {pokemon && (
            <div>
              <h2>{pokemon.name}</h2>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
              {pokemon.abilities.map(ability => <span>{ability.ability.name}</span>)}
            </div>
        )}
        {error && <p>{error}</p>}
      </div>
    </section>
  );
};

export default Form;