# Social Network Project

The app is built with authorization handled through Lucia and media stored via Cloudinary.

## Features

- **social network featurs**: like posting,like, account editting
- **Authorization**: User authentication and authorization powered by Lucia.
  
## Tech Stack

- **Lucia**:
- **Tailwind CSS**
- **Mongoose**
- **Cloudinary**

## Prerequisites

Before you start, ensure you have the following installed and set up:

1. **MongoDB**:
   - You need to have access to a MongoDB database (e.g., MongoDB Atlas).
   - [MongoDB Installation Guide](https://docs.mongodb.com/manual/installation/)

2. **Cloudinary**:
   - Create an account on [Cloudinary](https://cloudinary.com/).
   - Set up your Cloudinary credentials (Cloud name, API Key, and API Secret).
   - These credentials will be used to store and manage media uploads.


### Environment Variables
You'll need to configure the following environment variables in your `.env` file:

MONGODB_URI=mongodb://localhost:27017/your-db
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret


## Installation

1. Clone the repository:
   git clone https://github.com/bigerfan/social-Network


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
