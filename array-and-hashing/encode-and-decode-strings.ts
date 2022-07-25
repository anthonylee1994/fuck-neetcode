function encode(str: string[]): string {
    return str.join(":");
}

function decode(str: string): string[] {
    return str.split(":");
}
