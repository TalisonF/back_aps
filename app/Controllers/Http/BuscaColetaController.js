'use strict'

const CalcDistance = require("../../../utils/CalcDistance")

const PontoDeColeta = use("App/Models/PontoDeColeta")

class BuscaColetaController {

    async index ({ request }){
        const { lat, long } = request.get();
        const consulta = await PontoDeColeta.all();
        const pontosDeColeta = consulta.toJSON()
        
        let proximidade = pontosDeColeta.map(ponto => {
            return { ...ponto, distancia: CalcDistance(ponto.lat,ponto.long, lat,long) }
        })

        proximidade.sort((a,b) => a.distancia - b.distancia)

        return proximidade
        
    }
}

module.exports = BuscaColetaController
