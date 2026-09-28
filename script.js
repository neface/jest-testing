export function capitalize(word) {
    //finding the first letter index in a string, if it has none it will return -1
    const index = word.search(/\p{L}/u);

    //catching the strings that has no letters in it and returning it back
    if (index === -1) return word;

    //if it has letters, we will slice it to first letter, uppercase the first letter and adding the rest of the string together
    return word.slice(0, index) + word[index].toUpperCase() + word.slice(index + 1);

}

export function reverseString(str) {
    //first we chech if our str consist of 1 character or less

    if (str.length <= 1) return str;

    // first we split characters with split method and return an array
    const strArray = str.split("");

    //now we will reverse the array we just create
    const revArray = strArray.reverse();

    //turning our reversed array to a string
    const revStr = revArray.join("");

    return revStr;
}

export const calculator = {

    add : function(a,b){
        if (!Number.isFinite(a) || !Number.isFinite(b)) return "Enter a valid number";
        return a+b;
    },

    substract : function(a,b){
        if (!Number.isFinite(a) || !Number.isFinite(b)) return "Enter a valid number";
        return a-b;
    },

    multiply : function(a,b){
        if (!Number.isFinite(a) || !Number.isFinite(b)) return "Enter a valid number";
        return Math.round(a*b);
    },

    divide : function(a,b){
        if (!Number.isFinite(a) || !Number.isFinite(b)) return "Enter a valid number";
        if (b===0){
            return "Error: Zero division"
        } else {
            return Math.round(a/b);
        }
    } 
}

export function ceaserCipher (str, shiftFactor) {
    //returning str into array
    const strArr = str.split("");
    const ceaserArr = strArr.map(s => shiftChar(s, shiftFactor));
    const ceaserStr = ceaserArr.join("");
    return ceaserStr;
}

function shiftChar (s, sf) {
    let char = s.charCodeAt(0);

    if (char >= 65 && char <= 90){
        const zeroCodeUpper = char - 65;
        const newCharU = ((zeroCodeUpper + sf) % 26 + 26) % 26
        return String.fromCharCode(newCharU + 65);

    } else if (char >= 97 && char <= 122) {
        const zeroCodeLower = char - 97;
        const newCharL = ((zeroCodeLower + sf) % 26 + 26) % 26
        return String.fromCharCode(newCharL + 97);

    } else {
        return s;
    }
}

export function analyzeArray(arr) {
    const cleanedArr = arr.filter(v => Number.isFinite(v));
    const arrLength = cleanedArr.length;

    if(cleanedArr.length === 0) return { average: 0, min: null, max: null, length: 0 };

    const sum = cleanedArr.reduce((total, curr) => total + curr, 0);
    const avg = sum / arrLength; 

    return {
        average : Math.round(avg),
        min : Math.min(...cleanedArr),
        max : Math.max(...cleanedArr),
        length : arrLength
    };

}

