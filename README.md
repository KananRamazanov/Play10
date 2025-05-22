# frontend-tenants

This is a Next.js project bootstrapped with create-next-app.

Getting Started
First, run the development server:

npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
Open http://localhost:3000 with your browser to see the result.

You can start editing the page by modifying app/page.tsx. The page auto-updates as you edit the file.

This project uses next/font to automatically optimize and load Inter, a custom Google Font.

Deploy on Vercel
The easiest way to deploy your Next.js app is to use the Vercel Platform from the creators of Next.js.

Check out our Next.js deployment documentation for more details.

Deploy on Docker without compose
Install Docker on your machine.
Build your container: docker build -t nextjs-docker ..
Run your container: docker run -p 3000:3000 nextjs-docker.
You can view your images created with docker images.

Deploy on Docker with compose for Multistage Env.
Multistage builds are highly recommended in production. Combined with the Next Output Standalone feature, only node_modules files required for production are copied into the final Docker image.

First, run the production server (Final image approximately 110 MB).

# Create a network, which allows containers to communicate
# with each other, by using their container name as a hostname
docker network create my_network

# Build prod
docker compose -f docker-compose.prod.yaml build

# Up prod in detached mode
docker compose -f docker-compose.prod.yaml up -d
Learn More
To learn more about Next.js, take a look at the following resources:

Next.js Documentation - learn about Next.js features and API.
Learn Next.js - an interactive Next.js tutorial.
Project Organization and File Colocation
[https://nextjs.org/docs/app/building-your-application/routing/colocation]

Internationalization
Choose option : App Router setup without i18n routing [https://next-intl-docs.vercel.app/]

ESLint
[https://nextjs.org/docs/app/building-your-application/configuring/eslint]

Setting up Jest ( Unit Testing )
[https://nextjs.org/docs/app/building-your-application/testing/jest#creating-your-first-test]

Setting up Cypress ( End-to-End (E2E) and Component Testing )
[https://nextjs.org/docs/pages/building-your-application/testing/cypress]

You can check out the Next.js GitHub repository - your feedback and contributions are welcome!
