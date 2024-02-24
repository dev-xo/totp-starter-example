# Welcome to Remix Auth TOTP - Starter Example

This repository has been created with the intent to provide a simple example of how to use Remix Auth TOTP. This example uses Prisma ORM and SQLite to store and handle the authentication flow.

## Getting Started

1. Clone the repository and install its dependencies:

```sh
npm install
```

2. Run Prisma migrations:

```sh
npx prisma migrate dev --name init
```

3. Get required `.env` variables:

This example uses [Resend](https://resend.com/overview) to send emails. You can create a free account and get your API key on [here](https://resend.com/api-keys).

> **Note**
> Remember to replace the current `.env.example` file with your own `.env` file.

4. Run the server:

```sh
npm run dev
```

And you're ready to go! 🎉

## Contributing

If you want to share your own example, feel free to open a PR into the [main repository](https://github.com/dev-xo/remix-auth-totp).
