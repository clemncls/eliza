import { Content } from "@elizaos/core";

export interface AuctionData {
    time: number;
    deployer: string;
    name: string;
    deployGas: string;
}

export interface GetAddressContent extends Content {
    address: string;
}
