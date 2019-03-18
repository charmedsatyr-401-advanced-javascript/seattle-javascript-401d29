![cf](http://i.imgur.com/7v5ASc8.png) Lab Submission Instructions
============================================================================

## Canvas Submission
* Link to the LAB.md in your lab repo
* **Code Sandbox Submissions**
  * Create a folder called `docs` (under `/public` for React apps)
  * Upload your README.md and any supportive images to this folder.
  * Submit a link to your `/docs/README.md` for your canvas submission

## Operation
* In the folder for each class in the class repository, you will find a `lab` folder
* The folder for each day in the repo contains:
  * README.md - The instructions for the lab
  * `starter-code` folders - Contains any starter code for your lab
* Create a new github repository for each lab
  * If there is a `starter-code` folder for the lab, **copy it's contents** *(not the folder itself)* into your new repository
* Ensure that your repository/branch is connected to travis-ci.com
* For deployable labs (servers)...
  * Ensure that your repository/branch is connected to a dyno at heroku.com
    * Create a new one for each day that contains a server deployment

## Configuration
 Configure the root of your code folder with the following files and directories. Thoughtfully name and organize any additional configuration or module files.
 * **README.md** - contains the lab description and instructions
 * **LAB.md** - contains your lab documentation
 * **.env** - contains env variables (should be git ignored)
 * **.gitignore** - contains a [robust](http://gitignore.io) `.gitignore` file
 * **.eslintrc** - contains the course linter configuratoin
 * **.eslintignore** - contains the course linter ignore configuration
 * **.travis.yml** - contains the course linter ignore configuration
 * **package.json** - contains npm package config
   * create a `lint` script for running eslint (eslint **/*.js)
   * create a `test` script for running tests
   * create a `start` script for running your server
 * **/\_\_tests\_\_/** - contains unit tests
 * **/docs** - Where your documentation will reside
 * **/docs/config**
 * **/docs/config/jsdoc.config.json**
   * JSDOC Config File
   * Edit this for each lab, if your folder structure is different

## Deployment - Server Based Labs
 * Your server must be deployed at Heroku
 * If it requires a database, provision it
 * For APIs, your endpoints should all be testable remotely using httpie or postman
 * For Web Servers, your website must be reachable

## Deployment - React Labs
 * Your app must be deployed at AWS Cloudfront
 * Use an automated deployment, connecting your repository to AWS through cloud formation

## Testing
 * Write a complete set of tests for all data models, independent of the server
 * For testing the server and routes, use `supertest` to do end-to-end testing
   * What we're testing is not whether express works, but whether your routes are doing the correct things.
 * Your tests must be running green on travis.com

##  Documentation
 * Write JSDoc for every function
 * Run `jsdoc` and target the docs folder as the target for the build.
 * UML Diagram [reference](https://www.uml-diagrams.org/index-examples.html)
 * For API Servers, put an updated `swagger.json` file in the docs/config folder
   * Ensure that your API server has a /doc route to serve the swagger doc, using that config file as its source
 * Copy the REDME-template.md file from the reference/submission-instructions folder, rname it to `README.md` and include it in your lab folder.
   * Be sure to include the URLs to your server, api docs, and jsdocs at Heroku
   * Be sure to include a UML / Flow Drawing of your application


## Grading Rubric
Note: Not every lab will require all facets below. In these cases, points application from other (perhaps higher focus areas) will be increased.


| Criteria            | Deductions / Notes                                                                                     | Max Points |
| ------------------- | ------------------------------------------------------------------------------------------------------ | ---------- |
| Feature Completion  | Score based on % of features demonstrably completed                                                    | 2/5        |
| Code Implementation | Efficiency of code // Missing JSDoc // Poor Code Quality // Modularity // Monolithic // Non-Functional | 2/5        |
| Tests               | Targert: 80% Coverage // Running in CI (i.e. Travis)                                                   | 2/5        |
| Deployment          | (When applicable) - Deployed, Running, Testable: AWS, Heroku, Azure, etc.                              | 2/5        |
| Documentation       | Proper README // UML Diagram // JSDoc Coverage                                                         | 2/5        |
|                     |                                                                                                        | 10/25      |
