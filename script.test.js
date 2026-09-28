import { capitalize } from "./script.js"

test("empty string should return empty string", () => {
    expect(capitalize("")).toBe("");
});

test("empty string should return empty string", () => {
    expect(capitalize("      ")).toBe("      ");
});

test("if a string has no letter, it should be returned the same", () => {
    expect(capitalize("    131223 !!!---!'3  ")).toBe("    131223 !!!---!'3  ");
});

test("return the first index a letter appears", () => {
    expect(capitalize("   AdadAAssdaadadaA")).toBe("   AdadAAssdaadadaA")
})


test("return the first index a letter appears", () => {
    expect(capitalize("   123 !! asdasdad   ")).toBe("   123 !! Asdasdad   ")
})

//=================================================================//

import { reverseString } from "./script.js";

test("empty string should return empty string", () => {
    expect(reverseString("")).toEqual("")
});

test("str with one char should return the same", () => {
    expect(reverseString("a")).toEqual("a")
});

test("returning the reversed string we created from our reversed array", () => {
    expect(reverseString(" asd")).toBe("dsa ")
});

test("returning the reversed string we created from our reversed array", () => {
    expect(reverseString(" asASDa   ")).toBe("   aDSAsa ")
});

test("returning the reversed string we created from our reversed array", () => {
    expect(reverseString("12112   !! asdad")).toBe("dadsa !!   21121")
});

//=================================================================//

import { calculator } from "./script.js"

test("adding 2 to 3", () => {
    expect(calculator.add(2,3)).toBe(5)
})

test("adding 0 to 3", () => {
    expect(calculator.add(0,3)).toBe(3)
})

test("adding 2.3 with 4.5", () => {
    expect(calculator.add(2.3,4.5)).toBe(6.8)
})

test("substacting 2 from 3", () => {
    expect(calculator.substract(2,3)).toBe(-1)
})

test("checking if we get error if we dont provide a number", () => {
    expect(calculator.substract(2,"3")).toEqual("Enter a valid number")
})

test("multiply a number with 0", () => {
    expect(calculator.multiply(2,0)).toBe(0)
})

test("multiply 2.3 with 4.5", () => {
    expect(calculator.multiply(2.3,4.5)).toBe(10)
})

test("dividing by zero", () => {
    expect(calculator.divide(2.3,0)).toBe("Error: Zero division")
})

test("dividing 20 by 5", () => {
    expect(calculator.divide(20,5)).toBe(4)
})

//=================================================================//

import { ceaserCipher } from "./script.js";

test("sending empty string", () => {
    expect(ceaserCipher("", 2)).toEqual("")
})

test("sending empty string with spaces", () => {
    expect(ceaserCipher("       ", 2)).toEqual("       ")
})

test("checking if we provide a sf number greater or equal than 26(1)", () => {
    expect(ceaserCipher("A", 26)).toEqual("A")
})

test("checking if we provide a sf number greater or equal than 26(2)", () => {
    expect(ceaserCipher("A", 28)).toEqual("C")
})

test("checking if we provide a sf number greater or equal than 26(3)", () => {
    expect(ceaserCipher(",a", 28)).toEqual(",c")
})

test("giving a full string with numbers and letter", () => {
    expect(ceaserCipher("112 3313 adad 13132 21 asd", 3)).toEqual("112 3313 dgdg 13132 21 dvg")
})

//=================================================================//

import { analyzeArray } from "./script";

test("testing empty array", () => {
    expect(analyzeArray([])).toEqual({ average: 0, min: null, max: null, length: 0 })
})

test("array with different elements", () => {
    expect(analyzeArray([1, 2, "asd", null, true, 4, 5])).toEqual({ average: 3, min: 1, max: 5, length: 4 })
})

test("array with different elements", () => {
    expect(analyzeArray(["1", "2", "asd", null, true, "4", "5"])).toEqual({ average: 0, min: null, max: null, length: 0 })
})

test("array with different elements", () => {
    expect(analyzeArray([3, 3, "asd", null, true, 3, 4])).toEqual({ average: 3, min: 3, max: 4, length: 4 })
})

test("array with different elements", () => {
    expect(analyzeArray([3, 3, "asd", null, true, 3, 3])).toEqual({ average: 3, min: 3, max: 3, length: 4 })
})