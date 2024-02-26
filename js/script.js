// const cardArea = document.getElementById("cards-area")

// const cards = document.querySelectorAll("article.card")

// cards.forEach((card) => {
//     function changeColors() {
//         const elementSelected = randomElement()
//         const faces = card.querySelectorAll("div.face")

//         faces.forEach((face) => {
//             // Cores por elemento 
//             face.style.backgroundColor = rgbPattern(elementSelected)

//             const upPart = face.querySelector("svg.up-part")
//             if (upPart) {
//                 upPart.style.fill = rgbPattern(elementSelected)
//             }

//             const flags = face.querySelectorAll("svg.svgFlag")
//             flags.forEach((flag) => {
//                 flag.style.fill = rgbPattern(elementSelected)
//             }) // bandeiras de nivel

//             const stats = face.querySelectorAll("div.stats span")
//             stats.forEach((eachstat) => {
//                 eachstat.style.backgroundColor = rgbPattern(elementSelected)
//             }) // linhas de cada status
//         })
//     } //Função que muda as cores do card

//     function duplicateCard() {
//         var cardClone = card.cloneNode(true)
//         card.parentNode.insertBefore(cardClone, card.nextSibling)
//     }

//     card.addEventListener("click", () => {
//         changeColors()
//     })

//     const button = document.querySelector("button")
//     button.addEventListener("click", () => {
//         duplicateCard()
//     })
// })



// function rgbPattern(element) {
//     return `rgb(var(--${element}))`
// } //Padrão de cores por elemento

// function randomElement() {
//     var pokemonTypes = [
//         "default", "normal", "grass", "fire", "water", "electric", "ice",
//         "ground", "flying", "poison", "fighting", "psychic", "dark", "rock",
//         "bug", "ghost", "steel", "dragon", "fairy"
//     ];

//     var randomIndex = Math.floor(Math.random() * pokemonTypes.length);
//     return pokemonTypes[randomIndex];
// } //Randomiza um typo para teste

// function addPokemon() {

//     console.log(cardArea);
//     changeColors()
// }



