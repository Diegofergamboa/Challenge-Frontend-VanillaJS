

export default class API {
    getCharacter() {
        fetch('https://rickandmortyapi.com/api/character/2')
            .then((response) => response.json())
            .then((data) => console.log(data)) 
    }
}