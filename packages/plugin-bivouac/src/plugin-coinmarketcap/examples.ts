import { ActionExample } from "@elizaos/core";

export const priceExamples: ActionExample[][] = [
    [
        {
            user: "{{user1}}",
            content: {
                text: "What's the price on HYPE token ?",
                action: "GET_PRICE",
            },
        },
        {
            user: "{{user1}}",
            content: {
                text: "I want the latest price and volume from coinmarketcap",
            },
        },
        {
            user: "Poseidon",
            content: {
                text: "After i check on coinmarketcap, the price of HYPE token is $0.0001 and volume traded is 1000$",
                action: "CONTINUE",
            },
        },
        {
            user: "Poseidon",
            content: {
                text: "That's a good price for all the features i know about, do you want to know more about HYPE token ?",
            },
        },
    ],
];

export const volumeExamples: ActionExample[][] = [
    [
        {
            user: "{{user1}}",
            content: {
                text: "Check HYPE volume on 24hours",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll check the volume on HYPE on 24 hours.",
                action: "GET_PRICE",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "The volume of HYPE is 2,345.67",
            },
        },
    ],
];
