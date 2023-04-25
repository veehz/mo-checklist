# MO Checklist (MOCk)

This is a [Next.js](https://nextjs.org/) project.

## Contribute

### Adding Problems/Contests

Problems and Contests are added in `/src/competitions.ts`.

## Deploy

### Firebase

#### Authentication

Enable Authentication and set up email and password login.

#### Realtime Database

Enable Realtime Database.

Rules: run `helpers/firebaseRuleMaker.js` and copy the output into the rules.

#### Update the Firebase config

Create a web app from Firebase.

Update the Firebase config in `/src/firebase.js`.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
