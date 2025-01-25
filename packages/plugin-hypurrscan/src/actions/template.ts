export const getAddressTemplate = `Respond with a JSON object containing that contains the decoded address.
An hyperliquid address is a string that starts with 0x and finish with a blank space. The string MUST contain 42 characters.

IMPORTANT: Response must ALWAYS include the "address" field and its value and ONLY the "address" field and its value.

Example response:
\`\`\`json
{
    "address": "0x0000000000000000000000000000000000000000"
}
\`\`\`


{{recentMessages}}

Extract the address from the most recent messages. If you cannot find address in recent messages, don't invent one.
Respond with a JSON markdown block containing the address. Set the value for "address" field to an empty string if not found.`;
