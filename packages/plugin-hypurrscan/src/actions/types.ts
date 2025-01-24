
export interface AuctionData {
    time: number;
    deployer: string;
    name: string;
    deployGas: string;
}

export interface ApiResponse {
    data: {
        time: number;
        deployer: string;
        name: string;
        deployGas: string;
    };
}