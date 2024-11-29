
# Crypto Sweep Tron Multi-Sig Script (Free Version)

A **TRX automation tool** designed to monitor a sender wallet and transfer TRX to a specified recipient wallet, using multisignature functionality for enhanced security.

This is the **free version** of the script. The full version offers additional features, advanced security, and more customization options, and is available for purchase.

Contact us at @cryptosweepers on Telegram

---

## **Features (Free Version)**

1. **Automated TRX Balance Monitoring**
   2. Monitors the balance of a specified wallet (`senderAddress`) every 5 seconds.
   3. Automatically transfers TRX to a recipient wallet (`recipientAddress`) when the balance exceeds 2 TRX.

2. **Multisignature Authorization**
   2. Supports a secondary private key for signing transactions, ensuring compatibility with multisignature wallets.

3. **Live TRX-to-USD Conversion**
   2. Fetches real-time TRX-to-USD conversion rates using the CryptoCompare API.

4. **Discord Notifications**
   2. Sends transaction summaries, including the amount and USD equivalent, to a configured Discord webhook.

5. **Continuous Operation**
   2. Runs in a loop to ensure uninterrupted monitoring and transfers.

---

## **Full Version Features**

Upgrade to the **paid full version** for:
- **Enhanced Security**: Private keys are stored securely using environment variables.
- **Transaction Confirmation**: Requires manual confirmation before each transfer.
- **Robust Error Handling**: Reduces transaction failures and provides detailed logs.
- **Detailed Analytics**: Track transaction performance and generate usage reports.
- **Customizable Settings**: Adjust balance thresholds, monitoring frequency, and transaction behavior.


---

## **How It Works**

1. The script connects to the Tron blockchain using **TronWeb**.
2. Monitors the balance of the `senderAddress` wallet every 5 seconds.
3. If the balance exceeds 2 TRX:
   4. Calculates transaction fees and available bandwidth.
   5. Transfers the remaining TRX (after deducting fees) to the `recipientAddress`.
4. Sends a Discord notification with:
   7. Transferred TRX amount.
   8. Equivalent value in USD.
   9. A success message.

---

## **Setup and Usage**

### **Requirements**

- **Node.js** (v14+ recommended)
- **NPM** (Node Package Manager)
- TronWeb and Axios libraries

---

### **Installation**

1. Clone the repository:
```bash
git clone https://github.com/YourRepo/CryptoSweep-Tron-MultiSig.git
cd CryptoSweep-Tron-MultiSig
```

2. Install dependencies:
```bash
npm install tronweb axios
```

---

### **Configuration**

1. Open the script file (`cryptoSweep.js`) in your preferred editor.
2. Update the following variables:
   3. `privateKey`: Enter the private key of the wallet to monitor.
   4. `senderAddress`: Replace with the sender wallet address.
   5. `recipientAddress`: Replace with the recipient wallet address.
   6. `webhook`: Add your Discord webhook URL for notifications.

---

### **Usage**

Run the script using Node.js:
```bash
node cryptoSweep.js
```

The script will:
1. Check the balance of the sender wallet every 5 seconds.
2. Transfer TRX to the recipient wallet when conditions are met.
3. Send transaction summaries to a Discord channel.

---

## **Code Structure**

### **Dependencies**

- **TronWeb**: Interacts with the Tron blockchain for balance checks, transaction creation, and multisignature functionality.
- **Axios**: Fetches TRX-to-USD conversion rates and sends notifications via Discord.

### **Core Components**

1. **Balance Monitoring**:
   2. The script continuously checks the sender wallet balance using `tronWeb.trx.getBalance`.

2. **Transaction Builder**:
   2. Prepares TRX transfer transactions using `tronWeb.transactionBuilder.sendTrx`.

3. **Transaction Signer**:
   2. Signs transactions with the private key and authorizes them using multisignature.

4. **Transaction Submission**:
   2. Broadcasts transactions to the Tron blockchain using `tronWeb.trx.sendRawTransaction`.

5. **Notifications**:
   2. Sends detailed transaction summaries to Discord.

---

## **Example Discord Notification**

After a successful transaction, the script sends the following notification to Discord:
```plaintext
Transaction Successful
Transferred 200 TRX (~$18.00 USD) to TPV3... successfully!
```

---

## **Warnings and Limitations**

1. **Hardcoded Keys**:
   2. The free version directly embeds private keys in the script, which is insecure.
   3. The full version resolves this by securely storing keys in environment variables.

2. **Potential Unauthorized Use**:
   2. Ensure that the script is only used for authorized purposes with proper consent.

3. **Rate Limits**:
   2. TronGrid and CryptoCompare APIs may limit requests if the script is run too frequently.

4. **Transaction Fees**:
   2. The sender wallet must have enough funds to cover bandwidth and energy fees for transactions.

---

## **Disclaimer**

This script is provided for educational and personal use only. The authors are not liable for any misuse of this tool. Always comply with Tron blockchain terms and conditions and use this responsibly.

---

## **Contact and Full Version**

For inquiries about the full version or to explore additional tools, Contact us at @cryptosweepers on Telegram
