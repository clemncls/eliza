import { Character, Plugin } from "@elizaos/core";
import { poseidon } from "./bivouac-characters/poseidon";
import { claude } from "./bivouac-characters/claude";

export const bivouacPlugin: Plugin = {
    name: "bivouac",
    description: "Bivouac characters for Eliza",
    actions: [],
    evaluators: [],
    providers: [],
};

export const bivouacCharacters: Character[] = [poseidon, claude];

export default bivouacPlugin;
