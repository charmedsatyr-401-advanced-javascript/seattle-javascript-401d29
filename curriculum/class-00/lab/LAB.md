![CF](http://i.imgur.com/7v5ASc8.png) 00: Deployment
====================================================

### Get this code up and running Travis and Heroku!

- Create a git repo (fork this one)

- Create a branch rule disallowing merges to master unless Travis builds are green.

- Connect Travis to your git account
  - It should find this repo

- Connect your Heroku to your git repo
  - Set it to auto deploy from master (or any named branch)
  - Optionally, set it to require CI (this will cause Heroku not to deploy without a passing travis build)
