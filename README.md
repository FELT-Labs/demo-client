# FELT Labs Demo Client
Demo web application to demonstrate how to use FELT npm package to integrate federated learning into your web application.

## Getting Started

create `.env` file from `.env.example`. Fill in your Infura project id, WalletConnet project id and your FELT API key.

```bash
yarn install   # install dependencies
yarn dev       # start the server
```

## Usage
The most important part is FELT library `@feltlabs/react` from which we use:
- `initializeApp` function to initialize the library with your API key
- `StartTraining` component to start the training process
- `DisplayJobs` component to display started jobs
