import { Link } from '@remix-run/react'

export function Navigation() {
  return (
    <header className="relative flex h-[80px] min-h-[80px] items-center justify-between md:h-[100px] md:min-h-[100px]">
      {/* Left */}
      <Link to="/" className="clickable flex h-8 items-center gap-2">
        <span className="text-lg font-medium text-gray-600">
          Remix Auth <span className="font-extrabold text-gray-800">TOTP</span>
        </span>
        <span className="inline-flex items-center justify-center rounded-md border border-gray-200 px-2 text-lg font-bold text-gray-800">
          v3.0
        </span>
      </Link>

      {/* Right */}
      <div className="flex items-center gap-2">
        <a
          href="https://github.com/dev-xo/remix-auth-totp"
          target="_blank"
          className="clickable group flex h-8 items-center gap-2 rounded-md px-2 hover:bg-black/5">
          <span className="text-sm font-semibold text-gray-800">Docs</span>
        </a>

        <div className="mx-2 h-5 w-px bg-gray-200" />

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/dev-xo/remix-auth-totp"
            className="clickable flex h-8 w-8 items-center justify-center gap-2 rounded-md hover:bg-black/5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              viewBox="0 0 24 24">
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a
            href="https://twitter.com/DanielKanem"
            className="clickable flex h-8 w-8 items-center justify-center gap-2 rounded-md hover:bg-black/5">
            <svg className="h-6 w-6 text-gray-600" viewBox="0 0 24 24" fill="none">
              <path
                d="M2.3569 2.78113C2.52359 2.45513 2.85886 2.25 3.225 2.25H8.1C8.41308 2.25 8.70711 2.40034 8.89041 2.65415L13.5354 9.08571L20.0856 2.53557C20.4663 2.15481 21.0837 2.15481 21.4644 2.53557C21.8452 2.91633 21.8452 3.53367 21.4644 3.91443L14.6919 10.687L21.5654 20.2041C21.7798 20.501 21.8098 20.8929 21.6431 21.2189C21.4764 21.5449 21.1411 21.75 20.775 21.75H15.9C15.5869 21.75 15.2929 21.5997 15.1096 21.3459L10.4646 14.9143L3.91443 21.4644C3.53367 21.8452 2.91634 21.8452 2.53557 21.4644C2.15481 21.0837 2.15481 20.4663 2.53557 20.0856L9.30811 13.313L2.43459 3.79585C2.22022 3.49903 2.19021 3.10713 2.3569 2.78113Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
      </div>
    </header>
  )
}
