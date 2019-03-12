![CF](http://i.imgur.com/7v5ASc8.png) DEMOS - Remote CRUD
=========================================================


### [Remote CRUD Demo](https://codesandbox.io/s/p9roxxm2wq)

* This demo is designed for simplicity. It essentially takes form input, formats it as JSON, and does a POST to a server.
* It also takes an ID and performs a DELETE.
* The primary activity here is in the actions - implementing them to work with the server and keeping the reducers in sync.
* You will need to address issues with cache invalidation. When is your state stale?
  * The minute you create it.
  * Talk about the issues with that and how you might invalidate it.
* This is a light topic in general. It could be a good tactic to pair program this entire demo with a TA or a student.

