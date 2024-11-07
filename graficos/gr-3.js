import { getCSS, tickConfig, criarGrafico } from "./common.js"

async function quantidadeUsuariosPorRede() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasRedes = ['Liam Lawson','Franco Colapinto','Oliver Bearman','Daniel Ricciardo','Alexander Albon','Kevin Magnussen','Esteban Ocon','Lance Stroll','Pierre Gasly','Yuki Tsunoda','Nico Hulkenberg','Fernando Alonso','Sergio Perez','Lewis Hamilton','George Russell','Carlos Sainz Jnr','Oscar piastri','Chales Leclerc','Lando Norris','Max Verstappem']
    const quantidadeDeUsuarios = ['4','5','7','12','12','14','23','24','26','28','31','62','151','190','192','244','262','307','331','393']

    const data = [
        {
            x: nomeDasRedes, 
            y: quantidadeDeUsuarios, 
            type: 'line',
            marker: {
                color: getCSS('--primary-color')
            }
        }
    ]

    const layout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        title: {
            text: 'Ranking pilotos da formula1 com maior pontuação.',
            x: 0,
            font: {
                color: getCSS('--primary-color'),
                family: getCSS('--font'),
                size: 30
            }
        },
        xaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Pilotos',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        },
        yaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Pontos ',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        }

    }

    criarGrafico(data, layout)
}

quantidadeUsuariosPorRede()