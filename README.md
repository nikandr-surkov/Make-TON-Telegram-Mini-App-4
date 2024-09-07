# Make TON Telegram Mini App 4: Connect TON Wallet, Display TON Wallet Address

Welcome to the fourth guide in the **Make TON Telegram Mini App** series! This project demonstrates how to implement TON wallet connection functionality and display the connected wallet address in a Telegram Mini App using Next.js 14, TypeScript, and the @tonconnect/ui-react library.

## Project Overview

This Telegram Mini App showcases:
- Setting up a Next.js 14 project with TypeScript
- Implementing TON wallet connection using @tonconnect/ui-react
- Managing wallet connection state
- Displaying the connected TON wallet address
- Formatting and truncating the wallet address for better user experience
- Basic TypeScript usage for type safety

## Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)
- A Telegram account
- A Telegram Bot Token
- GitHub account
- Vercel account

## Getting Started

1. Clone the repository:
   ```
   git clone https://github.com/your-username/Make-TON-Telegram-Mini-App-4.git
   cd Make-TON-Telegram-Mini-App-4
   ```

2. Install dependencies:
   ```
   npm install
   ```

## Deployment and Usage

As this is a Telegram Mini App, you can't see the result directly in development mode. Follow these steps to deploy and use the app:

1. Push your code to a GitHub repository.
2. Sign up for a Vercel account if you haven't already.
3. Connect your GitHub repository to Vercel and deploy the app.
4. Once deployed, Vercel will provide you with a URL for your app.
5. Use this URL to set up your Telegram Mini App:
   - Go to [@BotFather](https://t.me/BotFather) on Telegram
   - Send the command `/newapp` or choose to edit an existing bot
   - Follow the prompts to set up your Mini App, using the Vercel URL as the Web App URL
6. Once set up, you can access your Mini App through Telegram on mobile devices or in the Web version of Telegram.

## Project Structure

- `app/layout.tsx`: Root layout component with TonConnectUIProvider
- `app/page.tsx`: Main page component with wallet connection logic and address display

## Key Features

- TON wallet connection and disconnection
- Display of connected wallet address with proper formatting
- Loading state management
- Responsive design with Tailwind CSS

## Note on TonConnect Manifest

This demo uses a TonConnect manifest hosted on IPFS. In a production application, you should host your own manifest file and update the URL in the `TonConnectUIProvider`.

## YouTube Channel

For video tutorials and more in-depth explanations, check out my YouTube channel:
[Nikandr Surkov](https://www.youtube.com/@NikandrSurkov)

## Next Steps

Stay tuned for the next guide in the **Make TON Telegram Mini App** series, where we'll explore more advanced features and deeper TON blockchain integration!