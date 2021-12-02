function unixMatch(filename: string, pattern: string): boolean {
    pattern = pattern.replace(/\./g, "\\.").replace(/\[\!/g, "[^")
    return new RegExp(pattern).test(filename);
}