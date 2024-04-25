import type { LoaderFunctionArgs } from '@remix-run/node'
import { authenticator } from '~/modules/auth/auth.server.ts'

export async function loader({ request }: LoaderFunctionArgs) {
  await authenticator.authenticate('TOTP', request, {
    successRedirect: '/account',
    failureRedirect: '/login',
  })
}
