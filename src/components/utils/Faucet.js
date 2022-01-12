export const faucetContractAddress = "0xE8Bb065668BD0Ff0be8eB7D4341da3ab2FE78D19";
export const faucetContractAbi = [
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "UserAddresses",
				"type": "address[]"
			},
			{
				"components": [
					{
						"internalType": "address",
						"name": "upline",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "referrals",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "total_structure",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "direct_bonus",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "match_bonus",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "deposits",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "deposit_time",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "payouts",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "rolls",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "ref_claim_pos",
						"type": "uint256"
					}
				],
				"internalType": "struct Faucet.User[]",
				"name": "newUserData",
				"type": "tuple[]"
			},
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "airdrops",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "airdrops_received",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "last_airdrop",
						"type": "uint256"
					}
				],
				"internalType": "struct Faucet.Airdrop[]",
				"name": "newUserAirdropData",
				"type": "tuple[]"
			}
		],
		"name": "addUsers",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "airdrop",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "_src",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "_dest",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_deposits",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_payouts",
				"type": "uint256"
			}
		],
		"name": "BalanceTransfer",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "addr",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "beneficiary",
				"type": "address"
			}
		],
		"name": "BeneficiaryUpdate",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "checkin",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "addr",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "Checkin",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "claim",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_upline",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "deposit",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "addr",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "DirectPayout",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "addr",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "HeartBeat",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "addr",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "interval",
				"type": "uint256"
			}
		],
		"name": "HeartBeatIntervalUpdate",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_mintAddress",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_BR34PTokenAddress",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_dripTokenAddress",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_vaultAddress",
				"type": "address"
			}
		],
		"name": "initialize",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "addr",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "referrals",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "total_deposits",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "total_payouts",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "total_structure",
				"type": "uint256"
			}
		],
		"name": "Leaderboard",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "addr",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "LimitReached",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "addr",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "manager",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "ManagerUpdate",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "addr",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "MatchPayout",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "NewAirdrop",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "addr",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "NewDeposit",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "roll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "newTotalAirdrop",
				"type": "uint256"
			}
		],
		"name": "setTotalAirdrops",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "newTotalBNB",
				"type": "uint256"
			}
		],
		"name": "setTotalBNB",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "newTotalDeposits",
				"type": "uint256"
			}
		],
		"name": "setTotalDeposits",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "newTotalTX",
				"type": "uint256"
			}
		],
		"name": "setTotalTX",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "newTotalUsers",
				"type": "uint256"
			}
		],
		"name": "setTotalUsers",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "newTotalWithdraw",
				"type": "uint256"
			}
		],
		"name": "setTotalWithdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_newCompoundTax",
				"type": "uint256"
			}
		],
		"name": "updateCompoundTax",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_newBracketSize",
				"type": "uint256"
			}
		],
		"name": "updateDepositBracketSize",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_newExitTax",
				"type": "uint256"
			}
		],
		"name": "updateExitTax",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256[]",
				"name": "_newRefBalances",
				"type": "uint256[]"
			}
		],
		"name": "updateHoldRequirements",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_newInitialDeposit",
				"type": "uint256"
			}
		],
		"name": "updateInitialDeposit",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_newPayoutCap",
				"type": "uint256"
			}
		],
		"name": "updateMaxPayoutCap",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_newPayoutRate",
				"type": "uint256"
			}
		],
		"name": "updatePayoutRate",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_newRefBonus",
				"type": "uint256"
			}
		],
		"name": "updateRefBonus",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_newRefDepth",
				"type": "uint256"
			}
		],
		"name": "updateRefDepth",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "addr",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "upline",
				"type": "address"
			}
		],
		"name": "Upline",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "addr",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Withdraw",
		"type": "event"
	},
	{
		"stateMutability": "payable",
		"type": "fallback"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "airdrops",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "airdrops",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "airdrops_received",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "last_airdrop",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_addr",
				"type": "address"
			}
		],
		"name": "balanceLevel",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_addr",
				"type": "address"
			}
		],
		"name": "claimsAvailable",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "CompoundTax",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "contractInfo",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_total_users",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_total_deposited",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_total_withdraw",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_total_bnb",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_total_txs",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_total_airdrops",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_addr",
				"type": "address"
			}
		],
		"name": "creditsAndDebits",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_credits",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_debits",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "custody",
		"outputs": [
			{
				"internalType": "address",
				"name": "manager",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "beneficiary",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "last_heartbeat",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "last_checkin",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "heartbeat_interval",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "deposit_bracket_size",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "dripVaultAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "ExitTax",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_addr",
				"type": "address"
			}
		],
		"name": "getCustody",
		"outputs": [
			{
				"internalType": "address",
				"name": "_beneficiary",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_heartbeat_interval",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_manager",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_addr",
				"type": "address"
			},
			{
				"internalType": "uint8",
				"name": "_level",
				"type": "uint8"
			}
		],
		"name": "isBalanceCovered",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_addr",
				"type": "address"
			}
		],
		"name": "isNetPositive",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_addr",
				"type": "address"
			}
		],
		"name": "lastActivity",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_heartbeat",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_lapsed_heartbeat",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_checkin",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_lapsed_checkin",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "max_payout_cap",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "MAX_UINT",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "maxPayoutOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_addr",
				"type": "address"
			}
		],
		"name": "payoutOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "payout",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "max_payout",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "net_payout",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "sustainability_fee",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "ref_balances",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_addr",
				"type": "address"
			}
		],
		"name": "sustainabilityFee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "total_airdrops",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "total_bnb",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "total_deposited",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "total_txs",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "total_users",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "total_withdraw",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_addr",
				"type": "address"
			}
		],
		"name": "userInfo",
		"outputs": [
			{
				"internalType": "address",
				"name": "upline",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "deposit_time",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "deposits",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "payouts",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "direct_bonus",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "match_bonus",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "last_airdrop",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_addr",
				"type": "address"
			}
		],
		"name": "userInfoTotals",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "referrals",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "total_deposits",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "total_payouts",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "total_structure",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "airdrops_total",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "airdrops_received",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "users",
		"outputs": [
			{
				"internalType": "address",
				"name": "upline",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "referrals",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "total_structure",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "direct_bonus",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "match_bonus",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "deposits",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "deposit_time",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "payouts",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "rolls",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "ref_claim_pos",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
export const faucetTokenAddress = "0x620DD286F245d2E5Ca4C7f9A4F5fDcbbd5dFfC83";
export const faucetTokenAbi = [{
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