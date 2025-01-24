import {
    Action,
    IAgentRuntime,
    Memory,
    State,
    HandlerCallback,
    ActionExample,
    elizaLogger,
    ServiceType,
    IBrowserService,
} from "@elizaos/core";

export const webSearch: Action = {
    name: "WEB_SEARCH",
    similes: ["SEARCH_WEB", "GOOGLE_IT", "LOOK_UP_ONLINE"],
    validate: async (_runtime: IAgentRuntime, _message: Memory) => {
        return true;
    },
    description: "Search on the web",
    handler: async (
        runtime: IAgentRuntime,
        message: Memory,
        state: State,
        _options: { [key: string]: unknown },
        callback?: HandlerCallback
    ): Promise<boolean> => {
        elizaLogger.log("Starting WEB_SEARCH handler...");

        const browserService = runtime.getService<IBrowserService>(
            ServiceType.BROWSER
        );

        const text = await browserService.getPageContent(
            "https://www.google.com",
            runtime
        );
        console.log("🚀 ~ browserService:", text);

        const defaultText = "Testing service...";

        if (callback) {
            callback({
                text: defaultText,
            });
        }

        return true;
    },
    examples: [
        [
            {
                user: "{{user1}}",
                content: {
                    text: "Can you search this for me ? --search",
                },
            },
            {
                user: "{{user2}}",
                content: {
                    text: "Let me search for you...",
                    action: "SEARCH_WEB",
                },
            },
            {
                user: "{{user2}}",
                content: {
                    text: "Here is the result... --search result",
                },
            },
        ],
    ] as ActionExample[][],
} as Action;
