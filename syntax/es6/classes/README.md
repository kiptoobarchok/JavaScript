# Classes

Classes are a template for creating objects (encapsulate data)

**__Defining classes__**

- classes are special functions
- can be defined in :
        - [class expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/class)
        - [class declaration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class)

Like _function expressions_, class expressions may be `anonymous`, or have a name that's different from the variable that it's assigned to.

-  class body is within the `{ curly } braces`

- In the class body , one defines class members, ie methods(functions) or constructors

- a class element can be characterized by this aspects: 
        - kind : (getter, setter or field)
        - location : static / instance
        - visibility : Public / private


`class element` : refer to parts of a class ie, properties and methods that define its structure

```
class Car {
  // Field (property) element
  color = 'red';

  // Constructor is also considered a part of the class structure
  constructor(model) {
    this.model = model;
  }

  // Method element
  drive() {
    console.log(`Driving a ${this.color} ${this.model}`);
  }
}

// Usage
const myCar = new Car('Toyota');
myCar.drive(); // Output: Driving a red Toyota
```

- each _element_ can either be a field(property) or a method
- in the above example the `color` and `model` fields(properties) and the `drive()` method are all class elements

**_Attributes_** : essentially variables that store values or states for an object, can
 be set in the constructor`(instance attribute)` or directly within the class`(class attribute)`

**_Methods_** : functions defined within a class

- Operate on instances of that class

**_Instances_** : an object created from a class
- To create an instance, you use the new keyword, followed by the class name

creating a class in es6:
```
//class declaration

class myClassName {
    //body
}

//class expression
//can either be anonymous or have a class name

const mySecClass = class myShape {

}
```