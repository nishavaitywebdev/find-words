const checkIfWordCanBeFormed = (w: string, characterMap: Map<string, number>) => {
    const map = {};
    for (let char of w) {
        /* If any letter of word is not present in the map,
        then word cannot be formed, we return false.
        */
        if (!characterMap.has(char)) return false;

        /**
         * Else we need to check if the count of the letters
         * also match the count of character in the map. So we 
         * track the letter count
         */
        map[char] = (map[char] || 0) + 1;

        /*
        If at any point the letter count exceeds the count in map,
        we return false;
        */
        if (characterMap.get(char) < map[char]) return false;
    }

    /**
     * If all the letters are present and the count also matches,
     * then word can be formed, finally, we return true. 
     */
    return true;
}

export const findWords = (inputString: string, dictionary: string[]): string[] => {
    /* collect all letters of the input string and their count 
    and store in the map 
    */
    let characterMap = new Map();
    for (let char of inputString) {
        const count = characterMap.get(char) || 0;
        characterMap.set(char, count + 1);
    }
    const result = [];

    /**
     * We iterate through all the words of the dictionary and check if 
     * the word can be formed from the input string. If word 
     * can be formed, then we store it in the results array and 
     * return the result at the end of all iterations. 
     */
    for (let word of dictionary) {
        const isWordFormed = checkIfWordCanBeFormed(word, characterMap);
        if (isWordFormed) result.push(word);
    }
    return result;
};
