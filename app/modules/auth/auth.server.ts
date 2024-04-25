import type { User } from '@prisma/client'
import { Authenticator } from 'remix-auth'
import { TOTPStrategy } from 'remix-auth-totp'
import { authSessionStorage } from '~/modules/auth/auth-session.server.ts'
import { sendAuthEmail } from '~/modules/email/email.server.ts'
import { prisma } from '~/utils/db.server.ts'

export let authenticator = new Authenticator<User>(authSessionStorage, {
  throwOnError: true,
})

/**
 * TOTP - Strategy.
 */
authenticator.use(
  new TOTPStrategy(
    {
      secret: process.env.ENCRYPTION_SECRET,
      magicLinkPath: '/magic-link',
      sendTOTP: async ({ email, code, magicLink }) => {
        if (process.env.NODE_ENV === 'development') {
          console.log('[Dev-Only] TOTP Code:', code)
        }
        await sendAuthEmail({ email, code, magicLink })
      },
    },
    async ({ email }) => {
      let user = await prisma.user.findUnique({ where: { email } })

      if (!user) {
        user = await prisma.user.create({ data: { email } })
        if (!user) throw new Error('Whoops! Unable to create user.')
      }

      return user
    },
  ),
)
