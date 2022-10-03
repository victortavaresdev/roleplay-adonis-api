// import Mail from '@ioc:Adonis/Addons/Mail'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PasswordsController {
  public async forgotPassword({ request, response }: HttpContextContract) {
    const email = await request.only(['email'])

    // await Mail.send((message) => {
    //   message
    //     .from('libemail@gmail.com')
    //     .to(email)
    //     .subject('recuperação de senha!')
    //     .text('Clique no link abaixo para redefinir a senha.')
    // })

    return response.noContent()
  }
}
