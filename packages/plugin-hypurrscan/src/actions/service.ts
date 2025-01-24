import axios from "axios";
import { ApiResponse, AuctionData } from "./types";

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
            const response = await client.get<ApiResponse>(
                "/pastAuctions"
            );

            const { data } = response.data;

            return {
                time: data.time,
                deployer: data.deployer,
                name: data.name,
                deployGas: data.deployGas,
            };
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