'use strict'

const Route = use('Route')

Route.post('/users', 'UserController.create')

Route.post('/sessions', 'SessionController.create')

Route.resource('coleta', 'ColetaController')
  .apiOnly()
  .middleware('auth')

Route.get('/buscaponto', 'BuscaColetaController.index').middleware('auth')