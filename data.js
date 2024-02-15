const jsondata = {
	"links": {
	  "self": "https://api.zerion.io/v1/wallets/0x5da04eb0e28a06798797f54deb17cc014c525370/transactions/?currency=usd&filter%5Basset_types%5D=fungible&filter%5Bmin_mined_at%5D=1703228734000&filter%5Boperation_types%5D=trade&filter%5Btrash%5D=only_non_trash&page%5Bafter%5D=WyIiLCIiXQ%3D%3D&page%5Bsize%5D=100"
	},
	"data": [
	  {
		"type": "transactions",
		"id": "ed3653172e255db1bc48f962aa228043",
		"attributes": {
		  "operation_type": "trade",
		  "hash": "0xc3d561c40bd0139f14b4b28ec199f65a6c0bab333d1bb7dde5fbe8428efe4481",
		  "mined_at_block": 19090337,
		  "mined_at": "2024-01-26T10:59:23Z",
		  "sent_from": "0x5da04eb0e28a06798797f54deb17cc014c525370",
		  "sent_to": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
		  "status": "confirmed",
		  "nonce": 1395,
		  "fee": {
			"fungible_info": {
			  "name": "Ethereum",
			  "symbol": "ETH",
			  "icon": {
				"url": "https://token-icons.s3.amazonaws.com/eth.png"
			  },
			  "flags": {
				"verified": true
			  },
			  "implementations": [
				{
				  "chain_id": "zora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "scroll",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "base",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "arbitrum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "polygon-zkevm",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "optimism",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "ethereum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "aurora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "linea",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zksync-era",
				  "address": "",
				  "decimals": 18
				}
			  ]
			},
			"quantity": {
			  "int": "4345614359667369",
			  "decimals": 18,
			  "float": 0.0043456143596674,
			  "numeric": "0.004345614359667369"
			},
			"price": 2234.89,
			"value": 9.711970076277076
		  },
		  "transfers": [
			{
			  "fungible_info": {
				"name": "Ethereum",
				"symbol": "ETH",
				"icon": {
				  "url": "https://token-icons.s3.amazonaws.com/eth.png"
				},
				"flags": {
				  "verified": true
				},
				"implementations": [
				  {
					"chain_id": "optimism",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zksync-era",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "ethereum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "polygon-zkevm",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "scroll",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "aurora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "linea",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "arbitrum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "base",
					"address": "",
					"decimals": 18
				  }
				]
			  },
			  "direction": "in",
			  "quantity": {
				"int": "652029257522910175",
				"decimals": 18,
				"float": 0.6520292575229102,
				"numeric": "0.652029257522910175"
			  },
			  "value": 1457.2136673453767,
			  "price": 2234.89,
			  "sender": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
			  "recipient": "0x5da04eb0e28a06798797f54deb17cc014c525370"
			},
			{
			  "fungible_info": {
				"name": "OpSec",
				"symbol": "OPSEC",
				"icon": null,
				"flags": {
				  "verified": false
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "0x6a7eff1e2c355ad6eb91bebb5ded49257f3fed98",
					"decimals": 18
				  }
				]
			  },
			  "direction": "out",
			  "quantity": {
				"int": "692574706381964730856",
				"decimals": 18,
				"float": 692.5747063819647,
				"numeric": "692.574706381964730856"
			  },
			  "value": 76.49373650904775,
			  "price": 0.11044835424131182,
			  "sender": "0x5da04eb0e28a06798797f54deb17cc014c525370",
			  "recipient": "0x6a7eff1e2c355ad6eb91bebb5ded49257f3fed98"
			},
			{
			  "fungible_info": {
				"name": "OpSec",
				"symbol": "OPSEC",
				"icon": null,
				"flags": {
				  "verified": false
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "0x6a7eff1e2c355ad6eb91bebb5ded49257f3fed98",
					"decimals": 18
				  }
				]
			  },
			  "direction": "out",
			  "quantity": {
				"int": "13158919421257329886271",
				"decimals": 18,
				"float": 13158.91942125733,
				"numeric": "13158.919421257329886271"
			  },
			  "value": 1453.3809936719074,
			  "price": 0.11044835424131182,
			  "sender": "0x5da04eb0e28a06798797f54deb17cc014c525370",
			  "recipient": "0x515d459555f8c1fcf2791ded819b73b60a80b8e3"
			}
		  ],
		  "approvals": [
			{
			  "fungible_info": {
				"name": "OpSec",
				"symbol": "OPSEC",
				"icon": null,
				"flags": {
				  "verified": false
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "0x6a7eff1e2c355ad6eb91bebb5ded49257f3fed98",
					"decimals": 18
				  }
				]
			  },
			  "quantity": {
				"int": "115792089237316195423570985008687907853269984665640564025606089880273835022808",
				"decimals": 18,
				"float": 1.157920892373162e+59,
				"numeric": "115792089237316195423570985008687907853269984665640564025606.089880273835022808"
			  },
			  "sender": "0x000000000022d473030f116ddee9f6b43ac78ba3"
			}
		  ],
		  "application_metadata": {
			"name": "Uniswap",
			"icon": {
			  "url": "https://protocol-icons.s3.amazonaws.com/uniswap_protocol.png"
			},
			"contract_address": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
			"method": {
			  "id": "0x3593564c",
			  "name": "Execute"
			}
		  },
		  "flags": {
			"is_trash": false
		  }
		},
		"relationships": {
		  "chain": {
			"links": {
			  "related": "https://api.zerion.io/v1/chains/ethereum"
			},
			"data": {
			  "type": "chains",
			  "id": "ethereum"
			}
		  }
		}
	  },
	  {
		"type": "transactions",
		"id": "9d2183f8a0c259c9b46090a389cc210d",
		"attributes": {
		  "operation_type": "trade",
		  "hash": "0x2e2f50dc6ef00e3d2231977eb0cfc2c7b54232d35f3b7629d2b71ef914c9938f",
		  "mined_at_block": 19062968,
		  "mined_at": "2024-01-22T14:50:23Z",
		  "sent_from": "0x5da04eb0e28a06798797f54deb17cc014c525370",
		  "sent_to": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
		  "status": "confirmed",
		  "nonce": 1393,
		  "fee": {
			"fungible_info": {
			  "name": "Ethereum",
			  "symbol": "ETH",
			  "icon": {
				"url": "https://token-icons.s3.amazonaws.com/eth.png"
			  },
			  "flags": {
				"verified": true
			  },
			  "implementations": [
				{
				  "chain_id": "optimism",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "linea",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zksync-era",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "aurora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "ethereum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "polygon-zkevm",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "arbitrum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "scroll",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "base",
				  "address": "",
				  "decimals": 18
				}
			  ]
			},
			"quantity": {
			  "int": "3845484327711334",
			  "decimals": 18,
			  "float": 0.0038454843277113,
			  "numeric": "0.003845484327711334"
			},
			"price": 2365.11,
			"value": 9.094993438313274
		  },
		  "transfers": [
			{
			  "fungible_info": {
				"name": "Ethereum",
				"symbol": "ETH",
				"icon": {
				  "url": "https://token-icons.s3.amazonaws.com/eth.png"
				},
				"flags": {
				  "verified": true
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "arbitrum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "aurora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "linea",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "optimism",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "polygon-zkevm",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zksync-era",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "base",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "scroll",
					"address": "",
					"decimals": 18
				  }
				]
			  },
			  "direction": "in",
			  "quantity": {
				"int": "271596947238688330",
				"decimals": 18,
				"float": 0.2715969472386883,
				"numeric": "0.271596947238688330"
			  },
			  "value": 642.3566558836942,
			  "price": 2365.11,
			  "sender": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
			  "recipient": "0x5da04eb0e28a06798797f54deb17cc014c525370"
			},
			{
			  "fungible_info": {
				"name": "Metroxynth",
				"symbol": "MXH",
				"icon": null,
				"flags": {
				  "verified": false
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "0x95640a134721475bc78594c8ea66c0182c7b9a50",
					"decimals": 9
				  }
				]
			  },
			  "direction": "out",
			  "quantity": {
				"int": "103887277691779",
				"decimals": 9,
				"float": 103887.277691779,
				"numeric": "103887.277691779"
			  },
			  "value": 712.4980781382625,
			  "price": 0.0068583766363785005,
			  "sender": "0x5da04eb0e28a06798797f54deb17cc014c525370",
			  "recipient": "0xd65754e039dba5ff19ccb0c11786d495b6246ae8"
			}
		  ],
		  "approvals": [
			{
			  "fungible_info": {
				"name": "Metroxynth",
				"symbol": "MXH",
				"icon": null,
				"flags": {
				  "verified": false
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "0x95640a134721475bc78594c8ea66c0182c7b9a50",
					"decimals": 9
				  }
				]
			  },
			  "quantity": {
				"int": "115792089237316195423570985008687907853269984665640564039457583904025851948156",
				"decimals": 9,
				"float": 1.157920892373162e+68,
				"numeric": "115792089237316195423570985008687907853269984665640564039457583904025.851948156"
			  },
			  "sender": "0x000000000022d473030f116ddee9f6b43ac78ba3"
			}
		  ],
		  "application_metadata": {
			"name": "Uniswap",
			"icon": {
			  "url": "https://protocol-icons.s3.amazonaws.com/uniswap_protocol.png"
			},
			"contract_address": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
			"method": {
			  "id": "0x3593564c",
			  "name": "Execute"
			}
		  },
		  "flags": {
			"is_trash": false
		  }
		},
		"relationships": {
		  "chain": {
			"links": {
			  "related": "https://api.zerion.io/v1/chains/ethereum"
			},
			"data": {
			  "type": "chains",
			  "id": "ethereum"
			}
		  }
		}
	  },
	  {
		"type": "transactions",
		"id": "a67e3b8d27075cf7ad9c822adc9d5e1b",
		"attributes": {
		  "operation_type": "trade",
		  "hash": "0x554b5ddf9fc94a11c6feabb86b22a9531ffef56f721cdeff845a0b19edaf9864",
		  "mined_at_block": 19062944,
		  "mined_at": "2024-01-22T14:45:11Z",
		  "sent_from": "0x5da04eb0e28a06798797f54deb17cc014c525370",
		  "sent_to": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
		  "status": "confirmed",
		  "nonce": 1391,
		  "fee": {
			"fungible_info": {
			  "name": "Ethereum",
			  "symbol": "ETH",
			  "icon": {
				"url": "https://token-icons.s3.amazonaws.com/eth.png"
			  },
			  "flags": {
				"verified": true
			  },
			  "implementations": [
				{
				  "chain_id": "aurora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zksync-era",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "polygon-zkevm",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "base",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "optimism",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "scroll",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "ethereum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "arbitrum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "linea",
				  "address": "",
				  "decimals": 18
				}
			  ]
			},
			"quantity": {
			  "int": "3014430507297876",
			  "decimals": 18,
			  "float": 0.0030144305072979,
			  "numeric": "0.003014430507297876"
			},
			"price": 2374.57,
			"value": 7.157976249714375
		  },
		  "transfers": [
			{
			  "fungible_info": {
				"name": "Metroxynth",
				"symbol": "MXH",
				"icon": null,
				"flags": {
				  "verified": false
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "0x95640a134721475bc78594c8ea66c0182c7b9a50",
					"decimals": 9
				  }
				]
			  },
			  "direction": "in",
			  "quantity": {
				"int": "73240272524102",
				"decimals": 9,
				"float": 73240.272524102,
				"numeric": "73240.272524102"
			  },
			  "value": 354.3022149038011,
			  "price": 0.004837532722003552,
			  "sender": "0xd65754e039dba5ff19ccb0c11786d495b6246ae8",
			  "recipient": "0x5da04eb0e28a06798797f54deb17cc014c525370"
			},
			{
			  "fungible_info": {
				"name": "Ethereum",
				"symbol": "ETH",
				"icon": {
				  "url": "https://token-icons.s3.amazonaws.com/eth.png"
				},
				"flags": {
				  "verified": true
				},
				"implementations": [
				  {
					"chain_id": "polygon-zkevm",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "base",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zksync-era",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "ethereum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "aurora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "arbitrum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "optimism",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "scroll",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "linea",
					"address": "",
					"decimals": 18
				  }
				]
			  },
			  "direction": "out",
			  "quantity": {
				"int": "150000000000000000",
				"decimals": 18,
				"float": 0.15,
				"numeric": "0.150000000000000000"
			  },
			  "value": 356.1855,
			  "price": 2374.57,
			  "sender": "0x5da04eb0e28a06798797f54deb17cc014c525370",
			  "recipient": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad"
			}
		  ],
		  "approvals": [],
		  "application_metadata": {
			"name": "Uniswap",
			"icon": {
			  "url": "https://protocol-icons.s3.amazonaws.com/uniswap_protocol.png"
			},
			"contract_address": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
			"method": {
			  "id": "0x3593564c",
			  "name": "Execute"
			}
		  },
		  "flags": {
			"is_trash": false
		  }
		},
		"relationships": {
		  "chain": {
			"links": {
			  "related": "https://api.zerion.io/v1/chains/ethereum"
			},
			"data": {
			  "type": "chains",
			  "id": "ethereum"
			}
		  }
		}
	  },
	  {
		"type": "transactions",
		"id": "970765a1cd605ae589a9712f3374a9ab",
		"attributes": {
		  "operation_type": "trade",
		  "hash": "0x0f8069f41ce451e65c5a2ba7a3a0427fadb4e522d390e39bb194fb4c4d96ba5b",
		  "mined_at_block": 19061104,
		  "mined_at": "2024-01-22T08:31:35Z",
		  "sent_from": "0x5da04eb0e28a06798797f54deb17cc014c525370",
		  "sent_to": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
		  "status": "confirmed",
		  "nonce": 1388,
		  "fee": {
			"fungible_info": {
			  "name": "Ethereum",
			  "symbol": "ETH",
			  "icon": {
				"url": "https://token-icons.s3.amazonaws.com/eth.png"
			  },
			  "flags": {
				"verified": true
			  },
			  "implementations": [
				{
				  "chain_id": "polygon-zkevm",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "base",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "arbitrum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "ethereum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zksync-era",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "aurora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "optimism",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "scroll",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "linea",
				  "address": "",
				  "decimals": 18
				}
			  ]
			},
			"quantity": {
			  "int": "6554135444920938",
			  "decimals": 18,
			  "float": 0.0065541354449209,
			  "numeric": "0.006554135444920938"
			},
			"price": 2408.63,
			"value": 15.786487256699827
		  },
		  "transfers": [
			{
			  "fungible_info": {
				"name": "Micro AI",
				"symbol": "MAI",
				"icon": null,
				"flags": {
				  "verified": false
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "0x24d73bca2bd9c3a61e99dfc7cb86d3c379ebded7",
					"decimals": 18
				  }
				]
			  },
			  "direction": "in",
			  "quantity": {
				"int": "1000000000000000000000",
				"decimals": 18,
				"float": 1000,
				"numeric": "1000.000000000000000000"
			  },
			  "value": 3319.6041672906717,
			  "price": 3.3196041672906715,
			  "sender": "0xc52a18e7358b1c618bd8f0e784b35636775afb4e",
			  "recipient": "0x5da04eb0e28a06798797f54deb17cc014c525370"
			},
			{
			  "fungible_info": {
				"name": "Ethereum",
				"symbol": "ETH",
				"icon": {
				  "url": "https://token-icons.s3.amazonaws.com/eth.png"
				},
				"flags": {
				  "verified": true
				},
				"implementations": [
				  {
					"chain_id": "aurora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "linea",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "ethereum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "polygon-zkevm",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "scroll",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "base",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "arbitrum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "optimism",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zksync-era",
					"address": "",
					"decimals": 18
				  }
				]
			  },
			  "direction": "out",
			  "quantity": {
				"int": "1388867972504792022",
				"decimals": 18,
				"float": 1.388867972504792,
				"numeric": "1.388867972504792022"
			  },
			  "value": 3345.2690646142178,
			  "price": 2408.63,
			  "sender": "0x5da04eb0e28a06798797f54deb17cc014c525370",
			  "recipient": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad"
			}
		  ],
		  "approvals": [],
		  "application_metadata": {
			"name": "Uniswap",
			"icon": {
			  "url": "https://protocol-icons.s3.amazonaws.com/uniswap_protocol.png"
			},
			"contract_address": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
			"method": {
			  "id": "0x3593564c",
			  "name": "Execute"
			}
		  },
		  "flags": {
			"is_trash": false
		  }
		},
		"relationships": {
		  "chain": {
			"links": {
			  "related": "https://api.zerion.io/v1/chains/ethereum"
			},
			"data": {
			  "type": "chains",
			  "id": "ethereum"
			}
		  }
		}
	  },
	  {
		"type": "transactions",
		"id": "129ecd7f4297585ab959623b70e551fe",
		"attributes": {
		  "operation_type": "trade",
		  "hash": "0x9d6aa10471b7308228c933679aaaa55520061c173d206c1ef92270f449385184",
		  "mined_at_block": 19061090,
		  "mined_at": "2024-01-22T08:28:47Z",
		  "sent_from": "0x5da04eb0e28a06798797f54deb17cc014c525370",
		  "sent_to": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
		  "status": "confirmed",
		  "nonce": 1387,
		  "fee": {
			"fungible_info": {
			  "name": "Ethereum",
			  "symbol": "ETH",
			  "icon": {
				"url": "https://token-icons.s3.amazonaws.com/eth.png"
			  },
			  "flags": {
				"verified": true
			  },
			  "implementations": [
				{
				  "chain_id": "arbitrum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "optimism",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "scroll",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "base",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "aurora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "ethereum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zksync-era",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "linea",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "polygon-zkevm",
				  "address": "",
				  "decimals": 18
				}
			  ]
			},
			"quantity": {
			  "int": "8876869573678368",
			  "decimals": 18,
			  "float": 0.0088768695736784,
			  "numeric": "0.008876869573678368"
			},
			"price": 2407.77,
			"value": 21.373460253415644
		  },
		  "transfers": [
			{
			  "fungible_info": {
				"name": "Ethereum",
				"symbol": "ETH",
				"icon": {
				  "url": "https://token-icons.s3.amazonaws.com/eth.png"
				},
				"flags": {
				  "verified": true
				},
				"implementations": [
				  {
					"chain_id": "scroll",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "aurora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "linea",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "ethereum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zksync-era",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "optimism",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "arbitrum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "polygon-zkevm",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "base",
					"address": "",
					"decimals": 18
				  }
				]
			  },
			  "direction": "in",
			  "quantity": {
				"int": "1297882703111534434",
				"decimals": 18,
				"float": 1.2978827031115343,
				"numeric": "1.297882703111534434"
			  },
			  "value": 3125.003036070859,
			  "price": 2407.77,
			  "sender": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
			  "recipient": "0x5da04eb0e28a06798797f54deb17cc014c525370"
			},
			{
			  "fungible_info": {
				"name": "AIT Protocol",
				"symbol": "AIT",
				"icon": null,
				"flags": {
				  "verified": false
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "0x89d584a1edb3a70b3b07963f9a3ea5399e38b136",
					"decimals": 18
				  }
				]
			  },
			  "direction": "out",
			  "quantity": {
				"int": "800000000000000000000",
				"decimals": 18,
				"float": 800,
				"numeric": "800.000000000000000000"
			  },
			  "value": 130.09949350717363,
			  "price": 0.16262436688396703,
			  "sender": "0x5da04eb0e28a06798797f54deb17cc014c525370",
			  "recipient": "0xc5833628bbeb908f1cd89351e97fa73e265e6227"
			},
			{
			  "fungible_info": {
				"name": "AIT Protocol",
				"symbol": "AIT",
				"icon": null,
				"flags": {
				  "verified": false
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "0x89d584a1edb3a70b3b07963f9a3ea5399e38b136",
					"decimals": 18
				  }
				]
			  },
			  "direction": "out",
			  "quantity": {
				"int": "19200000000000000000000",
				"decimals": 18,
				"float": 19200,
				"numeric": "19200.000000000000000000"
			  },
			  "value": 3122.387844172167,
			  "price": 0.16262436688396703,
			  "sender": "0x5da04eb0e28a06798797f54deb17cc014c525370",
			  "recipient": "0x4e34da137f0b317c633838458e0c923a5e088752"
			}
		  ],
		  "approvals": [],
		  "application_metadata": {
			"name": "Uniswap",
			"icon": {
			  "url": "https://protocol-icons.s3.amazonaws.com/uniswap_protocol.png"
			},
			"contract_address": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
			"method": {
			  "id": "0x3593564c",
			  "name": "Execute"
			}
		  },
		  "flags": {
			"is_trash": false
		  }
		},
		"relationships": {
		  "chain": {
			"links": {
			  "related": "https://api.zerion.io/v1/chains/ethereum"
			},
			"data": {
			  "type": "chains",
			  "id": "ethereum"
			}
		  }
		}
	  },
	  {
		"type": "transactions",
		"id": "57f80e78f81f535abed685bdabfc94f4",
		"attributes": {
		  "operation_type": "trade",
		  "hash": "0xabffc339d63bf5b92daa918b6c7b401faec369e8fc5689be974a44795c10bbc0",
		  "mined_at_block": 19060996,
		  "mined_at": "2024-01-22T08:09:47Z",
		  "sent_from": "0x5da04eb0e28a06798797f54deb17cc014c525370",
		  "sent_to": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
		  "status": "confirmed",
		  "nonce": 1385,
		  "fee": {
			"fungible_info": {
			  "name": "Ethereum",
			  "symbol": "ETH",
			  "icon": {
				"url": "https://token-icons.s3.amazonaws.com/eth.png"
			  },
			  "flags": {
				"verified": true
			  },
			  "implementations": [
				{
				  "chain_id": "polygon-zkevm",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "base",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zksync-era",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "linea",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "ethereum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "arbitrum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "optimism",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "scroll",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "aurora",
				  "address": "",
				  "decimals": 18
				}
			  ]
			},
			"quantity": {
			  "int": "9160285474220856",
			  "decimals": 18,
			  "float": 0.0091602854742209,
			  "numeric": "0.009160285474220856"
			},
			"price": 2411.38,
			"value": 22.088929186826793
		  },
		  "transfers": [
			{
			  "fungible_info": {
				"name": "Micro AI",
				"symbol": "MAI",
				"icon": null,
				"flags": {
				  "verified": false
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "0x24d73bca2bd9c3a61e99dfc7cb86d3c379ebded7",
					"decimals": 18
				  }
				]
			  },
			  "direction": "in",
			  "quantity": {
				"int": "2534580000000000000000",
				"decimals": 18,
				"float": 2534.58,
				"numeric": "2534.580000000000000000"
			  },
			  "value": 7493.818369578362,
			  "price": 2.9566312247308675,
			  "sender": "0xc52a18e7358b1c618bd8f0e784b35636775afb4e",
			  "recipient": "0x5da04eb0e28a06798797f54deb17cc014c525370"
			},
			{
			  "fungible_info": {
				"name": "Ethereum",
				"symbol": "ETH",
				"icon": {
				  "url": "https://token-icons.s3.amazonaws.com/eth.png"
				},
				"flags": {
				  "verified": true
				},
				"implementations": [
				  {
					"chain_id": "zksync-era",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "optimism",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "arbitrum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "ethereum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "base",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "linea",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "polygon-zkevm",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "scroll",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "aurora",
					"address": "",
					"decimals": 18
				  }
				]
			  },
			  "direction": "out",
			  "quantity": {
				"int": "3082507534056475582",
				"decimals": 18,
				"float": 3.0825075340564756,
				"numeric": "3.082507534056475582"
			  },
			  "value": 7433.097017473105,
			  "price": 2411.38,
			  "sender": "0x5da04eb0e28a06798797f54deb17cc014c525370",
			  "recipient": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad"
			}
		  ],
		  "approvals": [],
		  "application_metadata": {
			"name": "Uniswap",
			"icon": {
			  "url": "https://protocol-icons.s3.amazonaws.com/uniswap_protocol.png"
			},
			"contract_address": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
			"method": {
			  "id": "0x3593564c",
			  "name": "Execute"
			}
		  },
		  "flags": {
			"is_trash": false
		  }
		},
		"relationships": {
		  "chain": {
			"links": {
			  "related": "https://api.zerion.io/v1/chains/ethereum"
			},
			"data": {
			  "type": "chains",
			  "id": "ethereum"
			}
		  }
		}
	  },
	  {
		"type": "transactions",
		"id": "a2a243b3890756b9b3ef621336952583",
		"attributes": {
		  "operation_type": "trade",
		  "hash": "0x9fcfea2ccbd5ac5eabe88ab434030220a1f0183174f6e6f3d384ec94a3e77511",
		  "mined_at_block": 19060993,
		  "mined_at": "2024-01-22T08:09:11Z",
		  "sent_from": "0x5da04eb0e28a06798797f54deb17cc014c525370",
		  "sent_to": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
		  "status": "confirmed",
		  "nonce": 1384,
		  "fee": {
			"fungible_info": {
			  "name": "Ethereum",
			  "symbol": "ETH",
			  "icon": {
				"url": "https://token-icons.s3.amazonaws.com/eth.png"
			  },
			  "flags": {
				"verified": true
			  },
			  "implementations": [
				{
				  "chain_id": "arbitrum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "aurora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "base",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zksync-era",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "linea",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "optimism",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "polygon-zkevm",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "scroll",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "ethereum",
				  "address": "",
				  "decimals": 18
				}
			  ]
			},
			"quantity": {
			  "int": "15053948887564860",
			  "decimals": 18,
			  "float": 0.0150539488875649,
			  "numeric": "0.015053948887564860"
			},
			"price": 2411.36,
			"value": 36.3004901895185
		  },
		  "transfers": [
			{
			  "fungible_info": {
				"name": "Ethereum",
				"symbol": "ETH",
				"icon": {
				  "url": "https://token-icons.s3.amazonaws.com/eth.png"
				},
				"flags": {
				  "verified": true
				},
				"implementations": [
				  {
					"chain_id": "linea",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "ethereum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zksync-era",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "optimism",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "arbitrum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "base",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "aurora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "polygon-zkevm",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "scroll",
					"address": "",
					"decimals": 18
				  }
				]
			  },
			  "direction": "in",
			  "quantity": {
				"int": "2576697232681044510",
				"decimals": 18,
				"float": 2.5766972326810444,
				"numeric": "2.576697232681044510"
			  },
			  "value": 6213.3446389977635,
			  "price": 2411.36,
			  "sender": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
			  "recipient": "0x5da04eb0e28a06798797f54deb17cc014c525370"
			},
			{
			  "fungible_info": {
				"name": "TypeAI",
				"symbol": "TYPE",
				"icon": null,
				"flags": {
				  "verified": false
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "0x443459d45c30a03f90037d011cbe22e2183d3b12",
					"decimals": 18
				  }
				]
			  },
			  "direction": "out",
			  "quantity": {
				"int": "2500000000000000000000",
				"decimals": 18,
				"float": 2500,
				"numeric": "2500.000000000000000000"
			  },
			  "value": 307.2682949171965,
			  "price": 0.12290731796687861,
			  "sender": "0x5da04eb0e28a06798797f54deb17cc014c525370",
			  "recipient": "0x443459d45c30a03f90037d011cbe22e2183d3b12"
			},
			{
			  "fungible_info": {
				"name": "TypeAI",
				"symbol": "TYPE",
				"icon": null,
				"flags": {
				  "verified": false
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "0x443459d45c30a03f90037d011cbe22e2183d3b12",
					"decimals": 18
				  }
				]
			  },
			  "direction": "out",
			  "quantity": {
				"int": "47500000000000000000000",
				"decimals": 18,
				"float": 47500,
				"numeric": "47500.000000000000000000"
			  },
			  "value": 5838.097603426734,
			  "price": 0.12290731796687861,
			  "sender": "0x5da04eb0e28a06798797f54deb17cc014c525370",
			  "recipient": "0x26577f58af2f7de1a85034bb360fd154cda022f3"
			}
		  ],
		  "approvals": [
			{
			  "fungible_info": {
				"name": "TypeAI",
				"symbol": "TYPE",
				"icon": null,
				"flags": {
				  "verified": false
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "0x443459d45c30a03f90037d011cbe22e2183d3b12",
					"decimals": 18
				  }
				]
			  },
			  "quantity": {
				"int": "30363216860000000000000",
				"decimals": 18,
				"float": 30363.21686,
				"numeric": "30363.216860000000000000"
			  },
			  "sender": "0x000000000022d473030f116ddee9f6b43ac78ba3"
			}
		  ],
		  "application_metadata": {
			"name": "Uniswap",
			"icon": {
			  "url": "https://protocol-icons.s3.amazonaws.com/uniswap_protocol.png"
			},
			"contract_address": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
			"method": {
			  "id": "0x3593564c",
			  "name": "Execute"
			}
		  },
		  "flags": {
			"is_trash": false
		  }
		},
		"relationships": {
		  "chain": {
			"links": {
			  "related": "https://api.zerion.io/v1/chains/ethereum"
			},
			"data": {
			  "type": "chains",
			  "id": "ethereum"
			}
		  }
		}
	  },
	  {
		"type": "transactions",
		"id": "2132bb27d57f54c0ac65c684ed9ee256",
		"attributes": {
		  "operation_type": "trade",
		  "hash": "0x53d12384a99b910eaacd0f44d9664a22cf6830b1441a04c01025e1588f14030f",
		  "mined_at_block": 19060985,
		  "mined_at": "2024-01-22T08:07:35Z",
		  "sent_from": "0x5da04eb0e28a06798797f54deb17cc014c525370",
		  "sent_to": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
		  "status": "confirmed",
		  "nonce": 1383,
		  "fee": {
			"fungible_info": {
			  "name": "Ethereum",
			  "symbol": "ETH",
			  "icon": {
				"url": "https://token-icons.s3.amazonaws.com/eth.png"
			  },
			  "flags": {
				"verified": true
			  },
			  "implementations": [
				{
				  "chain_id": "base",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "aurora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "ethereum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "optimism",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "arbitrum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "scroll",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zksync-era",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "linea",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "polygon-zkevm",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zora",
				  "address": "",
				  "decimals": 18
				}
			  ]
			},
			"quantity": {
			  "int": "6604285399776566",
			  "decimals": 18,
			  "float": 0.0066042853997766,
			  "numeric": "0.006604285399776566"
			},
			"price": 2414.19,
			"value": 15.943999769286672
		  },
		  "transfers": [
			{
			  "fungible_info": {
				"name": "Micro AI",
				"symbol": "MAI",
				"icon": null,
				"flags": {
				  "verified": false
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "0x24d73bca2bd9c3a61e99dfc7cb86d3c379ebded7",
					"decimals": 18
				  }
				]
			  },
			  "direction": "in",
			  "quantity": {
				"int": "1464588211893267312290",
				"decimals": 18,
				"float": 1464.5882118932673,
				"numeric": "1464.588211893267312290"
			  },
			  "value": 4239.120739074586,
			  "price": 2.894411346923714,
			  "sender": "0xc52a18e7358b1c618bd8f0e784b35636775afb4e",
			  "recipient": "0x5da04eb0e28a06798797f54deb17cc014c525370"
			},
			{
			  "fungible_info": {
				"name": "Ethereum",
				"symbol": "ETH",
				"icon": {
				  "url": "https://token-icons.s3.amazonaws.com/eth.png"
				},
				"flags": {
				  "verified": true
				},
				"implementations": [
				  {
					"chain_id": "aurora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "optimism",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "polygon-zkevm",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "ethereum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "base",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "linea",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "arbitrum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "scroll",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zksync-era",
					"address": "",
					"decimals": 18
				  }
				]
			  },
			  "direction": "out",
			  "quantity": {
				"int": "1750000000000000000",
				"decimals": 18,
				"float": 1.75,
				"numeric": "1.750000000000000000"
			  },
			  "value": 4224.8325,
			  "price": 2414.19,
			  "sender": "0x5da04eb0e28a06798797f54deb17cc014c525370",
			  "recipient": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad"
			}
		  ],
		  "approvals": [],
		  "application_metadata": {
			"name": "Uniswap",
			"icon": {
			  "url": "https://protocol-icons.s3.amazonaws.com/uniswap_protocol.png"
			},
			"contract_address": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
			"method": {
			  "id": "0x3593564c",
			  "name": "Execute"
			}
		  },
		  "flags": {
			"is_trash": false
		  }
		},
		"relationships": {
		  "chain": {
			"links": {
			  "related": "https://api.zerion.io/v1/chains/ethereum"
			},
			"data": {
			  "type": "chains",
			  "id": "ethereum"
			}
		  }
		}
	  },
	  {
		"type": "transactions",
		"id": "b4af9ab6614551d782d276104cba836d",
		"attributes": {
		  "operation_type": "trade",
		  "hash": "0xff0e6477dbb66ccc69c0d6d3cd08ee21e06278ff92887a155241515c3f828569",
		  "mined_at_block": 19014567,
		  "mined_at": "2024-01-15T20:07:47Z",
		  "sent_from": "0x5da04eb0e28a06798797f54deb17cc014c525370",
		  "sent_to": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
		  "status": "confirmed",
		  "nonce": 1381,
		  "fee": {
			"fungible_info": {
			  "name": "Ethereum",
			  "symbol": "ETH",
			  "icon": {
				"url": "https://token-icons.s3.amazonaws.com/eth.png"
			  },
			  "flags": {
				"verified": true
			  },
			  "implementations": [
				{
				  "chain_id": "linea",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "scroll",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "base",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "optimism",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "aurora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "polygon-zkevm",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zksync-era",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "arbitrum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "ethereum",
				  "address": "",
				  "decimals": 18
				}
			  ]
			},
			"quantity": {
			  "int": "4957374179069697",
			  "decimals": 18,
			  "float": 0.0049573741790697,
			  "numeric": "0.004957374179069697"
			},
			"price": 2536.85,
			"value": 12.576114686172968
		  },
		  "transfers": [
			{
			  "fungible_info": {
				"name": "OpSec",
				"symbol": "OPSEC",
				"icon": null,
				"flags": {
				  "verified": false
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "0x6a7eff1e2c355ad6eb91bebb5ded49257f3fed98",
					"decimals": 18
				  }
				]
			  },
			  "direction": "in",
			  "quantity": {
				"int": "13851494127639294617127",
				"decimals": 18,
				"float": 13851.494127639295,
				"numeric": "13851.494127639294617127"
			  },
			  "value": 1878.71028133954,
			  "price": 0.13563231980806736,
			  "sender": "0x515d459555f8c1fcf2791ded819b73b60a80b8e3",
			  "recipient": "0x5da04eb0e28a06798797f54deb17cc014c525370"
			},
			{
			  "fungible_info": {
				"name": "Ethereum",
				"symbol": "ETH",
				"icon": {
				  "url": "https://token-icons.s3.amazonaws.com/eth.png"
				},
				"flags": {
				  "verified": true
				},
				"implementations": [
				  {
					"chain_id": "zksync-era",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "scroll",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "base",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "polygon-zkevm",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "aurora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "ethereum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "arbitrum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "linea",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "optimism",
					"address": "",
					"decimals": 18
				  }
				]
			  },
			  "direction": "out",
			  "quantity": {
				"int": "800000000000000000",
				"decimals": 18,
				"float": 0.8,
				"numeric": "0.800000000000000000"
			  },
			  "value": 2029.48,
			  "price": 2536.85,
			  "sender": "0x5da04eb0e28a06798797f54deb17cc014c525370",
			  "recipient": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad"
			}
		  ],
		  "approvals": [],
		  "application_metadata": {
			"name": "Uniswap",
			"icon": {
			  "url": "https://protocol-icons.s3.amazonaws.com/uniswap_protocol.png"
			},
			"contract_address": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
			"method": {
			  "id": "0x3593564c",
			  "name": "Execute"
			}
		  },
		  "flags": {
			"is_trash": false
		  }
		},
		"relationships": {
		  "chain": {
			"links": {
			  "related": "https://api.zerion.io/v1/chains/ethereum"
			},
			"data": {
			  "type": "chains",
			  "id": "ethereum"
			}
		  }
		}
	  },
	  {
		"type": "transactions",
		"id": "aafb76aa0e75504e86ecc9abeb620f0f",
		"attributes": {
		  "operation_type": "trade",
		  "hash": "0x64d02efe1d0f7c22b72ebd445c269feb284705d0d4384f24831824fa0dc2942e",
		  "mined_at_block": 19004135,
		  "mined_at": "2024-01-14T09:09:11Z",
		  "sent_from": "0x5da04eb0e28a06798797f54deb17cc014c525370",
		  "sent_to": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
		  "status": "confirmed",
		  "nonce": 1376,
		  "fee": {
			"fungible_info": {
			  "name": "Ethereum",
			  "symbol": "ETH",
			  "icon": {
				"url": "https://token-icons.s3.amazonaws.com/eth.png"
			  },
			  "flags": {
				"verified": true
			  },
			  "implementations": [
				{
				  "chain_id": "base",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "optimism",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "aurora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "arbitrum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "polygon-zkevm",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "scroll",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "ethereum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "linea",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zksync-era",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zora",
				  "address": "",
				  "decimals": 18
				}
			  ]
			},
			"quantity": {
			  "int": "9070635351595056",
			  "decimals": 18,
			  "float": 0.0090706353515951,
			  "numeric": "0.009070635351595056"
			},
			"price": 2548.89,
			"value": 23.120051741327234
		  },
		  "transfers": [
			{
			  "fungible_info": {
				"name": "Hodless BOT",
				"symbol": "HBOT",
				"icon": null,
				"flags": {
				  "verified": false
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "0xf5aed4f6a1ad00f39dd21febb6f400ea020030c2",
					"decimals": 18
				  }
				]
			  },
			  "direction": "in",
			  "quantity": {
				"int": "21437616673849116018429",
				"decimals": 18,
				"float": 21437.616673849116,
				"numeric": "21437.616673849116018429"
			  },
			  "value": 1243.7999705415343,
			  "price": 0.058019507926867435,
			  "sender": "0xe595c182fa7478c7b45b93399b83ffc2c26ed399",
			  "recipient": "0x5da04eb0e28a06798797f54deb17cc014c525370"
			},
			{
			  "fungible_info": {
				"name": "Ethereum",
				"symbol": "ETH",
				"icon": {
				  "url": "https://token-icons.s3.amazonaws.com/eth.png"
				},
				"flags": {
				  "verified": true
				},
				"implementations": [
				  {
					"chain_id": "arbitrum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "scroll",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "base",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "linea",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "optimism",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "aurora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "ethereum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zksync-era",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "polygon-zkevm",
					"address": "",
					"decimals": 18
				  }
				]
			  },
			  "direction": "out",
			  "quantity": {
				"int": "500000000000000000",
				"decimals": 18,
				"float": 0.5,
				"numeric": "0.500000000000000000"
			  },
			  "value": 1274.445,
			  "price": 2548.89,
			  "sender": "0x5da04eb0e28a06798797f54deb17cc014c525370",
			  "recipient": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad"
			}
		  ],
		  "approvals": [],
		  "application_metadata": {
			"name": "Uniswap",
			"icon": {
			  "url": "https://protocol-icons.s3.amazonaws.com/uniswap_protocol.png"
			},
			"contract_address": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
			"method": {
			  "id": "0x3593564c",
			  "name": "Execute"
			}
		  },
		  "flags": {
			"is_trash": false
		  }
		},
		"relationships": {
		  "chain": {
			"links": {
			  "related": "https://api.zerion.io/v1/chains/ethereum"
			},
			"data": {
			  "type": "chains",
			  "id": "ethereum"
			}
		  }
		}
	  },
	  {
		"type": "transactions",
		"id": "e6c79a3b18a95db8940e33ebb050c26b",
		"attributes": {
		  "operation_type": "trade",
		  "hash": "0x9358e876c1f725d5f5567ad51b44cd914c53af7b11be9e0050d761527d71e913",
		  "mined_at_block": 18991982,
		  "mined_at": "2024-01-12T16:23:11Z",
		  "sent_from": "0x5da04eb0e28a06798797f54deb17cc014c525370",
		  "sent_to": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
		  "status": "confirmed",
		  "nonce": 1375,
		  "fee": {
			"fungible_info": {
			  "name": "Ethereum",
			  "symbol": "ETH",
			  "icon": {
				"url": "https://token-icons.s3.amazonaws.com/eth.png"
			  },
			  "flags": {
				"verified": true
			  },
			  "implementations": [
				{
				  "chain_id": "arbitrum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "linea",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "aurora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "ethereum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "polygon-zkevm",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "optimism",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "scroll",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zksync-era",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "base",
				  "address": "",
				  "decimals": 18
				}
			  ]
			},
			"quantity": {
			  "int": "6201705701786868",
			  "decimals": 18,
			  "float": 0.0062017057017869,
			  "numeric": "0.006201705701786868"
			},
			"price": 2642.08,
			"value": 16.385402600577134
		  },
		  "transfers": [
			{
			  "fungible_info": {
				"name": "Ethereum",
				"symbol": "ETH",
				"icon": {
				  "url": "https://token-icons.s3.amazonaws.com/eth.png"
				},
				"flags": {
				  "verified": true
				},
				"implementations": [
				  {
					"chain_id": "arbitrum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "optimism",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "aurora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "linea",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "base",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "scroll",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "ethereum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zksync-era",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "polygon-zkevm",
					"address": "",
					"decimals": 18
				  }
				]
			  },
			  "direction": "in",
			  "quantity": {
				"int": "1142648119653877240",
				"decimals": 18,
				"float": 1.1426481196538771,
				"numeric": "1.142648119653877240"
			  },
			  "value": 3018.967743975116,
			  "price": 2642.08,
			  "sender": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
			  "recipient": "0x5da04eb0e28a06798797f54deb17cc014c525370"
			},
			{
			  "fungible_info": {
				"name": "MatchTrade",
				"symbol": "MATCH",
				"icon": null,
				"flags": {
				  "verified": false
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "0xeb9e3c6cda17c8755a4e8a1cc944afb7fc7d7905",
					"decimals": 18
				  }
				]
			  },
			  "direction": "out",
			  "quantity": {
				"int": "419390560316106248639256",
				"decimals": 18,
				"float": 419390.56031610625,
				"numeric": "419390.560316106248639256"
			  },
			  "value": 2904.4047468595086,
			  "price": 0.006925298329724871,
			  "sender": "0x5da04eb0e28a06798797f54deb17cc014c525370",
			  "recipient": "0x8a7e8c4433e7409945bd18b4d7b38a3ff70c5911"
			},
			{
			  "fungible_info": {
				"name": "MatchTrade",
				"symbol": "MATCH",
				"icon": null,
				"flags": {
				  "verified": false
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "0xeb9e3c6cda17c8755a4e8a1cc944afb7fc7d7905",
					"decimals": 18
				  }
				]
			  },
			  "direction": "out",
			  "quantity": {
				"int": "22073187385058223612592",
				"decimals": 18,
				"float": 22073.187385058223,
				"numeric": "22073.187385058223612592"
			  },
			  "value": 152.86340772944783,
			  "price": 0.006925298329724871,
			  "sender": "0x5da04eb0e28a06798797f54deb17cc014c525370",
			  "recipient": "0xeb9e3c6cda17c8755a4e8a1cc944afb7fc7d7905"
			}
		  ],
		  "approvals": [],
		  "application_metadata": {
			"name": "Uniswap",
			"icon": {
			  "url": "https://protocol-icons.s3.amazonaws.com/uniswap_protocol.png"
			},
			"contract_address": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
			"method": {
			  "id": "0x3593564c",
			  "name": "Execute"
			}
		  },
		  "flags": {
			"is_trash": false
		  }
		},
		"relationships": {
		  "chain": {
			"links": {
			  "related": "https://api.zerion.io/v1/chains/ethereum"
			},
			"data": {
			  "type": "chains",
			  "id": "ethereum"
			}
		  }
		}
	  },
	  {
		"type": "transactions",
		"id": "c3db724af1635833b9d30eed5fcb5e73",
		"attributes": {
		  "operation_type": "trade",
		  "hash": "0xbf95053328481628d81e4e9d5bc84357320823975b94b8765d3605e7dc4d8d9a",
		  "mined_at_block": 18989878,
		  "mined_at": "2024-01-12T09:19:11Z",
		  "sent_from": "0x5da04eb0e28a06798797f54deb17cc014c525370",
		  "sent_to": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
		  "status": "confirmed",
		  "nonce": 1372,
		  "fee": {
			"fungible_info": {
			  "name": "Ethereum",
			  "symbol": "ETH",
			  "icon": {
				"url": "https://token-icons.s3.amazonaws.com/eth.png"
			  },
			  "flags": {
				"verified": true
			  },
			  "implementations": [
				{
				  "chain_id": "linea",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zksync-era",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "optimism",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "ethereum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "polygon-zkevm",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "arbitrum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "aurora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "base",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "scroll",
				  "address": "",
				  "decimals": 18
				}
			  ]
			},
			"quantity": {
			  "int": "4165234238535593",
			  "decimals": 18,
			  "float": 0.0041652342385356,
			  "numeric": "0.004165234238535593"
			},
			"price": 2590.31,
			"value": 10.78924790042115
		  },
		  "transfers": [
			{
			  "fungible_info": {
				"name": "Ethereum",
				"symbol": "ETH",
				"icon": {
				  "url": "https://token-icons.s3.amazonaws.com/eth.png"
				},
				"flags": {
				  "verified": true
				},
				"implementations": [
				  {
					"chain_id": "optimism",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "scroll",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "arbitrum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "base",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "ethereum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zksync-era",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "linea",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "aurora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "polygon-zkevm",
					"address": "",
					"decimals": 18
				  }
				]
			  },
			  "direction": "in",
			  "quantity": {
				"int": "963935746634918950",
				"decimals": 18,
				"float": 0.963935746634919,
				"numeric": "0.963935746634918950"
			  },
			  "value": 2496.892403865897,
			  "price": 2590.31,
			  "sender": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
			  "recipient": "0x5da04eb0e28a06798797f54deb17cc014c525370"
			},
			{
			  "fungible_info": {
				"name": "MatchTrade",
				"symbol": "MATCH",
				"icon": null,
				"flags": {
				  "verified": false
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "0xeb9e3c6cda17c8755a4e8a1cc944afb7fc7d7905",
					"decimals": 18
				  }
				]
			  },
			  "direction": "out",
			  "quantity": {
				"int": "25000000000000000000000",
				"decimals": 18,
				"float": 25000,
				"numeric": "25000.000000000000000000"
			  },
			  "value": 126.51860114683967,
			  "price": 0.005060744045873587,
			  "sender": "0x5da04eb0e28a06798797f54deb17cc014c525370",
			  "recipient": "0xeb9e3c6cda17c8755a4e8a1cc944afb7fc7d7905"
			},
			{
			  "fungible_info": {
				"name": "MatchTrade",
				"symbol": "MATCH",
				"icon": null,
				"flags": {
				  "verified": false
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "0xeb9e3c6cda17c8755a4e8a1cc944afb7fc7d7905",
					"decimals": 18
				  }
				]
			  },
			  "direction": "out",
			  "quantity": {
				"int": "475000000000000000000000",
				"decimals": 18,
				"float": 475000,
				"numeric": "475000.000000000000000000"
			  },
			  "value": 2403.8534217899537,
			  "price": 0.005060744045873587,
			  "sender": "0x5da04eb0e28a06798797f54deb17cc014c525370",
			  "recipient": "0x8a7e8c4433e7409945bd18b4d7b38a3ff70c5911"
			}
		  ],
		  "approvals": [
			{
			  "fungible_info": {
				"name": "MatchTrade",
				"symbol": "MATCH",
				"icon": null,
				"flags": {
				  "verified": false
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "0xeb9e3c6cda17c8755a4e8a1cc944afb7fc7d7905",
					"decimals": 18
				  }
				]
			  },
			  "quantity": {
				"int": "441463747700000000000000",
				"decimals": 18,
				"float": 441463.7477,
				"numeric": "441463.747700000000000000"
			  },
			  "sender": "0x000000000022d473030f116ddee9f6b43ac78ba3"
			}
		  ],
		  "application_metadata": {
			"name": "Uniswap",
			"icon": {
			  "url": "https://protocol-icons.s3.amazonaws.com/uniswap_protocol.png"
			},
			"contract_address": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
			"method": {
			  "id": "0x3593564c",
			  "name": "Execute"
			}
		  },
		  "flags": {
			"is_trash": false
		  }
		},
		"relationships": {
		  "chain": {
			"links": {
			  "related": "https://api.zerion.io/v1/chains/ethereum"
			},
			"data": {
			  "type": "chains",
			  "id": "ethereum"
			}
		  }
		}
	  },
	  {
		"type": "transactions",
		"id": "fd3916e04fbe50e2a62ff76803cc8c66",
		"attributes": {
		  "operation_type": "trade",
		  "hash": "0xa1a8b45c4de826559e7579513cf79fff6622b5e80aebb84af53b61f10f087612",
		  "mined_at_block": 18989559,
		  "mined_at": "2024-01-12T08:14:59Z",
		  "sent_from": "0x5da04eb0e28a06798797f54deb17cc014c525370",
		  "sent_to": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
		  "status": "confirmed",
		  "nonce": 1367,
		  "fee": {
			"fungible_info": {
			  "name": "Ethereum",
			  "symbol": "ETH",
			  "icon": {
				"url": "https://token-icons.s3.amazonaws.com/eth.png"
			  },
			  "flags": {
				"verified": true
			  },
			  "implementations": [
				{
				  "chain_id": "base",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "arbitrum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "polygon-zkevm",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "linea",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "optimism",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zksync-era",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "scroll",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "aurora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "ethereum",
				  "address": "",
				  "decimals": 18
				}
			  ]
			},
			"quantity": {
			  "int": "2742696521866206",
			  "decimals": 18,
			  "float": 0.0027426965218662,
			  "numeric": "0.002742696521866206"
			},
			"price": 2586.34,
			"value": 7.093545722363428
		  },
		  "transfers": [
			{
			  "fungible_info": {
				"name": "Ethereum",
				"symbol": "ETH",
				"icon": {
				  "url": "https://token-icons.s3.amazonaws.com/eth.png"
				},
				"flags": {
				  "verified": true
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zksync-era",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "base",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "aurora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "arbitrum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "linea",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "optimism",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "scroll",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "polygon-zkevm",
					"address": "",
					"decimals": 18
				  }
				]
			  },
			  "direction": "in",
			  "quantity": {
				"int": "2128019044054936880",
				"decimals": 18,
				"float": 2.1280190440549367,
				"numeric": "2.128019044054936880"
			  },
			  "value": 5503.780774401045,
			  "price": 2586.34,
			  "sender": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
			  "recipient": "0x5da04eb0e28a06798797f54deb17cc014c525370"
			},
			{
			  "fungible_info": {
				"name": "Micro AI",
				"symbol": "MAI",
				"icon": null,
				"flags": {
				  "verified": false
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "0x24d73bca2bd9c3a61e99dfc7cb86d3c379ebded7",
					"decimals": 18
				  }
				]
			  },
			  "direction": "out",
			  "quantity": {
				"int": "2000000000000000000000",
				"decimals": 18,
				"float": 2000,
				"numeric": "2000.000000000000000000"
			  },
			  "value": 5498.609392212457,
			  "price": 2.7493046961062286,
			  "sender": "0x5da04eb0e28a06798797f54deb17cc014c525370",
			  "recipient": "0xc52a18e7358b1c618bd8f0e784b35636775afb4e"
			}
		  ],
		  "approvals": [],
		  "application_metadata": {
			"name": "Uniswap",
			"icon": {
			  "url": "https://protocol-icons.s3.amazonaws.com/uniswap_protocol.png"
			},
			"contract_address": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
			"method": {
			  "id": "0x3593564c",
			  "name": "Execute"
			}
		  },
		  "flags": {
			"is_trash": false
		  }
		},
		"relationships": {
		  "chain": {
			"links": {
			  "related": "https://api.zerion.io/v1/chains/ethereum"
			},
			"data": {
			  "type": "chains",
			  "id": "ethereum"
			}
		  }
		}
	  },
	  {
		"type": "transactions",
		"id": "f7ce065b1aec582e854953eec6f42bf5",
		"attributes": {
		  "operation_type": "trade",
		  "hash": "0x25cd19f7451769da12c70b915aa03b802558dc6472a0eeb3ae6485472b88f105",
		  "mined_at_block": 18989531,
		  "mined_at": "2024-01-12T08:09:23Z",
		  "sent_from": "0x5da04eb0e28a06798797f54deb17cc014c525370",
		  "sent_to": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
		  "status": "confirmed",
		  "nonce": 1363,
		  "fee": {
			"fungible_info": {
			  "name": "Ethereum",
			  "symbol": "ETH",
			  "icon": {
				"url": "https://token-icons.s3.amazonaws.com/eth.png"
			  },
			  "flags": {
				"verified": true
			  },
			  "implementations": [
				{
				  "chain_id": "aurora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "ethereum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zksync-era",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "base",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "arbitrum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "linea",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "optimism",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "polygon-zkevm",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "scroll",
				  "address": "",
				  "decimals": 18
				}
			  ]
			},
			"quantity": {
			  "int": "2553179838103808",
			  "decimals": 18,
			  "float": 0.0025531798381038,
			  "numeric": "0.002553179838103808"
			},
			"price": 2596.54,
			"value": 6.62943357683004
		  },
		  "transfers": [
			{
			  "fungible_info": {
				"name": "Ethereum",
				"symbol": "ETH",
				"icon": {
				  "url": "https://token-icons.s3.amazonaws.com/eth.png"
				},
				"flags": {
				  "verified": true
				},
				"implementations": [
				  {
					"chain_id": "linea",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "scroll",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "optimism",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "base",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "ethereum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "aurora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zksync-era",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "arbitrum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "polygon-zkevm",
					"address": "",
					"decimals": 18
				  }
				]
			  },
			  "direction": "in",
			  "quantity": {
				"int": "1327855417000138351",
				"decimals": 18,
				"float": 1.3278554170001384,
				"numeric": "1.327855417000138351"
			  },
			  "value": 3447.8297044575393,
			  "price": 2596.54,
			  "sender": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
			  "recipient": "0x5da04eb0e28a06798797f54deb17cc014c525370"
			},
			{
			  "fungible_info": {
				"name": "AIT Protocol",
				"symbol": "AIT",
				"icon": null,
				"flags": {
				  "verified": false
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "0x89d584a1edb3a70b3b07963f9a3ea5399e38b136",
					"decimals": 18
				  }
				]
			  },
			  "direction": "out",
			  "quantity": {
				"int": "819960000000000000000",
				"decimals": 18,
				"float": 819.96,
				"numeric": "819.960000000000000000"
			  },
			  "value": 143.5235985994883,
			  "price": 0.17503731718558016,
			  "sender": "0x5da04eb0e28a06798797f54deb17cc014c525370",
			  "recipient": "0xc5833628bbeb908f1cd89351e97fa73e265e6227"
			},
			{
			  "fungible_info": {
				"name": "AIT Protocol",
				"symbol": "AIT",
				"icon": null,
				"flags": {
				  "verified": false
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "0x89d584a1edb3a70b3b07963f9a3ea5399e38b136",
					"decimals": 18
				  }
				]
			  },
			  "direction": "out",
			  "quantity": {
				"int": "19679040000000000000000",
				"decimals": 18,
				"float": 19679.04,
				"numeric": "19679.040000000000000000"
			  },
			  "value": 3444.5663663877194,
			  "price": 0.17503731718558016,
			  "sender": "0x5da04eb0e28a06798797f54deb17cc014c525370",
			  "recipient": "0x4e34da137f0b317c633838458e0c923a5e088752"
			}
		  ],
		  "approvals": [
			{
			  "fungible_info": {
				"name": "AIT Protocol",
				"symbol": "AIT",
				"icon": null,
				"flags": {
				  "verified": false
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "0x89d584a1edb3a70b3b07963f9a3ea5399e38b136",
					"decimals": 18
				  }
				]
			  },
			  "quantity": {
				"int": "30000141650000000000000",
				"decimals": 18,
				"float": 30000.14165,
				"numeric": "30000.141650000000000000"
			  },
			  "sender": "0x000000000022d473030f116ddee9f6b43ac78ba3"
			}
		  ],
		  "application_metadata": {
			"name": "Uniswap",
			"icon": {
			  "url": "https://protocol-icons.s3.amazonaws.com/uniswap_protocol.png"
			},
			"contract_address": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
			"method": {
			  "id": "0x3593564c",
			  "name": "Execute"
			}
		  },
		  "flags": {
			"is_trash": false
		  }
		},
		"relationships": {
		  "chain": {
			"links": {
			  "related": "https://api.zerion.io/v1/chains/ethereum"
			},
			"data": {
			  "type": "chains",
			  "id": "ethereum"
			}
		  }
		}
	  },
	  {
		"type": "transactions",
		"id": "e47a7f8e14d859bbb93bf2c5b957eba6",
		"attributes": {
		  "operation_type": "trade",
		  "hash": "0x9e9229985223429a39421d4b99b6cc30ba478f7daab324a89354cd5b6e601b8b",
		  "mined_at_block": 18989525,
		  "mined_at": "2024-01-12T08:08:11Z",
		  "sent_from": "0x5da04eb0e28a06798797f54deb17cc014c525370",
		  "sent_to": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
		  "status": "confirmed",
		  "nonce": 1361,
		  "fee": {
			"fungible_info": {
			  "name": "Ethereum",
			  "symbol": "ETH",
			  "icon": {
				"url": "https://token-icons.s3.amazonaws.com/eth.png"
			  },
			  "flags": {
				"verified": true
			  },
			  "implementations": [
				{
				  "chain_id": "ethereum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "optimism",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "aurora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zksync-era",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "linea",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "arbitrum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "base",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "polygon-zkevm",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "scroll",
				  "address": "",
				  "decimals": 18
				}
			  ]
			},
			"quantity": {
			  "int": "4872156290404923",
			  "decimals": 18,
			  "float": 0.0048721562904049,
			  "numeric": "0.004872156290404923"
			},
			"price": 2595.34,
			"value": 12.644902106739453
		  },
		  "transfers": [
			{
			  "fungible_info": {
				"name": "Ethereum",
				"symbol": "ETH",
				"icon": {
				  "url": "https://token-icons.s3.amazonaws.com/eth.png"
				},
				"flags": {
				  "verified": true
				},
				"implementations": [
				  {
					"chain_id": "scroll",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "base",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "arbitrum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "ethereum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zksync-era",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "aurora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "optimism",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "polygon-zkevm",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "linea",
					"address": "",
					"decimals": 18
				  }
				]
			  },
			  "direction": "in",
			  "quantity": {
				"int": "3583435129146774658",
				"decimals": 18,
				"float": 3.5834351291467748,
				"numeric": "3.583435129146774658"
			  },
			  "value": 9300.23252807979,
			  "price": 2595.34,
			  "sender": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
			  "recipient": "0x5da04eb0e28a06798797f54deb17cc014c525370"
			},
			{
			  "fungible_info": {
				"name": "Stats",
				"symbol": "STATS",
				"icon": null,
				"flags": {
				  "verified": false
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "0x39142c18b6db2a8a41b7018f49e1478837560cad",
					"decimals": 9
				  }
				]
			  },
			  "direction": "out",
			  "quantity": {
				"int": "94570295408816",
				"decimals": 9,
				"float": 94570.295408816,
				"numeric": "94570.295408816"
			  },
			  "value": 8310.269167391654,
			  "price": 0.08787398972867073,
			  "sender": "0x5da04eb0e28a06798797f54deb17cc014c525370",
			  "recipient": "0x0b20792b44df2077e38a48cf8260122f0251fbaf"
			}
		  ],
		  "approvals": [
			{
			  "fungible_info": {
				"name": "Stats",
				"symbol": "STATS",
				"icon": null,
				"flags": {
				  "verified": false
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "0x39142c18b6db2a8a41b7018f49e1478837560cad",
					"decimals": 9
				  }
				]
			  },
			  "quantity": {
				"int": "115792089237316195423570985008687907853269984665640564039457583821395169952469",
				"decimals": 9,
				"float": 1.157920892373162e+68,
				"numeric": "115792089237316195423570985008687907853269984665640564039457583821395.169952469"
			  },
			  "sender": "0x000000000022d473030f116ddee9f6b43ac78ba3"
			}
		  ],
		  "application_metadata": {
			"name": "Uniswap",
			"icon": {
			  "url": "https://protocol-icons.s3.amazonaws.com/uniswap_protocol.png"
			},
			"contract_address": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
			"method": {
			  "id": "0x3593564c",
			  "name": "Execute"
			}
		  },
		  "flags": {
			"is_trash": false
		  }
		},
		"relationships": {
		  "chain": {
			"links": {
			  "related": "https://api.zerion.io/v1/chains/ethereum"
			},
			"data": {
			  "type": "chains",
			  "id": "ethereum"
			}
		  }
		}
	  },
	  {
		"type": "transactions",
		"id": "f9316b2a66a459c9ae506b34f6ab4354",
		"attributes": {
		  "operation_type": "trade",
		  "hash": "0xd5231360abeca5a7e409af35697056f745638ea94c9d6a72e5ba75b3f58e6140",
		  "mined_at_block": 18982338,
		  "mined_at": "2024-01-11T07:55:47Z",
		  "sent_from": "0x5da04eb0e28a06798797f54deb17cc014c525370",
		  "sent_to": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
		  "status": "confirmed",
		  "nonce": 1359,
		  "fee": {
			"fungible_info": {
			  "name": "Ethereum",
			  "symbol": "ETH",
			  "icon": {
				"url": "https://token-icons.s3.amazonaws.com/eth.png"
			  },
			  "flags": {
				"verified": true
			  },
			  "implementations": [
				{
				  "chain_id": "scroll",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "polygon-zkevm",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "aurora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zksync-era",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "ethereum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "base",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "linea",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "arbitrum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "optimism",
				  "address": "",
				  "decimals": 18
				}
			  ]
			},
			"quantity": {
			  "int": "4054786664443270",
			  "decimals": 18,
			  "float": 0.0040547866644433,
			  "numeric": "0.004054786664443270"
			},
			"price": 2587.95,
			"value": 10.493585148246037
		  },
		  "transfers": [
			{
			  "fungible_info": {
				"name": "Ethereum",
				"symbol": "ETH",
				"icon": {
				  "url": "https://token-icons.s3.amazonaws.com/eth.png"
				},
				"flags": {
				  "verified": true
				},
				"implementations": [
				  {
					"chain_id": "base",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "ethereum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zksync-era",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "arbitrum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "polygon-zkevm",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "aurora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "scroll",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "linea",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "optimism",
					"address": "",
					"decimals": 18
				  }
				]
			  },
			  "direction": "in",
			  "quantity": {
				"int": "4165995931065430775",
				"decimals": 18,
				"float": 4.165995931065431,
				"numeric": "4.165995931065430775"
			  },
			  "value": 10781.389169800781,
			  "price": 2587.95,
			  "sender": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
			  "recipient": "0x5da04eb0e28a06798797f54deb17cc014c525370"
			},
			{
			  "fungible_info": {
				"name": "TypeAI",
				"symbol": "TYPE",
				"icon": null,
				"flags": {
				  "verified": false
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "0x443459d45c30a03f90037d011cbe22e2183d3b12",
					"decimals": 18
				  }
				]
			  },
			  "direction": "out",
			  "quantity": {
				"int": "3500000000000000000000",
				"decimals": 18,
				"float": 3500,
				"numeric": "3500.000000000000000000"
			  },
			  "value": 514.3053291954212,
			  "price": 0.14694437977012034,
			  "sender": "0x5da04eb0e28a06798797f54deb17cc014c525370",
			  "recipient": "0x443459d45c30a03f90037d011cbe22e2183d3b12"
			},
			{
			  "fungible_info": {
				"name": "TypeAI",
				"symbol": "TYPE",
				"icon": null,
				"flags": {
				  "verified": false
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "0x443459d45c30a03f90037d011cbe22e2183d3b12",
					"decimals": 18
				  }
				]
			  },
			  "direction": "out",
			  "quantity": {
				"int": "66500000000000000000000",
				"decimals": 18,
				"float": 66500,
				"numeric": "66500.000000000000000000"
			  },
			  "value": 9771.801254713002,
			  "price": 0.14694437977012034,
			  "sender": "0x5da04eb0e28a06798797f54deb17cc014c525370",
			  "recipient": "0x26577f58af2f7de1a85034bb360fd154cda022f3"
			}
		  ],
		  "approvals": [
			{
			  "fungible_info": {
				"name": "TypeAI",
				"symbol": "TYPE",
				"icon": null,
				"flags": {
				  "verified": false
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "0x443459d45c30a03f90037d011cbe22e2183d3b12",
					"decimals": 18
				  }
				]
			  },
			  "quantity": {
				"int": "80363216860000000000000",
				"decimals": 18,
				"float": 80363.21686,
				"numeric": "80363.216860000000000000"
			  },
			  "sender": "0x000000000022d473030f116ddee9f6b43ac78ba3"
			}
		  ],
		  "application_metadata": {
			"name": "Uniswap",
			"icon": {
			  "url": "https://protocol-icons.s3.amazonaws.com/uniswap_protocol.png"
			},
			"contract_address": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
			"method": {
			  "id": "0x3593564c",
			  "name": "Execute"
			}
		  },
		  "flags": {
			"is_trash": false
		  }
		},
		"relationships": {
		  "chain": {
			"links": {
			  "related": "https://api.zerion.io/v1/chains/ethereum"
			},
			"data": {
			  "type": "chains",
			  "id": "ethereum"
			}
		  }
		}
	  },
	  {
		"type": "transactions",
		"id": "8f0a8e4d5ae45a2baa15c9504b47f969",
		"attributes": {
		  "operation_type": "trade",
		  "hash": "0xdfbdf69bffe21a9249b5b604da0b303c7ca3c2ed70ae7cee7ae7c40b2f9b2152",
		  "mined_at_block": 18979191,
		  "mined_at": "2024-01-10T21:20:35Z",
		  "sent_from": "0x5da04eb0e28a06798797f54deb17cc014c525370",
		  "sent_to": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
		  "status": "confirmed",
		  "nonce": 1356,
		  "fee": {
			"fungible_info": {
			  "name": "Ethereum",
			  "symbol": "ETH",
			  "icon": {
				"url": "https://token-icons.s3.amazonaws.com/eth.png"
			  },
			  "flags": {
				"verified": true
			  },
			  "implementations": [
				{
				  "chain_id": "scroll",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "linea",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "aurora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "ethereum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "base",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zksync-era",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "arbitrum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "optimism",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "polygon-zkevm",
				  "address": "",
				  "decimals": 18
				}
			  ]
			},
			"quantity": {
			  "int": "10103569159964238",
			  "decimals": 18,
			  "float": 0.0101035691599642,
			  "numeric": "0.010103569159964238"
			},
			"price": 2488.99,
			"value": 25.14768260345929
		  },
		  "transfers": [
			{
			  "fungible_info": {
				"name": "TypeAI",
				"symbol": "TYPE",
				"icon": null,
				"flags": {
				  "verified": false
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "0x443459d45c30a03f90037d011cbe22e2183d3b12",
					"decimals": 18
				  }
				]
			  },
			  "direction": "in",
			  "quantity": {
				"int": "47865793235054926900025",
				"decimals": 18,
				"float": 47865.79323505492,
				"numeric": "47865.793235054926900025"
			  },
			  "value": 2036.3576323018415,
			  "price": 0.04254306665935492,
			  "sender": "0x26577f58af2f7de1a85034bb360fd154cda022f3",
			  "recipient": "0x5da04eb0e28a06798797f54deb17cc014c525370"
			},
			{
			  "fungible_info": {
				"name": "Ethereum",
				"symbol": "ETH",
				"icon": {
				  "url": "https://token-icons.s3.amazonaws.com/eth.png"
				},
				"flags": {
				  "verified": true
				},
				"implementations": [
				  {
					"chain_id": "arbitrum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "linea",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zksync-era",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "scroll",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "aurora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "base",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "optimism",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "polygon-zkevm",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "ethereum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zora",
					"address": "",
					"decimals": 18
				  }
				]
			  },
			  "direction": "out",
			  "quantity": {
				"int": "830000000000000000",
				"decimals": 18,
				"float": 0.83,
				"numeric": "0.830000000000000000"
			  },
			  "value": 2065.8617,
			  "price": 2488.99,
			  "sender": "0x5da04eb0e28a06798797f54deb17cc014c525370",
			  "recipient": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad"
			}
		  ],
		  "approvals": [],
		  "application_metadata": {
			"name": "Uniswap",
			"icon": {
			  "url": "https://protocol-icons.s3.amazonaws.com/uniswap_protocol.png"
			},
			"contract_address": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
			"method": {
			  "id": "0x3593564c",
			  "name": "Execute"
			}
		  },
		  "flags": {
			"is_trash": false
		  }
		},
		"relationships": {
		  "chain": {
			"links": {
			  "related": "https://api.zerion.io/v1/chains/ethereum"
			},
			"data": {
			  "type": "chains",
			  "id": "ethereum"
			}
		  }
		}
	  },
	  {
		"type": "transactions",
		"id": "41ef4c67bb925b609c44d90b30261416",
		"attributes": {
		  "operation_type": "trade",
		  "hash": "0xa9c41c5cdfc9a2d7bddb589348f65098330f2259a9ff4a8cde05cc770022454b",
		  "mined_at_block": 18979185,
		  "mined_at": "2024-01-10T21:19:23Z",
		  "sent_from": "0x5da04eb0e28a06798797f54deb17cc014c525370",
		  "sent_to": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
		  "status": "confirmed",
		  "nonce": 1355,
		  "fee": {
			"fungible_info": {
			  "name": "Ethereum",
			  "symbol": "ETH",
			  "icon": {
				"url": "https://token-icons.s3.amazonaws.com/eth.png"
			  },
			  "flags": {
				"verified": true
			  },
			  "implementations": [
				{
				  "chain_id": "ethereum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zksync-era",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "optimism",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "arbitrum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "base",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "aurora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "linea",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "polygon-zkevm",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "scroll",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zora",
				  "address": "",
				  "decimals": 18
				}
			  ]
			},
			"quantity": {
			  "int": "13432088985799896",
			  "decimals": 18,
			  "float": 0.0134320889857999,
			  "numeric": "0.013432088985799896"
			},
			"price": 2488.7999999999997,
			"value": 33.429783067858786
		  },
		  "transfers": [
			{
			  "fungible_info": {
				"name": "Ethereum",
				"symbol": "ETH",
				"icon": {
				  "url": "https://token-icons.s3.amazonaws.com/eth.png"
				},
				"flags": {
				  "verified": true
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "polygon-zkevm",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "scroll",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "optimism",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "aurora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zksync-era",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "arbitrum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "base",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "linea",
					"address": "",
					"decimals": 18
				  }
				]
			  },
			  "direction": "in",
			  "quantity": {
				"int": "1515283487698683197",
				"decimals": 18,
				"float": 1.5152834876986832,
				"numeric": "1.515283487698683197"
			  },
			  "value": 3771.2375441844824,
			  "price": 2488.7999999999997,
			  "sender": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
			  "recipient": "0x5da04eb0e28a06798797f54deb17cc014c525370"
			},
			{
			  "fungible_info": {
				"name": "Metroxynth",
				"symbol": "MXH",
				"icon": null,
				"flags": {
				  "verified": false
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "0x95640a134721475bc78594c8ea66c0182c7b9a50",
					"decimals": 9
				  }
				]
			  },
			  "direction": "out",
			  "quantity": {
				"int": "19000000000000",
				"decimals": 9,
				"float": 19000,
				"numeric": "19000.000000000"
			  },
			  "value": 3756.1706554500734,
			  "price": 0.1976931923921091,
			  "sender": "0x5da04eb0e28a06798797f54deb17cc014c525370",
			  "recipient": "0xd65754e039dba5ff19ccb0c11786d495b6246ae8"
			}
		  ],
		  "approvals": [
			{
			  "fungible_info": {
				"name": "Metroxynth",
				"symbol": "MXH",
				"icon": null,
				"flags": {
				  "verified": false
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "0x95640a134721475bc78594c8ea66c0182c7b9a50",
					"decimals": 9
				  }
				]
			  },
			  "quantity": {
				"int": "30647005170000",
				"decimals": 9,
				"float": 30647.00517,
				"numeric": "30647.005170000"
			  },
			  "sender": "0x000000000022d473030f116ddee9f6b43ac78ba3"
			}
		  ],
		  "application_metadata": {
			"name": "Uniswap",
			"icon": {
			  "url": "https://protocol-icons.s3.amazonaws.com/uniswap_protocol.png"
			},
			"contract_address": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
			"method": {
			  "id": "0x3593564c",
			  "name": "Execute"
			}
		  },
		  "flags": {
			"is_trash": false
		  }
		},
		"relationships": {
		  "chain": {
			"links": {
			  "related": "https://api.zerion.io/v1/chains/ethereum"
			},
			"data": {
			  "type": "chains",
			  "id": "ethereum"
			}
		  }
		}
	  },
	  {
		"type": "transactions",
		"id": "0abd38f5458a59a9afc5017e9e73d7e2",
		"attributes": {
		  "operation_type": "trade",
		  "hash": "0x3656181750be6375192ea18a3f0872abccfebbdc2641b542ced7fd58b0c72415",
		  "mined_at_block": 18979100,
		  "mined_at": "2024-01-10T21:02:11Z",
		  "sent_from": "0x5da04eb0e28a06798797f54deb17cc014c525370",
		  "sent_to": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
		  "status": "confirmed",
		  "nonce": 1353,
		  "fee": {
			"fungible_info": {
			  "name": "Ethereum",
			  "symbol": "ETH",
			  "icon": {
				"url": "https://token-icons.s3.amazonaws.com/eth.png"
			  },
			  "flags": {
				"verified": true
			  },
			  "implementations": [
				{
				  "chain_id": "zora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "arbitrum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "optimism",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "base",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zksync-era",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "linea",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "polygon-zkevm",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "scroll",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "ethereum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "aurora",
				  "address": "",
				  "decimals": 18
				}
			  ]
			},
			"quantity": {
			  "int": "8215492993684914",
			  "decimals": 18,
			  "float": 0.0082154929936849,
			  "numeric": "0.008215492993684914"
			},
			"price": 2485.73,
			"value": 20.421497399192365
		  },
		  "transfers": [
			{
			  "fungible_info": {
				"name": "TypeAI",
				"symbol": "TYPE",
				"icon": null,
				"flags": {
				  "verified": false
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "0x443459d45c30a03f90037d011cbe22e2183d3b12",
					"decimals": 18
				  }
				]
			  },
			  "direction": "in",
			  "quantity": {
				"int": "58258319803832721401323",
				"decimals": 18,
				"float": 58258.319803832725,
				"numeric": "58258.319803832721401323"
			  },
			  "value": 2597.6900221561227,
			  "price": 0.044589168223578335,
			  "sender": "0x26577f58af2f7de1a85034bb360fd154cda022f3",
			  "recipient": "0x5da04eb0e28a06798797f54deb17cc014c525370"
			},
			{
			  "fungible_info": {
				"name": "Ethereum",
				"symbol": "ETH",
				"icon": {
				  "url": "https://token-icons.s3.amazonaws.com/eth.png"
				},
				"flags": {
				  "verified": true
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zksync-era",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "arbitrum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "base",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "optimism",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "scroll",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "aurora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "linea",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "polygon-zkevm",
					"address": "",
					"decimals": 18
				  }
				]
			  },
			  "direction": "out",
			  "quantity": {
				"int": "1050000000000000000",
				"decimals": 18,
				"float": 1.05,
				"numeric": "1.050000000000000000"
			  },
			  "value": 2610.0165,
			  "price": 2485.73,
			  "sender": "0x5da04eb0e28a06798797f54deb17cc014c525370",
			  "recipient": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad"
			}
		  ],
		  "approvals": [],
		  "application_metadata": {
			"name": "Uniswap",
			"icon": {
			  "url": "https://protocol-icons.s3.amazonaws.com/uniswap_protocol.png"
			},
			"contract_address": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
			"method": {
			  "id": "0x3593564c",
			  "name": "Execute"
			}
		  },
		  "flags": {
			"is_trash": false
		  }
		},
		"relationships": {
		  "chain": {
			"links": {
			  "related": "https://api.zerion.io/v1/chains/ethereum"
			},
			"data": {
			  "type": "chains",
			  "id": "ethereum"
			}
		  }
		}
	  },
	  {
		"type": "transactions",
		"id": "13bd1c8a8a82524c8f9c84e1a078c460",
		"attributes": {
		  "operation_type": "trade",
		  "hash": "0x64da8027651428f889752bbe0ac098d8aed206aea1382881e8fae4f1b96319c8",
		  "mined_at_block": 18978971,
		  "mined_at": "2024-01-10T20:35:23Z",
		  "sent_from": "0x5da04eb0e28a06798797f54deb17cc014c525370",
		  "sent_to": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
		  "status": "confirmed",
		  "nonce": 1352,
		  "fee": {
			"fungible_info": {
			  "name": "Ethereum",
			  "symbol": "ETH",
			  "icon": {
				"url": "https://token-icons.s3.amazonaws.com/eth.png"
			  },
			  "flags": {
				"verified": true
			  },
			  "implementations": [
				{
				  "chain_id": "zora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "scroll",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "ethereum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "optimism",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "polygon-zkevm",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "linea",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zksync-era",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "base",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "aurora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "arbitrum",
				  "address": "",
				  "decimals": 18
				}
			  ]
			},
			"quantity": {
			  "int": "6702198491782899",
			  "decimals": 18,
			  "float": 0.0067021984917829,
			  "numeric": "0.006702198491782899"
			},
			"price": 2456.36,
			"value": 16.463012287275845
		  },
		  "transfers": [
			{
			  "fungible_info": {
				"name": "TypeAI",
				"symbol": "TYPE",
				"icon": null,
				"flags": {
				  "verified": false
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "0x443459d45c30a03f90037d011cbe22e2183d3b12",
					"decimals": 18
				  }
				]
			  },
			  "direction": "in",
			  "quantity": {
				"int": "44239103818663834709916",
				"decimals": 18,
				"float": 44239.10381866383,
				"numeric": "44239.103818663834709916"
			  },
			  "value": 1850.0767136578793,
			  "price": 0.041819941046756896,
			  "sender": "0x26577f58af2f7de1a85034bb360fd154cda022f3",
			  "recipient": "0x5da04eb0e28a06798797f54deb17cc014c525370"
			},
			{
			  "fungible_info": {
				"name": "Ethereum",
				"symbol": "ETH",
				"icon": {
				  "url": "https://token-icons.s3.amazonaws.com/eth.png"
				},
				"flags": {
				  "verified": true
				},
				"implementations": [
				  {
					"chain_id": "polygon-zkevm",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "aurora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zksync-era",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "linea",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "optimism",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "scroll",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "arbitrum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "ethereum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "base",
					"address": "",
					"decimals": 18
				  }
				]
			  },
			  "direction": "out",
			  "quantity": {
				"int": "800000000000000000",
				"decimals": 18,
				"float": 0.8,
				"numeric": "0.800000000000000000"
			  },
			  "value": 1965.0880000000002,
			  "price": 2456.36,
			  "sender": "0x5da04eb0e28a06798797f54deb17cc014c525370",
			  "recipient": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad"
			}
		  ],
		  "approvals": [],
		  "application_metadata": {
			"name": "Uniswap",
			"icon": {
			  "url": "https://protocol-icons.s3.amazonaws.com/uniswap_protocol.png"
			},
			"contract_address": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
			"method": {
			  "id": "0x3593564c",
			  "name": "Execute"
			}
		  },
		  "flags": {
			"is_trash": false
		  }
		},
		"relationships": {
		  "chain": {
			"links": {
			  "related": "https://api.zerion.io/v1/chains/ethereum"
			},
			"data": {
			  "type": "chains",
			  "id": "ethereum"
			}
		  }
		}
	  },
	  {
		"type": "transactions",
		"id": "18d9b8c8b5d551c9b5ed405d162eb8b1",
		"attributes": {
		  "operation_type": "trade",
		  "hash": "0xc48139ec1dca2f0256f8f471afab23642e02a6ee0c3a114f11df75c06973bc3a",
		  "mined_at_block": 23677891,
		  "mined_at": "2024-01-10T07:12:07Z",
		  "sent_from": "0x5da04eb0e28a06798797f54deb17cc014c525370",
		  "sent_to": "0x767b4a087c11d7581ac95eaffc1febfa26bad3d2",
		  "status": "confirmed",
		  "nonce": 203,
		  "fee": {
			"fungible_info": {
			  "name": "Ethereum",
			  "symbol": "ETH",
			  "icon": {
				"url": "https://token-icons.s3.amazonaws.com/eth.png"
			  },
			  "flags": {
				"verified": true
			  },
			  "implementations": [
				{
				  "chain_id": "aurora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "ethereum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "linea",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "polygon-zkevm",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "arbitrum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "scroll",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zksync-era",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "base",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "optimism",
				  "address": "",
				  "decimals": 18
				}
			  ]
			},
			"quantity": {
			  "int": "156244600000000",
			  "decimals": 18,
			  "float": 0.0001562446,
			  "numeric": "0.000156244600000000"
			},
			"price": 2379.4,
			"value": 0.37176840124000005
		  },
		  "transfers": [
			{
			  "fungible_info": {
				"name": "ZeroLend zK WETH",
				"symbol": "z0WETH",
				"icon": null,
				"flags": {
				  "verified": false
				},
				"implementations": [
				  {
					"chain_id": "zksync-era",
					"address": "0x9002ecb8a06060e3b56669c6b8f18e1c3b119914",
					"decimals": 18
				  }
				]
			  },
			  "direction": "in",
			  "quantity": {
				"int": "28262887175",
				"decimals": 18,
				"float": 2.82628872e-8,
				"numeric": "0.000000028262887175"
			  },
			  "value": null,
			  "price": null,
			  "sender": "0x0000000000000000000000000000000000000000",
			  "recipient": "0x5da04eb0e28a06798797f54deb17cc014c525370"
			},
			{
			  "fungible_info": {
				"name": "Ethereum",
				"symbol": "ETH",
				"icon": {
				  "url": "https://token-icons.s3.amazonaws.com/eth.png"
				},
				"flags": {
				  "verified": true
				},
				"implementations": [
				  {
					"chain_id": "polygon-zkevm",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "arbitrum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "aurora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "optimism",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "base",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "scroll",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zksync-era",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "ethereum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "linea",
					"address": "",
					"decimals": 18
				  }
				]
			  },
			  "direction": "in",
			  "quantity": {
				"int": "2500108026209392717",
				"decimals": 18,
				"float": 2.500108026209393,
				"numeric": "2.500108026209392717"
			  },
			  "value": 5948.757037562629,
			  "price": 2379.4,
			  "sender": "0x767b4a087c11d7581ac95eaffc1febfa26bad3d2",
			  "recipient": "0x5da04eb0e28a06798797f54deb17cc014c525370"
			},
			{
			  "fungible_info": {
				"name": "ZeroLend zK WETH",
				"symbol": "z0WETH",
				"icon": null,
				"flags": {
				  "verified": false
				},
				"implementations": [
				  {
					"chain_id": "zksync-era",
					"address": "0x9002ecb8a06060e3b56669c6b8f18e1c3b119914",
					"decimals": 18
				  }
				]
			  },
			  "direction": "out",
			  "quantity": {
				"int": "2500108026209392717",
				"decimals": 18,
				"float": 2.500108026209393,
				"numeric": "2.500108026209392717"
			  },
			  "value": null,
			  "price": null,
			  "sender": "0x5da04eb0e28a06798797f54deb17cc014c525370",
			  "recipient": "0x767b4a087c11d7581ac95eaffc1febfa26bad3d2"
			}
		  ],
		  "approvals": [
			{
			  "fungible_info": {
				"name": "ZeroLend zK WETH",
				"symbol": "z0WETH",
				"icon": null,
				"flags": {
				  "verified": false
				},
				"implementations": [
				  {
					"chain_id": "zksync-era",
					"address": "0x9002ecb8a06060e3b56669c6b8f18e1c3b119914",
					"decimals": 18
				  }
				]
			  },
			  "quantity": {
				"int": "115792089237316195423570985008687907853269984665640564039446083848284076560781",
				"decimals": 18,
				"float": 1.157920892373162e+59,
				"numeric": "115792089237316195423570985008687907853269984665640564039446.083848284076560781"
			  },
			  "sender": "0x767b4a087c11d7581ac95eaffc1febfa26bad3d2"
			}
		  ],
		  "application_metadata": {
			"contract_address": "0x767b4a087c11d7581ac95eaffc1febfa26bad3d2",
			"method": {
			  "id": "0x80500d20",
			  "name": "Withdraw Eth"
			}
		  },
		  "flags": {
			"is_trash": false
		  }
		},
		"relationships": {
		  "chain": {
			"links": {
			  "related": "https://api.zerion.io/v1/chains/zksync-era"
			},
			"data": {
			  "type": "chains",
			  "id": "zksync-era"
			}
		  }
		}
	  },
	  {
		"type": "transactions",
		"id": "14935efdfc7e52839cbf15a4faf1d76d",
		"attributes": {
		  "operation_type": "trade",
		  "hash": "0xeac5ee1418bcd573a31833b7e79aacd3a7a639dd314be81aec47a929d796f3f9",
		  "mined_at_block": 23677769,
		  "mined_at": "2024-01-10T07:09:58Z",
		  "sent_from": "0x5da04eb0e28a06798797f54deb17cc014c525370",
		  "sent_to": "0x767b4a087c11d7581ac95eaffc1febfa26bad3d2",
		  "status": "confirmed",
		  "nonce": 199,
		  "fee": {
			"fungible_info": {
			  "name": "Ethereum",
			  "symbol": "ETH",
			  "icon": {
				"url": "https://token-icons.s3.amazonaws.com/eth.png"
			  },
			  "flags": {
				"verified": true
			  },
			  "implementations": [
				{
				  "chain_id": "scroll",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "polygon-zkevm",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "optimism",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zksync-era",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "arbitrum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "ethereum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "aurora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "linea",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "base",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zora",
				  "address": "",
				  "decimals": 18
				}
			  ]
			},
			"quantity": {
			  "int": "153630500000000",
			  "decimals": 18,
			  "float": 0.0001536305,
			  "numeric": "0.000153630500000000"
			},
			"price": 2377.44,
			"value": 0.36524729592000005
		  },
		  "transfers": [
			{
			  "fungible_info": {
				"name": "Ethereum",
				"symbol": "ETH",
				"icon": {
				  "url": "https://token-icons.s3.amazonaws.com/eth.png"
				},
				"flags": {
				  "verified": true
				},
				"implementations": [
				  {
					"chain_id": "scroll",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "base",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "arbitrum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "linea",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "ethereum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "polygon-zkevm",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zksync-era",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "optimism",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "aurora",
					"address": "",
					"decimals": 18
				  }
				]
			  },
			  "direction": "in",
			  "quantity": {
				"int": "5000000000000000000",
				"decimals": 18,
				"float": 5,
				"numeric": "5.000000000000000000"
			  },
			  "value": 11887.2,
			  "price": 2377.44,
			  "sender": "0x767b4a087c11d7581ac95eaffc1febfa26bad3d2",
			  "recipient": "0x5da04eb0e28a06798797f54deb17cc014c525370"
			},
			{
			  "fungible_info": {
				"name": "ZeroLend zK WETH",
				"symbol": "z0WETH",
				"icon": null,
				"flags": {
				  "verified": false
				},
				"implementations": [
				  {
					"chain_id": "zksync-era",
					"address": "0x9002ecb8a06060e3b56669c6b8f18e1c3b119914",
					"decimals": 18
				  }
				]
			  },
			  "direction": "in",
			  "quantity": {
				"int": "107997946505542",
				"decimals": 18,
				"float": 0.0001079979465055,
				"numeric": "0.000107997946505542"
			  },
			  "value": null,
			  "price": null,
			  "sender": "0x0000000000000000000000000000000000000000",
			  "recipient": "0x5da04eb0e28a06798797f54deb17cc014c525370"
			},
			{
			  "fungible_info": {
				"name": "ZeroLend zK WETH",
				"symbol": "z0WETH",
				"icon": null,
				"flags": {
				  "verified": false
				},
				"implementations": [
				  {
					"chain_id": "zksync-era",
					"address": "0x9002ecb8a06060e3b56669c6b8f18e1c3b119914",
					"decimals": 18
				  }
				]
			  },
			  "direction": "out",
			  "quantity": {
				"int": "5000000000000000000",
				"decimals": 18,
				"float": 5,
				"numeric": "5.000000000000000000"
			  },
			  "value": null,
			  "price": null,
			  "sender": "0x5da04eb0e28a06798797f54deb17cc014c525370",
			  "recipient": "0x767b4a087c11d7581ac95eaffc1febfa26bad3d2"
			}
		  ],
		  "approvals": [
			{
			  "fungible_info": {
				"name": "ZeroLend zK WETH",
				"symbol": "z0WETH",
				"icon": null,
				"flags": {
				  "verified": false
				},
				"implementations": [
				  {
					"chain_id": "zksync-era",
					"address": "0x9002ecb8a06060e3b56669c6b8f18e1c3b119914",
					"decimals": 18
				  }
				]
			  },
			  "quantity": {
				"int": "115792089237316195423570985008687907853269984665640564039448583956310285953498",
				"decimals": 18,
				"float": 1.157920892373162e+59,
				"numeric": "115792089237316195423570985008687907853269984665640564039448.583956310285953498"
			  },
			  "sender": "0x767b4a087c11d7581ac95eaffc1febfa26bad3d2"
			}
		  ],
		  "application_metadata": {
			"contract_address": "0x767b4a087c11d7581ac95eaffc1febfa26bad3d2",
			"method": {
			  "id": "0x80500d20",
			  "name": "Withdraw Eth"
			}
		  },
		  "flags": {
			"is_trash": false
		  }
		},
		"relationships": {
		  "chain": {
			"links": {
			  "related": "https://api.zerion.io/v1/chains/zksync-era"
			},
			"data": {
			  "type": "chains",
			  "id": "zksync-era"
			}
		  }
		}
	  },
	  {
		"type": "transactions",
		"id": "513eb6fd344950cfa69b373858dee027",
		"attributes": {
		  "operation_type": "trade",
		  "hash": "0x3a8756eb476fd1578499b06ed4371ace7f71d5dbd418c62abbbba0a73e9fa20c",
		  "mined_at_block": 8877993,
		  "mined_at": "2024-01-06T12:48:53Z",
		  "sent_from": "0x5da04eb0e28a06798797f54deb17cc014c525370",
		  "sent_to": "0x19ceead7105607cd444f5ad10dd51356436095a1",
		  "status": "confirmed",
		  "nonce": 17,
		  "fee": {
			"fungible_info": {
			  "name": "Ethereum",
			  "symbol": "ETH",
			  "icon": {
				"url": "https://token-icons.s3.amazonaws.com/eth.png"
			  },
			  "flags": {
				"verified": true
			  },
			  "implementations": [
				{
				  "chain_id": "optimism",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "arbitrum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "ethereum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "aurora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "base",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "polygon-zkevm",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "linea",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "scroll",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zksync-era",
				  "address": "",
				  "decimals": 18
				}
			  ]
			},
			"quantity": {
			  "int": "50863307736672",
			  "decimals": 18,
			  "float": 0.0000508633077367,
			  "numeric": "0.000050863307736672"
			},
			"price": 2235.46,
			"value": 0.11370288991308337
		  },
		  "transfers": [
			{
			  "fungible_info": {
				"name": "USD Coin (Base)",
				"symbol": "USDbC",
				"icon": {
				  "url": "https://token-icons.s3.amazonaws.com/6c8eaf54-30fe-41ff-b1b3-17b16875cc95.png"
				},
				"flags": {
				  "verified": true
				},
				"implementations": [
				  {
					"chain_id": "base",
					"address": "0xd9aaec86b65d86f6a7b5b1b0c42ffa531710b6ca",
					"decimals": 6
				  }
				]
			  },
			  "direction": "in",
			  "quantity": {
				"int": "669849810",
				"decimals": 6,
				"float": 669.84981,
				"numeric": "669.849810"
			  },
			  "value": 669.3927606230701,
			  "price": 0.9993176838,
			  "sender": "0x19ceead7105607cd444f5ad10dd51356436095a1",
			  "recipient": "0x5da04eb0e28a06798797f54deb17cc014c525370"
			},
			{
			  "fungible_info": {
				"name": "Ethereum",
				"symbol": "ETH",
				"icon": {
				  "url": "https://token-icons.s3.amazonaws.com/eth.png"
				},
				"flags": {
				  "verified": true
				},
				"implementations": [
				  {
					"chain_id": "arbitrum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "aurora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "linea",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "ethereum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "polygon-zkevm",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "optimism",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "scroll",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "base",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zksync-era",
					"address": "",
					"decimals": 18
				  }
				]
			  },
			  "direction": "out",
			  "quantity": {
				"int": "300000000000000000",
				"decimals": 18,
				"float": 0.3,
				"numeric": "0.300000000000000000"
			  },
			  "value": 670.638,
			  "price": 2235.46,
			  "sender": "0x5da04eb0e28a06798797f54deb17cc014c525370",
			  "recipient": "0x19ceead7105607cd444f5ad10dd51356436095a1"
			}
		  ],
		  "approvals": [],
		  "application_metadata": {
			"name": "Odos",
			"icon": {
			  "url": "https://protocol-icons.s3.amazonaws.com/icons/odos.jpg"
			},
			"contract_address": "0x19ceead7105607cd444f5ad10dd51356436095a1",
			"method": {
			  "id": "0x83bd37f9",
			  "name": ""
			}
		  },
		  "flags": {
			"is_trash": false
		  }
		},
		"relationships": {
		  "chain": {
			"links": {
			  "related": "https://api.zerion.io/v1/chains/base"
			},
			"data": {
			  "type": "chains",
			  "id": "base"
			}
		  }
		}
	  },
	  {
		"type": "transactions",
		"id": "ade3d6bc394a53598c1e9822ba1eaa97",
		"attributes": {
		  "operation_type": "trade",
		  "hash": "0x7a80bd41cdcea0ea22dd03ae46f0ed1c1377e34fd9d05aaeb9ffeb1a10f60dee",
		  "mined_at_block": 18939878,
		  "mined_at": "2024-01-05T08:24:59Z",
		  "sent_from": "0x5da04eb0e28a06798797f54deb17cc014c525370",
		  "sent_to": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
		  "status": "confirmed",
		  "nonce": 1347,
		  "fee": {
			"fungible_info": {
			  "name": "Ethereum",
			  "symbol": "ETH",
			  "icon": {
				"url": "https://token-icons.s3.amazonaws.com/eth.png"
			  },
			  "flags": {
				"verified": true
			  },
			  "implementations": [
				{
				  "chain_id": "optimism",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "aurora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "arbitrum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "scroll",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "ethereum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "base",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "linea",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "polygon-zkevm",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zksync-era",
				  "address": "",
				  "decimals": 18
				}
			  ]
			},
			"quantity": {
			  "int": "1688394586542970",
			  "decimals": 18,
			  "float": 0.001688394586543,
			  "numeric": "0.001688394586542970"
			},
			"price": 2256.85,
			"value": 3.810453322639569
		  },
		  "transfers": [
			{
			  "fungible_info": {
				"name": "ELOSYS",
				"symbol": "ELO",
				"icon": null,
				"flags": {
				  "verified": false
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "0x61b34a012646cd7357f58ee9c0160c6d0021fa41",
					"decimals": 18
				  }
				]
			  },
			  "direction": "in",
			  "quantity": {
				"int": "10000000000000000000000",
				"decimals": 18,
				"float": 10000,
				"numeric": "10000.000000000000000000"
			  },
			  "value": 1320.2714853979219,
			  "price": 0.1320271485397922,
			  "sender": "0x482ece59976461f5bfbcc2f5546c4878fd44ec71",
			  "recipient": "0x5da04eb0e28a06798797f54deb17cc014c525370"
			},
			{
			  "fungible_info": {
				"name": "Ethereum",
				"symbol": "ETH",
				"icon": {
				  "url": "https://token-icons.s3.amazonaws.com/eth.png"
				},
				"flags": {
				  "verified": true
				},
				"implementations": [
				  {
					"chain_id": "polygon-zkevm",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "aurora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "ethereum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "scroll",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "optimism",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zksync-era",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "linea",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "arbitrum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "base",
					"address": "",
					"decimals": 18
				  }
				]
			  },
			  "direction": "out",
			  "quantity": {
				"int": "585590906229102657",
				"decimals": 18,
				"float": 0.5855909062291027,
				"numeric": "0.585590906229102657"
			  },
			  "value": 1321.5908367231505,
			  "price": 2256.85,
			  "sender": "0x5da04eb0e28a06798797f54deb17cc014c525370",
			  "recipient": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad"
			}
		  ],
		  "approvals": [],
		  "application_metadata": {
			"name": "Uniswap",
			"icon": {
			  "url": "https://protocol-icons.s3.amazonaws.com/uniswap_protocol.png"
			},
			"contract_address": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
			"method": {
			  "id": "0x3593564c",
			  "name": "Execute"
			}
		  },
		  "flags": {
			"is_trash": false
		  }
		},
		"relationships": {
		  "chain": {
			"links": {
			  "related": "https://api.zerion.io/v1/chains/ethereum"
			},
			"data": {
			  "type": "chains",
			  "id": "ethereum"
			}
		  }
		}
	  },
	  {
		"type": "transactions",
		"id": "f82fb5f528c15e149244608ccdafe58e",
		"attributes": {
		  "operation_type": "trade",
		  "hash": "0xb3697fa70b0ab55f5d50ff5cdcf671245ee9dbe54e97526014e5b09e960af715",
		  "mined_at_block": 18934391,
		  "mined_at": "2024-01-04T13:52:59Z",
		  "sent_from": "0x5da04eb0e28a06798797f54deb17cc014c525370",
		  "sent_to": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
		  "status": "confirmed",
		  "nonce": 1346,
		  "fee": {
			"fungible_info": {
			  "name": "Ethereum",
			  "symbol": "ETH",
			  "icon": {
				"url": "https://token-icons.s3.amazonaws.com/eth.png"
			  },
			  "flags": {
				"verified": true
			  },
			  "implementations": [
				{
				  "chain_id": "ethereum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "polygon-zkevm",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "scroll",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zksync-era",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "arbitrum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "linea",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "aurora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "base",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "optimism",
				  "address": "",
				  "decimals": 18
				}
			  ]
			},
			"quantity": {
			  "int": "2670590154909666",
			  "decimals": 18,
			  "float": 0.0026705901549097,
			  "numeric": "0.002670590154909666"
			},
			"price": 2244.1400000000003,
			"value": 5.993178190239055
		  },
		  "transfers": [
			{
			  "fungible_info": {
				"name": "Ethereum",
				"symbol": "ETH",
				"icon": {
				  "url": "https://token-icons.s3.amazonaws.com/eth.png"
				},
				"flags": {
				  "verified": true
				},
				"implementations": [
				  {
					"chain_id": "polygon-zkevm",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "linea",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "scroll",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "arbitrum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "aurora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "optimism",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "base",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "ethereum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zksync-era",
					"address": "",
					"decimals": 18
				  }
				]
			  },
			  "direction": "in",
			  "quantity": {
				"int": "265297923435551978",
				"decimals": 18,
				"float": 0.265297923435552,
				"numeric": "0.265297923435551978"
			  },
			  "value": 595.3656818986597,
			  "price": 2244.1400000000003,
			  "sender": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
			  "recipient": "0x5da04eb0e28a06798797f54deb17cc014c525370"
			},
			{
			  "fungible_info": {
				"name": "TOAD KILLER",
				"symbol": "TOAD",
				"icon": null,
				"flags": {
				  "verified": false
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "0x370a366f402e2e41cdbbe54ecec12aae0cce1955",
					"decimals": 18
				  }
				]
			  },
			  "direction": "out",
			  "quantity": {
				"int": "100613393806850118024552492492",
				"decimals": 18,
				"float": 100613393806.85011,
				"numeric": "100613393806.850118024552492492"
			  },
			  "value": 595.8747938474837,
			  "price": 5.922420179875838e-9,
			  "sender": "0x5da04eb0e28a06798797f54deb17cc014c525370",
			  "recipient": "0x9f6facb42177f5af680f9f17cdf750bc7cf55973"
			}
		  ],
		  "approvals": [],
		  "application_metadata": {
			"name": "Uniswap",
			"icon": {
			  "url": "https://protocol-icons.s3.amazonaws.com/uniswap_protocol.png"
			},
			"contract_address": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
			"method": {
			  "id": "0x3593564c",
			  "name": "Execute"
			}
		  },
		  "flags": {
			"is_trash": false
		  }
		},
		"relationships": {
		  "chain": {
			"links": {
			  "related": "https://api.zerion.io/v1/chains/ethereum"
			},
			"data": {
			  "type": "chains",
			  "id": "ethereum"
			}
		  }
		}
	  },
	  {
		"type": "transactions",
		"id": "e943862a455455d988e076e67f01ed28",
		"attributes": {
		  "operation_type": "trade",
		  "hash": "0xe3158cc6bf61c342109a52d5473416971e36cfcb7e833fc6a89f87586aee5cb0",
		  "mined_at_block": 18934387,
		  "mined_at": "2024-01-04T13:52:11Z",
		  "sent_from": "0x5da04eb0e28a06798797f54deb17cc014c525370",
		  "sent_to": "0x881d40237659c251811cec9c364ef91dc08d300c",
		  "status": "confirmed",
		  "nonce": 1345,
		  "fee": {
			"fungible_info": {
			  "name": "Ethereum",
			  "symbol": "ETH",
			  "icon": {
				"url": "https://token-icons.s3.amazonaws.com/eth.png"
			  },
			  "flags": {
				"verified": true
			  },
			  "implementations": [
				{
				  "chain_id": "zksync-era",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "arbitrum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "base",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "polygon-zkevm",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "optimism",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "scroll",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "linea",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "aurora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "ethereum",
				  "address": "",
				  "decimals": 18
				}
			  ]
			},
			"quantity": {
			  "int": "4882689636672096",
			  "decimals": 18,
			  "float": 0.0048826896366721,
			  "numeric": "0.004882689636672096"
			},
			"price": 2243.02,
			"value": 10.951970508848255
		  },
		  "transfers": [
			{
			  "fungible_info": {
				"name": "Ethereum",
				"symbol": "ETH",
				"icon": {
				  "url": "https://token-icons.s3.amazonaws.com/eth.png"
				},
				"flags": {
				  "verified": true
				},
				"implementations": [
				  {
					"chain_id": "polygon-zkevm",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "linea",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "aurora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "arbitrum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "scroll",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "ethereum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zksync-era",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "base",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "optimism",
					"address": "",
					"decimals": 18
				  }
				]
			  },
			  "direction": "in",
			  "quantity": {
				"int": "609906789204920421",
				"decimals": 18,
				"float": 0.6099067892049204,
				"numeric": "0.609906789204920421"
			  },
			  "value": 1368.0331263224205,
			  "price": 2243.02,
			  "sender": "0x74de5d4fcbf63e00296fd95d33236b9794016631",
			  "recipient": "0x5da04eb0e28a06798797f54deb17cc014c525370"
			},
			{
			  "fungible_info": {
				"name": "M2 Global Wealth Limited",
				"symbol": "MMX",
				"icon": null,
				"flags": {
				  "verified": false
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "0x614da3b37b6f66f7ce69b4bbbcf9a55ce6168707",
					"decimals": 18
				  }
				]
			  },
			  "direction": "out",
			  "quantity": {
				"int": "1000999731115659731182",
				"decimals": 18,
				"float": 1000.9997311156598,
				"numeric": "1000.999731115659731182"
			  },
			  "value": 1388.8496160733778,
			  "price": 1.3874625266137102,
			  "sender": "0x5da04eb0e28a06798797f54deb17cc014c525370",
			  "recipient": "0x74de5d4fcbf63e00296fd95d33236b9794016631"
			}
		  ],
		  "approvals": [],
		  "application_metadata": {
			"name": "MetaMask",
			"icon": {
			  "url": "https://protocol-icons.s3.amazonaws.com/metamask.jpeg"
			},
			"contract_address": "0x881d40237659c251811cec9c364ef91dc08d300c",
			"method": {
			  "id": "0x5f575529",
			  "name": "Swap"
			}
		  },
		  "flags": {
			"is_trash": false
		  }
		},
		"relationships": {
		  "chain": {
			"links": {
			  "related": "https://api.zerion.io/v1/chains/ethereum"
			},
			"data": {
			  "type": "chains",
			  "id": "ethereum"
			}
		  }
		}
	  },
	  {
		"type": "transactions",
		"id": "5459ea97e0fd503fa148670411aca6ab",
		"attributes": {
		  "operation_type": "trade",
		  "hash": "0xfc3b80c8523b693e6c78a8feceae7a77dd122cada3f47078f99599fc540e5e57",
		  "mined_at_block": 18925483,
		  "mined_at": "2024-01-03T07:55:11Z",
		  "sent_from": "0x5da04eb0e28a06798797f54deb17cc014c525370",
		  "sent_to": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
		  "status": "confirmed",
		  "nonce": 1343,
		  "fee": {
			"fungible_info": {
			  "name": "Ethereum",
			  "symbol": "ETH",
			  "icon": {
				"url": "https://token-icons.s3.amazonaws.com/eth.png"
			  },
			  "flags": {
				"verified": true
			  },
			  "implementations": [
				{
				  "chain_id": "aurora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zksync-era",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "arbitrum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "polygon-zkevm",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "scroll",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "base",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "optimism",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "linea",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "ethereum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zora",
				  "address": "",
				  "decimals": 18
				}
			  ]
			},
			"quantity": {
			  "int": "1809715268358648",
			  "decimals": 18,
			  "float": 0.0018097152683586,
			  "numeric": "0.001809715268358648"
			},
			"price": 2362.44,
			"value": 4.275343738581091
		  },
		  "transfers": [
			{
			  "fungible_info": {
				"name": "Micro AI",
				"symbol": "MAI",
				"icon": null,
				"flags": {
				  "verified": false
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "0x24d73bca2bd9c3a61e99dfc7cb86d3c379ebded7",
					"decimals": 18
				  }
				]
			  },
			  "direction": "in",
			  "quantity": {
				"int": "2500000000000000000000",
				"decimals": 18,
				"float": 2500,
				"numeric": "2500.000000000000000000"
			  },
			  "value": 4655.342350000783,
			  "price": 1.8621369400003132,
			  "sender": "0xc52a18e7358b1c618bd8f0e784b35636775afb4e",
			  "recipient": "0x5da04eb0e28a06798797f54deb17cc014c525370"
			},
			{
			  "fungible_info": {
				"name": "Ethereum",
				"symbol": "ETH",
				"icon": {
				  "url": "https://token-icons.s3.amazonaws.com/eth.png"
				},
				"flags": {
				  "verified": true
				},
				"implementations": [
				  {
					"chain_id": "scroll",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "base",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "linea",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "aurora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "optimism",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "polygon-zkevm",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "arbitrum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "ethereum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zksync-era",
					"address": "",
					"decimals": 18
				  }
				]
			  },
			  "direction": "out",
			  "quantity": {
				"int": "1994162319363823613",
				"decimals": 18,
				"float": 1.9941623193638236,
				"numeric": "1.994162319363823613"
			  },
			  "value": 4711.088829757871,
			  "price": 2362.44,
			  "sender": "0x5da04eb0e28a06798797f54deb17cc014c525370",
			  "recipient": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad"
			}
		  ],
		  "approvals": [],
		  "application_metadata": {
			"name": "Uniswap",
			"icon": {
			  "url": "https://protocol-icons.s3.amazonaws.com/uniswap_protocol.png"
			},
			"contract_address": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
			"method": {
			  "id": "0x3593564c",
			  "name": "Execute"
			}
		  },
		  "flags": {
			"is_trash": false
		  }
		},
		"relationships": {
		  "chain": {
			"links": {
			  "related": "https://api.zerion.io/v1/chains/ethereum"
			},
			"data": {
			  "type": "chains",
			  "id": "ethereum"
			}
		  }
		}
	  },
	  {
		"type": "transactions",
		"id": "960bf311e53256cf814f182c0cd111e6",
		"attributes": {
		  "operation_type": "trade",
		  "hash": "0x8169c4baa44b0ae3fd9e38e3bec83f37d3106c7886caa30028c5d66fd74df813",
		  "mined_at_block": 18925477,
		  "mined_at": "2024-01-03T07:53:59Z",
		  "sent_from": "0x5da04eb0e28a06798797f54deb17cc014c525370",
		  "sent_to": "0x1111111254eeb25477b68fb85ed929f73a960582",
		  "status": "confirmed",
		  "nonce": 1342,
		  "fee": {
			"fungible_info": {
			  "name": "Ethereum",
			  "symbol": "ETH",
			  "icon": {
				"url": "https://token-icons.s3.amazonaws.com/eth.png"
			  },
			  "flags": {
				"verified": true
			  },
			  "implementations": [
				{
				  "chain_id": "ethereum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "linea",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "scroll",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "aurora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zksync-era",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "base",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "arbitrum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "polygon-zkevm",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "optimism",
				  "address": "",
				  "decimals": 18
				}
			  ]
			},
			"quantity": {
			  "int": "2146081548984758",
			  "decimals": 18,
			  "float": 0.0021460815489848,
			  "numeric": "0.002146081548984758"
			},
			"price": 2362.29,
			"value": 5.069666982351303
		  },
		  "transfers": [
			{
			  "fungible_info": {
				"name": "Ethereum",
				"symbol": "ETH",
				"icon": {
				  "url": "https://token-icons.s3.amazonaws.com/eth.png"
				},
				"flags": {
				  "verified": true
				},
				"implementations": [
				  {
					"chain_id": "zksync-era",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "base",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "ethereum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "aurora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "polygon-zkevm",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "scroll",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "optimism",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "arbitrum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "linea",
					"address": "",
					"decimals": 18
				  }
				]
			  },
			  "direction": "in",
			  "quantity": {
				"int": "856883943407548498",
				"decimals": 18,
				"float": 0.8568839434075485,
				"numeric": "0.856883943407548498"
			  },
			  "value": 2024.2083706722176,
			  "price": 2362.29,
			  "sender": "0x1111111254eeb25477b68fb85ed929f73a960582",
			  "recipient": "0x5da04eb0e28a06798797f54deb17cc014c525370"
			},
			{
			  "fungible_info": {
				"name": "TokenSight Token",
				"symbol": "TKST",
				"icon": {
				  "url": "https://token-icons.s3.amazonaws.com/0x7cdbfc86a0bfa20f133748b0cf5cea5b787b182c.png"
				},
				"flags": {
				  "verified": false
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "0x7cdbfc86a0bfa20f133748b0cf5cea5b787b182c",
					"decimals": 18
				  }
				]
			  },
			  "direction": "out",
			  "quantity": {
				"int": "4750000000000000000000",
				"decimals": 18,
				"float": 4750,
				"numeric": "4750.000000000000000000"
			  },
			  "value": 2027.3943534454986,
			  "price": 0.4268198638832629,
			  "sender": "0x5da04eb0e28a06798797f54deb17cc014c525370",
			  "recipient": "0xbf519fb74965680b45d528d29e1d77bd1728c9ce"
			},
			{
			  "fungible_info": {
				"name": "TokenSight Token",
				"symbol": "TKST",
				"icon": {
				  "url": "https://token-icons.s3.amazonaws.com/0x7cdbfc86a0bfa20f133748b0cf5cea5b787b182c.png"
				},
				"flags": {
				  "verified": false
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "0x7cdbfc86a0bfa20f133748b0cf5cea5b787b182c",
					"decimals": 18
				  }
				]
			  },
			  "direction": "out",
			  "quantity": {
				"int": "250000000000000000000",
				"decimals": 18,
				"float": 250,
				"numeric": "250.000000000000000000"
			  },
			  "value": 106.70496597081572,
			  "price": 0.4268198638832629,
			  "sender": "0x5da04eb0e28a06798797f54deb17cc014c525370",
			  "recipient": "0x7cdbfc86a0bfa20f133748b0cf5cea5b787b182c"
			}
		  ],
		  "approvals": [],
		  "application_metadata": {
			"name": "1inch",
			"icon": {
			  "url": "https://protocol-icons.s3.amazonaws.com/icons/1inch.jpg"
			},
			"contract_address": "0x1111111254eeb25477b68fb85ed929f73a960582",
			"method": {
			  "id": "0x12aa3caf",
			  "name": "Swap"
			}
		  },
		  "flags": {
			"is_trash": false
		  }
		},
		"relationships": {
		  "chain": {
			"links": {
			  "related": "https://api.zerion.io/v1/chains/ethereum"
			},
			"data": {
			  "type": "chains",
			  "id": "ethereum"
			}
		  }
		}
	  },
	  {
		"type": "transactions",
		"id": "d70303b191d25b5494fdfda6a022eefa",
		"attributes": {
		  "operation_type": "trade",
		  "hash": "0xae419b26928be67245dcf8718024504d07af392faf73efe2515c0dc46986fa15",
		  "mined_at_block": 18925464,
		  "mined_at": "2024-01-03T07:51:23Z",
		  "sent_from": "0x5da04eb0e28a06798797f54deb17cc014c525370",
		  "sent_to": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
		  "status": "confirmed",
		  "nonce": 1339,
		  "fee": {
			"fungible_info": {
			  "name": "Ethereum",
			  "symbol": "ETH",
			  "icon": {
				"url": "https://token-icons.s3.amazonaws.com/eth.png"
			  },
			  "flags": {
				"verified": true
			  },
			  "implementations": [
				{
				  "chain_id": "ethereum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "arbitrum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "base",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zksync-era",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "optimism",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "scroll",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "aurora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "polygon-zkevm",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "linea",
				  "address": "",
				  "decimals": 18
				}
			  ]
			},
			"quantity": {
			  "int": "1764192766923518",
			  "decimals": 18,
			  "float": 0.0017641927669235,
			  "numeric": "0.001764192766923518"
			},
			"price": 2364.27,
			"value": 4.171028033054223
		  },
		  "transfers": [
			{
			  "fungible_info": {
				"name": "Ethereum",
				"symbol": "ETH",
				"icon": {
				  "url": "https://token-icons.s3.amazonaws.com/eth.png"
				},
				"flags": {
				  "verified": true
				},
				"implementations": [
				  {
					"chain_id": "linea",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "polygon-zkevm",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "optimism",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zksync-era",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "arbitrum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "aurora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "ethereum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "base",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "scroll",
					"address": "",
					"decimals": 18
				  }
				]
			  },
			  "direction": "in",
			  "quantity": {
				"int": "1052880802261419410",
				"decimals": 18,
				"float": 1.0528808022614193,
				"numeric": "1.052880802261419410"
			  },
			  "value": 2489.2944943626057,
			  "price": 2364.27,
			  "sender": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
			  "recipient": "0x5da04eb0e28a06798797f54deb17cc014c525370"
			},
			{
			  "fungible_info": {
				"name": "Agoras Token",
				"symbol": "AGRS",
				"icon": null,
				"flags": {
				  "verified": true
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "0x738865301a9b7dd80dc3666dd48cf034ec42bdda",
					"decimals": 8
				  }
				]
			  },
			  "direction": "out",
			  "quantity": {
				"int": "50000000000",
				"decimals": 8,
				"float": 500,
				"numeric": "500.00000000"
			  },
			  "value": 2543.46984465,
			  "price": 5.0869396893,
			  "sender": "0x5da04eb0e28a06798797f54deb17cc014c525370",
			  "recipient": "0xaddd24a001243e6d446ed8d088c82aeff84073a3"
			}
		  ],
		  "approvals": [
			{
			  "fungible_info": {
				"name": "Agoras Token",
				"symbol": "AGRS",
				"icon": null,
				"flags": {
				  "verified": true
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "0x738865301a9b7dd80dc3666dd48cf034ec42bdda",
					"decimals": 8
				  }
				]
			  },
			  "quantity": {
				"int": "350000417000",
				"decimals": 8,
				"float": 3500.00417,
				"numeric": "3500.00417000"
			  },
			  "sender": "0x000000000022d473030f116ddee9f6b43ac78ba3"
			}
		  ],
		  "application_metadata": {
			"name": "Uniswap",
			"icon": {
			  "url": "https://protocol-icons.s3.amazonaws.com/uniswap_protocol.png"
			},
			"contract_address": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
			"method": {
			  "id": "0x3593564c",
			  "name": "Execute"
			}
		  },
		  "flags": {
			"is_trash": false
		  }
		},
		"relationships": {
		  "chain": {
			"links": {
			  "related": "https://api.zerion.io/v1/chains/ethereum"
			},
			"data": {
			  "type": "chains",
			  "id": "ethereum"
			}
		  }
		}
	  },
	  {
		"type": "transactions",
		"id": "6c64cc277ad75b2ebecceae67b85aec8",
		"attributes": {
		  "operation_type": "trade",
		  "hash": "0xa5ca9b52245a375572df69d8d8f242ab19197e7d9e0826674cc5ab89d429cd98",
		  "mined_at_block": 18925391,
		  "mined_at": "2024-01-03T07:36:47Z",
		  "sent_from": "0x5da04eb0e28a06798797f54deb17cc014c525370",
		  "sent_to": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
		  "status": "confirmed",
		  "nonce": 1337,
		  "fee": {
			"fungible_info": {
			  "name": "Ethereum",
			  "symbol": "ETH",
			  "icon": {
				"url": "https://token-icons.s3.amazonaws.com/eth.png"
			  },
			  "flags": {
				"verified": true
			  },
			  "implementations": [
				{
				  "chain_id": "polygon-zkevm",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "linea",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "aurora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "base",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "ethereum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "optimism",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "arbitrum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zksync-era",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "scroll",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zora",
				  "address": "",
				  "decimals": 18
				}
			  ]
			},
			"quantity": {
			  "int": "1746871200595176",
			  "decimals": 18,
			  "float": 0.0017468712005952,
			  "numeric": "0.001746871200595176"
			},
			"price": 2377.11,
			"value": 4.152504999646856
		  },
		  "transfers": [
			{
			  "fungible_info": {
				"name": "Micro AI",
				"symbol": "MAI",
				"icon": null,
				"flags": {
				  "verified": false
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "0x24d73bca2bd9c3a61e99dfc7cb86d3c379ebded7",
					"decimals": 18
				  }
				]
			  },
			  "direction": "in",
			  "quantity": {
				"int": "500000000000000000000",
				"decimals": 18,
				"float": 500,
				"numeric": "500.000000000000000000"
			  },
			  "value": 932.2099005036246,
			  "price": 1.8644198010072492,
			  "sender": "0xc52a18e7358b1c618bd8f0e784b35636775afb4e",
			  "recipient": "0x5da04eb0e28a06798797f54deb17cc014c525370"
			},
			{
			  "fungible_info": {
				"name": "Ethereum",
				"symbol": "ETH",
				"icon": {
				  "url": "https://token-icons.s3.amazonaws.com/eth.png"
				},
				"flags": {
				  "verified": true
				},
				"implementations": [
				  {
					"chain_id": "arbitrum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "scroll",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "aurora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "base",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zksync-era",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "linea",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "ethereum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "optimism",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "polygon-zkevm",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zora",
					"address": "",
					"decimals": 18
				  }
				]
			  },
			  "direction": "out",
			  "quantity": {
				"int": "392647035731098514",
				"decimals": 18,
				"float": 0.3926470357310985,
				"numeric": "0.392647035731098514"
			  },
			  "value": 933.3651951067516,
			  "price": 2377.11,
			  "sender": "0x5da04eb0e28a06798797f54deb17cc014c525370",
			  "recipient": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad"
			}
		  ],
		  "approvals": [],
		  "application_metadata": {
			"name": "Uniswap",
			"icon": {
			  "url": "https://protocol-icons.s3.amazonaws.com/uniswap_protocol.png"
			},
			"contract_address": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
			"method": {
			  "id": "0x3593564c",
			  "name": "Execute"
			}
		  },
		  "flags": {
			"is_trash": false
		  }
		},
		"relationships": {
		  "chain": {
			"links": {
			  "related": "https://api.zerion.io/v1/chains/ethereum"
			},
			"data": {
			  "type": "chains",
			  "id": "ethereum"
			}
		  }
		}
	  },
	  {
		"type": "transactions",
		"id": "69f0ee34887c55dc97a84208f64664e7",
		"attributes": {
		  "operation_type": "trade",
		  "hash": "0x516e413360376d97c381ccba55f5c3639752fadc0f70e8c7e9ab04e85cbedd03",
		  "mined_at_block": 18912872,
		  "mined_at": "2024-01-01T13:27:35Z",
		  "sent_from": "0x5da04eb0e28a06798797f54deb17cc014c525370",
		  "sent_to": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
		  "status": "confirmed",
		  "nonce": 1335,
		  "fee": {
			"fungible_info": {
			  "name": "Ethereum",
			  "symbol": "ETH",
			  "icon": {
				"url": "https://token-icons.s3.amazonaws.com/eth.png"
			  },
			  "flags": {
				"verified": true
			  },
			  "implementations": [
				{
				  "chain_id": "optimism",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "ethereum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "base",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "arbitrum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "linea",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "polygon-zkevm",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "scroll",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "aurora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zksync-era",
				  "address": "",
				  "decimals": 18
				}
			  ]
			},
			"quantity": {
			  "int": "2087034176915121",
			  "decimals": 18,
			  "float": 0.0020870341769151,
			  "numeric": "0.002087034176915121"
			},
			"price": 2305.79,
			"value": 4.812262534789069
		  },
		  "transfers": [
			{
			  "fungible_info": {
				"name": "Ethereum",
				"symbol": "ETH",
				"icon": {
				  "url": "https://token-icons.s3.amazonaws.com/eth.png"
				},
				"flags": {
				  "verified": true
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "polygon-zkevm",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "base",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "linea",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "aurora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "arbitrum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "optimism",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zksync-era",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "scroll",
					"address": "",
					"decimals": 18
				  }
				]
			  },
			  "direction": "in",
			  "quantity": {
				"int": "95210474768449391",
				"decimals": 18,
				"float": 0.0952104747684494,
				"numeric": "0.095210474768449391"
			  },
			  "value": 219.53536061634296,
			  "price": 2305.79,
			  "sender": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
			  "recipient": "0x5da04eb0e28a06798797f54deb17cc014c525370"
			},
			{
			  "fungible_info": {
				"name": "CACA",
				"symbol": "CACA",
				"icon": null,
				"flags": {
				  "verified": false
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "0x8e1a34b2d2b9e6e883c42b5e2e54e4357059da0a",
					"decimals": 18
				  }
				]
			  },
			  "direction": "out",
			  "quantity": {
				"int": "800000000000000000000000000000",
				"decimals": 18,
				"float": 800000000000,
				"numeric": "800000000000.000000000000000000"
			  },
			  "value": null,
			  "price": null,
			  "sender": "0x5da04eb0e28a06798797f54deb17cc014c525370",
			  "recipient": "0x8e1a34b2d2b9e6e883c42b5e2e54e4357059da0a"
			},
			{
			  "fungible_info": {
				"name": "CACA",
				"symbol": "CACA",
				"icon": null,
				"flags": {
				  "verified": false
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "0x8e1a34b2d2b9e6e883c42b5e2e54e4357059da0a",
					"decimals": 18
				  }
				]
			  },
			  "direction": "out",
			  "quantity": {
				"int": "19200000000000000000000000000000",
				"decimals": 18,
				"float": 19200000000000,
				"numeric": "19200000000000.000000000000000000"
			  },
			  "value": null,
			  "price": null,
			  "sender": "0x5da04eb0e28a06798797f54deb17cc014c525370",
			  "recipient": "0x98261239717004d49f7ac44f0adf53a41127bd3b"
			}
		  ],
		  "approvals": [
			{
			  "fungible_info": {
				"name": "CACA",
				"symbol": "CACA",
				"icon": null,
				"flags": {
				  "verified": false
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "0x8e1a34b2d2b9e6e883c42b5e2e54e4357059da0a",
					"decimals": 18
				  }
				]
			  },
			  "quantity": {
				"int": "0",
				"decimals": 18,
				"float": 0,
				"numeric": "0.000000000000000000"
			  },
			  "sender": "0x000000000022d473030f116ddee9f6b43ac78ba3"
			}
		  ],
		  "application_metadata": {
			"name": "Uniswap",
			"icon": {
			  "url": "https://protocol-icons.s3.amazonaws.com/uniswap_protocol.png"
			},
			"contract_address": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
			"method": {
			  "id": "0x3593564c",
			  "name": "Execute"
			}
		  },
		  "flags": {
			"is_trash": false
		  }
		},
		"relationships": {
		  "chain": {
			"links": {
			  "related": "https://api.zerion.io/v1/chains/ethereum"
			},
			"data": {
			  "type": "chains",
			  "id": "ethereum"
			}
		  }
		}
	  },
	  {
		"type": "transactions",
		"id": "f68c3829ea9955308c28acd03d83f272",
		"attributes": {
		  "operation_type": "trade",
		  "hash": "0xc0e54b31a4982d00f166f8f5ad3c833b385cc0e4c2b5705611f64e70ef97538e",
		  "mined_at_block": 18892137,
		  "mined_at": "2023-12-29T15:30:11Z",
		  "sent_from": "0x5da04eb0e28a06798797f54deb17cc014c525370",
		  "sent_to": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
		  "status": "confirmed",
		  "nonce": 1331,
		  "fee": {
			"fungible_info": {
			  "name": "Ethereum",
			  "symbol": "ETH",
			  "icon": {
				"url": "https://token-icons.s3.amazonaws.com/eth.png"
			  },
			  "flags": {
				"verified": true
			  },
			  "implementations": [
				{
				  "chain_id": "zora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "scroll",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "ethereum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zksync-era",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "optimism",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "base",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "arbitrum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "linea",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "polygon-zkevm",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "aurora",
				  "address": "",
				  "decimals": 18
				}
			  ]
			},
			"quantity": {
			  "int": "6172628041066818",
			  "decimals": 18,
			  "float": 0.0061726280410668,
			  "numeric": "0.006172628041066818"
			},
			"price": 2351.27,
			"value": 14.513515134119134
		  },
		  "transfers": [
			{
			  "fungible_info": {
				"name": "Fomo BOT",
				"symbol": "FomoBOT",
				"icon": null,
				"flags": {
				  "verified": false
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "0x9287b08598dda5fedabae0763c8880ed42c67229",
					"decimals": 9
				  }
				]
			  },
			  "direction": "in",
			  "quantity": {
				"int": "1393387152341607",
				"decimals": 9,
				"float": 1393387.152341607,
				"numeric": "1393387.152341607"
			  },
			  "value": 761.0901567885115,
			  "price": 0.0005462158564541726,
			  "sender": "0x07fa991af85540aaf5811fb2d68712962d3897d4",
			  "recipient": "0x5da04eb0e28a06798797f54deb17cc014c525370"
			},
			{
			  "fungible_info": {
				"name": "Ethereum",
				"symbol": "ETH",
				"icon": {
				  "url": "https://token-icons.s3.amazonaws.com/eth.png"
				},
				"flags": {
				  "verified": true
				},
				"implementations": [
				  {
					"chain_id": "arbitrum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "aurora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "base",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "linea",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "ethereum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "polygon-zkevm",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "scroll",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zksync-era",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "optimism",
					"address": "",
					"decimals": 18
				  }
				]
			  },
			  "direction": "out",
			  "quantity": {
				"int": "310000000000000000",
				"decimals": 18,
				"float": 0.31,
				"numeric": "0.310000000000000000"
			  },
			  "value": 728.8937,
			  "price": 2351.27,
			  "sender": "0x5da04eb0e28a06798797f54deb17cc014c525370",
			  "recipient": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad"
			}
		  ],
		  "approvals": [],
		  "application_metadata": {
			"name": "Uniswap",
			"icon": {
			  "url": "https://protocol-icons.s3.amazonaws.com/uniswap_protocol.png"
			},
			"contract_address": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
			"method": {
			  "id": "0x3593564c",
			  "name": "Execute"
			}
		  },
		  "flags": {
			"is_trash": false
		  }
		},
		"relationships": {
		  "chain": {
			"links": {
			  "related": "https://api.zerion.io/v1/chains/ethereum"
			},
			"data": {
			  "type": "chains",
			  "id": "ethereum"
			}
		  }
		}
	  },
	  {
		"type": "transactions",
		"id": "0da0dabc63f2522581e240d2d070550c",
		"attributes": {
		  "operation_type": "trade",
		  "hash": "0x56008a487915a08f2f3e52ce59a1fb4ca84c493082f4b3f494bf6f67b6cd4de0",
		  "mined_at_block": 18892112,
		  "mined_at": "2023-12-29T15:24:59Z",
		  "sent_from": "0x5da04eb0e28a06798797f54deb17cc014c525370",
		  "sent_to": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
		  "status": "confirmed",
		  "nonce": 1330,
		  "fee": {
			"fungible_info": {
			  "name": "Ethereum",
			  "symbol": "ETH",
			  "icon": {
				"url": "https://token-icons.s3.amazonaws.com/eth.png"
			  },
			  "flags": {
				"verified": true
			  },
			  "implementations": [
				{
				  "chain_id": "zksync-era",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "optimism",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "scroll",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "base",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "arbitrum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "polygon-zkevm",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "aurora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "linea",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "ethereum",
				  "address": "",
				  "decimals": 18
				}
			  ]
			},
			"quantity": {
			  "int": "5996079336850950",
			  "decimals": 18,
			  "float": 0.005996079336851,
			  "numeric": "0.005996079336850950"
			},
			"price": 2358.6600000000003,
			"value": 14.142712488656981
		  },
		  "transfers": [
			{
			  "fungible_info": {
				"name": "Fomo BOT",
				"symbol": "FomoBOT",
				"icon": null,
				"flags": {
				  "verified": false
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "0x9287b08598dda5fedabae0763c8880ed42c67229",
					"decimals": 9
				  }
				]
			  },
			  "direction": "in",
			  "quantity": {
				"int": "792522078349631",
				"decimals": 9,
				"float": 792522.078349631,
				"numeric": "792522.078349631"
			  },
			  "value": 359.6765941279016,
			  "price": 0.0004538379484353315,
			  "sender": "0x07fa991af85540aaf5811fb2d68712962d3897d4",
			  "recipient": "0x5da04eb0e28a06798797f54deb17cc014c525370"
			},
			{
			  "fungible_info": {
				"name": "Ethereum",
				"symbol": "ETH",
				"icon": {
				  "url": "https://token-icons.s3.amazonaws.com/eth.png"
				},
				"flags": {
				  "verified": true
				},
				"implementations": [
				  {
					"chain_id": "zora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "base",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "ethereum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "arbitrum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "aurora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "linea",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "optimism",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "polygon-zkevm",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zksync-era",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "scroll",
					"address": "",
					"decimals": 18
				  }
				]
			  },
			  "direction": "out",
			  "quantity": {
				"int": "150000000000000000",
				"decimals": 18,
				"float": 0.15,
				"numeric": "0.150000000000000000"
			  },
			  "value": 353.79900000000004,
			  "price": 2358.6600000000003,
			  "sender": "0x5da04eb0e28a06798797f54deb17cc014c525370",
			  "recipient": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad"
			}
		  ],
		  "approvals": [],
		  "application_metadata": {
			"name": "Uniswap",
			"icon": {
			  "url": "https://protocol-icons.s3.amazonaws.com/uniswap_protocol.png"
			},
			"contract_address": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
			"method": {
			  "id": "0x3593564c",
			  "name": "Execute"
			}
		  },
		  "flags": {
			"is_trash": false
		  }
		},
		"relationships": {
		  "chain": {
			"links": {
			  "related": "https://api.zerion.io/v1/chains/ethereum"
			},
			"data": {
			  "type": "chains",
			  "id": "ethereum"
			}
		  }
		}
	  },
	  {
		"type": "transactions",
		"id": "792ac4dcc0b954c69fe4042f81420be8",
		"attributes": {
		  "operation_type": "trade",
		  "hash": "0x5ea74faa447330b85081763b8a45e4fe6166db26b55517a73388237e27fb492b",
		  "mined_at_block": 18890999,
		  "mined_at": "2023-12-29T11:40:11Z",
		  "sent_from": "0x5da04eb0e28a06798797f54deb17cc014c525370",
		  "sent_to": "0x881d40237659c251811cec9c364ef91dc08d300c",
		  "status": "confirmed",
		  "nonce": 1328,
		  "fee": {
			"fungible_info": {
			  "name": "Ethereum",
			  "symbol": "ETH",
			  "icon": {
				"url": "https://token-icons.s3.amazonaws.com/eth.png"
			  },
			  "flags": {
				"verified": true
			  },
			  "implementations": [
				{
				  "chain_id": "scroll",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "arbitrum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "linea",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "optimism",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "aurora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "base",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "ethereum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zksync-era",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "polygon-zkevm",
				  "address": "",
				  "decimals": 18
				}
			  ]
			},
			"quantity": {
			  "int": "3906073130671920",
			  "decimals": 18,
			  "float": 0.0039060731306719,
			  "numeric": "0.003906073130671920"
			},
			"price": 2376.02,
			"value": 9.280907879939047
		  },
		  "transfers": [
			{
			  "fungible_info": {
				"name": "Tether USD",
				"symbol": "USDT",
				"icon": {
				  "url": "https://token-icons.s3.amazonaws.com/0xdac17f958d2ee523a2206206994597c13d831ec7.png"
				},
				"flags": {
				  "verified": true
				},
				"implementations": [
				  {
					"chain_id": "aurora",
					"address": "0x4988a896b1227218e4a686fde5eabdcabd91571f",
					"decimals": 6
				  },
				  {
					"chain_id": "metis-andromeda",
					"address": "0xbb06dca3ae6887fabf931640f67cab3e3a16f4dc",
					"decimals": 6
				  },
				  {
					"chain_id": "polygon",
					"address": "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
					"decimals": 6
				  },
				  {
					"chain_id": "avalanche",
					"address": "0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7",
					"decimals": 6
				  },
				  {
					"chain_id": "xdai",
					"address": "0x4ecaba5870353805a9f068101a40e0f32ed605c6",
					"decimals": 6
				  },
				  {
					"chain_id": "zksync-era",
					"address": "0x493257fd37edb34451f62edf8d2a0c418852ba4c",
					"decimals": 6
				  },
				  {
					"chain_id": "arbitrum",
					"address": "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9",
					"decimals": 6
				  },
				  {
					"chain_id": "binance-smart-chain",
					"address": "0x55d398326f99059ff775485246999027b3197955",
					"decimals": 18
				  },
				  {
					"chain_id": "polygon-zkevm",
					"address": "0x1e4a5963abfd975d8c9021ce480b42188849d41d",
					"decimals": 6
				  },
				  {
					"chain_id": "ethereum",
					"address": "0xdac17f958d2ee523a2206206994597c13d831ec7",
					"decimals": 6
				  },
				  {
					"chain_id": "optimism",
					"address": "0x94b008aa00579c1307b0ef2c499ad98a8ce58e58",
					"decimals": 6
				  }
				]
			  },
			  "direction": "in",
			  "quantity": {
				"int": "14484480505",
				"decimals": 6,
				"float": 14484.480505,
				"numeric": "14484.480505"
			  },
			  "value": 14524.112171158578,
			  "price": 1.0027361468811324,
			  "sender": "0x74de5d4fcbf63e00296fd95d33236b9794016631",
			  "recipient": "0x5da04eb0e28a06798797f54deb17cc014c525370"
			},
			{
			  "fungible_info": {
				"name": "Ethereum",
				"symbol": "ETH",
				"icon": {
				  "url": "https://token-icons.s3.amazonaws.com/eth.png"
				},
				"flags": {
				  "verified": true
				},
				"implementations": [
				  {
					"chain_id": "linea",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "polygon-zkevm",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "optimism",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "aurora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "ethereum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "base",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "arbitrum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "scroll",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zksync-era",
					"address": "",
					"decimals": 18
				  }
				]
			  },
			  "direction": "out",
			  "quantity": {
				"int": "6160000000000000000",
				"decimals": 18,
				"float": 6.16,
				"numeric": "6.160000000000000000"
			  },
			  "value": 14636.2832,
			  "price": 2376.02,
			  "sender": "0x5da04eb0e28a06798797f54deb17cc014c525370",
			  "recipient": "0x881d40237659c251811cec9c364ef91dc08d300c"
			}
		  ],
		  "approvals": [],
		  "application_metadata": {
			"name": "MetaMask",
			"icon": {
			  "url": "https://protocol-icons.s3.amazonaws.com/metamask.jpeg"
			},
			"contract_address": "0x881d40237659c251811cec9c364ef91dc08d300c",
			"method": {
			  "id": "0x5f575529",
			  "name": "Swap"
			}
		  },
		  "flags": {
			"is_trash": false
		  }
		},
		"relationships": {
		  "chain": {
			"links": {
			  "related": "https://api.zerion.io/v1/chains/ethereum"
			},
			"data": {
			  "type": "chains",
			  "id": "ethereum"
			}
		  }
		}
	  },
	  {
		"type": "transactions",
		"id": "44bf73880a9a5aa59fe54a40436a24fe",
		"attributes": {
		  "operation_type": "trade",
		  "hash": "0xa9c8c66e2acd546c921ffff97f03d2ab2fec7ae75b658173e0a9da7d61667d04",
		  "mined_at_block": 18890776,
		  "mined_at": "2023-12-29T10:55:23Z",
		  "sent_from": "0x5da04eb0e28a06798797f54deb17cc014c525370",
		  "sent_to": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
		  "status": "confirmed",
		  "nonce": 1327,
		  "fee": {
			"fungible_info": {
			  "name": "Ethereum",
			  "symbol": "ETH",
			  "icon": {
				"url": "https://token-icons.s3.amazonaws.com/eth.png"
			  },
			  "flags": {
				"verified": true
			  },
			  "implementations": [
				{
				  "chain_id": "base",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "aurora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "ethereum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "scroll",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "optimism",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "arbitrum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zksync-era",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "polygon-zkevm",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "linea",
				  "address": "",
				  "decimals": 18
				}
			  ]
			},
			"quantity": {
			  "int": "4885902219604595",
			  "decimals": 18,
			  "float": 0.0048859022196046,
			  "numeric": "0.004885902219604595"
			},
			"price": 2368.44,
			"value": 11.57196625300032
		  },
		  "transfers": [
			{
			  "fungible_info": {
				"name": "Ethereum",
				"symbol": "ETH",
				"icon": {
				  "url": "https://token-icons.s3.amazonaws.com/eth.png"
				},
				"flags": {
				  "verified": true
				},
				"implementations": [
				  {
					"chain_id": "polygon-zkevm",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "scroll",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "aurora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "ethereum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "arbitrum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "base",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "optimism",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zksync-era",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "linea",
					"address": "",
					"decimals": 18
				  }
				]
			  },
			  "direction": "in",
			  "quantity": {
				"int": "1269624163152675316",
				"decimals": 18,
				"float": 1.2696241631526752,
				"numeric": "1.269624163152675316"
			  },
			  "value": 3007.028652977322,
			  "price": 2368.44,
			  "sender": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
			  "recipient": "0x5da04eb0e28a06798797f54deb17cc014c525370"
			},
			{
			  "fungible_info": {
				"name": "Agoras Token",
				"symbol": "AGRS",
				"icon": null,
				"flags": {
				  "verified": true
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "0x738865301a9b7dd80dc3666dd48cf034ec42bdda",
					"decimals": 8
				  }
				]
			  },
			  "direction": "out",
			  "quantity": {
				"int": "2940500000",
				"decimals": 8,
				"float": 29.405,
				"numeric": "29.40500000"
			  },
			  "value": 150.724890500004,
			  "price": 5.1258252168,
			  "sender": "0x5da04eb0e28a06798797f54deb17cc014c525370",
			  "recipient": "0xd89f1ef41a40db980883c4518387e682cdf83c7d"
			},
			{
			  "fungible_info": {
				"name": "Agoras Token",
				"symbol": "AGRS",
				"icon": null,
				"flags": {
				  "verified": true
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "0x738865301a9b7dd80dc3666dd48cf034ec42bdda",
					"decimals": 8
				  }
				]
			  },
			  "direction": "out",
			  "quantity": {
				"int": "55869500000",
				"decimals": 8,
				"float": 558.695,
				"numeric": "558.69500000"
			  },
			  "value": 2863.772919500076,
			  "price": 5.1258252168,
			  "sender": "0x5da04eb0e28a06798797f54deb17cc014c525370",
			  "recipient": "0xaddd24a001243e6d446ed8d088c82aeff84073a3"
			}
		  ],
		  "approvals": [
			{
			  "fungible_info": {
				"name": "Agoras Token",
				"symbol": "AGRS",
				"icon": null,
				"flags": {
				  "verified": true
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "0x738865301a9b7dd80dc3666dd48cf034ec42bdda",
					"decimals": 8
				  }
				]
			  },
			  "quantity": {
				"int": "400000417000",
				"decimals": 8,
				"float": 4000.00417,
				"numeric": "4000.00417000"
			  },
			  "sender": "0x000000000022d473030f116ddee9f6b43ac78ba3"
			}
		  ],
		  "application_metadata": {
			"name": "Uniswap",
			"icon": {
			  "url": "https://protocol-icons.s3.amazonaws.com/uniswap_protocol.png"
			},
			"contract_address": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
			"method": {
			  "id": "0x3593564c",
			  "name": "Execute"
			}
		  },
		  "flags": {
			"is_trash": false
		  }
		},
		"relationships": {
		  "chain": {
			"links": {
			  "related": "https://api.zerion.io/v1/chains/ethereum"
			},
			"data": {
			  "type": "chains",
			  "id": "ethereum"
			}
		  }
		}
	  },
	  {
		"type": "transactions",
		"id": "da073d71d3b150d29cf22c17c126fec7",
		"attributes": {
		  "operation_type": "trade",
		  "hash": "0xdaa24f77a8011cd17d0a43e214f2feb5b6d7c234ba41f186ef2e16d14a5b1e13",
		  "mined_at_block": 18890772,
		  "mined_at": "2023-12-29T10:54:35Z",
		  "sent_from": "0x5da04eb0e28a06798797f54deb17cc014c525370",
		  "sent_to": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
		  "status": "confirmed",
		  "nonce": 1325,
		  "fee": {
			"fungible_info": {
			  "name": "Ethereum",
			  "symbol": "ETH",
			  "icon": {
				"url": "https://token-icons.s3.amazonaws.com/eth.png"
			  },
			  "flags": {
				"verified": true
			  },
			  "implementations": [
				{
				  "chain_id": "zora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "arbitrum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "ethereum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "base",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "polygon-zkevm",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "aurora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zksync-era",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "linea",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "optimism",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "scroll",
				  "address": "",
				  "decimals": 18
				}
			  ]
			},
			"quantity": {
			  "int": "2508633480958008",
			  "decimals": 18,
			  "float": 0.002508633480958,
			  "numeric": "0.002508633480958008"
			},
			"price": 2368.2400000000002,
			"value": 5.941046154943975
		  },
		  "transfers": [
			{
			  "fungible_info": {
				"name": "Ethereum",
				"symbol": "ETH",
				"icon": {
				  "url": "https://token-icons.s3.amazonaws.com/eth.png"
				},
				"flags": {
				  "verified": true
				},
				"implementations": [
				  {
					"chain_id": "zksync-era",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "optimism",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "linea",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "aurora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "polygon-zkevm",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "scroll",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "base",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "arbitrum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "ethereum",
					"address": "",
					"decimals": 18
				  }
				]
			  },
			  "direction": "in",
			  "quantity": {
				"int": "2305705187797936251",
				"decimals": 18,
				"float": 2.3057051877979364,
				"numeric": "2.305705187797936251"
			  },
			  "value": 5460.463253950586,
			  "price": 2368.2400000000002,
			  "sender": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
			  "recipient": "0x5da04eb0e28a06798797f54deb17cc014c525370"
			},
			{
			  "fungible_info": {
				"name": "Autonolas from Mainnet",
				"symbol": "OLAS",
				"icon": {
				  "url": "https://token-icons.s3.amazonaws.com/0x0001a500a6b18995b03f44bb040a5ffc28e45cb0.png"
				},
				"flags": {
				  "verified": false
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "0x0001a500a6b18995b03f44bb040a5ffc28e45cb0",
					"decimals": 18
				  },
				  {
					"chain_id": "polygon",
					"address": "0xfef5d947472e72efbb2e388c730b7428406f2f95",
					"decimals": 18
				  },
				  {
					"chain_id": "xdai",
					"address": "0xce11e14225575945b8e6dc0d4f2dd4c570f79d9f",
					"decimals": 18
				  }
				]
			  },
			  "direction": "out",
			  "quantity": {
				"int": "1000000000000000000000",
				"decimals": 18,
				"float": 1000,
				"numeric": "1000.000000000000000000"
			  },
			  "value": 5478.845415885378,
			  "price": 5.478845415885378,
			  "sender": "0x5da04eb0e28a06798797f54deb17cc014c525370",
			  "recipient": "0x09d1d767edf8fa23a64c51fa559e0688e526812f"
			}
		  ],
		  "approvals": [],
		  "application_metadata": {
			"name": "Uniswap",
			"icon": {
			  "url": "https://protocol-icons.s3.amazonaws.com/uniswap_protocol.png"
			},
			"contract_address": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
			"method": {
			  "id": "0x3593564c",
			  "name": "Execute"
			}
		  },
		  "flags": {
			"is_trash": false
		  }
		},
		"relationships": {
		  "chain": {
			"links": {
			  "related": "https://api.zerion.io/v1/chains/ethereum"
			},
			"data": {
			  "type": "chains",
			  "id": "ethereum"
			}
		  }
		}
	  },
	  {
		"type": "transactions",
		"id": "27e42eba05775f0ca024b7c44b065100",
		"attributes": {
		  "operation_type": "trade",
		  "hash": "0x2ea8fe25875d1482a466c89e333184f01b4fc814bd08aa7eb2f1315641386874",
		  "mined_at_block": 18890770,
		  "mined_at": "2023-12-29T10:54:11Z",
		  "sent_from": "0x5da04eb0e28a06798797f54deb17cc014c525370",
		  "sent_to": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
		  "status": "confirmed",
		  "nonce": 1324,
		  "fee": {
			"fungible_info": {
			  "name": "Ethereum",
			  "symbol": "ETH",
			  "icon": {
				"url": "https://token-icons.s3.amazonaws.com/eth.png"
			  },
			  "flags": {
				"verified": true
			  },
			  "implementations": [
				{
				  "chain_id": "aurora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "scroll",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zksync-era",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "ethereum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "arbitrum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "optimism",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "polygon-zkevm",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "base",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "linea",
				  "address": "",
				  "decimals": 18
				}
			  ]
			},
			"quantity": {
			  "int": "3973783188697896",
			  "decimals": 18,
			  "float": 0.0039737831886979,
			  "numeric": "0.003973783188697896"
			},
			"price": 2368.6,
			"value": 9.412302860749845
		  },
		  "transfers": [
			{
			  "fungible_info": {
				"name": "Ethereum",
				"symbol": "ETH",
				"icon": {
				  "url": "https://token-icons.s3.amazonaws.com/eth.png"
				},
				"flags": {
				  "verified": true
				},
				"implementations": [
				  {
					"chain_id": "linea",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "base",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "polygon-zkevm",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "scroll",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "optimism",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "arbitrum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "ethereum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "aurora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zksync-era",
					"address": "",
					"decimals": 18
				  }
				]
			  },
			  "direction": "in",
			  "quantity": {
				"int": "1000432098618147318",
				"decimals": 18,
				"float": 1.0004320986181472,
				"numeric": "1.000432098618147318"
			  },
			  "value": 2369.6234687869432,
			  "price": 2368.6,
			  "sender": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
			  "recipient": "0x5da04eb0e28a06798797f54deb17cc014c525370"
			},
			{
			  "fungible_info": {
				"name": "TokenSight Token",
				"symbol": "TKST",
				"icon": {
				  "url": "https://token-icons.s3.amazonaws.com/0x7cdbfc86a0bfa20f133748b0cf5cea5b787b182c.png"
				},
				"flags": {
				  "verified": false
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "0x7cdbfc86a0bfa20f133748b0cf5cea5b787b182c",
					"decimals": 18
				  }
				]
			  },
			  "direction": "out",
			  "quantity": {
				"int": "250095000000000000000",
				"decimals": 18,
				"float": 250.095,
				"numeric": "250.095000000000000000"
			  },
			  "value": 124.89750332675372,
			  "price": 0.49940024121535304,
			  "sender": "0x5da04eb0e28a06798797f54deb17cc014c525370",
			  "recipient": "0x7cdbfc86a0bfa20f133748b0cf5cea5b787b182c"
			},
			{
			  "fungible_info": {
				"name": "TokenSight Token",
				"symbol": "TKST",
				"icon": {
				  "url": "https://token-icons.s3.amazonaws.com/0x7cdbfc86a0bfa20f133748b0cf5cea5b787b182c.png"
				},
				"flags": {
				  "verified": false
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "0x7cdbfc86a0bfa20f133748b0cf5cea5b787b182c",
					"decimals": 18
				  }
				]
			  },
			  "direction": "out",
			  "quantity": {
				"int": "4751805000000000000000",
				"decimals": 18,
				"float": 4751.805,
				"numeric": "4751.805000000000000000"
			  },
			  "value": 2373.052563208321,
			  "price": 0.49940024121535304,
			  "sender": "0x5da04eb0e28a06798797f54deb17cc014c525370",
			  "recipient": "0xbf519fb74965680b45d528d29e1d77bd1728c9ce"
			}
		  ],
		  "approvals": [],
		  "application_metadata": {
			"name": "Uniswap",
			"icon": {
			  "url": "https://protocol-icons.s3.amazonaws.com/uniswap_protocol.png"
			},
			"contract_address": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
			"method": {
			  "id": "0x3593564c",
			  "name": "Execute"
			}
		  },
		  "flags": {
			"is_trash": false
		  }
		},
		"relationships": {
		  "chain": {
			"links": {
			  "related": "https://api.zerion.io/v1/chains/ethereum"
			},
			"data": {
			  "type": "chains",
			  "id": "ethereum"
			}
		  }
		}
	  },
	  {
		"type": "transactions",
		"id": "3619835c29cb50e28a70a8343b743f24",
		"attributes": {
		  "operation_type": "trade",
		  "hash": "0x4c862d4f623341a35a427b7a150ad8e590eab82d7d74ee3b60f935453226c0bb",
		  "mined_at_block": 18890763,
		  "mined_at": "2023-12-29T10:52:47Z",
		  "sent_from": "0x5da04eb0e28a06798797f54deb17cc014c525370",
		  "sent_to": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
		  "status": "confirmed",
		  "nonce": 1322,
		  "fee": {
			"fungible_info": {
			  "name": "Ethereum",
			  "symbol": "ETH",
			  "icon": {
				"url": "https://token-icons.s3.amazonaws.com/eth.png"
			  },
			  "flags": {
				"verified": true
			  },
			  "implementations": [
				{
				  "chain_id": "arbitrum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "optimism",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "aurora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "polygon-zkevm",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "ethereum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "linea",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "base",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "scroll",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zksync-era",
				  "address": "",
				  "decimals": 18
				}
			  ]
			},
			"quantity": {
			  "int": "3280417232292415",
			  "decimals": 18,
			  "float": 0.0032804172322924,
			  "numeric": "0.003280417232292415"
			},
			"price": 2369.21,
			"value": 7.7719973109194775
		  },
		  "transfers": [
			{
			  "fungible_info": {
				"name": "Ethereum",
				"symbol": "ETH",
				"icon": {
				  "url": "https://token-icons.s3.amazonaws.com/eth.png"
				},
				"flags": {
				  "verified": true
				},
				"implementations": [
				  {
					"chain_id": "zksync-era",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "linea",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "optimism",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "scroll",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "ethereum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "base",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "polygon-zkevm",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "aurora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "arbitrum",
					"address": "",
					"decimals": 18
				  }
				]
			  },
			  "direction": "in",
			  "quantity": {
				"int": "2402657335098891870",
				"decimals": 18,
				"float": 2.402657335098892,
				"numeric": "2.402657335098891870"
			  },
			  "value": 5692.399784889645,
			  "price": 2369.21,
			  "sender": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
			  "recipient": "0x5da04eb0e28a06798797f54deb17cc014c525370"
			},
			{
			  "fungible_info": {
				"name": "AIT Protocol",
				"symbol": "AIT",
				"icon": null,
				"flags": {
				  "verified": false
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "0x89d584a1edb3a70b3b07963f9a3ea5399e38b136",
					"decimals": 18
				  }
				]
			  },
			  "direction": "out",
			  "quantity": {
				"int": "2000000000000000000000",
				"decimals": 18,
				"float": 2000,
				"numeric": "2000.000000000000000000"
			  },
			  "value": 235.60187073665375,
			  "price": 0.11780093536832688,
			  "sender": "0x5da04eb0e28a06798797f54deb17cc014c525370",
			  "recipient": "0xc5833628bbeb908f1cd89351e97fa73e265e6227"
			},
			{
			  "fungible_info": {
				"name": "AIT Protocol",
				"symbol": "AIT",
				"icon": null,
				"flags": {
				  "verified": false
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "0x89d584a1edb3a70b3b07963f9a3ea5399e38b136",
					"decimals": 18
				  }
				]
			  },
			  "direction": "out",
			  "quantity": {
				"int": "48000000000000000000000",
				"decimals": 18,
				"float": 48000,
				"numeric": "48000.000000000000000000"
			  },
			  "value": 5654.44489767969,
			  "price": 0.11780093536832688,
			  "sender": "0x5da04eb0e28a06798797f54deb17cc014c525370",
			  "recipient": "0x4e34da137f0b317c633838458e0c923a5e088752"
			}
		  ],
		  "approvals": [
			{
			  "fungible_info": {
				"name": "AIT Protocol",
				"symbol": "AIT",
				"icon": null,
				"flags": {
				  "verified": false
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "0x89d584a1edb3a70b3b07963f9a3ea5399e38b136",
					"decimals": 18
				  }
				]
			  },
			  "quantity": {
				"int": "50499141650000000000000",
				"decimals": 18,
				"float": 50499.14165,
				"numeric": "50499.141650000000000000"
			  },
			  "sender": "0x000000000022d473030f116ddee9f6b43ac78ba3"
			}
		  ],
		  "application_metadata": {
			"name": "Uniswap",
			"icon": {
			  "url": "https://protocol-icons.s3.amazonaws.com/uniswap_protocol.png"
			},
			"contract_address": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
			"method": {
			  "id": "0x3593564c",
			  "name": "Execute"
			}
		  },
		  "flags": {
			"is_trash": false
		  }
		},
		"relationships": {
		  "chain": {
			"links": {
			  "related": "https://api.zerion.io/v1/chains/ethereum"
			},
			"data": {
			  "type": "chains",
			  "id": "ethereum"
			}
		  }
		}
	  },
	  {
		"type": "transactions",
		"id": "019cceef8bb75568abefca46d2892cc6",
		"attributes": {
		  "operation_type": "trade",
		  "hash": "0x0ac18ac992849d161323a8748e80263278cf34983f5b64ed42771fb0011a00a9",
		  "mined_at_block": 18885841,
		  "mined_at": "2023-12-28T18:18:59Z",
		  "sent_from": "0x5da04eb0e28a06798797f54deb17cc014c525370",
		  "sent_to": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
		  "status": "confirmed",
		  "nonce": 1319,
		  "fee": {
			"fungible_info": {
			  "name": "Ethereum",
			  "symbol": "ETH",
			  "icon": {
				"url": "https://token-icons.s3.amazonaws.com/eth.png"
			  },
			  "flags": {
				"verified": true
			  },
			  "implementations": [
				{
				  "chain_id": "zora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "aurora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "arbitrum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "base",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "optimism",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "ethereum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "polygon-zkevm",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zksync-era",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "scroll",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "linea",
				  "address": "",
				  "decimals": 18
				}
			  ]
			},
			"quantity": {
			  "int": "6596811667506004",
			  "decimals": 18,
			  "float": 0.006596811667506,
			  "numeric": "0.006596811667506004"
			},
			"price": 2355.15,
			"value": 15.536480998726757
		  },
		  "transfers": [
			{
			  "fungible_info": {
				"name": "Ethereum",
				"symbol": "ETH",
				"icon": {
				  "url": "https://token-icons.s3.amazonaws.com/eth.png"
				},
				"flags": {
				  "verified": true
				},
				"implementations": [
				  {
					"chain_id": "scroll",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "aurora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "arbitrum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "ethereum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zksync-era",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "base",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "polygon-zkevm",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "linea",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "optimism",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zora",
					"address": "",
					"decimals": 18
				  }
				]
			  },
			  "direction": "in",
			  "quantity": {
				"int": "272649872546662784",
				"decimals": 18,
				"float": 0.2726498725466628,
				"numeric": "0.272649872546662784"
			  },
			  "value": 642.1313473282729,
			  "price": 2355.15,
			  "sender": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
			  "recipient": "0x5da04eb0e28a06798797f54deb17cc014c525370"
			},
			{
			  "fungible_info": {
				"name": "Juno Moneta",
				"symbol": "Juno",
				"icon": null,
				"flags": {
				  "verified": false
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "0x1bf91b7fbd9c00321060cb461774d6874f7ce600",
					"decimals": 9
				  }
				]
			  },
			  "direction": "out",
			  "quantity": {
				"int": "1999991666",
				"decimals": 9,
				"float": 1.999991666,
				"numeric": "1.999991666"
			  },
			  "value": 13.198117104983613,
			  "price": 6.599086050883381,
			  "sender": "0x5da04eb0e28a06798797f54deb17cc014c525370",
			  "recipient": "0x1bf91b7fbd9c00321060cb461774d6874f7ce600"
			},
			{
			  "fungible_info": {
				"name": "Juno Moneta",
				"symbol": "Juno",
				"icon": null,
				"flags": {
				  "verified": false
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "0x1bf91b7fbd9c00321060cb461774d6874f7ce600",
					"decimals": 9
				  }
				]
			  },
			  "direction": "out",
			  "quantity": {
				"int": "849996458",
				"decimals": 9,
				"float": 0.849996458,
				"numeric": "0.849996458"
			  },
			  "value": 5.6091997692880815,
			  "price": 6.599086050883381,
			  "sender": "0x5da04eb0e28a06798797f54deb17cc014c525370",
			  "recipient": "0xf70f439469028a637e3917ab768e7ce686ba4f7d"
			},
			{
			  "fungible_info": {
				"name": "Juno Moneta",
				"symbol": "Juno",
				"icon": null,
				"flags": {
				  "verified": false
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "0x1bf91b7fbd9c00321060cb461774d6874f7ce600",
					"decimals": 9
				  }
				]
			  },
			  "direction": "out",
			  "quantity": {
				"int": "499997916",
				"decimals": 9,
				"float": 0.499997916,
				"numeric": "0.499997916"
			  },
			  "value": 3.2995292729463603,
			  "price": 6.599086050883381,
			  "sender": "0x5da04eb0e28a06798797f54deb17cc014c525370",
			  "recipient": "0x0000000000000000000000000000000000000000"
			},
			{
			  "fungible_info": {
				"name": "Juno Moneta",
				"symbol": "Juno",
				"icon": null,
				"flags": {
				  "verified": false
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "0x1bf91b7fbd9c00321060cb461774d6874f7ce600",
					"decimals": 9
				  }
				]
			  },
			  "direction": "out",
			  "quantity": {
				"int": "96649597300",
				"decimals": 9,
				"float": 96.6495973,
				"numeric": "96.649597300"
			  },
			  "value": 637.799009365926,
			  "price": 6.599086050883381,
			  "sender": "0x5da04eb0e28a06798797f54deb17cc014c525370",
			  "recipient": "0xed815337cd7a12aaccbaa3c10e283cf39ba5e08d"
			}
		  ],
		  "approvals": [],
		  "application_metadata": {
			"name": "Uniswap",
			"icon": {
			  "url": "https://protocol-icons.s3.amazonaws.com/uniswap_protocol.png"
			},
			"contract_address": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
			"method": {
			  "id": "0x3593564c",
			  "name": "Execute"
			}
		  },
		  "flags": {
			"is_trash": false
		  }
		},
		"relationships": {
		  "chain": {
			"links": {
			  "related": "https://api.zerion.io/v1/chains/ethereum"
			},
			"data": {
			  "type": "chains",
			  "id": "ethereum"
			}
		  }
		}
	  },
	  {
		"type": "transactions",
		"id": "c1ff64fe4aff5bbc914e8554b97c71d9",
		"attributes": {
		  "operation_type": "trade",
		  "hash": "0xeb354d693fd5d33e32c46d7ec668dadd7b55efa4291c71fe1242a59897afa0aa",
		  "mined_at_block": 18885509,
		  "mined_at": "2023-12-28T17:11:47Z",
		  "sent_from": "0x5da04eb0e28a06798797f54deb17cc014c525370",
		  "sent_to": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
		  "status": "confirmed",
		  "nonce": 1318,
		  "fee": {
			"fungible_info": {
			  "name": "Ethereum",
			  "symbol": "ETH",
			  "icon": {
				"url": "https://token-icons.s3.amazonaws.com/eth.png"
			  },
			  "flags": {
				"verified": true
			  },
			  "implementations": [
				{
				  "chain_id": "aurora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "base",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "linea",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zksync-era",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "arbitrum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "scroll",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "ethereum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "optimism",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "polygon-zkevm",
				  "address": "",
				  "decimals": 18
				}
			  ]
			},
			"quantity": {
			  "int": "5003446478925380",
			  "decimals": 18,
			  "float": 0.0050034464789254,
			  "numeric": "0.005003446478925380"
			},
			"price": 2372.0099999999998,
			"value": 11.868225082475837
		  },
		  "transfers": [
			{
			  "fungible_info": {
				"name": "Metroxynth",
				"symbol": "MXH",
				"icon": null,
				"flags": {
				  "verified": false
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "0x95640a134721475bc78594c8ea66c0182c7b9a50",
					"decimals": 9
				  }
				]
			  },
			  "direction": "in",
			  "quantity": {
				"int": "17221243435184",
				"decimals": 9,
				"float": 17221.243435184,
				"numeric": "17221.243435184"
			  },
			  "value": 721.2793746370752,
			  "price": 0.041883118216856495,
			  "sender": "0xd65754e039dba5ff19ccb0c11786d495b6246ae8",
			  "recipient": "0x5da04eb0e28a06798797f54deb17cc014c525370"
			},
			{
			  "fungible_info": {
				"name": "Ethereum",
				"symbol": "ETH",
				"icon": {
				  "url": "https://token-icons.s3.amazonaws.com/eth.png"
				},
				"flags": {
				  "verified": true
				},
				"implementations": [
				  {
					"chain_id": "optimism",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "polygon-zkevm",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "aurora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "ethereum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "arbitrum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "base",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zksync-era",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "linea",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "scroll",
					"address": "",
					"decimals": 18
				  }
				]
			  },
			  "direction": "out",
			  "quantity": {
				"int": "320000000000000000",
				"decimals": 18,
				"float": 0.32,
				"numeric": "0.320000000000000000"
			  },
			  "value": 759.0432,
			  "price": 2372.0099999999998,
			  "sender": "0x5da04eb0e28a06798797f54deb17cc014c525370",
			  "recipient": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad"
			}
		  ],
		  "approvals": [],
		  "application_metadata": {
			"name": "Uniswap",
			"icon": {
			  "url": "https://protocol-icons.s3.amazonaws.com/uniswap_protocol.png"
			},
			"contract_address": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
			"method": {
			  "id": "0x3593564c",
			  "name": "Execute"
			}
		  },
		  "flags": {
			"is_trash": false
		  }
		},
		"relationships": {
		  "chain": {
			"links": {
			  "related": "https://api.zerion.io/v1/chains/ethereum"
			},
			"data": {
			  "type": "chains",
			  "id": "ethereum"
			}
		  }
		}
	  },
	  {
		"type": "transactions",
		"id": "f038ae1bd2755d4f862ad2c0b2a861c0",
		"attributes": {
		  "operation_type": "trade",
		  "hash": "0xcc9231c965dab4a54e2737327a34263b126b877fff12fbc586ac0e74a8cb2453",
		  "mined_at_block": 18885208,
		  "mined_at": "2023-12-28T16:10:35Z",
		  "sent_from": "0x5da04eb0e28a06798797f54deb17cc014c525370",
		  "sent_to": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
		  "status": "confirmed",
		  "nonce": 1317,
		  "fee": {
			"fungible_info": {
			  "name": "Ethereum",
			  "symbol": "ETH",
			  "icon": {
				"url": "https://token-icons.s3.amazonaws.com/eth.png"
			  },
			  "flags": {
				"verified": true
			  },
			  "implementations": [
				{
				  "chain_id": "zksync-era",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "linea",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "aurora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "ethereum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "arbitrum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "optimism",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "scroll",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "base",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "polygon-zkevm",
				  "address": "",
				  "decimals": 18
				}
			  ]
			},
			"quantity": {
			  "int": "11800081453279840",
			  "decimals": 18,
			  "float": 0.0118000814532798,
			  "numeric": "0.011800081453279840"
			},
			"price": 2362.36,
			"value": 27.876040421970067
		  },
		  "transfers": [
			{
			  "fungible_info": {
				"name": "Ethereum",
				"symbol": "ETH",
				"icon": {
				  "url": "https://token-icons.s3.amazonaws.com/eth.png"
				},
				"flags": {
				  "verified": true
				},
				"implementations": [
				  {
					"chain_id": "zora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "arbitrum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "polygon-zkevm",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "ethereum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zksync-era",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "base",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "linea",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "optimism",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "scroll",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "aurora",
					"address": "",
					"decimals": 18
				  }
				]
			  },
			  "direction": "in",
			  "quantity": {
				"int": "788598647397920897",
				"decimals": 18,
				"float": 0.7885986473979208,
				"numeric": "0.788598647397920897"
			  },
			  "value": 1862.9539006669524,
			  "price": 2362.36,
			  "sender": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
			  "recipient": "0x5da04eb0e28a06798797f54deb17cc014c525370"
			},
			{
			  "fungible_info": {
				"name": "Juno Moneta",
				"symbol": "Juno",
				"icon": null,
				"flags": {
				  "verified": false
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "0x1bf91b7fbd9c00321060cb461774d6874f7ce600",
					"decimals": 9
				  }
				]
			  },
			  "direction": "out",
			  "quantity": {
				"int": "518050000",
				"decimals": 9,
				"float": 0.51805,
				"numeric": "0.518050000"
			  },
			  "value": 9.503905206541807,
			  "price": 18.345536543850606,
			  "sender": "0x5da04eb0e28a06798797f54deb17cc014c525370",
			  "recipient": "0x0000000000000000000000000000000000000000"
			},
			{
			  "fungible_info": {
				"name": "Juno Moneta",
				"symbol": "Juno",
				"icon": null,
				"flags": {
				  "verified": false
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "0x1bf91b7fbd9c00321060cb461774d6874f7ce600",
					"decimals": 9
				  }
				]
			  },
			  "direction": "out",
			  "quantity": {
				"int": "100139065000",
				"decimals": 9,
				"float": 100.139065,
				"numeric": "100.139065000"
			  },
			  "value": 1837.1048764245313,
			  "price": 18.345536543850606,
			  "sender": "0x5da04eb0e28a06798797f54deb17cc014c525370",
			  "recipient": "0xed815337cd7a12aaccbaa3c10e283cf39ba5e08d"
			},
			{
			  "fungible_info": {
				"name": "Juno Moneta",
				"symbol": "Juno",
				"icon": null,
				"flags": {
				  "verified": false
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "0x1bf91b7fbd9c00321060cb461774d6874f7ce600",
					"decimals": 9
				  }
				]
			  },
			  "direction": "out",
			  "quantity": {
				"int": "2072200000",
				"decimals": 9,
				"float": 2.0722,
				"numeric": "2.072200000"
			  },
			  "value": 38.01562082616723,
			  "price": 18.345536543850606,
			  "sender": "0x5da04eb0e28a06798797f54deb17cc014c525370",
			  "recipient": "0x1bf91b7fbd9c00321060cb461774d6874f7ce600"
			},
			{
			  "fungible_info": {
				"name": "Juno Moneta",
				"symbol": "Juno",
				"icon": null,
				"flags": {
				  "verified": false
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "0x1bf91b7fbd9c00321060cb461774d6874f7ce600",
					"decimals": 9
				  }
				]
			  },
			  "direction": "out",
			  "quantity": {
				"int": "880685000",
				"decimals": 9,
				"float": 0.880685,
				"numeric": "0.880685000"
			  },
			  "value": 16.156638851121073,
			  "price": 18.345536543850606,
			  "sender": "0x5da04eb0e28a06798797f54deb17cc014c525370",
			  "recipient": "0xf70f439469028a637e3917ab768e7ce686ba4f7d"
			}
		  ],
		  "approvals": [],
		  "application_metadata": {
			"name": "Uniswap",
			"icon": {
			  "url": "https://protocol-icons.s3.amazonaws.com/uniswap_protocol.png"
			},
			"contract_address": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
			"method": {
			  "id": "0x3593564c",
			  "name": "Execute"
			}
		  },
		  "flags": {
			"is_trash": false
		  }
		},
		"relationships": {
		  "chain": {
			"links": {
			  "related": "https://api.zerion.io/v1/chains/ethereum"
			},
			"data": {
			  "type": "chains",
			  "id": "ethereum"
			}
		  }
		}
	  },
	  {
		"type": "transactions",
		"id": "4c2d956501f05986b494e5e39c07b457",
		"attributes": {
		  "operation_type": "trade",
		  "hash": "0xd017fb65def6707ab592b4d63674b5423fd37e4eeb0137f6d07d1e8126271662",
		  "mined_at_block": 18880783,
		  "mined_at": "2023-12-28T01:15:35Z",
		  "sent_from": "0x5da04eb0e28a06798797f54deb17cc014c525370",
		  "sent_to": "0x881d40237659c251811cec9c364ef91dc08d300c",
		  "status": "confirmed",
		  "nonce": 1315,
		  "fee": {
			"fungible_info": {
			  "name": "Ethereum",
			  "symbol": "ETH",
			  "icon": {
				"url": "https://token-icons.s3.amazonaws.com/eth.png"
			  },
			  "flags": {
				"verified": true
			  },
			  "implementations": [
				{
				  "chain_id": "polygon-zkevm",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "ethereum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "base",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "arbitrum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "scroll",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "linea",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zksync-era",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "optimism",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "aurora",
				  "address": "",
				  "decimals": 18
				}
			  ]
			},
			"quantity": {
			  "int": "6444786434509120",
			  "decimals": 18,
			  "float": 0.0064447864345091,
			  "numeric": "0.006444786434509120"
			},
			"price": 2442.17,
			"value": 15.739264086765088
		  },
		  "transfers": [
			{
			  "fungible_info": {
				"name": "Hodless BOT",
				"symbol": "HBOT",
				"icon": null,
				"flags": {
				  "verified": false
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "0xf5aed4f6a1ad00f39dd21febb6f400ea020030c2",
					"decimals": 18
				  }
				]
			  },
			  "direction": "in",
			  "quantity": {
				"int": "16169772489373751472733",
				"decimals": 18,
				"float": 16169.772489373752,
				"numeric": "16169.772489373751472733"
			  },
			  "value": 962.7246437814878,
			  "price": 0.059538539853554465,
			  "sender": "0x74de5d4fcbf63e00296fd95d33236b9794016631",
			  "recipient": "0x5da04eb0e28a06798797f54deb17cc014c525370"
			},
			{
			  "fungible_info": {
				"name": "Tether USD",
				"symbol": "USDT",
				"icon": {
				  "url": "https://token-icons.s3.amazonaws.com/0xdac17f958d2ee523a2206206994597c13d831ec7.png"
				},
				"flags": {
				  "verified": true
				},
				"implementations": [
				  {
					"chain_id": "metis-andromeda",
					"address": "0xbb06dca3ae6887fabf931640f67cab3e3a16f4dc",
					"decimals": 6
				  },
				  {
					"chain_id": "polygon-zkevm",
					"address": "0x1e4a5963abfd975d8c9021ce480b42188849d41d",
					"decimals": 6
				  },
				  {
					"chain_id": "xdai",
					"address": "0x4ecaba5870353805a9f068101a40e0f32ed605c6",
					"decimals": 6
				  },
				  {
					"chain_id": "aurora",
					"address": "0x4988a896b1227218e4a686fde5eabdcabd91571f",
					"decimals": 6
				  },
				  {
					"chain_id": "optimism",
					"address": "0x94b008aa00579c1307b0ef2c499ad98a8ce58e58",
					"decimals": 6
				  },
				  {
					"chain_id": "avalanche",
					"address": "0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7",
					"decimals": 6
				  },
				  {
					"chain_id": "zksync-era",
					"address": "0x493257fd37edb34451f62edf8d2a0c418852ba4c",
					"decimals": 6
				  },
				  {
					"chain_id": "polygon",
					"address": "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
					"decimals": 6
				  },
				  {
					"chain_id": "ethereum",
					"address": "0xdac17f958d2ee523a2206206994597c13d831ec7",
					"decimals": 6
				  },
				  {
					"chain_id": "binance-smart-chain",
					"address": "0x55d398326f99059ff775485246999027b3197955",
					"decimals": 18
				  },
				  {
					"chain_id": "arbitrum",
					"address": "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9",
					"decimals": 6
				  }
				]
			  },
			  "direction": "out",
			  "quantity": {
				"int": "1000000000",
				"decimals": 6,
				"float": 1000,
				"numeric": "1000.000000"
			  },
			  "value": 1001.7696704476496,
			  "price": 1.0017696704476495,
			  "sender": "0x5da04eb0e28a06798797f54deb17cc014c525370",
			  "recipient": "0x74de5d4fcbf63e00296fd95d33236b9794016631"
			}
		  ],
		  "approvals": [],
		  "application_metadata": {
			"name": "MetaMask",
			"icon": {
			  "url": "https://protocol-icons.s3.amazonaws.com/metamask.jpeg"
			},
			"contract_address": "0x881d40237659c251811cec9c364ef91dc08d300c",
			"method": {
			  "id": "0x5f575529",
			  "name": "Swap"
			}
		  },
		  "flags": {
			"is_trash": false
		  }
		},
		"relationships": {
		  "chain": {
			"links": {
			  "related": "https://api.zerion.io/v1/chains/ethereum"
			},
			"data": {
			  "type": "chains",
			  "id": "ethereum"
			}
		  }
		}
	  },
	  {
		"type": "transactions",
		"id": "91fd8ca28a8e5107b3b160ea0b9ef8f2",
		"attributes": {
		  "operation_type": "trade",
		  "hash": "0xc263e7ddf08a21db0dfb92bee12991084aac06a3fb416ec357962db5fb7107e1",
		  "mined_at_block": 18878674,
		  "mined_at": "2023-12-27T18:07:35Z",
		  "sent_from": "0x5da04eb0e28a06798797f54deb17cc014c525370",
		  "sent_to": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
		  "status": "confirmed",
		  "nonce": 1314,
		  "fee": {
			"fungible_info": {
			  "name": "Ethereum",
			  "symbol": "ETH",
			  "icon": {
				"url": "https://token-icons.s3.amazonaws.com/eth.png"
			  },
			  "flags": {
				"verified": true
			  },
			  "implementations": [
				{
				  "chain_id": "optimism",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "scroll",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "linea",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "arbitrum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "polygon-zkevm",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "aurora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "ethereum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zksync-era",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "base",
				  "address": "",
				  "decimals": 18
				}
			  ]
			},
			"quantity": {
			  "int": "12642527562524034",
			  "decimals": 18,
			  "float": 0.012642527562524,
			  "numeric": "0.012642527562524034"
			},
			"price": 2351.21,
			"value": 29.725237230282055
		  },
		  "transfers": [
			{
			  "fungible_info": {
				"name": "Juno Moneta",
				"symbol": "Juno",
				"icon": null,
				"flags": {
				  "verified": false
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "0x1bf91b7fbd9c00321060cb461774d6874f7ce600",
					"decimals": 9
				  }
				]
			  },
			  "direction": "in",
			  "quantity": {
				"int": "201684330132",
				"decimals": 9,
				"float": 201.684330132,
				"numeric": "201.684330132"
			  },
			  "value": 462.8764953571551,
			  "price": 2.2950543309646707,
			  "sender": "0xed815337cd7a12aaccbaa3c10e283cf39ba5e08d",
			  "recipient": "0x5da04eb0e28a06798797f54deb17cc014c525370"
			},
			{
			  "fungible_info": {
				"name": "Ethereum",
				"symbol": "ETH",
				"icon": {
				  "url": "https://token-icons.s3.amazonaws.com/eth.png"
				},
				"flags": {
				  "verified": true
				},
				"implementations": [
				  {
					"chain_id": "optimism",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "base",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "ethereum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "polygon-zkevm",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "aurora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "scroll",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zksync-era",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "arbitrum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "linea",
					"address": "",
					"decimals": 18
				  }
				]
			  },
			  "direction": "out",
			  "quantity": {
				"int": "200000000000000000",
				"decimals": 18,
				"float": 0.2,
				"numeric": "0.200000000000000000"
			  },
			  "value": 470.242,
			  "price": 2351.21,
			  "sender": "0x5da04eb0e28a06798797f54deb17cc014c525370",
			  "recipient": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad"
			}
		  ],
		  "approvals": [],
		  "application_metadata": {
			"name": "Uniswap",
			"icon": {
			  "url": "https://protocol-icons.s3.amazonaws.com/uniswap_protocol.png"
			},
			"contract_address": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
			"method": {
			  "id": "0x3593564c",
			  "name": "Execute"
			}
		  },
		  "flags": {
			"is_trash": false
		  }
		},
		"relationships": {
		  "chain": {
			"links": {
			  "related": "https://api.zerion.io/v1/chains/ethereum"
			},
			"data": {
			  "type": "chains",
			  "id": "ethereum"
			}
		  }
		}
	  },
	  {
		"type": "transactions",
		"id": "bafa7600b357552385d5ead301501379",
		"attributes": {
		  "operation_type": "trade",
		  "hash": "0xc44fee46fc73850c47d040e28cf9e895801f005f7b0566f22d8eb2aaf10c6bb4",
		  "mined_at_block": 18876869,
		  "mined_at": "2023-12-27T12:02:35Z",
		  "sent_from": "0x5da04eb0e28a06798797f54deb17cc014c525370",
		  "sent_to": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
		  "status": "confirmed",
		  "nonce": 1313,
		  "fee": {
			"fungible_info": {
			  "name": "Ethereum",
			  "symbol": "ETH",
			  "icon": {
				"url": "https://token-icons.s3.amazonaws.com/eth.png"
			  },
			  "flags": {
				"verified": true
			  },
			  "implementations": [
				{
				  "chain_id": "aurora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "arbitrum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zksync-era",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "polygon-zkevm",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "scroll",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "base",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "linea",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "optimism",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "ethereum",
				  "address": "",
				  "decimals": 18
				}
			  ]
			},
			"quantity": {
			  "int": "4651941619351894",
			  "decimals": 18,
			  "float": 0.0046519416193519,
			  "numeric": "0.004651941619351894"
			},
			"price": 2284.16,
			"value": 10.625778969258835
		  },
		  "transfers": [
			{
			  "fungible_info": {
				"name": "Micro AI",
				"symbol": "MAI",
				"icon": null,
				"flags": {
				  "verified": false
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "0x24d73bca2bd9c3a61e99dfc7cb86d3c379ebded7",
					"decimals": 18
				  }
				]
			  },
			  "direction": "in",
			  "quantity": {
				"int": "1999000000000000000000",
				"decimals": 18,
				"float": 1999,
				"numeric": "1999.000000000000000000"
			  },
			  "value": 2855.772930077093,
			  "price": 1.4286007654212571,
			  "sender": "0xc52a18e7358b1c618bd8f0e784b35636775afb4e",
			  "recipient": "0x5da04eb0e28a06798797f54deb17cc014c525370"
			},
			{
			  "fungible_info": {
				"name": "Tether USD",
				"symbol": "USDT",
				"icon": {
				  "url": "https://token-icons.s3.amazonaws.com/0xdac17f958d2ee523a2206206994597c13d831ec7.png"
				},
				"flags": {
				  "verified": true
				},
				"implementations": [
				  {
					"chain_id": "zksync-era",
					"address": "0x493257fd37edb34451f62edf8d2a0c418852ba4c",
					"decimals": 6
				  },
				  {
					"chain_id": "polygon",
					"address": "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
					"decimals": 6
				  },
				  {
					"chain_id": "avalanche",
					"address": "0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7",
					"decimals": 6
				  },
				  {
					"chain_id": "metis-andromeda",
					"address": "0xbb06dca3ae6887fabf931640f67cab3e3a16f4dc",
					"decimals": 6
				  },
				  {
					"chain_id": "xdai",
					"address": "0x4ecaba5870353805a9f068101a40e0f32ed605c6",
					"decimals": 6
				  },
				  {
					"chain_id": "binance-smart-chain",
					"address": "0x55d398326f99059ff775485246999027b3197955",
					"decimals": 18
				  },
				  {
					"chain_id": "aurora",
					"address": "0x4988a896b1227218e4a686fde5eabdcabd91571f",
					"decimals": 6
				  },
				  {
					"chain_id": "optimism",
					"address": "0x94b008aa00579c1307b0ef2c499ad98a8ce58e58",
					"decimals": 6
				  },
				  {
					"chain_id": "arbitrum",
					"address": "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9",
					"decimals": 6
				  },
				  {
					"chain_id": "polygon-zkevm",
					"address": "0x1e4a5963abfd975d8c9021ce480b42188849d41d",
					"decimals": 6
				  },
				  {
					"chain_id": "ethereum",
					"address": "0xdac17f958d2ee523a2206206994597c13d831ec7",
					"decimals": 6
				  }
				]
			  },
			  "direction": "out",
			  "quantity": {
				"int": "2847334727",
				"decimals": 6,
				"float": 2847.334727,
				"numeric": "2847.334727"
			  },
			  "value": 2846.785294015849,
			  "price": 0.999807036040076,
			  "sender": "0x5da04eb0e28a06798797f54deb17cc014c525370",
			  "recipient": "0x11b815efb8f581194ae79006d24e0d814b7697f6"
			}
		  ],
		  "approvals": [],
		  "application_metadata": {
			"name": "Uniswap",
			"icon": {
			  "url": "https://protocol-icons.s3.amazonaws.com/uniswap_protocol.png"
			},
			"contract_address": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
			"method": {
			  "id": "0x3593564c",
			  "name": "Execute"
			}
		  },
		  "flags": {
			"is_trash": false
		  }
		},
		"relationships": {
		  "chain": {
			"links": {
			  "related": "https://api.zerion.io/v1/chains/ethereum"
			},
			"data": {
			  "type": "chains",
			  "id": "ethereum"
			}
		  }
		}
	  },
	  {
		"type": "transactions",
		"id": "d068e02060195243adf6bb56f59bc974",
		"attributes": {
		  "operation_type": "trade",
		  "hash": "0xea091c1de392403fcc0d233d239924047e79d454d3c74cebb4e3f381b71465a5",
		  "mined_at_block": 18872454,
		  "mined_at": "2023-12-26T21:10:23Z",
		  "sent_from": "0x5da04eb0e28a06798797f54deb17cc014c525370",
		  "sent_to": "0x881d40237659c251811cec9c364ef91dc08d300c",
		  "status": "confirmed",
		  "nonce": 1312,
		  "fee": {
			"fungible_info": {
			  "name": "Ethereum",
			  "symbol": "ETH",
			  "icon": {
				"url": "https://token-icons.s3.amazonaws.com/eth.png"
			  },
			  "flags": {
				"verified": true
			  },
			  "implementations": [
				{
				  "chain_id": "zora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "linea",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "optimism",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "arbitrum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "polygon-zkevm",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "scroll",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "aurora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zksync-era",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "ethereum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "base",
				  "address": "",
				  "decimals": 18
				}
			  ]
			},
			"quantity": {
			  "int": "4346735092430325",
			  "decimals": 18,
			  "float": 0.0043467350924303,
			  "numeric": "0.004346735092430325"
			},
			"price": 2217.81,
			"value": 9.640232555342845
		  },
		  "transfers": [
			{
			  "fungible_info": {
				"name": "Hodless BOT",
				"symbol": "HBOT",
				"icon": null,
				"flags": {
				  "verified": false
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "0xf5aed4f6a1ad00f39dd21febb6f400ea020030c2",
					"decimals": 18
				  }
				]
			  },
			  "direction": "in",
			  "quantity": {
				"int": "23896902311735648903768",
				"decimals": 18,
				"float": 23896.90231173565,
				"numeric": "23896.902311735648903768"
			  },
			  "value": 1291.183810784737,
			  "price": 0.05403143026410763,
			  "sender": "0x74de5d4fcbf63e00296fd95d33236b9794016631",
			  "recipient": "0x5da04eb0e28a06798797f54deb17cc014c525370"
			},
			{
			  "fungible_info": {
				"name": "Ethereum",
				"symbol": "ETH",
				"icon": {
				  "url": "https://token-icons.s3.amazonaws.com/eth.png"
				},
				"flags": {
				  "verified": true
				},
				"implementations": [
				  {
					"chain_id": "linea",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "polygon-zkevm",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "scroll",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "base",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "ethereum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zksync-era",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "optimism",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "arbitrum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "aurora",
					"address": "",
					"decimals": 18
				  }
				]
			  },
			  "direction": "out",
			  "quantity": {
				"int": "600000000000000000",
				"decimals": 18,
				"float": 0.6,
				"numeric": "0.600000000000000000"
			  },
			  "value": 1330.686,
			  "price": 2217.81,
			  "sender": "0x5da04eb0e28a06798797f54deb17cc014c525370",
			  "recipient": "0x881d40237659c251811cec9c364ef91dc08d300c"
			}
		  ],
		  "approvals": [],
		  "application_metadata": {
			"name": "MetaMask",
			"icon": {
			  "url": "https://protocol-icons.s3.amazonaws.com/metamask.jpeg"
			},
			"contract_address": "0x881d40237659c251811cec9c364ef91dc08d300c",
			"method": {
			  "id": "0x5f575529",
			  "name": "Swap"
			}
		  },
		  "flags": {
			"is_trash": false
		  }
		},
		"relationships": {
		  "chain": {
			"links": {
			  "related": "https://api.zerion.io/v1/chains/ethereum"
			},
			"data": {
			  "type": "chains",
			  "id": "ethereum"
			}
		  }
		}
	  },
	  {
		"type": "transactions",
		"id": "09227eb4f86e5a5a8234fc29d66d5eed",
		"attributes": {
		  "operation_type": "trade",
		  "hash": "0x22b55d20adabd3dcffc33a13cb7b780c0413684e3d0f4d07ef91890c846beb76",
		  "mined_at_block": 18848331,
		  "mined_at": "2023-12-23T11:51:11Z",
		  "sent_from": "0x5da04eb0e28a06798797f54deb17cc014c525370",
		  "sent_to": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
		  "status": "confirmed",
		  "nonce": 1309,
		  "fee": {
			"fungible_info": {
			  "name": "Ethereum",
			  "symbol": "ETH",
			  "icon": {
				"url": "https://token-icons.s3.amazonaws.com/eth.png"
			  },
			  "flags": {
				"verified": true
			  },
			  "implementations": [
				{
				  "chain_id": "ethereum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "scroll",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "base",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "optimism",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zksync-era",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "linea",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "polygon-zkevm",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "arbitrum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "aurora",
				  "address": "",
				  "decimals": 18
				}
			  ]
			},
			"quantity": {
			  "int": "3566623369811696",
			  "decimals": 18,
			  "float": 0.0035666233698117,
			  "numeric": "0.003566623369811696"
			},
			"price": 2289.62,
			"value": 8.166212199988264
		  },
		  "transfers": [
			{
			  "fungible_info": {
				"name": "Metroxynth",
				"symbol": "MXH",
				"icon": null,
				"flags": {
				  "verified": false
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "0x95640a134721475bc78594c8ea66c0182c7b9a50",
					"decimals": 9
				  }
				]
			  },
			  "direction": "in",
			  "quantity": {
				"int": "33425761732493",
				"decimals": 9,
				"float": 33425.761732493,
				"numeric": "33425.761732493"
			  },
			  "value": 2625.821103808277,
			  "price": 0.07855680671760817,
			  "sender": "0xd65754e039dba5ff19ccb0c11786d495b6246ae8",
			  "recipient": "0x5da04eb0e28a06798797f54deb17cc014c525370"
			},
			{
			  "fungible_info": {
				"name": "Ethereum",
				"symbol": "ETH",
				"icon": {
				  "url": "https://token-icons.s3.amazonaws.com/eth.png"
				},
				"flags": {
				  "verified": true
				},
				"implementations": [
				  {
					"chain_id": "aurora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "ethereum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zksync-era",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "arbitrum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "linea",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "scroll",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "base",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "polygon-zkevm",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "optimism",
					"address": "",
					"decimals": 18
				  }
				]
			  },
			  "direction": "out",
			  "quantity": {
				"int": "1200000000000000000",
				"decimals": 18,
				"float": 1.2,
				"numeric": "1.200000000000000000"
			  },
			  "value": 2747.544,
			  "price": 2289.62,
			  "sender": "0x5da04eb0e28a06798797f54deb17cc014c525370",
			  "recipient": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad"
			}
		  ],
		  "approvals": [],
		  "application_metadata": {
			"name": "Uniswap",
			"icon": {
			  "url": "https://protocol-icons.s3.amazonaws.com/uniswap_protocol.png"
			},
			"contract_address": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
			"method": {
			  "id": "0x3593564c",
			  "name": "Execute"
			}
		  },
		  "flags": {
			"is_trash": false
		  }
		},
		"relationships": {
		  "chain": {
			"links": {
			  "related": "https://api.zerion.io/v1/chains/ethereum"
			},
			"data": {
			  "type": "chains",
			  "id": "ethereum"
			}
		  }
		}
	  },
	  {
		"type": "transactions",
		"id": "20040842bdf352878ea659b1d480425d",
		"attributes": {
		  "operation_type": "trade",
		  "hash": "0x9b4b2ddebbf8e1e175b793118504fb9956f42fd977a75f24b99d7c483fdddb35",
		  "mined_at_block": 18848328,
		  "mined_at": "2023-12-23T11:50:35Z",
		  "sent_from": "0x5da04eb0e28a06798797f54deb17cc014c525370",
		  "sent_to": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
		  "status": "confirmed",
		  "nonce": 1308,
		  "fee": {
			"fungible_info": {
			  "name": "Ethereum",
			  "symbol": "ETH",
			  "icon": {
				"url": "https://token-icons.s3.amazonaws.com/eth.png"
			  },
			  "flags": {
				"verified": true
			  },
			  "implementations": [
				{
				  "chain_id": "zksync-era",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "base",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "aurora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "optimism",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "polygon-zkevm",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "ethereum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "arbitrum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "linea",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "scroll",
				  "address": "",
				  "decimals": 18
				}
			  ]
			},
			"quantity": {
			  "int": "3386304215593166",
			  "decimals": 18,
			  "float": 0.0033863042155932,
			  "numeric": "0.003386304215593166"
			},
			"price": 2290.85,
			"value": 7.757515012291682
		  },
		  "transfers": [
			{
			  "fungible_info": {
				"name": "Ethereum",
				"symbol": "ETH",
				"icon": {
				  "url": "https://token-icons.s3.amazonaws.com/eth.png"
				},
				"flags": {
				  "verified": true
				},
				"implementations": [
				  {
					"chain_id": "scroll",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "ethereum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "linea",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zksync-era",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "base",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "optimism",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "arbitrum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "aurora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "polygon-zkevm",
					"address": "",
					"decimals": 18
				  }
				]
			  },
			  "direction": "in",
			  "quantity": {
				"int": "2072904516211430701",
				"decimals": 18,
				"float": 2.072904516211431,
				"numeric": "2.072904516211430701"
			  },
			  "value": 4748.713310962956,
			  "price": 2290.85,
			  "sender": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
			  "recipient": "0x5da04eb0e28a06798797f54deb17cc014c525370"
			},
			{
			  "fungible_info": {
				"name": "Autonolas from Mainnet",
				"symbol": "OLAS",
				"icon": {
				  "url": "https://token-icons.s3.amazonaws.com/0x0001a500a6b18995b03f44bb040a5ffc28e45cb0.png"
				},
				"flags": {
				  "verified": false
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "0x0001a500a6b18995b03f44bb040a5ffc28e45cb0",
					"decimals": 18
				  },
				  {
					"chain_id": "polygon",
					"address": "0xfef5d947472e72efbb2e388c730b7428406f2f95",
					"decimals": 18
				  },
				  {
					"chain_id": "xdai",
					"address": "0xce11e14225575945b8e6dc0d4f2dd4c570f79d9f",
					"decimals": 18
				  }
				]
			  },
			  "direction": "out",
			  "quantity": {
				"int": "1000000000000000000000",
				"decimals": 18,
				"float": 1000,
				"numeric": "1000.000000000000000000"
			  },
			  "value": 4812.877968714168,
			  "price": 4.812877968714168,
			  "sender": "0x5da04eb0e28a06798797f54deb17cc014c525370",
			  "recipient": "0x09d1d767edf8fa23a64c51fa559e0688e526812f"
			}
		  ],
		  "approvals": [],
		  "application_metadata": {
			"name": "Uniswap",
			"icon": {
			  "url": "https://protocol-icons.s3.amazonaws.com/uniswap_protocol.png"
			},
			"contract_address": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
			"method": {
			  "id": "0x3593564c",
			  "name": "Execute"
			}
		  },
		  "flags": {
			"is_trash": false
		  }
		},
		"relationships": {
		  "chain": {
			"links": {
			  "related": "https://api.zerion.io/v1/chains/ethereum"
			},
			"data": {
			  "type": "chains",
			  "id": "ethereum"
			}
		  }
		}
	  },
	  {
		"type": "transactions",
		"id": "46f8d545418e5754b97dde1b9de946d1",
		"attributes": {
		  "operation_type": "trade",
		  "hash": "0x94c48bf4d19b4361cfc56e90a551495397fa2e8c894a5e0c909ad9aa87ccb9cb",
		  "mined_at_block": 18847540,
		  "mined_at": "2023-12-23T09:12:11Z",
		  "sent_from": "0x5da04eb0e28a06798797f54deb17cc014c525370",
		  "sent_to": "0x881d40237659c251811cec9c364ef91dc08d300c",
		  "status": "confirmed",
		  "nonce": 1303,
		  "fee": {
			"fungible_info": {
			  "name": "Ethereum",
			  "symbol": "ETH",
			  "icon": {
				"url": "https://token-icons.s3.amazonaws.com/eth.png"
			  },
			  "flags": {
				"verified": true
			  },
			  "implementations": [
				{
				  "chain_id": "optimism",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "polygon-zkevm",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "base",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "linea",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zksync-era",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "aurora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "arbitrum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "scroll",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "ethereum",
				  "address": "",
				  "decimals": 18
				}
			  ]
			},
			"quantity": {
			  "int": "3628338022460466",
			  "decimals": 18,
			  "float": 0.0036283380224605,
			  "numeric": "0.003628338022460466"
			},
			"price": 2291.04,
			"value": 8.312667542977904
		  },
		  "transfers": [
			{
			  "fungible_info": {
				"name": "Ethereum",
				"symbol": "ETH",
				"icon": {
				  "url": "https://token-icons.s3.amazonaws.com/eth.png"
				},
				"flags": {
				  "verified": true
				},
				"implementations": [
				  {
					"chain_id": "zora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "linea",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zksync-era",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "aurora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "polygon-zkevm",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "base",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "arbitrum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "ethereum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "optimism",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "scroll",
					"address": "",
					"decimals": 18
				  }
				]
			  },
			  "direction": "in",
			  "quantity": {
				"int": "563318280439841971",
				"decimals": 18,
				"float": 0.563318280439842,
				"numeric": "0.563318280439841971"
			  },
			  "value": 1290.5847132188956,
			  "price": 2291.04,
			  "sender": "0x74de5d4fcbf63e00296fd95d33236b9794016631",
			  "recipient": "0x5da04eb0e28a06798797f54deb17cc014c525370"
			},
			{
			  "fungible_info": {
				"name": "Tether USD",
				"symbol": "USDT",
				"icon": {
				  "url": "https://token-icons.s3.amazonaws.com/0xdac17f958d2ee523a2206206994597c13d831ec7.png"
				},
				"flags": {
				  "verified": true
				},
				"implementations": [
				  {
					"chain_id": "avalanche",
					"address": "0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7",
					"decimals": 6
				  },
				  {
					"chain_id": "xdai",
					"address": "0x4ecaba5870353805a9f068101a40e0f32ed605c6",
					"decimals": 6
				  },
				  {
					"chain_id": "aurora",
					"address": "0x4988a896b1227218e4a686fde5eabdcabd91571f",
					"decimals": 6
				  },
				  {
					"chain_id": "arbitrum",
					"address": "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9",
					"decimals": 6
				  },
				  {
					"chain_id": "binance-smart-chain",
					"address": "0x55d398326f99059ff775485246999027b3197955",
					"decimals": 18
				  },
				  {
					"chain_id": "zksync-era",
					"address": "0x493257fd37edb34451f62edf8d2a0c418852ba4c",
					"decimals": 6
				  },
				  {
					"chain_id": "ethereum",
					"address": "0xdac17f958d2ee523a2206206994597c13d831ec7",
					"decimals": 6
				  },
				  {
					"chain_id": "polygon-zkevm",
					"address": "0x1e4a5963abfd975d8c9021ce480b42188849d41d",
					"decimals": 6
				  },
				  {
					"chain_id": "metis-andromeda",
					"address": "0xbb06dca3ae6887fabf931640f67cab3e3a16f4dc",
					"decimals": 6
				  },
				  {
					"chain_id": "optimism",
					"address": "0x94b008aa00579c1307b0ef2c499ad98a8ce58e58",
					"decimals": 6
				  },
				  {
					"chain_id": "polygon",
					"address": "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
					"decimals": 6
				  }
				]
			  },
			  "direction": "out",
			  "quantity": {
				"int": "1300970297",
				"decimals": 6,
				"float": 1300.970297,
				"numeric": "1300.970297"
			  },
			  "value": 1302.3652644423544,
			  "price": 1.0010722515691335,
			  "sender": "0x5da04eb0e28a06798797f54deb17cc014c525370",
			  "recipient": "0x74de5d4fcbf63e00296fd95d33236b9794016631"
			}
		  ],
		  "approvals": [],
		  "application_metadata": {
			"name": "MetaMask",
			"icon": {
			  "url": "https://protocol-icons.s3.amazonaws.com/metamask.jpeg"
			},
			"contract_address": "0x881d40237659c251811cec9c364ef91dc08d300c",
			"method": {
			  "id": "0x5f575529",
			  "name": "Swap"
			}
		  },
		  "flags": {
			"is_trash": false
		  }
		},
		"relationships": {
		  "chain": {
			"links": {
			  "related": "https://api.zerion.io/v1/chains/ethereum"
			},
			"data": {
			  "type": "chains",
			  "id": "ethereum"
			}
		  }
		}
	  },
	  {
		"type": "transactions",
		"id": "ad1750e2aa56556288078d8c33e28411",
		"attributes": {
		  "operation_type": "trade",
		  "hash": "0x07758962a4d75b2c38beb78cb15d13b668650166d3dc8cdd9cd50898c9af5cd6",
		  "mined_at_block": 18843732,
		  "mined_at": "2023-12-22T20:22:11Z",
		  "sent_from": "0x5da04eb0e28a06798797f54deb17cc014c525370",
		  "sent_to": "0x881d40237659c251811cec9c364ef91dc08d300c",
		  "status": "confirmed",
		  "nonce": 1302,
		  "fee": {
			"fungible_info": {
			  "name": "Ethereum",
			  "symbol": "ETH",
			  "icon": {
				"url": "https://token-icons.s3.amazonaws.com/eth.png"
			  },
			  "flags": {
				"verified": true
			  },
			  "implementations": [
				{
				  "chain_id": "arbitrum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zksync-era",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "scroll",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "base",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "linea",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "optimism",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "polygon-zkevm",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "ethereum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "aurora",
				  "address": "",
				  "decimals": 18
				}
			  ]
			},
			"quantity": {
			  "int": "9431971141639486",
			  "decimals": 18,
			  "float": 0.0094319711416395,
			  "numeric": "0.009431971141639486"
			},
			"price": 2317.25,
			"value": 21.85623512796413
		  },
		  "transfers": [
			{
			  "fungible_info": {
				"name": "AIT Protocol",
				"symbol": "AIT",
				"icon": null,
				"flags": {
				  "verified": false
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "0x89d584a1edb3a70b3b07963f9a3ea5399e38b136",
					"decimals": 18
				  }
				]
			  },
			  "direction": "in",
			  "quantity": {
				"int": "27235813074506347446879",
				"decimals": 18,
				"float": 27235.813074506346,
				"numeric": "27235.813074506347446879"
			  },
			  "value": 3822.130746585335,
			  "price": 0.14033474000315344,
			  "sender": "0x74de5d4fcbf63e00296fd95d33236b9794016631",
			  "recipient": "0x5da04eb0e28a06798797f54deb17cc014c525370"
			},
			{
			  "fungible_info": {
				"name": "Tether USD",
				"symbol": "USDT",
				"icon": {
				  "url": "https://token-icons.s3.amazonaws.com/0xdac17f958d2ee523a2206206994597c13d831ec7.png"
				},
				"flags": {
				  "verified": true
				},
				"implementations": [
				  {
					"chain_id": "xdai",
					"address": "0x4ecaba5870353805a9f068101a40e0f32ed605c6",
					"decimals": 6
				  },
				  {
					"chain_id": "ethereum",
					"address": "0xdac17f958d2ee523a2206206994597c13d831ec7",
					"decimals": 6
				  },
				  {
					"chain_id": "optimism",
					"address": "0x94b008aa00579c1307b0ef2c499ad98a8ce58e58",
					"decimals": 6
				  },
				  {
					"chain_id": "polygon",
					"address": "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
					"decimals": 6
				  },
				  {
					"chain_id": "metis-andromeda",
					"address": "0xbb06dca3ae6887fabf931640f67cab3e3a16f4dc",
					"decimals": 6
				  },
				  {
					"chain_id": "polygon-zkevm",
					"address": "0x1e4a5963abfd975d8c9021ce480b42188849d41d",
					"decimals": 6
				  },
				  {
					"chain_id": "arbitrum",
					"address": "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9",
					"decimals": 6
				  },
				  {
					"chain_id": "avalanche",
					"address": "0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7",
					"decimals": 6
				  },
				  {
					"chain_id": "zksync-era",
					"address": "0x493257fd37edb34451f62edf8d2a0c418852ba4c",
					"decimals": 6
				  },
				  {
					"chain_id": "binance-smart-chain",
					"address": "0x55d398326f99059ff775485246999027b3197955",
					"decimals": 18
				  },
				  {
					"chain_id": "aurora",
					"address": "0x4988a896b1227218e4a686fde5eabdcabd91571f",
					"decimals": 6
				  }
				]
			  },
			  "direction": "out",
			  "quantity": {
				"int": "4000000000",
				"decimals": 6,
				"float": 4000,
				"numeric": "4000.000000"
			  },
			  "value": 4005.3558235051437,
			  "price": 1.001338955876286,
			  "sender": "0x5da04eb0e28a06798797f54deb17cc014c525370",
			  "recipient": "0x74de5d4fcbf63e00296fd95d33236b9794016631"
			}
		  ],
		  "approvals": [],
		  "application_metadata": {
			"name": "MetaMask",
			"icon": {
			  "url": "https://protocol-icons.s3.amazonaws.com/metamask.jpeg"
			},
			"contract_address": "0x881d40237659c251811cec9c364ef91dc08d300c",
			"method": {
			  "id": "0x5f575529",
			  "name": "Swap"
			}
		  },
		  "flags": {
			"is_trash": false
		  }
		},
		"relationships": {
		  "chain": {
			"links": {
			  "related": "https://api.zerion.io/v1/chains/ethereum"
			},
			"data": {
			  "type": "chains",
			  "id": "ethereum"
			}
		  }
		}
	  },
	  {
		"type": "transactions",
		"id": "368e326b597e59408656ac4787ce1ea7",
		"attributes": {
		  "operation_type": "trade",
		  "hash": "0x96c142e1f4a48bc8891a71535b7889e9c2b3b3849850bcfdd389dbb07cb68e47",
		  "mined_at_block": 18843727,
		  "mined_at": "2023-12-22T20:21:11Z",
		  "sent_from": "0x5da04eb0e28a06798797f54deb17cc014c525370",
		  "sent_to": "0x881d40237659c251811cec9c364ef91dc08d300c",
		  "status": "confirmed",
		  "nonce": 1301,
		  "fee": {
			"fungible_info": {
			  "name": "Ethereum",
			  "symbol": "ETH",
			  "icon": {
				"url": "https://token-icons.s3.amazonaws.com/eth.png"
			  },
			  "flags": {
				"verified": true
			  },
			  "implementations": [
				{
				  "chain_id": "arbitrum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "base",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "polygon-zkevm",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "linea",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "scroll",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "aurora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "ethereum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zksync-era",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "optimism",
				  "address": "",
				  "decimals": 18
				}
			  ]
			},
			"quantity": {
			  "int": "8041973921927624",
			  "decimals": 18,
			  "float": 0.0080419739219276,
			  "numeric": "0.008041973921927624"
			},
			"price": 2317.37,
			"value": 18.63622910745736
		  },
		  "transfers": [
			{
			  "fungible_info": {
				"name": "AIT Protocol",
				"symbol": "AIT",
				"icon": null,
				"flags": {
				  "verified": false
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "0x89d584a1edb3a70b3b07963f9a3ea5399e38b136",
					"decimals": 18
				  }
				]
			  },
			  "direction": "in",
			  "quantity": {
				"int": "22341307820662277941004",
				"decimals": 18,
				"float": 22341.307820662278,
				"numeric": "22341.307820662277941004"
			  },
			  "value": 3094.1194801315896,
			  "price": 0.13849321198958658,
			  "sender": "0x74de5d4fcbf63e00296fd95d33236b9794016631",
			  "recipient": "0x5da04eb0e28a06798797f54deb17cc014c525370"
			},
			{
			  "fungible_info": {
				"name": "Ethereum",
				"symbol": "ETH",
				"icon": {
				  "url": "https://token-icons.s3.amazonaws.com/eth.png"
				},
				"flags": {
				  "verified": true
				},
				"implementations": [
				  {
					"chain_id": "zksync-era",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "linea",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "polygon-zkevm",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "ethereum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "optimism",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "aurora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "base",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "arbitrum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "scroll",
					"address": "",
					"decimals": 18
				  }
				]
			  },
			  "direction": "out",
			  "quantity": {
				"int": "1400000000000000000",
				"decimals": 18,
				"float": 1.4,
				"numeric": "1.400000000000000000"
			  },
			  "value": 3244.3179999999998,
			  "price": 2317.37,
			  "sender": "0x5da04eb0e28a06798797f54deb17cc014c525370",
			  "recipient": "0x881d40237659c251811cec9c364ef91dc08d300c"
			}
		  ],
		  "approvals": [],
		  "application_metadata": {
			"name": "MetaMask",
			"icon": {
			  "url": "https://protocol-icons.s3.amazonaws.com/metamask.jpeg"
			},
			"contract_address": "0x881d40237659c251811cec9c364ef91dc08d300c",
			"method": {
			  "id": "0x5f575529",
			  "name": "Swap"
			}
		  },
		  "flags": {
			"is_trash": false
		  }
		},
		"relationships": {
		  "chain": {
			"links": {
			  "related": "https://api.zerion.io/v1/chains/ethereum"
			},
			"data": {
			  "type": "chains",
			  "id": "ethereum"
			}
		  }
		}
	  },
	  {
		"type": "transactions",
		"id": "795bd55d449557a89820065c29db3b04",
		"attributes": {
		  "operation_type": "trade",
		  "hash": "0xabde38ec0b09f8f97820e8fd3bd34b4f84c3a6027d3f91cd517b0e8777e1db7d",
		  "mined_at_block": 18843723,
		  "mined_at": "2023-12-22T20:20:23Z",
		  "sent_from": "0x5da04eb0e28a06798797f54deb17cc014c525370",
		  "sent_to": "0x881d40237659c251811cec9c364ef91dc08d300c",
		  "status": "confirmed",
		  "nonce": 1300,
		  "fee": {
			"fungible_info": {
			  "name": "Ethereum",
			  "symbol": "ETH",
			  "icon": {
				"url": "https://token-icons.s3.amazonaws.com/eth.png"
			  },
			  "flags": {
				"verified": true
			  },
			  "implementations": [
				{
				  "chain_id": "linea",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "optimism",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "ethereum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "polygon-zkevm",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "scroll",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "base",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "arbitrum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zksync-era",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "aurora",
				  "address": "",
				  "decimals": 18
				}
			  ]
			},
			"quantity": {
			  "int": "13948358860164945",
			  "decimals": 18,
			  "float": 0.0139483588601649,
			  "numeric": "0.013948358860164945"
			},
			"price": 2317.1,
			"value": 32.31974231488809
		  },
		  "transfers": [
			{
			  "fungible_info": {
				"name": "Ethereum",
				"symbol": "ETH",
				"icon": {
				  "url": "https://token-icons.s3.amazonaws.com/eth.png"
				},
				"flags": {
				  "verified": true
				},
				"implementations": [
				  {
					"chain_id": "arbitrum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "scroll",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "aurora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "base",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "linea",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "polygon-zkevm",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zksync-era",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "optimism",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "ethereum",
					"address": "",
					"decimals": 18
				  }
				]
			  },
			  "direction": "in",
			  "quantity": {
				"int": "1218481589903994627",
				"decimals": 18,
				"float": 1.2184815899039947,
				"numeric": "1.218481589903994627"
			  },
			  "value": 2823.343691966546,
			  "price": 2317.1,
			  "sender": "0x74de5d4fcbf63e00296fd95d33236b9794016631",
			  "recipient": "0x5da04eb0e28a06798797f54deb17cc014c525370"
			},
			{
			  "fungible_info": {
				"name": "Schrodinger",
				"symbol": "Meow",
				"icon": null,
				"flags": {
				  "verified": false
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "0x74d2d73b455540b037298c0e0925bc702aedbe4a",
					"decimals": 9
				  }
				]
			  },
			  "direction": "out",
			  "quantity": {
				"int": "4142511995045887333",
				"decimals": 9,
				"float": 4142511995.0458875,
				"numeric": "4142511995.045887333"
			  },
			  "value": 2823.343049396434,
			  "price": 6.815533793922446e-7,
			  "sender": "0x5da04eb0e28a06798797f54deb17cc014c525370",
			  "recipient": "0x74de5d4fcbf63e00296fd95d33236b9794016631"
			}
		  ],
		  "approvals": [
			{
			  "fungible_info": {
				"name": "Schrodinger",
				"symbol": "Meow",
				"icon": null,
				"flags": {
				  "verified": false
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "0x74d2d73b455540b037298c0e0925bc702aedbe4a",
					"decimals": 9
				  }
				]
			  },
			  "quantity": {
				"int": "115792089237316195423570985008687907853269984665640564039453441495918083752602",
				"decimals": 9,
				"float": 1.157920892373162e+68,
				"numeric": "115792089237316195423570985008687907853269984665640564039453441495918.083752602"
			  },
			  "sender": "0x881d40237659c251811cec9c364ef91dc08d300c"
			}
		  ],
		  "application_metadata": {
			"name": "MetaMask",
			"icon": {
			  "url": "https://protocol-icons.s3.amazonaws.com/metamask.jpeg"
			},
			"contract_address": "0x881d40237659c251811cec9c364ef91dc08d300c",
			"method": {
			  "id": "0x5f575529",
			  "name": "Swap"
			}
		  },
		  "flags": {
			"is_trash": false
		  }
		},
		"relationships": {
		  "chain": {
			"links": {
			  "related": "https://api.zerion.io/v1/chains/ethereum"
			},
			"data": {
			  "type": "chains",
			  "id": "ethereum"
			}
		  }
		}
	  },
	  {
		"type": "transactions",
		"id": "dd863161a692528cac4cfbf2542c2350",
		"attributes": {
		  "operation_type": "trade",
		  "hash": "0xfb4727f44ca253fa660e39108c6fdcf20d4d16b166a615cadd8075f10892f043",
		  "mined_at_block": 18842026,
		  "mined_at": "2023-12-22T14:37:35Z",
		  "sent_from": "0x5da04eb0e28a06798797f54deb17cc014c525370",
		  "sent_to": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
		  "status": "confirmed",
		  "nonce": 1298,
		  "fee": {
			"fungible_info": {
			  "name": "Ethereum",
			  "symbol": "ETH",
			  "icon": {
				"url": "https://token-icons.s3.amazonaws.com/eth.png"
			  },
			  "flags": {
				"verified": true
			  },
			  "implementations": [
				{
				  "chain_id": "zora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "linea",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "base",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "optimism",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "aurora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "ethereum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "polygon-zkevm",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "scroll",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "arbitrum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zksync-era",
				  "address": "",
				  "decimals": 18
				}
			  ]
			},
			"quantity": {
			  "int": "5707827407951640",
			  "decimals": 18,
			  "float": 0.0057078274079516,
			  "numeric": "0.005707827407951640"
			},
			"price": 2305.48,
			"value": 13.159281932484255
		  },
		  "transfers": [
			{
			  "fungible_info": {
				"name": "AIT Protocol",
				"symbol": "AIT",
				"icon": null,
				"flags": {
				  "verified": false
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "0x89d584a1edb3a70b3b07963f9a3ea5399e38b136",
					"decimals": 18
				  }
				]
			  },
			  "direction": "in",
			  "quantity": {
				"int": "23432357555660362337503",
				"decimals": 18,
				"float": 23432.35755566036,
				"numeric": "23432.357555660362337503"
			  },
			  "value": 3105.950135646689,
			  "price": 0.13254962196052741,
			  "sender": "0x4e34da137f0b317c633838458e0c923a5e088752",
			  "recipient": "0x5da04eb0e28a06798797f54deb17cc014c525370"
			},
			{
			  "fungible_info": {
				"name": "Ethereum",
				"symbol": "ETH",
				"icon": {
				  "url": "https://token-icons.s3.amazonaws.com/eth.png"
				},
				"flags": {
				  "verified": true
				},
				"implementations": [
				  {
					"chain_id": "scroll",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "base",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "arbitrum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "optimism",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "polygon-zkevm",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "aurora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zksync-era",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "linea",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "ethereum",
					"address": "",
					"decimals": 18
				  }
				]
			  },
			  "direction": "out",
			  "quantity": {
				"int": "1400000000000000000",
				"decimals": 18,
				"float": 1.4,
				"numeric": "1.400000000000000000"
			  },
			  "value": 3227.672,
			  "price": 2305.48,
			  "sender": "0x5da04eb0e28a06798797f54deb17cc014c525370",
			  "recipient": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad"
			}
		  ],
		  "approvals": [],
		  "application_metadata": {
			"name": "Uniswap",
			"icon": {
			  "url": "https://protocol-icons.s3.amazonaws.com/uniswap_protocol.png"
			},
			"contract_address": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
			"method": {
			  "id": "0x3593564c",
			  "name": "Execute"
			}
		  },
		  "flags": {
			"is_trash": false
		  }
		},
		"relationships": {
		  "chain": {
			"links": {
			  "related": "https://api.zerion.io/v1/chains/ethereum"
			},
			"data": {
			  "type": "chains",
			  "id": "ethereum"
			}
		  }
		}
	  },
	  {
		"type": "transactions",
		"id": "cf515cf7ade152639bae717ba4c5450f",
		"attributes": {
		  "operation_type": "trade",
		  "hash": "0x94271ae8d3b6e535e75bb8c8f37d01e056f0bc341413c6236af3152e91d83ffc",
		  "mined_at_block": 18842021,
		  "mined_at": "2023-12-22T14:36:35Z",
		  "sent_from": "0x5da04eb0e28a06798797f54deb17cc014c525370",
		  "sent_to": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
		  "status": "confirmed",
		  "nonce": 1297,
		  "fee": {
			"fungible_info": {
			  "name": "Ethereum",
			  "symbol": "ETH",
			  "icon": {
				"url": "https://token-icons.s3.amazonaws.com/eth.png"
			  },
			  "flags": {
				"verified": true
			  },
			  "implementations": [
				{
				  "chain_id": "zksync-era",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "linea",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "optimism",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "scroll",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "polygon-zkevm",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "aurora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "ethereum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "arbitrum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "base",
				  "address": "",
				  "decimals": 18
				}
			  ]
			},
			"quantity": {
			  "int": "7103414179541039",
			  "decimals": 18,
			  "float": 0.007103414179541,
			  "numeric": "0.007103414179541039"
			},
			"price": 2305.48,
			"value": 16.376779322648183
		  },
		  "transfers": [
			{
			  "fungible_info": {
				"name": "Ethereum",
				"symbol": "ETH",
				"icon": {
				  "url": "https://token-icons.s3.amazonaws.com/eth.png"
				},
				"flags": {
				  "verified": true
				},
				"implementations": [
				  {
					"chain_id": "scroll",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "linea",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "arbitrum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "ethereum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "base",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "optimism",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "polygon-zkevm",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "aurora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zksync-era",
					"address": "",
					"decimals": 18
				  }
				]
			  },
			  "direction": "in",
			  "quantity": {
				"int": "1326487858774166955",
				"decimals": 18,
				"float": 1.326487858774167,
				"numeric": "1.326487858774166955"
			  },
			  "value": 3058.191228646667,
			  "price": 2305.48,
			  "sender": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
			  "recipient": "0x5da04eb0e28a06798797f54deb17cc014c525370"
			},
			{
			  "fungible_info": {
				"name": "Restake Finance",
				"symbol": "RSTK",
				"icon": null,
				"flags": {
				  "verified": false
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "0x12ef10a4fc6e1ea44b4ca9508760ff51c647bb71",
					"decimals": 18
				  }
				]
			  },
			  "direction": "out",
			  "quantity": {
				"int": "6337660756295135030830",
				"decimals": 18,
				"float": 6337.660756295135,
				"numeric": "6337.660756295135030830"
			  },
			  "value": 3051.5893818538784,
			  "price": 0.48150090375581645,
			  "sender": "0x5da04eb0e28a06798797f54deb17cc014c525370",
			  "recipient": "0x8c894d91748a42fc68f681090db06720779a7347"
			}
		  ],
		  "approvals": [],
		  "application_metadata": {
			"name": "Uniswap",
			"icon": {
			  "url": "https://protocol-icons.s3.amazonaws.com/uniswap_protocol.png"
			},
			"contract_address": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
			"method": {
			  "id": "0x3593564c",
			  "name": "Execute"
			}
		  },
		  "flags": {
			"is_trash": false
		  }
		},
		"relationships": {
		  "chain": {
			"links": {
			  "related": "https://api.zerion.io/v1/chains/ethereum"
			},
			"data": {
			  "type": "chains",
			  "id": "ethereum"
			}
		  }
		}
	  },
	  {
		"type": "transactions",
		"id": "2381e80181d75715990179386653bdba",
		"attributes": {
		  "operation_type": "trade",
		  "hash": "0x9226c5ca271b4e44f9a0aeed69a8c1045ac75f9a547c367c8384ae2ecf80ab3d",
		  "mined_at_block": 18841813,
		  "mined_at": "2023-12-22T13:54:59Z",
		  "sent_from": "0x5da04eb0e28a06798797f54deb17cc014c525370",
		  "sent_to": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
		  "status": "confirmed",
		  "nonce": 1295,
		  "fee": {
			"fungible_info": {
			  "name": "Ethereum",
			  "symbol": "ETH",
			  "icon": {
				"url": "https://token-icons.s3.amazonaws.com/eth.png"
			  },
			  "flags": {
				"verified": true
			  },
			  "implementations": [
				{
				  "chain_id": "linea",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "aurora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "base",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "optimism",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "scroll",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zora",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "zksync-era",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "polygon-zkevm",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "arbitrum",
				  "address": "",
				  "decimals": 18
				},
				{
				  "chain_id": "ethereum",
				  "address": "",
				  "decimals": 18
				}
			  ]
			},
			"quantity": {
			  "int": "5187940012327296",
			  "decimals": 18,
			  "float": 0.0051879400123273,
			  "numeric": "0.005187940012327296"
			},
			"price": 2307.0899999999997,
			"value": 11.96904452304019
		  },
		  "transfers": [
			{
			  "fungible_info": {
				"name": "AIT Protocol",
				"symbol": "AIT",
				"icon": null,
				"flags": {
				  "verified": false
				},
				"implementations": [
				  {
					"chain_id": "ethereum",
					"address": "0x89d584a1edb3a70b3b07963f9a3ea5399e38b136",
					"decimals": 18
				  }
				]
			  },
			  "direction": "in",
			  "quantity": {
				"int": "27489663200913084808560",
				"decimals": 18,
				"float": 27489.663200913084,
				"numeric": "27489.663200913084808560"
			  },
			  "value": 3335.2694137196163,
			  "price": 0.1213281293896985,
			  "sender": "0x4e34da137f0b317c633838458e0c923a5e088752",
			  "recipient": "0x5da04eb0e28a06798797f54deb17cc014c525370"
			},
			{
			  "fungible_info": {
				"name": "Ethereum",
				"symbol": "ETH",
				"icon": {
				  "url": "https://token-icons.s3.amazonaws.com/eth.png"
				},
				"flags": {
				  "verified": true
				},
				"implementations": [
				  {
					"chain_id": "polygon-zkevm",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "ethereum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "scroll",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "optimism",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "base",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "aurora",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "linea",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "arbitrum",
					"address": "",
					"decimals": 18
				  },
				  {
					"chain_id": "zksync-era",
					"address": "",
					"decimals": 18
				  }
				]
			  },
			  "direction": "out",
			  "quantity": {
				"int": "1500000000000000000",
				"decimals": 18,
				"float": 1.5,
				"numeric": "1.500000000000000000"
			  },
			  "value": 3460.6349999999993,
			  "price": 2307.0899999999997,
			  "sender": "0x5da04eb0e28a06798797f54deb17cc014c525370",
			  "recipient": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad"
			}
		  ],
		  "approvals": [],
		  "application_metadata": {
			"name": "Uniswap",
			"icon": {
			  "url": "https://protocol-icons.s3.amazonaws.com/uniswap_protocol.png"
			},
			"contract_address": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
			"method": {
			  "id": "0x3593564c",
			  "name": "Execute"
			}
		  },
		  "flags": {
			"is_trash": false
		  }
		},
		"relationships": {
		  "chain": {
			"links": {
			  "related": "https://api.zerion.io/v1/chains/ethereum"
			},
			"data": {
			  "type": "chains",
			  "id": "ethereum"
			}
		  }
		}
	  }
	]
  }

module.exports = jsondata;
