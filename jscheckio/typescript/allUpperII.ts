function isAllUpper2(text: string): boolean {
    return text == text.toUpperCase() && /[A-Z]+/.test(text);
}