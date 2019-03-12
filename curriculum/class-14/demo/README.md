![cf](http://i.imgur.com/7v5ASc8.png) Access Control (ACL)
==========================================================

## Solution Notes

`src/auth/middleware.js`

The express callback needs to be curried so that we can send in a param. As express registers that route, the `auth('write')` middleware actually runs immediately (it is technically being invoked there) and the actual middleware with normal signature is what's returned ... with the capability variable available within.
  

```
router.get('/something', auth('write'), (req,res,next) => { ... }

module.exports = (capability) => {
    return (req,res,next) => {
    }
}
```


Additionally, in the `_authenticate()` method, we're now calling on `user.can(...)` to see if they have the specified capability. Note the `capability && user.can()` -- that allows you to a simple `auth()` in your route to let any logged in user access the route.
  
```
  function _authenticate(user) {
    if ( user && (!capability || (user.can(capability))) ) {
```
  
---
  
`src/auth/users-model.js` and `src/auth/roles-model.js`
  
Roles is a new model that contains a role and the list of capabilities
  
Users has changed to virtually join the roles collection on find, and to add the list of capabilities to the token. This will allow apps that read the token the ability to inspect the capabilities of the user.

---
`src/auth/router.js`

A small change has to be made to the signup route. After `save()`, you need to then call a `.findOne()` and do your attachments to the request with that returned user.  This is because the `.populate()` of a virtual field as we're doing with the ACL does not work with the save hook, only findOne. Its a must that we populate the newly added user with their capabilities so that the returned token has them available.

---
**TESTING**
There are examples of the test patterns given in the starter code. Students should complete the full gamut of tests and flesh out the suite.

## Grading Notes

Most of the requirements are completed for the students by the instructor in lecture.  This is mainly going to involve the students doing some re-implementations, troubleshooting, and digging in for testing. 

There's plenty of opportunity here for modularization and simplification. While simply getting tests written and the features to work warrants a "complete", only go to a 10 if the students take the extra steps of code cleanup and modularization.
