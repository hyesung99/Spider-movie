import axios from 'axios'
// import dotenv from 'dotenv'
// dotenv.config()

// const { API_KEY, API_ENDPOINT } = process.env

const API_ENDPOINT = 'https://omdbapi.com'
const API_KEY = '7035c60c'

export const fetchMovieData = async (searchQuery: string) => {
  const response = await axios.get(
    `${API_ENDPOINT}?apikey=${API_KEY}${searchQuery}`
  )
  return response.data
}
