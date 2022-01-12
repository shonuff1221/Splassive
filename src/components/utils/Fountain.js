export const fountainContractAddress = "0xd669310a0e734A1D45151748b84b40CA5A76e1E8";
export const fountainContractAbi = [{
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [{
        "type": "address",
        "name": "token_addr",
        "internalType": "address"
    }]
}, {
    "type": "event",
    "name": "Approval",
    "inputs": [{
        "type": "address",
        "name": "owner",
        "internalType": "address",
        "indexed": true
    }, {
        "type": "address",
        "name": "spender",
        "internalType": "address",
        "indexed": true
    }, {
        "type": "uint256",
        "name": "value",
        "internalType": "uint256",
        "indexed": false
    }],
    "anonymous": false
}, {
    "type": "event",
    "name": "OwnershipTransferred",
    "inputs": [{
        "type": "address",
        "name": "previousOwner",
        "internalType": "address",
        "indexed": true
    }, {
        "type": "address",
        "name": "newOwner",
        "internalType": "address",
        "indexed": true
    }],
    "anonymous": false
}, {
    "type": "event",
    "name": "Transfer",
    "inputs": [{
        "type": "address",
        "name": "from",
        "internalType": "address",
        "indexed": true
    }, {
        "type": "address",
        "name": "to",
        "internalType": "address",
        "indexed": true
    }, {
        "type": "uint256",
        "name": "value",
        "internalType": "uint256",
        "indexed": false
    }],
    "anonymous": false
}, {
    "type": "event",
    "name": "WhitelistedAddressAdded",
    "inputs": [{
        "type": "address",
        "name": "addr",
        "internalType": "address",
        "indexed": false
    }],
    "anonymous": false
}, {
    "type": "event",
    "name": "WhitelistedAddressRemoved",
    "inputs": [{
        "type": "address",
        "name": "addr",
        "internalType": "address",
        "indexed": false
    }],
    "anonymous": false
}, {
    "type": "event",
    "name": "onAddLiquidity",
    "inputs": [{
        "type": "address",
        "name": "provider",
        "internalType": "address",
        "indexed": true
    }, {
        "type": "uint256",
        "name": "bnb_amount",
        "internalType": "uint256",
        "indexed": true
    }, {
        "type": "uint256",
        "name": "token_amount",
        "internalType": "uint256",
        "indexed": true
    }],
    "anonymous": false
}, {
    "type": "event",
    "name": "onBnbPurchase",
    "inputs": [{
        "type": "address",
        "name": "buyer",
        "internalType": "address",
        "indexed": true
    }, {
        "type": "uint256",
        "name": "token_amount",
        "internalType": "uint256",
        "indexed": true
    }, {
        "type": "uint256",
        "name": "bnb_amount",
        "internalType": "uint256",
        "indexed": true
    }],
    "anonymous": false
}, {
    "type": "event",
    "name": "onContractBalance",
    "inputs": [{
        "type": "uint256",
        "name": "balance",
        "internalType": "uint256",
        "indexed": false
    }],
    "anonymous": false
}, {
    "type": "event",
    "name": "onLiquidity",
    "inputs": [{
        "type": "address",
        "name": "provider",
        "internalType": "address",
        "indexed": true
    }, {
        "type": "uint256",
        "name": "amount",
        "internalType": "uint256",
        "indexed": true
    }],
    "anonymous": false
}, {
    "type": "event",
    "name": "onPrice",
    "inputs": [{
        "type": "uint256",
        "name": "price",
        "internalType": "uint256",
        "indexed": false
    }],
    "anonymous": false
}, {
    "type": "event",
    "name": "onRemoveLiquidity",
    "inputs": [{
        "type": "address",
        "name": "provider",
        "internalType": "address",
        "indexed": true
    }, {
        "type": "uint256",
        "name": "bnb_amount",
        "internalType": "uint256",
        "indexed": true
    }, {
        "type": "uint256",
        "name": "token_amount",
        "internalType": "uint256",
        "indexed": true
    }],
    "anonymous": false
}, {
    "type": "event",
    "name": "onSummary",
    "inputs": [{
        "type": "uint256",
        "name": "liquidity",
        "internalType": "uint256",
        "indexed": false
    }, {
        "type": "uint256",
        "name": "price",
        "internalType": "uint256",
        "indexed": false
    }],
    "anonymous": false
}, {
    "type": "event",
    "name": "onTokenPurchase",
    "inputs": [{
        "type": "address",
        "name": "buyer",
        "internalType": "address",
        "indexed": true
    }, {
        "type": "uint256",
        "name": "bnb_amount",
        "internalType": "uint256",
        "indexed": true
    }, {
        "type": "uint256",
        "name": "token_amount",
        "internalType": "uint256",
        "indexed": true
    }],
    "anonymous": false
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [{
        "type": "bool",
        "name": "success",
        "internalType": "bool"
    }],
    "name": "addAddressToWhitelist",
    "inputs": [{
        "type": "address",
        "name": "addr",
        "internalType": "address"
    }]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [{
        "type": "bool",
        "name": "success",
        "internalType": "bool"
    }],
    "name": "addAddressesToWhitelist",
    "inputs": [{
        "type": "address[]",
        "name": "addrs",
        "internalType": "address[]"
    }]
}, {
    "type": "function",
    "stateMutability": "payable",
    "outputs": [{
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
    }],
    "name": "addLiquidity",
    "inputs": [{
        "type": "uint256",
        "name": "min_liquidity",
        "internalType": "uint256"
    }, {
        "type": "uint256",
        "name": "max_tokens",
        "internalType": "uint256"
    }]
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
    }],
    "name": "allowance",
    "inputs": [{
        "type": "address",
        "name": "owner",
        "internalType": "address"
    }, {
        "type": "address",
        "name": "spender",
        "internalType": "address"
    }]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [{
        "type": "bool",
        "name": "",
        "internalType": "bool"
    }],
    "name": "approve",
    "inputs": [{
        "type": "address",
        "name": "spender",
        "internalType": "address"
    }, {
        "type": "uint256",
        "name": "value",
        "internalType": "uint256"
    }]
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
    }],
    "name": "balanceOf",
    "inputs": [{
        "type": "address",
        "name": "owner",
        "internalType": "address"
    }]
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
    }],
    "name": "bnbBalance",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "payable",
    "outputs": [{
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
    }],
    "name": "bnbToTokenSwapInput",
    "inputs": [{
        "type": "uint256",
        "name": "min_tokens",
        "internalType": "uint256"
    }]
}, {
    "type": "function",
    "stateMutability": "payable",
    "outputs": [{
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
    }],
    "name": "bnbToTokenSwapOutput",
    "inputs": [{
        "type": "uint256",
        "name": "tokens_bought",
        "internalType": "uint256"
    }]
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "uint8",
        "name": "",
        "internalType": "uint8"
    }],
    "name": "decimals",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [{
        "type": "bool",
        "name": "",
        "internalType": "bool"
    }],
    "name": "decreaseAllowance",
    "inputs": [{
        "type": "address",
        "name": "spender",
        "internalType": "address"
    }, {
        "type": "uint256",
        "name": "subtractedValue",
        "internalType": "uint256"
    }]
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
    }],
    "name": "getBnbToLiquidityInputPrice",
    "inputs": [{
        "type": "uint256",
        "name": "bnb_sold",
        "internalType": "uint256"
    }]
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
    }],
    "name": "getBnbToTokenInputPrice",
    "inputs": [{
        "type": "uint256",
        "name": "bnb_sold",
        "internalType": "uint256"
    }]
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
    }],
    "name": "getBnbToTokenOutputPrice",
    "inputs": [{
        "type": "uint256",
        "name": "tokens_bought",
        "internalType": "uint256"
    }]
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
    }],
    "name": "getInputPrice",
    "inputs": [{
        "type": "uint256",
        "name": "input_amount",
        "internalType": "uint256"
    }, {
        "type": "uint256",
        "name": "input_reserve",
        "internalType": "uint256"
    }, {
        "type": "uint256",
        "name": "output_reserve",
        "internalType": "uint256"
    }]
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
    }, {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
    }],
    "name": "getLiquidityToReserveInputPrice",
    "inputs": [{
        "type": "uint256",
        "name": "amount",
        "internalType": "uint256"
    }]
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
    }],
    "name": "getOutputPrice",
    "inputs": [{
        "type": "uint256",
        "name": "output_amount",
        "internalType": "uint256"
    }, {
        "type": "uint256",
        "name": "input_reserve",
        "internalType": "uint256"
    }, {
        "type": "uint256",
        "name": "output_reserve",
        "internalType": "uint256"
    }]
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
    }],
    "name": "getTokenToBnbInputPrice",
    "inputs": [{
        "type": "uint256",
        "name": "tokens_sold",
        "internalType": "uint256"
    }]
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
    }],
    "name": "getTokenToBnbOutputPrice",
    "inputs": [{
        "type": "uint256",
        "name": "bnb_bought",
        "internalType": "uint256"
    }]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [{
        "type": "bool",
        "name": "",
        "internalType": "bool"
    }],
    "name": "increaseAllowance",
    "inputs": [{
        "type": "address",
        "name": "spender",
        "internalType": "address"
    }, {
        "type": "uint256",
        "name": "addedValue",
        "internalType": "uint256"
    }]
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "bool",
        "name": "",
        "internalType": "bool"
    }],
    "name": "isPaused",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "string",
        "name": "",
        "internalType": "string"
    }],
    "name": "name",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "address",
        "name": "",
        "internalType": "address"
    }],
    "name": "owner",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "pause",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
    }],
    "name": "providers",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [{
        "type": "bool",
        "name": "success",
        "internalType": "bool"
    }],
    "name": "removeAddressFromWhitelist",
    "inputs": [{
        "type": "address",
        "name": "addr",
        "internalType": "address"
    }]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [{
        "type": "bool",
        "name": "success",
        "internalType": "bool"
    }],
    "name": "removeAddressesFromWhitelist",
    "inputs": [{
        "type": "address[]",
        "name": "addrs",
        "internalType": "address[]"
    }]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [{
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
    }, {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
    }],
    "name": "removeLiquidity",
    "inputs": [{
        "type": "uint256",
        "name": "amount",
        "internalType": "uint256"
    }, {
        "type": "uint256",
        "name": "min_bnb",
        "internalType": "uint256"
    }, {
        "type": "uint256",
        "name": "min_tokens",
        "internalType": "uint256"
    }]
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "string",
        "name": "",
        "internalType": "string"
    }],
    "name": "symbol",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "address",
        "name": "",
        "internalType": "address"
    }],
    "name": "tokenAddress",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
    }],
    "name": "tokenBalance",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [{
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
    }],
    "name": "tokenToBnbSwapInput",
    "inputs": [{
        "type": "uint256",
        "name": "tokens_sold",
        "internalType": "uint256"
    }, {
        "type": "uint256",
        "name": "min_bnb",
        "internalType": "uint256"
    }]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [{
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
    }],
    "name": "tokenToBnbSwapOutput",
    "inputs": [{
        "type": "uint256",
        "name": "bnb_bought",
        "internalType": "uint256"
    }, {
        "type": "uint256",
        "name": "max_tokens",
        "internalType": "uint256"
    }]
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
    }],
    "name": "totalSupply",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
    }],
    "name": "totalTxs",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [{
        "type": "bool",
        "name": "",
        "internalType": "bool"
    }],
    "name": "transfer",
    "inputs": [{
        "type": "address",
        "name": "to",
        "internalType": "address"
    }, {
        "type": "uint256",
        "name": "value",
        "internalType": "uint256"
    }]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [{
        "type": "bool",
        "name": "",
        "internalType": "bool"
    }],
    "name": "transferFrom",
    "inputs": [{
        "type": "address",
        "name": "from",
        "internalType": "address"
    }, {
        "type": "address",
        "name": "to",
        "internalType": "address"
    }, {
        "type": "uint256",
        "name": "value",
        "internalType": "uint256"
    }]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "transferOwnership",
    "inputs": [{
        "type": "address",
        "name": "newOwner",
        "internalType": "address"
    }]
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
    }],
    "name": "txs",
    "inputs": [{
        "type": "address",
        "name": "owner",
        "internalType": "address"
    }]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "unpause",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "bool",
        "name": "",
        "internalType": "bool"
    }],
    "name": "whitelist",
    "inputs": [{
        "type": "address",
        "name": "",
        "internalType": "address"
    }]
}, {
    "type": "receive",
    "stateMutability": "payable"
}]