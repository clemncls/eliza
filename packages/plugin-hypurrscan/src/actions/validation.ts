
export function isAddress(
    address: string
): address is string {
    return (
        address &&
        42 == address.length &&
        address.startsWith('0x')
    );
}
