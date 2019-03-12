![cf](http://i.imgur.com/7v5ASc8.png) Demo: Bearer Authorization
================================================================

## Live Coding Demo(s)

### Demo Name -- `demo/api-server`
* Continue to work with `auth-server` that was coded in the previous lectures in this block.
* For this demo, code out a simplistic Token authorization
  * `auth/middleware.js` - create the _authBearer() method which calls the `User.authenticateToken()` method to validate the token and "log the user in"
  * `auth/users-model.js` - create the method authenticateToken() which uses jwt.verify() and then returns a `.find()` for the user, based on the id in the token.
  
### Validation
Demo [jwt.io](http://jwt.io) and how they can validate tokens.

Also, demo hitting your Auth Server with various tools to validate logins:
* http post :3000/signin "Authorization:Bearer TOKENSTRING"
* Postman with authorization headers
* Chrome directly, using the Headers extension

## What bugs, issues, or surprises have come up in the past for this class?

## General Comments and Notes
The demo today is purely for wiring purposes. The lab that the students will do takes the token process futher (dates, storage, re-generating) as brought up during the main lecture.