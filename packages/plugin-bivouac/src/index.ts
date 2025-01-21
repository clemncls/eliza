import { Character, Plugin } from "@elizaos/core";
import { poseidon } from "./characters/poseidon";

export const bivouacPlugin: Plugin = {
    name: "bivouac",
    description: "Bivouac characters for Eliza",
    actions: [],
    evaluators: [],
    providers: [],
};

export const bivouacCharacters: Character[] = [poseidon];

export default bivouacPlugin;
