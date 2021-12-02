function verifyAnagrams2(line1: string, line2: string): boolean {
    return line1.toLowerCase().replace(/[^a-z]/g, "").split("").sort((a, b) => a.localeCompare(b)).join("") ==
        line2.toLowerCase().replace(/[^a-z]/g, "").split("").sort((a, b) => a.localeCompare(b)).join("")
}