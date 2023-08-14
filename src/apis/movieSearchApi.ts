import axios from 'axios'

const API_ENDPOINT = 'https://omdbapi.com'
const API_KEY = '7035c60c'

export const fetchMovieData = async (searchQuery: string) => {
  const response = await axios.get(
    `${API_ENDPOINT}?apikey=${API_KEY}${searchQuery}`,
  )
  return response.data
}

export const fetchMovieDetail = async (imdbID: string) => {
  const response = await axios.get(
    `${API_ENDPOINT}?apikey=${API_KEY}&i=${imdbID}`,
  )
  return response.data
}
