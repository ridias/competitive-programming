function correctSentence(text: string): string {
    if(text[text.length - 1] != ".") text += "."
    return text[0].toUpperCase() + text.substring(1, text.length);
}