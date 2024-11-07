//async function quantidadeUsuarios() {
    const url = 'https://raw.githubusercontent.com/leitematheus/API-3B-notebooks/refs/heads/main/Marcas_notebooks.json'
    const res  = await fetch(url)
    const dados = await res.json()
    const marcasDosNotebooks = Object.keys(dados)
    const votos = Object.values(dados)

    const data = [
        {
            x: marcasDosNotebooks,
            y: votos,
            type: 'bar',

        }
    ]

    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementsByTagName('caixa-grafico').appendChild(grafico)
    Plotly.newPlot(grafico, data)
