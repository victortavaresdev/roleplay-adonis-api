import Route from '@ioc:Adonis/Core/Route'

Route.post('/users', 'UsersController.store')
Route.put('/users/:id', 'UsersController.update').middleware('auth')

Route.post('/forgot-password', 'PasswordsController.forgotPassword')

Route.post('/sessions', 'SessionsController.store')
Route.delete('/sessions', 'SessionsController.destroy')

Route.get('/groups', 'GroupsController.index').middleware('auth')
Route.post('/groups', 'GroupsController.store').middleware('auth')
Route.patch('/groups/:id', 'GroupsController.update').middleware('auth')
Route.delete(`/groups/:groupId/players/:playerId`, 'GroupsController.removePlayer').middleware(
  'auth'
)
Route.delete('/groups/:id', 'GroupsController.destroy').middleware('auth')

Route.post('/groups/:groupId/requests', 'GroupRequestsController.store').middleware('auth')
Route.post(
  '/groups/:groupId/requests/:requestId/accept',
  'GroupRequestsController.accept'
).middleware('auth')
Route.delete('/groups/:groupId/requests/:requestId', 'GroupRequestsController.destroy').middleware(
  'auth'
)
Route.get('/groups/:groupId/requests', 'GroupRequestsController.index').middleware('auth')
