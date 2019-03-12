# Block 7 Capstone Project - Yakker

## Overview
Create an communication application similar to Slack

## Requirements
* Support multiple "Workspaces" (socket.io "namespaces")
* Within each Workspace, multiple Channels (socket.io "rooms")
* Store message history
* Front End
  * Provide a list of workspaces and channels
    * Use a nested `<ul>/<li>` structure
  * As a user selects a room, connect their socket to the coorect namespace and join the selected room.
  * Load the messages from the server and display on screen
  * Use a Redux Store to manage the displayed messages between the various channels.
* Only retain a small amount of history (<25 messages per room)
* Use a mongo store
* Implement a full test suite on both back-end and front-end systems

## Notes


## Submission Instructions
* Deploy your front-end (the React application) to AWS
  * Preferably, use the automated deployment process to connect a Cloud Formation stack
* Deploy your back-end (the API server) to Heroku with a mongo database
* Complete the README.md with complete documentation, UML, and user notes.
