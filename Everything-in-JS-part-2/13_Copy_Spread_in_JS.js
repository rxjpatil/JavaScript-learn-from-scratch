// ******************for-in Loop****************** 
// In JavaScript, the for in loop is used to iterate over the properties of an object.

// Syntax:
/*
                        for (let i in obj1) {
                            // Prints all the keys in
                            // obj1 on the console
                            console.log(i);
                        }
*/
// for in Loop Important Points
// Use the for-in loop to iterate over non-array objects. Even though we can use a for-in loop for an array, it is generally not recommended. Instead, use a for loop for looping over an array.
// The properties iterated with the for-in loop also include the properties of the objects higher in the Prototype chain.
// The order in which properties are iterated may not match the properties that are defined in the object