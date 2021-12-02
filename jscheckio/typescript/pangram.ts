function checkPangram(text: string): boolean {
    let textLowerOnlyLetters = text.toLowerCase().replace(/[^a-z]/g, "");
    return new Set(textLowerOnlyLetters.split("")).size == 26;
}