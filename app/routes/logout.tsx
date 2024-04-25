import type { LoaderFunctionArgs, ActionFunctionArgs } from '@remix-run/node'
import { authenticator } from '~/modules/auth/auth.server.ts'

export async function loader({ request }: LoaderFunctionArgs) {
  return await authenticator.logout(request, { redirectTo: '/' })
}

export async function action({ request }: ActionFunctionArgs) {
  return await authenticator.logout(request, { redirectTo: '/' })
}
