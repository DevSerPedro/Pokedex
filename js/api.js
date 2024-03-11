// -----------------------------------Declarações-----------------------------------

// campos para listar
const pokemonInputList = document.getElementById("pokemons-list")
const elementsList = document.querySelectorAll("#elements-list img")
const pokemonsCaptured = document.getElementById("captured-pokemons")

// Inputs
const pokemonsInputArea = document.getElementById("pokemonsInputArea")
const inputPageValue = document.getElementById("inputPageValue")

// variaveis



// padrões


// console.log(elementsList);

// -----------------------------------Consulta a API-----------------------------------



// -----------------------------------Funções-----------------------------------

function clearPokemons() {
    pokemonInputList.innerText = ""
}

function clearElements() {
    selectedElement = []

    elementsList.forEach((element) => {
        element.classList.add("ESelected")
    })

    console.log(selectedElement);
}

function allElements() {
    selectedElement = []

    elementsList.forEach((element) => {
        selectedElement.push(element.id)
        element.classList.remove("ESelected")
    })

    console.log(selectedElement);
}

function clearCaputed() {
    if (confirm("Ao clicar em OK você confirma que deseja soltar todos os seus pogemons capturados")) {
        // Código a ser executado se o usuário clicar em "OK"
        console.log("O usuário confirmou.");
    } else {
        // Código a ser executado se o usuário clicar em "Cancelar"
        console.log("O usuário cancelou.");
    }
    pokemonsCaptured.innerText= ""
}

function allCaputed() {

}

// -----------------------------------Eventos-----------------------------------

let selectedElement = []

elementsList.forEach((element) => {
    element.addEventListener("click", () => {
        const index = selectedElement.indexOf(element.id)

        if (index !== -1) {
            element.classList.add("ESelected")
            selectedElement.splice(index, 1)
            console.log(selectedElement);
        } else {
            selectedElement.push(element.id)
            element.classList.remove("ESelected")
            // element.style.opacity = "100%"
        }
    })
})

pokemonsInputArea.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {

        function validateValue(value) {
            var regex = /^[0-9,a-zA-Z]+$/

            return regex.test(value)
        }

        function formatNumbers(array) {
            for (let i = 0; i < array.length; i++) {

                if (!isNaN(array[i])) {
                    array[i] = "#" + String(array[i]).padStart(3, '0')
                }
            }
            return array
        }

        if (!validateValue(pokemonsInputArea.value)) {
            // alert("A entrada deve conter apenas números de 0 a 9, vírgula e letras.");
            console.log("Error");
            return
        }

        var pokemonsFormated = pokemonsInputArea.value.split(",");

        formatNumbers(pokemonsFormated)

        pokemonsFormated.forEach((pokemonFormated) => {
            pokemonInputList.insertAdjacentHTML("beforeend", `<span>${pokemonFormated}</span>,`)
        })
        pokemonsInputArea.value = ""
    }
})