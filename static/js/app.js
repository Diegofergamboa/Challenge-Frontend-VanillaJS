import API from './api.js'
const api = new API();

console.log(api.getCharacter(1));

const characterTemplate = `
    <article class="character">
    <div class="character-grid">
        <h2>Rick Sanchez</h2>
        <img src="" alt="">
    </div>
    </article>
`