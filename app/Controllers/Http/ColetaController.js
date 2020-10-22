'use strict'

const PontoDeColeta = use("App/Models/PontoDeColeta")

class ColetaController {

    async index () {
        const pontoDeColeta = PontoDeColeta.all()
      
        return pontoDeColeta
      }

    async show ({ params }) {
        const pontoDeColeta = await PontoDeColeta.findOrFail(params.id)
      
        return pontoDeColeta
      }

    async store({ request, auth }) {
        const { id } = auth.user
        const data = request.only(["nome", "lat", "long", "materiais"])

        const pontoDeColeta = await PontoDeColeta.create({ ...data, user_id: id })

        return pontoDeColeta
    }

    async update ({ params, request, response, auth}) {
        
        const pontoDeColeta = await PontoDeColeta.findOrFail(params.id)
      
        if (pontoDeColeta.user_id !== auth.user.id) {
          return response.status(401).send({ error: 'Not authorized' })
        }
        
        const data = request.only(["nome", "lat", "long", "materias"])
      
        pontoDeColeta.merge(data)
      
        await pontoDeColeta.save()
      
        return pontoDeColeta
      }

      async destroy ({ params, auth, response }) {
        const pontoDeColeta = await PontoDeColeta.findOrFail(params.id)
      
        if (pontoDeColeta.user_id !== auth.user.id) {
          return response.status(401).send({ error: 'Not authorized' })
        }
      
        await pontoDeColeta.delete()
      }
}

module.exports = ColetaController