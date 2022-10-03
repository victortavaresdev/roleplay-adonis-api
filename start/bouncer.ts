import Bouncer from '@ioc:Adonis/Addons/Bouncer'
import Group from 'App/Models/Group'
import GroupRequest from 'App/Models/GroupRequest'
import User from 'App/Models/User'

export const { actions } = Bouncer.define('updateUser', (user: User, updatedUser: User) => {
  return user.id === updatedUser.id
})
  .define('acceptGroupRequest', (user: User, groupRequest: GroupRequest) => {
    return user.id === groupRequest.group.master
  })
  .define('rejectGroupRequest', (user: User, groupRequest: GroupRequest) => {
    return user.id === groupRequest.group.master
  })
  .define('updateGroup', (user: User, group: Group) => {
    return user.id === group.master
  })
  .define('deleteGroup', (user: User, group: Group) => {
    return user.id === group.master
  })

export const { policies } = Bouncer.registerPolicies({})
