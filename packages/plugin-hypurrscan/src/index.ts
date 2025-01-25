import { Plugin } from "@elizaos/core";
import { auctionCheck } from "./actions/auctionCheck";
import { rankAddress } from "./actions/rankAddress";

export const hypurrscanPlugin: Plugin = {
    name: "hypurrscan",
    description: "Hypurrscan plugin",
    actions: [auctionCheck, rankAddress],
    providers: [],
    evaluators: [],
};

export default hypurrscanPlugin;
