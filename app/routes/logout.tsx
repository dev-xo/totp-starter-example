import type { DataFunctionArgs } from '@remix-run/node'

import { authenticator } from '~/modules/auth/auth.server.ts'

export async function loader({ request }: DataFunctionArgs) {
  return await authenticator.logout(request, { redirectTo: '/' })
}

export async function action({ request }: DataFunctionArgs) {
  return await authenticator.logout(request, { redirectTo: '/' })
}
