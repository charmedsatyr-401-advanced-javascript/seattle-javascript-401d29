![CF](http://i.imgur.com/7v5ASc8.png) DEMOS - Component Based UI
================================================================

[Demo Sandbox](https://codesandbox.io/s/x9w6xljn5p)

## Enzyme Testing

The key part of the demo here is to wire up the `setupTests.js` file in the `src` folder.  This has the requisite imports and globals declared. What create-react-app (and sandbox) does is to incorporate that into every test file you write, which is a nice time-saver.

Focus your demo on the differences between and use-cases for `shallow()` and `mount()`. Our demo code uses both of those in different ways.

This can be done at sandbox, but to go deeper (and to connect into a CI environment, you'll need to work from a repo).  This is an annoying step, but it's important to start at sandbox and get all of the goodness of visual TDD.  In the next stage, we'll go local and the students will start to see what local react dev looks like and how to operate in a CI/CD world

## Snapshot Testing

You cannot snapshot test on Code Sandbox because it creates files, so all of this needs to be done locally.

Pull down your sandbox locally and install everything. You'll need to add the `react-test-renderer dependency`  module.

Write the snapshot test as shown in the demo, and then as you run `npm test` you can observe the new snapsots folder being created and the json file within it.

Note that this is a comparison of raw html.  How could this break? What if you added a className to one of the elements? The enzyme (behavior) test would probbly still be ok, but adding a class would change the markup and therefore break the snapshot. This is a potentially big deal.

---

**This is a good time for a break!**

---

## Travis hookup
At this point, you should be able to check this into github and have Travis pick it up. 

* Make sure you're actually working in a repo (create one if not)
* Pull in a .travis.yml file and ensure that its setup to do an `npm test` (and not a `lint` unless you've also set that up)
* Check into master and observe it passing at Travis-ci.com

## AWS Deployment - S3

At minimum, the goal is to deploy a website to an AWS bucket.

First, get back to your command line and add the `node-sass` dependency (assuming you've got some sass in your demo code) and then run `npm run build`

Now, we have a `build` folder. This is a great opportunity to dive back into what React really is. Yes, we run a server to do our dev work locally.  Yes, codesandbox.io is a server that runs react as an app. But in reality, React is a static app.

Create yourself an S3 Bucket, give it public permissions, upload your build folder contents, and tick the "Website" switch and you should be able to simply view your react app.

## AWS Deployment - Cloudfront

Use the aws.yml template file and create a new cloud formation stack by uploading it. Once you do that, it'll take about 20 minutes for it to pull from github.



