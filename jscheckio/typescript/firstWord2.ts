function firstWord2(text: string): string {
    return text.split(/[^A-Za-z']/).filter(x => x.length > 0)[0];
}