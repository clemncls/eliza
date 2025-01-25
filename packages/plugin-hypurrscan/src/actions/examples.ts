import { ActionExample } from "@elizaos/core";

export const auctionExamples: ActionExample[][] = [
    [
        {
            user: "{{user1}}",
            content: {
                text: "Check the last hyperliquid auction",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll look for the last auction that happenned on hyperliquid L1",
                action: "AUCTION_CHECK",
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "Get the last token launched on hyperliquid",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll get you the last few token that were launhed on hyperliquid",
                action: "AUCTION_CHECK",
            },
        },
    ],
];

export const rankAddressExamples: ActionExample[][] = [
    [
        {
            user: "{{user1}}",
            content: {
                text: "Check the rank of hyperliquid adress",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll look for the rank of that hyperliquid address",
                action: "RANK_ADDRESS",
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "Get the rank of the following hyperliquid account",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll get you the ranking of tokens for this hyperliquid account",
                action: "RANK_ADDRESS",
            },
        },
    ],
];
