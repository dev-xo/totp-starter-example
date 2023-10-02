import { Link } from '@remix-run/react'

export function Navigation() {
  return (
    <header className="relative flex h-[80px] min-h-[80px] items-center justify-between md:h-[100px] md:min-h-[100px]">
      {/* Left */}
      <Link to="/" className="clickable flex h-8 items-center gap-2">
        <span className="text-base font-medium text-gray-600">
          Remix Auth <span className="font-extrabold text-gray-800">TOTP</span>
        </span>
        <span className="inline-flex items-center justify-center rounded-md border border-gray-200 px-1.5 py-0.5 text-xs font-bold text-gray-800">
          v1.0
        </span>
      </Link>

      {/* Right */}
      <div className="flex items-center gap-2">
        <a
          href=""
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
              className="h-5 w-5 text-gray-800"
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
            <svg
              className="h-5 w-5 text-gray-800"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11.2582 8.23767C11.1447 5.63601 13.2575 3.25 16 3.25C17.0745 3.25 18.067 3.60755 18.8629 4.20937L21.8895 3.7582C22.1672 3.71679 22.4449 3.83404 22.6089 4.06201C22.7729 4.28998 22.7958 4.59048 22.6682 4.84067L20.7346 8.63307C20.4044 15.3809 14.8294 20.75 8.00005 20.75C5.70521 20.75 3.52189 20.2468 1.62451 19.1492C1.34284 18.9863 1.19837 18.6603 1.26684 18.3422C1.33531 18.0241 1.60109 17.7864 1.92484 17.7538C2.62749 17.683 3.68928 17.4806 4.55591 17.165C4.99281 17.0059 5.33383 16.8344 5.55154 16.6675C5.5727 16.6513 5.59165 16.6359 5.60862 16.6215C2.5742 13.2838 1.50804 8.17157 2.76751 3.89342C2.85052 3.61145 3.0906 3.40396 3.38162 3.36266C3.67264 3.32137 3.96096 3.45389 4.11913 3.70164C5.72891 6.22305 8.3663 8.09513 11.2582 8.23767Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
      </div>
    </header>
  )
}
