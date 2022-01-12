export const dripTokenAddress = "0x620DD286F245d2E5Ca4C7f9A4F5fDcbbd5dFfC83";
export const dripTokenAbi = [{
    "type": "function",
    "stateMutability": "view",
    "payable": false,
    "outputs": [{
        "type": "bool",
        "name": ""
    }],
    "name": "mintingFinished",
    "inputs": [],
    "constant": true
}, {
    "type": "function",
    "stateMutability": "view",
    "payable": false,
    "outputs": [{
        "type": "string",
        "name": ""
    }],
    "name": "name",
    "inputs": [],
    "constant": true
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "payable": false,
    "outputs": [{
        "type": "bool",
        "name": ""
    }],
    "name": "approve",
    "inputs": [{
        "type": "address",
        "name": "_spender"
    }, {
        "type": "uint256",
        "name": "_value"
    }],
    "constant": false
}, {
    "type": "function",
    "stateMutability": "view",
    "payable": false,
    "outputs": [{
        "type": "uint256",
        "name": ""
    }],
    "name": "MAX_INT",
    "inputs": [],
    "constant": true
}, {
    "type": "function",
    "stateMutability": "view",
    "payable": false,
    "outputs": [{
        "type": "uint256",
        "name": ""
    }, {
        "type": "uint256",
        "name": ""
    }, {
        "type": "uint256",
        "name": ""
    }],
    "name": "statsOf",
    "inputs": [{
        "type": "address",
        "name": "player"
    }],
    "constant": true
}, {
    "type": "function",
    "stateMutability": "view",
    "payable": false,
    "outputs": [{
        "type": "uint256",
        "name": ""
    }],
    "name": "totalSupply",
    "inputs": [],
    "constant": true
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "payable": false,
    "outputs": [{
        "type": "bool",
        "name": ""
    }],
    "name": "transferFrom",
    "inputs": [{
        "type": "address",
        "name": "_from"
    }, {
        "type": "address",
        "name": "_to"
    }, {
        "type": "uint256",
        "name": "_value"
    }],
    "constant": false
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "payable": false,
    "outputs": [{
        "type": "bool",
        "name": "success"
    }],
    "name": "removeAddressesFromWhitelist",
    "inputs": [{
        "type": "address[]",
        "name": "addrs"
    }],
    "constant": false
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "payable": false,
    "outputs": [{
        "type": "bool",
        "name": "success"
    }],
    "name": "removeAddressFromWhitelist",
    "inputs": [{
        "type": "address",
        "name": "addr"
    }],
    "constant": false
}, {
    "type": "function",
    "stateMutability": "view",
    "payable": false,
    "outputs": [{
        "type": "uint256",
        "name": ""
    }],
    "name": "targetSupply",
    "inputs": [],
    "constant": true
}, {
    "type": "function",
    "stateMutability": "view",
    "payable": false,
    "outputs": [{
        "type": "uint8",
        "name": ""
    }],
    "name": "decimals",
    "inputs": [],
    "constant": true
}, {
    "type": "function",
    "stateMutability": "view",
    "payable": false,
    "outputs": [{
        "type": "uint256",
        "name": ""
    }],
    "name": "remainingMintableSupply",
    "inputs": [],
    "constant": true
}, {
    "type": "function",
    "stateMutability": "view",
    "payable": false,
    "outputs": [{
        "type": "uint256",
        "name": ""
    }],
    "name": "cap",
    "inputs": [],
    "constant": true
}, {
    "type": "function",
    "stateMutability": "view",
    "payable": false,
    "outputs": [{
        "type": "uint256",
        "name": ""
    }],
    "name": "mintedBy",
    "inputs": [{
        "type": "address",
        "name": "player"
    }],
    "constant": true
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "payable": false,
    "outputs": [{
        "type": "bool",
        "name": ""
    }],
    "name": "mint",
    "inputs": [{
        "type": "address",
        "name": "_to"
    }, {
        "type": "uint256",
        "name": "_amount"
    }],
    "constant": false
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "payable": false,
    "outputs": [],
    "name": "setAccountCustomTax",
    "inputs": [{
        "type": "address",
        "name": "account"
    }, {
        "type": "uint8",
        "name": "taxRate"
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
    "name": "vaultAddress",
    "inputs": [],
    "constant": true
}, {
    "type": "function",
    "stateMutability": "view",
    "payable": false,
    "outputs": [{
        "type": "uint256",
        "name": ""
    }],
    "name": "totalTxs",
    "inputs": [],
    "constant": true
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "payable": false,
    "outputs": [{
        "type": "bool",
        "name": ""
    }],
    "name": "decreaseApproval",
    "inputs": [{
        "type": "address",
        "name": "_spender"
    }, {
        "type": "uint256",
        "name": "_subtractedValue"
    }],
    "constant": false
}, {
    "type": "function",
    "stateMutability": "view",
    "payable": false,
    "outputs": [{
        "type": "uint256",
        "name": ""
    }],
    "name": "balanceOf",
    "inputs": [{
        "type": "address",
        "name": "_owner"
    }],
    "constant": true
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "payable": false,
    "outputs": [],
    "name": "removeAccountCustomTax",
    "inputs": [{
        "type": "address",
        "name": "account"
    }],
    "constant": false
}, {
    "type": "function",
    "stateMutability": "view",
    "payable": false,
    "outputs": [{
        "type": "uint256",
        "name": "adjustedValue"
    }, {
        "type": "uint256",
        "name": "taxAmount"
    }],
    "name": "calculateTransferTaxes",
    "inputs": [{
        "type": "address",
        "name": "_from"
    }, {
        "type": "uint256",
        "name": "_value"
    }],
    "constant": true
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "payable": false,
    "outputs": [{
        "type": "bool",
        "name": "success"
    }],
    "name": "addAddressToWhitelist",
    "inputs": [{
        "type": "address",
        "name": "addr"
    }],
    "constant": false
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "payable": false,
    "outputs": [{
        "type": "bool",
        "name": ""
    }],
    "name": "finishMinting",
    "inputs": [],
    "constant": false
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "payable": false,
    "outputs": [],
    "name": "setVaultAddress",
    "inputs": [{
        "type": "address",
        "name": "_newVaultAddress"
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
    "name": "owner",
    "inputs": [],
    "constant": true
}, {
    "type": "function",
    "stateMutability": "view",
    "payable": false,
    "outputs": [{
        "type": "string",
        "name": ""
    }],
    "name": "symbol",
    "inputs": [],
    "constant": true
}, {
    "type": "function",
    "stateMutability": "view",
    "payable": false,
    "outputs": [{
        "type": "bool",
        "name": ""
    }],
    "name": "whitelist",
    "inputs": [{
        "type": "address",
        "name": ""
    }],
    "constant": true
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "payable": false,
    "outputs": [{
        "type": "bool",
        "name": ""
    }],
    "name": "transfer",
    "inputs": [{
        "type": "address",
        "name": "_to"
    }, {
        "type": "uint256",
        "name": "_value"
    }],
    "constant": false
}, {
    "type": "function",
    "stateMutability": "view",
    "payable": false,
    "outputs": [{
        "type": "uint256",
        "name": ""
    }],
    "name": "mintedSupply",
    "inputs": [],
    "constant": true
}, {
    "type": "function",
    "stateMutability": "view",
    "payable": false,
    "outputs": [{
        "type": "bool",
        "name": ""
    }],
    "name": "isExcluded",
    "inputs": [{
        "type": "address",
        "name": "account"
    }],
    "constant": true
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "payable": false,
    "outputs": [{
        "type": "bool",
        "name": ""
    }],
    "name": "increaseApproval",
    "inputs": [{
        "type": "address",
        "name": "_spender"
    }, {
        "type": "uint256",
        "name": "_addedValue"
    }],
    "constant": false
}, {
    "type": "function",
    "stateMutability": "view",
    "payable": false,
    "outputs": [{
        "type": "uint256",
        "name": ""
    }],
    "name": "players",
    "inputs": [],
    "constant": true
}, {
    "type": "function",
    "stateMutability": "view",
    "payable": false,
    "outputs": [{
        "type": "uint256",
        "name": ""
    }],
    "name": "allowance",
    "inputs": [{
        "type": "address",
        "name": "_owner"
    }, {
        "type": "address",
        "name": "_spender"
    }],
    "constant": true
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "payable": false,
    "outputs": [{
        "type": "bool",
        "name": "success"
    }],
    "name": "addAddressesToWhitelist",
    "inputs": [{
        "type": "address[]",
        "name": "addrs"
    }],
    "constant": false
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "payable": false,
    "outputs": [],
    "name": "excludeAccount",
    "inputs": [{
        "type": "address",
        "name": "account"
    }],
    "constant": false
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "payable": false,
    "outputs": [],
    "name": "transferOwnership",
    "inputs": [{
        "type": "address",
        "name": "newOwner"
    }],
    "constant": false
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "payable": false,
    "outputs": [],
    "name": "includeAccount",
    "inputs": [{
        "type": "address",
        "name": "account"
    }],
    "constant": false
}, {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "payable": false,
    "inputs": [{
        "type": "uint256",
        "name": "_initialMint"
    }]
}, {
    "type": "event",
    "name": "TaxPayed",
    "inputs": [{
        "type": "address",
        "name": "from",
        "indexed": false
    }, {
        "type": "address",
        "name": "vault",
        "indexed": false
    }, {
        "type": "uint256",
        "name": "amount",
        "indexed": false
    }],
    "anonymous": false
}, {
    "type": "event",
    "name": "Mint",
    "inputs": [{
        "type": "address",
        "name": "to",
        "indexed": true
    }, {
        "type": "uint256",
        "name": "amount",
        "indexed": false
    }],
    "anonymous": false
}, {
    "type": "event",
    "name": "MintFinished",
    "inputs": [],
    "anonymous": false
}, {
    "type": "event",
    "name": "WhitelistedAddressAdded",
    "inputs": [{
        "type": "address",
        "name": "addr",
        "indexed": false
    }],
    "anonymous": false
}, {
    "type": "event",
    "name": "WhitelistedAddressRemoved",
    "inputs": [{
        "type": "address",
        "name": "addr",
        "indexed": false
    }],
    "anonymous": false
}, {
    "type": "event",
    "name": "OwnershipTransferred",
    "inputs": [{
        "type": "address",
        "name": "previousOwner",
        "indexed": true
    }, {
        "type": "address",
        "name": "newOwner",
        "indexed": true
    }],
    "anonymous": false
}, {
    "type": "event",
    "name": "Approval",
    "inputs": [{
        "type": "address",
        "name": "owner",
        "indexed": true
    }, {
        "type": "address",
        "name": "spender",
        "indexed": true
    }, {
        "type": "uint256",
        "name": "value",
        "indexed": false
    }],
    "anonymous": false
}, {
    "type": "event",
    "name": "Transfer",
    "inputs": [{
        "type": "address",
        "name": "from",
        "indexed": true
    }, {
        "type": "address",
        "name": "to",
        "indexed": true
    }, {
        "type": "uint256",
        "name": "value",
        "indexed": false
    }],
    "anonymous": false
}]