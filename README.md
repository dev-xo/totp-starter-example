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

In order to successfully implement `remix-auth-totp` you will require the following `.env` variables:

```sh
ENCRYPTION_SECRET=""
RESEND_API_KEY=""
```

Let's break down how to obtain these variables:

For `ENCRYPTION_SECRET` a random 64-character hexadecimal string is required. An example of a random 64-character hexadecimal string is `928F416BAFC49B969E62052F00450B6E974B03E86DC6984D1FA787B7EA533227`.
- You can use a site like https://www.grc.com/passwords.htm to generate a strong secret.

For `RESEND_API_KEY` you can visit [Resend](https://resend.com) and create a free account in order to get your API key [here](https://resend.com/api-keys).

> [!NOTE]
> Remember to replace the current `.env.example` file with your own `.env` file.

4. Run the server:

```sh
npm run dev
```

And you're ready to go! 🎉

## Contributing

If you want to share your own example, feel free to open a PR into the [main repository](https://github.com/dev-xo/remix-auth-totp).
