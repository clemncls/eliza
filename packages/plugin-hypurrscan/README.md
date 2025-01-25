# HypurrScan Plugin for Eliza

This plugin enables interaction with the Hypurrscan analytics service through Eliza.

## Features

- Get the last succesfull launch of a token through hyperliquid's Auction mecanism
- Get the ranking compared to other holders for each token held by a given adress on hyperliquid L1 blockchain.

## Installation

Add the plugin to your Eliza configuration:

```json
{
    "plugins": ["@elizaos/plugin-hypurrscan"]
}
```


## Available Actions

#### AUCTION_CHECK

Get the last succesfull launch of a token through hyperliquid's Auction mecanism

```typescript
// Example response format
{
    "time": 1719036696417,
    "deployer": "0xe2a0cc663acfe5d7a9cb82a743383297597a8ff3",
    "name": "SCHIZO",
    "gas": "7342.04"
}
```

#### RANK_ADDRESS

Get the ranking compared to other holders for each token held by a given adress on hyperliquid L1 blockchain.

```typescript
// Example response format
{
    "ANSEM": 149,
    "HFUN": 153,
    "CZ": 2284,
    "CAPPY": 140,
    "SCHIZO": 15,
}
```

## License

MIT
