# Functional programming

- Functions are building blocks of reusable code
- defined using `function` keyword

```
    function myFunctionName(){
        // body
    }
```
- forcing an `execution == invoking`;

sytanx: 
```
myFunctionName()
```

- (a) **_Returning functions_**

        - Return only one value per function
        - last line
        - returning fnction must end with return statement


- (b) **_parameterized functions_**

- parameters are mechanisms to pass values to functions
- passed during invocation
- Unless `explicitly specified`, the number of values passed to a function must match the number of parameters defined

**_Default function parameters_**
- function can be initialized with default values

0- The difference between returning functions and parameter functions lies in how functions are either returned as values or passed as arguments in other functions.


### Rest parameters
- doesn’t restrict the number of values that you can pass to a function

## Anonymous Fucntions

## Static functions
- also static method 
-  functions defined on class not on instances of class
- useful for utility functions
- declared with `static` keyword
- called on class rather than on the instance
- ie, 
    ```
    // can only be accessed through the class itself
    MyClass.MyStaticMethod()
    ```

- cannot access directly instance properties( ie , `this` refers to the class itself)

- often used for **_utility functions_** thar dont need instance specific data ie, claculations, conversions or helper functions
