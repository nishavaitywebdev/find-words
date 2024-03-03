const checkIfWordCanForm = (w: string, characterMap: Map<string, number>) => {
    const map = {};
    for (let char of w) {
        if (!characterMap.has(char)) return false;
        map[char] = (map[char] || 0) + 1;
        if (characterMap.get(char) < map[char]) return false;
    }
    return true;
}

export const findWords = (inputString: string, dictionary: string[]): string[] => {
    let characterMap = new Map();
    for (let char of inputString) {
        const count = characterMap.get(char) || 0;
        characterMap.set(char, count + 1);
    }
    const result = [];

    for (let word of dictionary) {
        const wordFormed = checkIfWordCanForm(word, characterMap);
        if (wordFormed) result.push(word);
    }
    return result;
};
