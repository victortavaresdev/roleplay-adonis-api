/**
 * Config source: https://git.io/JvgAf
 *
 * Feel free to let us know via PR, if you find something broken in this contract
 * file.
 */

import { mailConfig } from '@adonisjs/mail/build/config'
import Env from '@ioc:Adonis/Core/Env'

export default mailConfig({
  mailer: 'smtp',

  mailers: {
    smtp: {
      driver: 'smtp',
      host: Env.get('SMTP_HOST'),
      port: Env.get('SMTP_PORT'),
      auth: {
        user: Env.get('SMTP_USERNAME'),
        pass: Env.get('SMTP_PASSWORD'),
        type: 'login',
      },
    },
  },
})
