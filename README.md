# NextJS MongoDB Boilerplate

## Technologies

- NextJS
- MongoDB
- Typescript
- TailwindCSS
- Next Auth

## Why?!

Quickly bootstrap a project with authentication, responsive nav, and many other
tools pre-configured.

## Required Auth Setup

This project has OAuth built into it. By default it contains Google OAuth which
requires auth credentials from
[https://console.cloud.google.com/](https://console.cloud.google.com/) to be
added to `./nextjs/.env.local` file.  This file is not included within git for
security reasons. For more
details on how to add and configure
additional providers see [https://next-auth.js.org/](https://next-auth.js.org/)
for documentation.

## Getting Started

Install packages in the root and nextjs folder

```
npm i --prefix ./nextjs
npm i
```

Start the dev server and mongodb with

```
npm run dev
```

## TODO / Potential Upgrades List

- use lerna to manage as a monorepo, then if desired a separate
  backend could be added as a package, ie. express backend rather than using the nextjs api routes
- configure mongodb to use an init seed container
- add a dark mode toggle