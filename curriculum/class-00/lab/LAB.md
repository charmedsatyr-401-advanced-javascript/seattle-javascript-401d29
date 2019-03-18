![CF](http://i.imgur.com/7v5ASc8.png) 00: Deployment
====================================================

### Get this code up and running Travis and Heroku!

- Create a new git repository

- Copy the contents of this `lab` foler into that repository, at the root level.

- Create a branch rule disallowing merges to master unless Travis builds are green.

- Connect Travis to your git account
  - It should find this newly created repo

- Connect your Heroku to your git repo
  - Set it to auto deploy from master (or any named branch)
  - Optionally, set it to require CI (this will cause Heroku not to deploy without a passing travis build)

