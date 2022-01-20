import { PUBLIC_KEY, HASH_KEY } from '../key/hashPublic-keys'

export const URL = (query) => {
  return `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&ts=1&apikey=${PUBLIC_KEY}&hash=${HASH_KEY}`
}
