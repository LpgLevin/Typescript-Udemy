// Typescript naturally infers that whatever type the value you initialise the variable with is the type it must remain. AKA if you initialise Lily with a string value, you can only ever change it to a string value. If you try to use a number, the variable name will be underlined like so;
let userName = 'Lily';
//userName = 1114;
//the same with initialising with a number then trying to change it to a boolean;
let userAge = 33;
//userAge = true;
// and a boolean to a string;
let isValid = true;
//isValid = 'yes';
  
//the below tells typescript that userID is either a string or a number.
let userID: string | number ='abc1';
userID = 123;

//This is how we tell typescript that the variable is an object with specific properties and their types.
//setting the type/types of user:
let user: {
    name: string;
    age: number;
    isAdmin: boolean;
    id: string | number;
};
// assigning the value of user:
user = {
    name: 'Lily',
    age: 33,
    isAdmin: true,
    id: 'abc1' //123
}

//Arrays
//When you set the type as an array, unlike the other type, you need to use a capital letter.
//Array cannot be set as a type without more information. You need to tell typescript what types will be in the array like so:

//let hobbies: Array<string>;

//OR put the type that will be inside the array with square brackets at the end to represent the array, like so:

let hobbies: string[];

hobbies = ['Sports', 'Cooking'];

//For an array of objects, you can do the following:

let recipes: {prepTime: number; difficulty: string; serves: number; vegan: boolean}[];

//This will be an array of recipe objects with the properties shown above.