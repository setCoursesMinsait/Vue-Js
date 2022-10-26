import axios from "axios"

const marvelApi = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public/characters',
  params: {
    apikey: 'b47f633adb06841bbe43ff56453ae605',
    ts: '1',
    hash: 'c860118b7dc3c1d048af7e3369ff8685'
  }
})

export default marvelApi