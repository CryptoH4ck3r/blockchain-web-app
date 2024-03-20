const ethers = require('ethers');

// 使用Infura或Alchemy的URL
const provider = new ethers.providers.JsonRpcProvider('YOUR_INFURA_OR_ALCHEMY_URL');

async function getBalance(address) {
    const balance = await provider.getBalance(address);
    console.log(`Balance of ${address} is: ${ethers.utils.formatEther(balance)} ETH`);
}

function listenForTransactions(address) {
    provider.on('block', async () => {
        let block = await provider.getBlockWithTransactions();
        block.transactions.forEach(tx => {
            if (tx.to && tx.to.toLowerCase() === address.toLowerCase()) {
                console.log(`New incoming transaction to ${address}: ${tx.hash}`);
            }
        });
    });
    console.log(`Listening for transactions to ${address}...`);
}

module.exports = {
    getBalance,
    listenForTransactions
};
