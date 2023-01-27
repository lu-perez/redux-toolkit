import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from './store/slices/pokemon/thunks'

const PokemonApp = () => {
  const dispatch = useDispatch()
  const { isLoading, pokemons, page } = useSelector(state => state.pokemons)

  useEffect(() => {
    dispatch(getPokemons())
  }, [])

  return (
    <>
      <h1>Pokemon</h1>
      <hr />
      <span>Loading: {isLoading ? 'True': 'False'}</span>
      <ul>
        {
          pokemons.map(poke => (
            <li key={poke.name}>{poke.name}</li>
          ))
        }
      </ul>
      <button
        type="button"
        disabled={isLoading}
        onClick={() => dispatch(getPokemons(page))}
      >
        Next
      </button>
    </>
  )
}

export default PokemonApp