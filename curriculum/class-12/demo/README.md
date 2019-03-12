![cf](http://i.imgur.com/7v5ASc8.png) Demo: OAuth
=================================================

Change this --- the demo is tiny. The lab needs to be an integration prior to the research

## Live Coding Demo(s)

### Google Account
* Login to the google developer console and create a new credential for this lab
* Get a new API key
* Enable the Google Plus API
* Head to the docs to highlight the steps our handshaking process will need to take.

### Demo Name -- `demo/auth-server`
* Start with the `auth-server` that was coded in the previous lecture and build from it.
* `auth/router.js` - Add a new route for `.get('/oauth')` that will be used to initiate the oauth handshake process.
* Most of this lab will be spent building out the handshakes in the `auth/lib/oauth/google.js` file
  * Take this step by step through each of the handshake steps
* `auth/users-model.js` needs a new static method, called `createFromOAuth()` that creates the mongo user from the data obtained by oauth.
* Lots of opportunity in here to use the debugger to check the progress of all the handshaking.

## What bugs, issues, or surprises have come up in the past for this class?

## General Comments and Notes
