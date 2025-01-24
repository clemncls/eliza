import { Plugin } from "@elizaos/core";
import { auctionCheck } from "./actions/auctionCheck";

export const hypurrscanPlugin: Plugin = {
    name: "hypurrscan",
    description: "Hypurrscan plugin",
    actions: [auctionCheck],
    providers: [],
    evaluators: [],
};

export default hypurrscanPlugin;
