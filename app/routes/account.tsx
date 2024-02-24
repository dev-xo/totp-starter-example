import type { LoaderFunctionArgs, ActionFunctionArgs } from '@remix-run/node'
import { Form, useLoaderData } from '@remix-run/react'
import { redirect, json } from '@remix-run/node'
import { prisma } from '~/utils/db.server.ts'
import { authenticator } from '~/modules/auth/auth.server.ts'
import { getSession, destroySession } from '~/modules/auth/auth-session.server.ts'
import { Navigation } from '~/components/navigation.tsx'
import { Footer } from '~/components/footer.tsx'

export async function loader({ request }: LoaderFunctionArgs) {
  const session = await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })

  const user = await prisma.user.findUnique({ where: { id: session.id } })
  if (!user) return redirect('/login')

  return json({ user } as const)
}

export async function action({ request }: ActionFunctionArgs) {
  const session = await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })

  const user = await prisma.user.findUnique({ where: { id: session.id } })
  if (!user) return redirect('/login')

  // Delete user.
  await prisma.user.delete({ where: { id: session.id } })

  // Destroy session.
  return redirect('/', {
    headers: {
      'set-cookie': await destroySession(await getSession(request.headers.get('cookie'))),
    },
  })
}

export default function AdminIndex() {
  const { user } = useLoaderData<typeof loader>()

  return (
    <div className="mx-auto flex h-screen w-screen max-w-7xl flex-col px-6">
      {/* Background. */}
      <div className="blobs opacity-10" />

      <Navigation />

      {/* Content */}
      <div className="mx-auto flex h-full w-full max-w-[280px] flex-col items-center justify-center gap-6">
        <div className="flex flex-col items-center gap-2">
          <span className="h-24 w-24 text-8xl transition duration-200 hover:-translate-y-1">
            🥳
          </span>

          <div className="flex flex-col items-center gap-1">
            <h1 className="text-center text-2xl font-semibold tracking-tight">
              My account
            </h1>
            <p className="flex items-center whitespace-nowrap text-center text-base font-semibold text-gray-400">
              {user.email}
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col gap-2">
          {/* Delete Account */}
          <Form method="POST" autoComplete="off">
            <button
              type="submit"
              name="intent"
              className="clickable flex h-10 w-full items-center justify-center rounded-md bg-gray-800 font-semibold text-white">
              Remove account
            </button>
          </Form>

          {/* Log out */}
          <Form method="POST" action="/logout" autoComplete="off">
            <button
              type="submit"
              className="clickable flex h-10 w-full items-center justify-center rounded-md bg-gray-200 font-semibold text-black">
              Log out
            </button>
          </Form>
        </div>
      </div>

      <Footer />
    </div>
  )
}
