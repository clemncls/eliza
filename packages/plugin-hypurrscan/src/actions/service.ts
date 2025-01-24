import axios from "axios";
import { ApiResponse, AuctionData } from "./types";
import { elizaLogger } from "@elizaos/core";

const BASE_URL = "https://api.hypurrscan.io";

export const createAuctionService = () => {
    const client = axios.create({
        baseURL: BASE_URL,
        headers: {
            Accept: "application/json",
        },
    });

    const getAuction = async (): Promise<AuctionData> => {
        try {
            const response = await client.get<AuctionData[]>( "/pastAuctions");
            return response.data.at(-1);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const errorMessage =
                    error.response?.data?.status?.error_message ||
                    error.message;
                console.error("API Error:", errorMessage);
                throw new Error(`API Error: ${errorMessage}`);
            }
            throw error;
        }
    };

    return { getAuction };
};