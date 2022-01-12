export const buddySystemAddress = "0x657889639FaEd14F73138afA008a06C47b3dE1D9";
export const buddySystemAbi = [{
    "type": "function",
    "stateMutability": "nonpayable",
    "payable": false,
    "outputs": [],
    "name": "updateBuddy",
    "inputs": [{
        "type": "address",
        "name": "buddy"
    }],
    "constant": false
}, {
    "type": "function",
    "stateMutability": "view",
    "payable": false,
    "outputs": [{
        "type": "address",
        "name": ""
    }],
    "name": "myBuddy",
    "inputs": [],
    "constant": true
}, {
    "type": "function",
    "stateMutability": "view",
    "payable": false,
    "outputs": [{
        "type": "address",
        "name": ""
    }],
    "name": "buddyOf",
    "inputs": [{
        "type": "address",
        "name": "player"
    }],
    "constant": true
}, {
    "type": "fallback",
    "stateMutability": "payable",
    "payable": true
}, {
    "type": "event",
    "name": "onUpdateBuddy",
    "inputs": [{
        "type": "address",
        "name": "player",
        "indexed": true
    }, {
        "type": "address",
        "name": "buddy",
        "indexed": true
    }],
    "anonymous": false
}]