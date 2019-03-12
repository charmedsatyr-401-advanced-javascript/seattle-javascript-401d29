![CF](http://i.imgur.com/7v5ASc8.png) DEMOS - Socket.io Client
==============================================================

[Deployed Server](https://js-401-socket-io-server.herokuapp.com)

#### Server (local files) -- `demo/server`
* This is a simple server that pops up on a port and listens for a one event (troll) to which it broadcasts whatever was typed in back to all connected sockets.
* You can test this out with the client that you build locally, but the class won't be able to connect to your local server
* Once you deploy it, and change the client app to use the deployed URL, then everyone can troll you.

#### Demo - Troll Client -- https://codesandbox.io/s/mp1220r4y
* Start this out by first installing `socket.io-client` and in your main app.js file, do a connect, setup an `on('troll',..)` listener and send out a message to the server, and put the reply in state, rendering it out.
* This simple proof of life is the basis for the entire build...
    * You have a running server
    * You have a connected client
    * The client can troll the server
    * The server can talk back
    * The client can print out what the server says.
* Run it, review it, draw it out on the whiteboard.  The flow of data and events between servers isn't always obvious.
    * Resist the temptation to simply update the display as you type, let it go to the server and back to prove the point.