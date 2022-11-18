//These are the 2 variables to use in the frontend configuration

const MoodContractAddress = 0xdc5F35c9a68edF795C3B6db9ce96957f536c989A

const MoodContractABI = [{
    "inputs": [{
        "internalType": "string",
        "name": "_mood",
        "type": "string"
    }],
    "name": "setMood",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "getMood",
    "outputs": [{
        "internalType": "string",
        "name": "",
        "type": "string"
    }],
    "stateMutability": "view",
    "type": "function"
}]