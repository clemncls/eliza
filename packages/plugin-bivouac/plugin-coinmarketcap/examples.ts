import { ActionExample } from "@elizaos/core";

export const volumeExamples: ActionExample[][] = [
    [
        {
            user: "{{user1}}",
            content: {
                text: "Check HYPE volulme on 24hours",
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
