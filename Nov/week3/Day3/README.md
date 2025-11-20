- Notes
    
    **1. `every()` Method**
    
    - **Purpose:** Checks if all elements in an array satisfy a provided testing function.
    - **Return Value:** Returns `true` if the callback function returns `true` for every element; otherwise, returns `false`.
    - Ex
    
               const numbers = [2, 4, 6, 8];
    
               const allEven = numbers.every(num => num % 2 === 0);
    
    2.**`some()` Method**
    
    - **Purpose:** Checks if at least one element in an array satisfies a provided testing function.
    - **Return Value:** Returns `true` if the callback function returns `true` for at least one element; otherwise, returns `false`.
    - Ex.
    
                 const numbers = [1, 3, 5, 7, 8];
    
                 const hasEven = numbers.some(num => num % 2 === 0);
    
    **3. `find()` Method**
    
    - **Purpose:** Returns the first element in an array that satisfies a provided testing function.
    - **Return Value:** Returns the value of the first element that passes the test. If no element satisfies the condition, it returns `undefined`.
    - Ex
    
               const users = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
    
               const foundUser = users.find(user => user.id === 2);
    
    **4.`sort()` Method**
    
    - **Purpose:** Sorts the elements of an array in place.
    - **Return Value:** Returns a reference to the same array, now sorted.
    - Ex
    
               const numbers = [3, 1, 10, 2];
    
               numbers.sort((a, b) => a - b); // [1, 2, 3, 10]
    
    **Math Object**
    
    property
    
    Math.PI
    
    Math.SQRT2
    Math.SQRT1_2
    Math.LN2
    Math.LN10
    
    Math.LOG2E
    Math.LOG10E
    
    methods
    
    Math.max()
    
    Math.min()
    
    Math.round()
    
    Math.floor()  {just less than number}
    
    Math.ceil() {just greater than value}
    
    Math.random() {from 0 to 1}
    
    Math.pow()
    
    Math.sqrt()
    
    Math.cbrt()
    
    Math.abs()
    
    **Object**
    
    values()
    
    keys()
    
    entries()
    
    *fromEntries()*
    
    *assign()*