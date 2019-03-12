![cf](http://i.imgur.com/7v5ASc8.png) Socket.io Namespaces and Rooms
============================================================

## Learning Objectives

**Students will be able to ...**

* Manage a grouped connection pool in a socket.io server application

## Outline
* :05 **Housekeeping/Recap**
* :30 **Whiteboard/DSA Review**
* :15 **Lightning Talk**
* Break
* :30 **CS/UI Concepts** -
* :20 **Code Review**
* Break
* :60 **Main Topic**

## Computer Science Concept:
* Namespaces and Clustering

## UI Concept:
* SASS Modules

## Main Topic:

Within a socket.io server, by default, every socket that connects is in the same 'pool' of sockets. Everyone potentially hears every event.

While that may work well at a concert, appications typically seek to segment their users. As an example, in an event driven application, there can be made a case for a 'save' event being valid for both files and for database records.

But not every client needs to know about both. Loggers may only care about file changes, and a cache server may only care about databases.

What if there were 2 "pools" of events, called "files" and "db", respectively. And what if each pool could fire it's own "save" event?

In socket.io, we call those "pools" `Namespaces`

**Namespaces** can have their own uniquely named events or use common names, but only subscribers to a given namespace can 'hear' those events. As a client, you physically `connect()` to a namespace, which are presented as a route on the url
  * Default/General Namespace: `localhost:3000`
  * Codefellows Namespace: `localhost:3000/codefellows` 

**Rooms** are similar. Rather than connecting to a room directly as you do with a namespace, you first connect to a namespace and then request to the server that you `join` a room.  The accepted way to do this is by sending a join event to the server, and then the server will run the join command on behalf of the client.

client.js
```
const instructor = io.connect('http://localhost:3000/codefellows');
instructor.emit('join','instructors', data => {
  console.log(data);
});
```

server.js
```
  socket.on('join', (room, cb) => {
    socket.join(room);
    cb(`Joined ${room}`);
  });
```

Unlike pure events, both **rooms** and **namespaces** allow you to inspect the list of clients attached. 