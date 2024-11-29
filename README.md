# Claim Faucet DApp

A decentralized application (DApp) that allows users to claim custom tokens from a faucet on the Ethereum blockchain. The deployer can create tokens, and users can claim them once every 24 hours. This project is designed for developers who need test tokens for their applications on Ethereum testnets or for projects implementing time-based token distribution mechanisms.

![Claim Faucet DApp Screenshot](https://placeholder.com/claim-faucet-screenshot.png)

## Features

- Connect to MetaMask or other Web3 wallets
- Display user's current balance
- Claim test tokens with customizable amounts
- View transaction history
- Responsive design for desktop and mobile devices
- Deployer can create and add custom tokens to the faucet
- Users can claim tokens once every 24 hours
- Automatic tracking of claim cooldown periods

## Smart Contract Features

- ERC20 token creation by the contract deployer
- Time-based claiming mechanism (24-hour cooldown)
- Claim amount customization by the deployer
- Tracking of user claim history and cooldown periods

## Technologies Used

- React.js
- Ethers.js
- Hardhat
- Solidity
- Tailwind CSS
- Reown AppKit
- Radix Ui

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)
- MetaMask extension installed in your browser

## Installation and Setup

1. Clone the repository:
   \`\`\`
   git clone https://github.com/yourusername/claim-faucet-dapp.git
   \`\`\`

2. Navigate to the project directory:
   \`\`\`
   cd claim-faucet-dapp
   \`\`\`

3. Install the dependencies:
   \`\`\`
   npm install
   \`\`\`

4. Create a \`.env\` file in the root directory and add your Ethereum testnet RPC URL and private key:
   \`\`\`
   VITE_RPC_URL=https://your-rpc-url
  VITE_APPKIT_PROJECT_ID=your-reown project ID
   \`\`\`

5. Compile and deploy the smart contract:
   \`\`\`
   npx hardhat compile
   npx hardhat run scripts/deploy.js --network <your-testnet>
   \`\`\`

6. Update the contract address in \`src/config.js\` with the deployed contract address.

7. Start the development server:
   \`\`\`
   npm start
   \`\`\`

## Usage

1. Open your browser and navigate to \`http://localhost:3000\`
2. Connect your MetaMask wallet to the appropriate testnet
3. Click the "Connect Wallet" button to connect your wallet to the DApp
4. Enter the amount of test tokens you want to claim
5. Click the "Claim Tokens" button to receive your tokens
6. View your updated balance and transaction history
7. Wait for 24 hours before claiming again

## Smart Contract Interaction

### For the Deployer

1. Deploy the smart contract to the desired network
2. Call the `createToken` function to add new tokens to the faucet
3. Set the claim amount for each token using the `setClaimAmount` function

### For Users

1. Connect your wallet to the DApp
2. Select the token you want to claim
3. Click the "Claim Tokens" button
4. If 24 hours have passed since your last claim, the transaction will be processed
5. If not, you'll see a message indicating the remaining time until you can claim again

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (\`git checkout -b feature/AmazingFeature\`)
3. Commit your changes (\`git commit -m 'Add some AmazingFeature'\`)
4. Push to the branch (\`git push origin feature/AmazingFeature\`)
5. Open a Pull Request

## License

This project is licensed under the MIT License. See the \`LICENSE\` file for details.

## Contact

Your Name - [@your_twitter](https://x.com/KanasJnr) - nasihudeen04@gmail.com


