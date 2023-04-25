# MO Checklist (MOCk)

MO Checklist (MOCk) is a checklist for MOers to keep track of their progress in solving Mathematical Olympiad problems. Hope this will help you in your MO journey!

## Features

### Save Your Progress

You can save your progress by logging in. For each question, you can mark it as solved, unsolved, or unattempted.

![Screenshot of the main page](/demoassets/checklist.png)

### Select Contests

Only focus on the contests you want to practice on!

### Shown Years

Only see the most recent problems.

![Screenshot of the settings page](/demoassets/settings.png)

### Share Your Progress

You can share your progress with others by sharing the link to your profile.

![Screenshot of your shared profile](/demoassets/shared.png)

## Contribute

### Adding Problems/Contests

Problems and Contests are added in `/src/competitions.ts`.

## Deploy

Edit the `.env.local.example` file and rename it to `.env.local`.

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
