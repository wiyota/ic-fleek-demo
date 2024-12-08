# Fully On-Chain SSR dApp Demo with IC and Fleek

[Running exapmle](https://sparse-portugal-massive.functions.on-fleek.app/)

---

The demo code for a fully on-chain server-side rendered dApp using the Internet Computer and Fleek. The project is built using Next.js and the Fleek Next Adapter. Utilize this template to harness Fleek’s optimized hosting and IC's extensive capabilities for dynamic and performance-driven web applications.

## Prerequisites

- [IC SDK](https://internetcomputer.org/docs/current/developer-docs/getting-started/install)
- Node 18.18.0+
- [Fleek](https://fleek.xyz/) Account
- [Fleek CLI](https://www.npmjs.com/package/@fleek-platform/cli)
- [Fleek Next Adapter](https://www.npmjs.com/package/@fleek-platform/next)

## Getting Started

1. Fork the repository
2. Clone the repository by running the following command:

```bash
git clone <https://github.com/><your-id>/ic-fleek-demo.git
```

3. Start IC SDK _on another terminal window_:

```bash
// on another terminal window
dfx start --clean --background
```

4. Enter the correct directory, install dependencies, and run locally:

```bash
cd ic-fleek-demo
npm i --prefix frontend
npm run dev
```

5. Ensure that you install the Fleek CLI and the Fleek Next Adapter:

```bash
// local installation
npm i @fleek-platform/cli --prefix frontend
npm i @fleek-platform/next --prefix frontend

// global installation
npm i -g @fleek-platform/cli
npm i -g @fleek-platform/next

```

💡: you can check the Fleek CLI version by running fleek -v. Any version >= 2.10.1 should be good. As for the Fleek Next adapter, you can check the Fleek Next Adapter version by running fleek-next -v. Any version >= 2.1.0 should be good.

## Building and Deploying

1. First, Deploy the backend canister to the IC mainnet:

```bash
dfx deploy --ic
```

2. Build the frontend project using the Fleek Next Adapter:

```bash
(cd frontend && npx fleek-next build)
# or if installed globally
(cd frontend && fleek-next build)
```

3. Now, Create the Fleek Function using the Fleek CLI:

```bash
//syntax
fleek functions create --name '<name of your function>'

//example
fleek functions create --name ic-next-function

```

4. Finally, deploy using the Fleek CLI:

```bash
//syntax
fleek functions deploy --bundle=false --path frontend/.fleek/dist/index.js --assets frontend/.fleek/static --name '<name of your function>'

//example
fleek functions deploy --bundle=false --path frontend/.fleek/dist/index.js --assets frontend/.fleek/static --name ic-next-function
```

As you complete all the steps successfully here, you will be able to access your fullstack Next.js app using a link that looks like this- https://brief-disease-harsh.functions.on-fleek.app/

## Contributing

### Reporting Issues

- Use GitHub Issues to report bugs or suggest features.
- Provide clear details and steps to reproduce any issues.

### Pull Requests

- Fork the repository.
- Create a feature branch:

```bash
git checkout -b feature/your-feature
```

- Commit changes with clear messages.
- Push to your fork and submit a pull request.

## Learn More

- [Internet Computer Developer Docs](https://internetcomputer.org/docs/current/home)
- [Fleek CLI Docs](https://fleek.xyz/docs/cli/)
- [Fleek Function Docs](https://fleek.xyz/docs/cli/functions/)
- [Fleek Next Docs](https://fleek.xyz/docs/cli/fleek-next-adapter/)
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js
  features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
