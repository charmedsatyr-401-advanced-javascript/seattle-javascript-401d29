'use strict';

const rootDir = process.cwd();
process.env.SECRET = 'supersecret';

const jwt = require('jsonwebtoken');

const supergoose = require(`${rootDir}/__tests__/supergoose.js`);
const server = require(`${rootDir}/src/app.js`);
const Roles = require(`${rootDir}/src/auth/roles-model.js`);

const mockRequest = supergoose.server(server.app);

let users = {
  admin: {username: 'admin', password: 'password', role: 'admin'},
  editor: {username: 'editor', password: 'password', role: 'editor'},
  user: {username: 'user', password: 'password', role: 'user'},
};

let roles = {
  admin: {role: 'admin', capabilities:['create','read','update','delete']},
  editor: {role: 'editor', capabilities:['create','read','update']},
  user: {role: 'user', capabilities:['read']},
};

beforeAll(async (done) => {
  await supergoose.startDB();
  const admin = await new Roles(roles.admin).save();
  const editor = await new Roles(roles.editor).save();
  const user = await new Roles(roles.user).save();
  done()
});


afterAll(supergoose.stopDB);

describe('Auth Router', () => {
  
  Object.keys(users).forEach( userType => {
    
    describe(`${userType} users`, () => {
      
      let encodedToken;
      let id;
      
      it('can create one', () => {
        return mockRequest.post('/signup')
          .send(users[userType])
          .then(results => {
            console.log('signup', users[userType], results.text);
            var token = jwt.verify(results.text, process.env.SECRET);
            id = token.id;
            encodedToken = results.text;
            expect(token.id).toBeDefined();
            expect(token.capabilities).toBeDefined();
          });
      });

      it('can signin with basic', () => {
        return mockRequest.post('/signin')
          .auth(users[userType].username, users[userType].password)
          .then(results => {
            var token = jwt.verify(results.text, process.env.SECRET);
            expect(token.id).toEqual(id);
            expect(token.capabilities).toBeDefined();
          });
      });

      it('can signin with bearer', () => {
        return mockRequest.post('/signin')
          .set('Authorization', `Bearer ${encodedToken}`)
          .then(results => {
            var token = jwt.verify(results.text, process.env.SECRET);
            expect(token.id).toEqual(id);
            expect(token.capabilities).toBeDefined();
          });
      });

    });
    
  });
  
});