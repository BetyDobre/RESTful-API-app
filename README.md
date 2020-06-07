# RESTful-API

  RESTful API application developed with Node.js that exposes an endpoint and implements CRUD operations to manage a catalog product. The fields of a product are Name, Price, Category, CreatedDate and UpdatedDate. The products and the users are stored in a MongoDB database and it generates automatically an Id for each one.
  
   The app is running with 'express' and the endpoint is protected with an user authentication using JWT. 
   
   When a person creates an account or tries to log in, the completed fields must meet several conditions(minimum number of characters, valid email, not null field etc.). When an account is created the password is encrypted(hashed) and at the moment of authentication the hashed passwords are compared. If the user manages to log in, he receives a token with which he will be able to see the products.
   
   The endpoint can't be abused by "bad" people because it's protected with a rate limit based on number of login requests in a certain time period.
   
   The database connection details and the secret token are stored in a .env file so that they aren't visible for everyone who has acces to the code.

## Dependencies used:
- express (web framework for Node.js)
- express-rate-limit (limit number of login requests in a certain time period)
- dotenv (use .env file)
- @hapi/joi (field completion conditions)
- bcryptjs  (hash the password)
- body-parser (parse incoming request bodies in a middleware before your handlers, available under the req.body property)
- jsonwebtoken (generate the token)
- mongoose (connection to the database)
- nodemon (automatically restarting the node application when file changes in the directory are detected)
