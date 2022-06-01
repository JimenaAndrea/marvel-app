import axios from "axios";
import md5 from "md5";
import { privateMarvelAPIKey, publicMarvelAPIKey } from "../../config";

export function requestCharacterById(id) {
  const ts = String(new Date().valueOf());
  const endpoint = `https://gateway.marvel.com/v1/public/characters/${id}`;
  const hash = md5(ts + privateMarvelAPIKey + publicMarvelAPIKey );
  const url = `${endpoint}?&ts=${ts}&apikey=${publicMarvelAPIKey}&hash=${hash}`;

  return(
    axios.get(url)
      .then(response => {
        return response.data.data.results[0]
    })
  ) 
}

export function requestCharacters(context, limit = 30) {
  const ts = String(new Date().valueOf());
  const endpoint = 'https://gateway.marvel.com/v1/public/characters';
  const hash = md5(ts + privateMarvelAPIKey + publicMarvelAPIKey );
  const url = `${endpoint}?limit=${limit}&ts=${ts}&apikey=${publicMarvelAPIKey}&hash=${hash}`;

  return(
    axios.get(url)
      .then(response => {
        return response.data.data.results
    })
  )
}
