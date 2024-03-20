const { getBalance, listenForTransactions } = require('./index');

const address = '0x...';

getBalance(address);

listenForTransactions(address);
