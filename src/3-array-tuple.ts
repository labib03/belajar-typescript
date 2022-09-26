/* eslint-disable @typescript-eslint/no-unused-vars, prefer-const */
export {}; // quick fix for global variable

/**
 * Array
 * 1. Array of Number
 * 2. Array of String
 * 3. Array with Union
 * 4. Tuple
 * 5. Array of Object
 * 6. Array multi dimension
 * 7. Destructuring
 */

/**
 * 1. Array of Number
 * [1,2,3,4]
 */
type customType = number[];

let product1_1: customType;
product1_1 = [1, 2, 3];

let product1_2: Array<number>;
product1_2 = [1, 2, 3, 4, 5, 6];

/**
 * 2. Array of String
 * ['a', 'b', 'c']
 */

let product2_1: string[];
product2_1 = ['a', 'b', 'c'];

let product2_2: Array<string>;
product2_2 = ['a', 'b', 'c'];

/**
 * 3. Array with Union
 * ["hello", 1, 2, 3 ]
 */

let product3_1: (string | number)[];
product3_1 = [1, 2, 3, 4, 5, 'string'];

let product3_2: Array<string | number>;
product3_2 = [1, '2', 3, '4', 5];

/**
 * 4. Tuple
 * ['cordinat', 2, 4, 7]
 */

/**
 * 5. Array of Object
 * [
 *   { color: 'blue', index: 1 },
 *   { color: 'red', index: 2 },
 * ]
 */

interface customObject {
    color: string;
    index: number;
}

let product5_1: customObject[];
product5_1 = [
    { color: 'blue', index: 1 },
    { color: 'red', index: 2 },
];

let product5_2: { color: string; index: number }[];
product5_2 = [
    { color: 'green', index: 2 },
    { color: 'red', index: 4 },
];

let product5_3: Array<{ color: string; index: number }>;
product5_3 = [
    { color: 'green', index: 2 },
    { color: 'red', index: 4 },
];

let product5_4 = [
    { color: 'yellow', index: 3 },
    { color: 3, index: 'yellow' },
];

/**
 * 6. Array multi dimension [[]]
 * matrix = [
 *  [1, 2],
 *  [3, 4],
 * ];
 */

type customArray = number[][];

let product6_1: customArray;
product6_1 = [
    [1, 2],
    [3, 4],
];

let product6_2: number[][];
product6_2 = [
    [1, 2],
    [3, 4],
];

let product6_3: Array<Array<string>>;
product6_3 = [
    ['satu', 'dua'],
    ['tiga', 'empat'],
];

/**
 * 7. Destructuring
 * let [a, b, c, d]: [number, number, number, string] = [1, 2, 3, 'four'];
 */

let product7_1: (string | number)[];
product7_1 = ['satu', 'dua', 'tiga', 'empat', 1, 2, 3, 4];

let [a, b, c, , g, h]: (string | number)[] = product7_1;
console.log(h);

let product7_2 = [1, 2, 3, 4, 5, 'coba'];

let [z, x, v]: (number | string)[] = product7_2;
