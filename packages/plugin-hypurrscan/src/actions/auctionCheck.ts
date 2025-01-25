import {
    elizaLogger,
    HandlerCallback,
    IAgentRuntime,
    Memory,
    State,
    type Action,
} from "@elizaos/core";
import { auctionExamples } from "./examples";
import { createAuctionService } from "./services";

export const auctionCheck: Action = {
    name: "AUCTION_CHECK",
    description: "Check last auction that happenned on hyperliquid",
    similes: [
        "GET_AUCTION",
        "CHECK_AUCTION",
        "LAST_AUCTION",
        "CHECK_LAUNCH",
        "TOKEN_LAUNCH",
        "LAST_LAUNCHPAD",
    ],
    handler: async (
        runtime: IAgentRuntime,
        message: Memory,
        state: State,
        _options: { [key: string]: unknown },
        callback?: HandlerCallback
    ): Promise<boolean> => {
        elizaLogger.log("Starting Hypurrscan get auction handler...");

        // Initialize or update state
        if (!state) {
            state = (await runtime.composeState(message)) as State;
        } else {
            state = await runtime.updateRecentMessageState(state);
        }

        try {
            // get last auction data
            const auctionService = createAuctionService();
            const auctionData = await auctionService.getAuction();

            // format date and answer user
            const date = new Date(auctionData.time);
            const text = `The last auction was ${auctionData.name}. It was deployed by ${auctionData.deployer} for ${auctionData.deployGas} gaz at ${date}.`;

            elizaLogger.success(text);

            if (callback) {
                callback({
                    text,
                    content: {
                        auctionData,
                    },
                });
            }

            return true;
        } catch (error) {
            elizaLogger.error("Error in AUCTION_CHECK handler:", error);
            if (callback) {
                callback({
                    text: `Error fetching auction: ${error.message}`,
                    content: { error: error.message },
                });
            }
            return false;
        }
    },
    validate: async () => {
        return true;
    },
    examples: auctionExamples,
};
