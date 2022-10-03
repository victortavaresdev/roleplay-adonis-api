import Database from '@ioc:Adonis/Lucid/Database'
import test from 'japa'

const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}`

test.group('Passwords', (group) => {
  // test('it should send an email with forgot password instructions', async (assert) => {
  //   const user = await UserFactory.create()

  //   const fakeMailer = Mail.fake((message) => {
  //     assert.equal(message.subject, 'recuperação de senha!')
  //   })

  //   fakeMailer.exists({ subject: 'Welcome to AdonisJS!' })

  //   await supertest(BASE_URL)
  //     .post('/forgot-password')
  //     .send({
  //       email: user.email,
  //       resetPasswordUrl: 'url',
  //     })
  //     .expect(204)

  //   Mail.restore()
  // })

  group.beforeEach(async () => {
    await Database.beginGlobalTransaction()
  })

  group.afterEach(async () => {
    await Database.rollbackGlobalTransaction()
  })
})
