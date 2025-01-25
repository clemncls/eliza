import { Character, Plugin } from "@elizaos/core";
import { poseidon } from "./bivouac-characters/poseidon";
import { claude } from "./bivouac-characters/claude";
import { poseidon2 } from "./bivouac-characters/poseidon-2";
import { fullBullDegen } from "./bivouac-characters/FullBullDegen"

export const bivouacPlugin: Plugin = {
    name: "bivouac",
    description: "Bivouac characters for Eliza",
    actions: [],
    evaluators: [],
    providers: [],
};

//export const bivouacCharacters: Character[] = [poseidon, claude, poseidon2];
export const bivouacCharacters: Character[] = [fullBullDegen];

export default bivouacPlugin;
