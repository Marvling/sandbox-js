
// Prototype object (can be and declared object)
const transaction = {
    sender: 'Kenan',
    recipient: 'Conan',
}

// A new object with the transaction prototype
const moneyTransaction = Object.create(transaction);

// Adding method to the child object
moneyTransaction.funds = 0.0;
moneyTransaction.addFunds = function addFunds (fundsToAdd = 0) {
    this.funds = fundsToAdd;
};

function Transaction(sender, recipient) {
    this.sender = sender;
    this.recipient = recipient;    
}

function HashTransaction(sender, recipient) {

    if (!new.target) {
        return new hashTransaction(sender, recipient)
    }
    // Fix for when forgeting to write new

    Transaction.call(this, sender, recipient);

    this.calculateHash = function calculateHash() {
        const data = [this.sender, this.recipient].join('');
        let hash = 0, i = 0;
        while (i < data.length){
            hash = ((hash << 5) - hash + data.charCodeAt(i++)) << 0;
        }
        return hash**2;
    }
}
