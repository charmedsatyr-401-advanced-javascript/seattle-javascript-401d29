# LAB: Classes, Inheritance, Functional Programming

### Before you begin
* You'll need to initialize this lab folder as a new node module, install your dependencies, setup your npm script commands, and pull in your config files

#### Objects and Classes
In the `objects` folder, there is a full implementation of a Car and Motorcycle object created using a constructor function, with an index.js file that you can use to visually play with the objects as well as tests.

In the `objects/__tests__` folder, you'll find a file called `vehicle.test.js` that tests the implementation of both a `Car` and a `Motorcycle` using the constructor pattern.

###### Requirements
* Implement both `Car` and `Motorcycle` using a Javascript `Class` (in the `vehicle-class.js` file)
* Implement both `Car` and `Motorcycle` using a Javascript `Factory Function` (in the `vehicle-factory.js` file)
* As you do your work, other than changing the `require()` lines in both the index.js and the test files, both the `index.js` and the tests should work unchanged. Do not change the actual test or index code!
* **Software Engineering Note!** This is the heart of a refactor -- re-implement the same functionality, the same signature, and the same I/O while completely rewriting the underlying implementation

* Repeat the process, from scratch, implementing a `FlyingVehicle` parent class, with `Airplane` and `Helicopter` child classes.
* Have some fun with the properties and methods that are both shared and esoteric...
* Start yourself with a Constructor function this time, and then create the factory and class versions from that.
* Again ... focus on making sure that your tests and implementations do not change when you switch out the object creators!

* Repeat the process, from scratch, implementing a `SeaCreature` parent class, with `Fish` and `Lobster` child classes.
* Have some fun with the properties and methods that are both shared and esoteric...
* Start yourself with a Factory function this time, and then create the constructor function and class versions from that.
* Again ... focus on making sure that your tests and implementations do not change when you switch out the object creators!

#### List Module
  * Create a new folder in the lab directory called `list` to house your code for this assignment
  * implement a full List constructor using a **constructor function**
  * implement the `.length` property
  * implement the following methods on the list constructor
    * `push()`
    * `pop()`
    * `shift()`
    * `unshift()`
    * `forEach()`
    * `map()`
    * `filter()`
    * `reduce()`
  * Do not use any built-in array methods to do this
  
  * **Re-Implement using a Class definition**
    * Do this after your tests are completed.
    * Note, that this should be a refactor, so your tests should remain unchanged and green once your re-implementation is completed
  
###### Testing
* tests that ensure the list module functions correctly with error-check parameters
* tests that the correct errors are thrown with invalid arguments exist
* tests to ensure that the list module functions return the correct results when invoked with valid arguments

###### Stretch Goal:
  * Implement these methods as well ...
    * `slice()`
    * `splice()`
    * `reverse()`


### Assignemnt Submission Instructions
Refer to the [lab-instructions.md](../../../reference/submission-instructions/labs.md) for the complete lab submission process and expectations
