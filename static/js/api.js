

export default class API {
    async getCharacter(id) {
        const response = fetch(`https://rickandmortyapi.com/api/character/${id}`)
        const data = await response.json()
        return data
    }
}