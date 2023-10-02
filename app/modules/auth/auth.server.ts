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
      magicLinkGeneration: { callbackPath: '/magic-link' },

      storeTOTP: async (data) => {
        await prisma.totp.create({ data })
      },
      sendTOTP: async ({ email, code, magicLink }) => {
        await sendAuthEmail({ email, code, magicLink })
      },
      handleTOTP: async (hash, data) => {
        const totp = await prisma.totp.findUnique({ where: { hash } })

        // If `data` is provided, the Strategy will update the totp.
        // Used for internal checks / invalidations.
        if (data) {
          return await prisma.totp.update({
            where: { hash },
            data: { ...data },
          })
        }

        // Otherwise, we'll return it.
        // Used for internal checks / validations.
        return totp
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
