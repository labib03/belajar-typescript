/* eslint-disable prefer-const, @typescript-eslint/no-unused-vars */

export {};
/**
 * 1. Object Literal
 * 2. Nested Object
 * 3. Nested, Object of Array
 * 4. Nested, Object of Object
 * 5. Object destructuring
 */

/**
 * 1. Object Literal
 */
/*
  {
    id: "ID-1",
    productName: "Macbook Air",
    price: 2000,
    note: ""
  }
*/

type CustomObject1 = {
    id: string;
    productName: string;
    price: number;
    note?: string;
};
// kita bisa menambahkan tanda tanya diatas, saat inisiasi type dari key object diatas, fungsinya adalah ... membuat key note disini (kita pakainya di note saja soalnya), itu menjadi optional, alias bisa kita tulis dan harus string valuenya, atau kita tidak tulis, kalau tidak pakai tanda tanya, maka key "note" diatas itu menjadi required, yang artinya harus ada valuenya yang ber bentuk string

let exam1: CustomObject1;
exam1 = {
    id: 'ID-1',
    productName: 'Dell Latitude',
    price: 5000,
};

let exam1_1: { id: string; productName: string; price: number; note: string };
exam1_1 = {
    id: 'ID-2',
    productName: 'Lenovo Yoga',
    price: 8000,
    note: '',
};

let exam1_2: Record<string, number>;
// untuk Record ini membutuhkan 2 paramater, disini adalah string dan number
// fungsi dua parameter itu adalah, yang pertama sebagai type key dari object yang akan dibuat, disini contohnya adalah string, maka key dalam object nanti harus bentuk string, seperti "id" dibawah
// kemudian parameter kedua adalah number, maka value dari key object yang kita buat nanti, bentuk datanya harus number, kalau selain number maka akan muncul error dari type scriptnya
exam1_2 = {
    id: 3,
    productName: 2,
    price: 3000,
    note: 2,
};

/**
 * 2. Nested Object
 */

type CustomObject2_1 = {
    child1: string;
    child2: unknown;
    // unknown disini artinya, nanti value dari child2 itu bisa diisi dengan bentuk type data apapun
};
type CustomObject2 = {
    id: string;
    productName: string;
    price: number;
    nestedObject: CustomObject2_1;
};

let exam2: CustomObject2;
exam2 = {
    id: 'ID-1',
    productName: 'Samsung',
    price: 5000,
    nestedObject: {
        child1: 'practice type script',
        child2: 2,
    },
};

exam2 = { ...exam1_1, nestedObject: { child1: 'practice type script', child2: 3 } };
console.log(exam2);

/**
 * 3. Nested, Array of Object
 */

/*
    {
      id: "U-1",
      name: "Adi dodi",
      address: [
        {
          street : "Jln. Setapak No.2",
          city: "Jakarta"
        },
        {
          street: "Jln. Lebar sekali no 10",
          city: "Medan"
        }
      ]
    }
*/

type CustomObject3 = {
    id: string;
    name: string;
    item: { itemName: string; itemPrice: number }[];
};

let exam3: CustomObject3;
exam3 = {
    id: 'ID-1',
    name: 'Margonda',
    item: [
        { itemName: 'Baloon', itemPrice: 2000 },
        { itemName: 'Chair', itemPrice: 200 },
    ],
};

const exam3_1: CustomObject3 = {
    id: 'ID-2',
    name: 'Lindger',
    item: [
        { itemName: 'Cloth', itemPrice: 400 },
        { itemName: 'Pillow', itemPrice: 20 },
    ],
};

/**
 * 4. Nested, Object of Object
 */

/*
    {
      idCart: "C1",
      dateOrdered: "2020-05-20",
      items: {
        p1 :{
          "id": "P-1",
          "name": "Mechanical Keyboard",
          "qty": 2
        },
        p2 :{
          "id": "P-2",
          "name": "USB Hub",
          "qty": 1
        },
      }
    }
*/

type CustomObject4 = {
    id: string;
    name: string;
    friend: Record<string, { friendId: string; friendAge: number }>;
};

type CustomObject4_1 = {
    id: string;
    name: string;
    friend: {
        [key: string]: CustomObject4_2;
    };
};

type CustomObject4_2 = {
    friendName: string;
    friendAge: number;
};

let exam4: CustomObject4;
exam4 = {
    id: 'ID-1',
    name: 'Jordan',
    friend: {
        friendName: { friendId: 'ID-1_1', friendAge: 15 },
        newFriend: { friendId: 'ID-1_2', friendAge: 20 },
    },
};

let exam4_1: CustomObject4_1;
exam4_1 = {
    id: 'ID-2',
    name: 'Singular',
    friend: {
        friendOne: { friendName: 'Jonathan', friendAge: 18 },
        friendTwo: { friendName: 'Hubless', friendAge: 28 },
    },
};
/**
 * 5. Object Destructuring
 */

/*
  let fullName = {
    firstName : "Sastra",
    lastName : "Nababan"
  }
  let {firstName, lastName} = fullName
*/
