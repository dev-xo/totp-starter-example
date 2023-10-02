import type { DataFunctionArgs } from '@remix-run/node'

import { Form, useLoaderData } from '@remix-run/react'
import { redirect, json } from '@remix-run/node'

import { prisma } from '~/utils/db.server.ts'
import { authenticator } from '~/modules/auth/auth.server.ts'
import { getSession, destroySession } from '~/modules/auth/auth-session.server.ts'
import { useDoubleCheck } from '~/utils/hooks/use-double-check.ts'

import { Navigation } from '~/components/navigation.tsx'
import { Footer } from '~/components/footer.tsx'

export async function loader({ request }: DataFunctionArgs) {
  const session = await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })

  const user = await prisma.user.findUnique({ where: { id: session.id } })
  if (!user) return redirect('/login')

  return json({ user } as const)
}

export async function action({ request }: DataFunctionArgs) {
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
  const { doubleCheck, getButtonProps } = useDoubleCheck()

  return (
    <div className="mx-auto flex h-screen w-screen max-w-7xl flex-col px-6">
      {/* Background. */}
      <div className="blobs opacity-10" />

      {/* Navigation */}
      <Navigation />

      {/* Content */}
      <div className="mx-auto flex h-full w-full max-w-[280px] flex-col items-center justify-center gap-6">
        {/* Account Info */}
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

        {/* Account Actions */}
        <div className="flex w-full flex-col gap-2">
          {/* Delete Account */}
          <Form method="POST" autoComplete="off">
            <button
              {...getButtonProps({
                type: 'submit',
                name: 'intent',
                value: 'disable',
                className: `clickable flex h-10 w-full items-center justify-center rounded-md font-semibold bg-gray-800 text-white ${
                  doubleCheck && '!bg-red-500'
                }`,
              })}>
              {doubleCheck ? 'Are you sure?' : 'Remove account'}
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

      {/* Footer */}
      <Footer />
    </div>
  )
}
