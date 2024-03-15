const dropContainer = document.getElementById("drop-container")
const cards = document.querySelectorAll(".card")

const cardsSelect = []


cards.forEach((card) => {
    card.addEventListener("mousedown", () => {
        console.log(card.id);
        cardsSelect.push(card)
    })
    card.addEventListener("mouseup", () => {
        // console.log(card);

    })
})

function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const droppedCard = document.getElementById(data);
    event.target.appendChild(droppedCard);
    console.log("Cartão solto");
}


// ondragover="allowDrop(event)"
// function allowDrop(event) {
//     event.preventDefault();
//     console.log("Arrastando sobre o contêiner de destino");
// }