import axios from 'axios'
import { setPokemons, startLoadingPokemons } from './pokemonSlice'

export const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons())
    try {
      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`)
      console.log(data)
      dispatch(setPokemons({ 
        pokemons: data.results,
        page: page + 1
      }))
    } catch (error) {
      console.log(error)
    }
  }
}
