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
        {
            user: "{{agent}}",
            content: {
                text: "The last auction winner on Hyperliqui were HFUN, LICK and MANLET",
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
        {
            user: "{{agent}}",
            content: {
                text: "The last token launched on Hyperliqui are HFUN, LICK and MANLET",
            },
        },
    ],
];
