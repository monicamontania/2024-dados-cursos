const url = 'https://raw.githubusercontent.com/leitematheus/API-3B-notebooks/refs/heads/main/not_norte.json'


async function visualizarInformacoesGerais() {
    const res = await fetch(url)
    const dados = await res.json()
    const notebooks = Object.keys(dados)
    const notebookMaisVotados = notebooks[0]
    const quantidadeDeVoto = Object.values(dados)[0]

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('caixa-grafico_texto')
    paragrafo.innerHTML = `Entrevistamos <span>${quantidadeDeVoto} milhão</span> de brasileiros para descobrir quais são os doces mais queridos por todos!`

    const container = document.getElementById('caixa-grafico')
    container.appendChild(paragrafo)
}

visualizarInformacoesGerais()