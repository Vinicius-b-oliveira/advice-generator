const adviceButton = document.querySelector(".advice-update")
const adviceId = document.querySelector(".advice-id")
const advice = document.querySelector(".advice-description")

async function gerarConselho() {
    const url = "https://api.adviceslip.com/advice"
    const resposta = await fetch(url)
    const json = await resposta.json()
    const id = `Advice # ${json.slip.id}`
    const text = json.slip.advice

    adviceId.innerHTML = id
    advice.innerHTML = text
}

adviceButton.addEventListener("click", gerarConselho)

gerarConselho()