// Variaveis
const cardArea = document.getElementById("cards-area")
const button = document.getElementById("add-pokemon");
const reloadBtn = document.getElementById("reload");

let ultimoValor = 0;

// Funções

function obterDadosPokemon(pokemon) {
    const apiURL = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

    fetch(apiURL)
        .then(response => response.json())
        .then(pokemon => {
            montarCard(pokemon);
        })
        .catch(error => {
            console.log('Ocorreu um erro:', error);
        });
}

function montarCard(pokemon) {
    // console.log(pokemon);
    const pokemonId = pokemon.id
    const pokemonName = pokemon.name
    const pokemonElement = pokemon.types[0].type.name

    const pokemonHp = pokemon.stats[0].base_stat
    let pokemonHp1, pokemonHp2, pokemonHp3, pokemonHp4 = 0

    const pokemonAttack = pokemon.stats[1].base_stat
    let pokemonAttack1, pokemonAttack2, pokemonAttack3 = 0

    const pokemonDefense = pokemon.stats[2].base_stat
    let pokemonDefense1, pokemonDefense2, pokemonDefense3 = 0

    const pokemonSpeed = pokemon.stats[5].base_stat
    let pokemonSpeed1, pokemonSpeed2, pokemonSpeed3 = 0

    const pokemonSAttack = pokemon.stats[3].base_stat
    let pokemonSAttack1, pokemonSAttack2, pokemonSAttack3 = 0

    const pokemonSDefense = pokemon.stats[4].base_stat
    let pokemonSDefense1, pokemonSDefense2, pokemonSDefense3 = 0


    if (pokemonHp < 100) {
        pokemonHp1 = pokemonHp
    } else if (pokemonHp < 200) {
        pokemonHp1 = 100
        pokemonHp2 = pokemonHp - 100
    } else if (pokemonHp < 300) {
        pokemonHp1 = 100
        pokemonHp2 = 100
        pokemonHp3 = pokemonHp - 200
    }

    if (pokemonAttack < 100) {
        pokemonAttack1 = pokemonAttack
    } else if (pokemonAttack < 200) {
        pokemonAttack1 = 100
        pokemonAttack2 = pokemonAttack - 100
    } else if (pokemonAttack < 300) {
        pokemonAttack1 = 100
        pokemonAttack2 = 100
        pokemonAttack3 = pokemonAttack - 200
    }

    if (pokemonDefense < 100) {
        pokemonDefense1 = pokemonDefense
    } else if (pokemonDefense < 200) {
        pokemonDefense1 = 100
        pokemonDefense2 = pokemonDefense - 100
    } else if (pokemonDefense < 300) {
        pokemonDefense1 = 100
        pokemonDefense2 = 100
        pokemonDefense3 = pokemonDefense - 200
    }

    if (pokemonSpeed < 100) {
        pokemonSpeed1 = pokemonSpeed
    } else if (pokemonSpeed < 200) {
        pokemonSpeed1 = 100
        pokemonSpeed2 = pokemonSpeed - 100
    } else if (pokemonSpeed < 300) {
        pokemonSpeed1 = 100
        pokemonSpeed2 = 100
        pokemonSpeed3 = pokemonSpeed - 200
    }

    if (pokemonSAttack < 100) {
        pokemonSAttack1 = pokemonSAttack
    } else if (pokemonSAttack < 200) {
        pokemonSAttack1 = 100
        pokemonSAttack2 = pokemonSAttack - 100
    } else if (pokemonSAttack < 300) {
        pokemonSAttack1 = 100
        pokemonSAttack2 = 100
        pokemonSAttack3 = pokemonSAttack - 200
    }

    if (pokemonSDefense < 100) {
        pokemonSDefense1 = pokemonSDefense
    } else if (pokemonSDefense < 200) {
        pokemonSDefense1 = 100
        pokemonSDefense2 = pokemonSDefense - 100
    } else if (pokemonSDefense < 300) {
        pokemonSDefense1 = 100
        pokemonSDefense2 = 100
        pokemonSDefense3 = pokemonSDefense - 200
    }

    const card = `
<article class="card" id="${pokemonId}">
<div class="face front" style="background-color: rgb(var(--${pokemonElement}));">
    <div class="card-header">
        <h1 class="poke-number">#${pokemonId}</h1>
        <svg class="up-part" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 10" style="fill: rgb(var(--${pokemonElement}));">
            <path d="M13 10 20 10 A1 1 0 000 10L7 10A1 1 90 0113 10z" />
        </svg>
        <figure class="poke-img">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png"
                alt="${pokemonName} Img" title="${pokemonName} #1">
        </figure>
        <div class="flags">
            <svg class="flag1 svgFlag" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 11" style="fill:rgb(var(--${pokemonElement}));">
                <path class="flagpath1" d="M 0 0 L 8 0 L 8 9 L 4 11 L 0 9 Z" />
                <text x="4" y="6.5" font-size="2.5" text-anchor="middle">Nv</text>
                <text x="4" y="9.5" font-size="2.5" text-anchor="middle">1</text>
            </svg>
            <svg class="flag2 ssvgFlag" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 11" style="fill:rgb(var(--${pokemonElement}));">
                <path class="flagpath2" d="M 0 0 L 8 0 L 8 9 L 4 11 L 0 9 Z" />
                <text x="4" y="6" font-size="2.5" text-anchor="middle">Nv</text>
                <text x="4" y="9.5" font-size="2.5" text-anchor="middle">2</text>
            </svg>
            <svg class="flag3 svgFlag" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 11" style="fill:rgb(var(--${pokemonElement}));">
                <path class="flagpath3" d="M 0 0 L 8 0 L 8 9 L 4 11 L 0 9 Z" />
                <text x="4" y="6" font-size="2.5" text-anchor="middle">Nv</text>
                <text x="4" y="9.5" font-size="2.5" text-anchor="middle">3</text>
            </svg>
        </div>
    </div>
    <div class="card-body">
        <figure class="element">
        <img src="./assets/elements/${pokemonElement}.svg" alt="${pokemonElement}" title="${pokemonElement}" style=" width: 15px;">
        </figure>
        <h1 class="poke-name">${pokemonName}</h1>
        <ul class="pokemon-stats">
            <li class="stats-line">
                <p>HP</p>
                <div class="stats">
                    <span style="width: ${pokemonHp1}%; background-color: rgb(var(--${pokemonElement}));""></span>
                    <span style="width: ${pokemonHp2}%; background-color: rgb(var(--${pokemonElement}));""></span>
                    <span style="width: ${pokemonHp3}%; background-color: rgb(var(--${pokemonElement}));""></span>
                </div>
                <span class="stats-number">${pokemonHp}</span>
            </li>
            <li class="stats-line">
                <p>Attack</p>
                <div class="stats">
                    <span style="width: ${pokemonAttack1}%; background-color: rgb(var(--${pokemonElement}));""></span>
                    <span style="width: ${pokemonAttack2}%; background-color: rgb(var(--${pokemonElement}));""></span>
                    <span style="width: ${pokemonAttack3}%; background-color: rgb(var(--${pokemonElement}));""></span>
                </div>
                <span class="stats-number">${pokemonAttack}</span>
            </li>
            <li class="stats-line">
                <p>Defense</p>
                <div class="stats">
                    <span style="width: ${pokemonDefense1}%; background-color: rgb(var(--${pokemonElement}));""></span>
                    <span style="width: ${pokemonDefense2}%; background-color: rgb(var(--${pokemonElement}));""></span>
                    <span style="width: ${pokemonDefense3}%; background-color: rgb(var(--${pokemonElement}));""></span>
                </div>
                <span class="stats-number">${pokemonDefense}</span>
            </li>
            <li class="stats-line">
                <p>Speed</p>
                <div class="stats">
                    <span style="width: ${pokemonSpeed1}%; background-color: rgb(var(--${pokemonElement}));""></span>
                    <span style="width: ${pokemonSpeed2}%; background-color: rgb(var(--${pokemonElement}));""></span>
                    <span style="width: ${pokemonSpeed3}%; background-color: rgb(var(--${pokemonElement}));""></span>
                </div>
                <span class="stats-number ">${pokemonSpeed}</span>
            </li>
            <li class="stats-line">
                <p>S.Attack</p>
                <div class="stats">
                    <span style="width: ${pokemonSAttack1}%; background-color: rgb(var(--${pokemonElement}));""></span>
                    <span style="width: ${pokemonSAttack2}%; background-color: rgb(var(--${pokemonElement}));""></span>
                    <span style="width: ${pokemonSAttack3}%; background-color: rgb(var(--${pokemonElement}));""></span>
                </div>
                <span class="stats-number">${pokemonSAttack}</span>
            </li>
            <li class="stats-line">
                <p>S.Defense</p>
                <div class="stats">
                    <span style="width: ${pokemonSDefense1}%; background-color: rgb(var(--${pokemonElement}));""></span>
                    <span style="width: ${pokemonSDefense2}%; background-color: rgb(var(--${pokemonElement}));""></span>
                    <span style="width: ${pokemonSDefense3}%; background-color: rgb(var(--${pokemonElement}));""></span>
                </div>
                <span class="stats-number">${pokemonSDefense}</span>
            </li>
        </ul>
    </div>
</div>
</article>
`
    // console.log(pokemon);

    cardArea.insertAdjacentHTML("beforeend", card)
}

function loadCards() {
    setTimeout(() => {
        const cards = document.querySelectorAll("article.card")

        // console.log(cards);

        cards.forEach((card) => {
            const cardImgAlternate = card.querySelector("figure.poke-img img")
            const cardId = card.id

            let flip = false

            cardImgAlternate.addEventListener("mouseenter", () => {
                cardImgAlternate.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${cardId}.gif`
    
            })
            cardImgAlternate.addEventListener("click", () => {
                if (flip == false) {
                    cardImgAlternate.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/${cardId}.gif`
                    flip = true
                }else{
                    cardImgAlternate.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${cardId}.gif`
                    flip = false
                }
    
            })
            cardImgAlternate.addEventListener("mouseleave", () => {
                cardImgAlternate.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${cardId}.png`
                flip = false
            })
        });
    }, 1000);
}

// Eventos

button.addEventListener("click", () => {

    let numero = parseFloat(document.getElementById('selectQTD').value);

    let resultado = ultimoValor + numero;
    let irAte = resultado - numero

    ultimoValor = resultado;

    if (irAte === 0) {
        irAte = 1
    }

    for (let i = irAte; i < resultado; i++) {
        console.log(i);
        obterDadosPokemon(i)
    }

    loadCards()

});

reloadBtn.addEventListener("click", () => {
    location.reload()
})

// Chamadas

obterDadosPokemon(5)
obterDadosPokemon(25)
obterDadosPokemon(1)
obterDadosPokemon(10)

setTimeout(loadCards(),1000)