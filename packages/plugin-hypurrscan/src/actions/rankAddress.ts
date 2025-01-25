import {
    composeContext,
    elizaLogger,
    generateObjectDeprecated,
    HandlerCallback,
    IAgentRuntime,
    Memory,
    ModelClass,
    State,
    type Action,
} from "@elizaos/core";
import { rankAddressExamples } from "./examples";
import { createRankAddressService } from "./services";
import { getAddressTemplate } from "./template";
import { GetAddressContent } from "./types";
import { isAddress } from "./validation";

export const rankAddress: Action = {
    name: "RANK_ADDRESS",
    description: "Check the rank for given address on hyperliquid",
    similes: [
        "GET_RANK",
        "CHECK_RANK"
    ],
    handler: async (
        runtime: IAgentRuntime,
        message: Memory,
        state: State,
        _options: { [key: string]: unknown },
        callback?: HandlerCallback
    ): Promise<boolean> => {
        elizaLogger.log("Starting Hypurrscan get ranks for address handler...");

        // Initialize or update state
        if (!state) {
            state = (await runtime.composeState(message)) as State;
        } else {
            state = await runtime.updateRecentMessageState(state);
        }

        try {
            // Compose and generate address context
            const addressContext = composeContext({
                state,
                template: getAddressTemplate,
            });
            // Retrive address from message
            const content = (await generateObjectDeprecated({
                runtime,
                context: addressContext,
                modelClass: ModelClass.SMALL,
            })) as any as GetAddressContent;

            // Verify that address was correctly extracted
            const address = content.address;
            if (!isAddress(address)) {
                throw new Error("Invalid provided address");
            }

            // get the ranks for given address
            const rankAddressService = createRankAddressService();
            const rankData = await rankAddressService.getRank(address);

            // format returned dictionary as string
            let ranks: string[] = [];
            Object.keys(rankData).forEach((key) => {ranks.push(`${key} : ${rankData[key]}`);})

            // answer user
            const text = `The address ${address} ranks among holders for each tokens are :\n ${ranks.join("\n")}.`;
            elizaLogger.success(text);

            if (callback) {
                callback({
                    text,
                    content: {
                        rankData,
                    },
                });
            }

            return true;
        } catch (error) {
            elizaLogger.error("Error in RANK_ADDRESS handler:", error);
            if (callback) {
                callback({
                    text: `Error fetching ranks: ${error.message}`,
                    content: { error: error.message },
                });
            }
            return false;
        }
    },
    validate: async () => {
        return true;
    },
    examples: rankAddressExamples,
};