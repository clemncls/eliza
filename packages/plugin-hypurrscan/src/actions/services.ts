import axios from "axios";
import { AuctionData } from "./types";

const BASE_URL = "https://api.hypurrscan.io";

const client = axios.create({
    baseURL: BASE_URL,
    headers: {
        Accept: "application/json",
    },
});

export const createAuctionService = () => {
    const getAuction = async (): Promise<AuctionData> => {
        try {
            const response = await client.get<AuctionData[]>( "/pastAuctions");
            return response.data.at(-1);
        } catch (error) {
            handleError(error);
        }
    };

    return { getAuction };
};

export const createRankAddressService = () => {
    const getRank = async (address: string): Promise<{}> => {
        try {
            const response = await client.get<{}>( "/rank/" + address);
            return response.data;
        } catch (error) {
            handleError(error);
        }
    };

    return { getRank };
};

function handleError(error: any){
    if (axios.isAxiosError(error)) {
        const errorMessage =
            error.response?.data?.status?.error_message ||
            error.message;
        console.error("API Error:", errorMessage);
        throw new Error(`API Error: ${errorMessage}`);
    }
    throw error;
}