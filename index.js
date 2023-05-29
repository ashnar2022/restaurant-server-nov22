
//import json server same as express-in express wee need to run js file : here we need to run json file
const jsonServer= require('json-server')

//to create json server app
const server = jsonServer.create() // create() returns a express server



// in node path/route is set using router class which will het from express, here when invoking create() will return express server
//set up path for db.json
const router = jsonServer.router("db.json")

//middleware is required for proper working
//Returns middleWare used by JSON Server
const middleware= jsonServer.defaults()

//set up port
const port =process.env.PORT || 4000

//use router, middleware in server
server.use(middleware)
server.use(router)

//app listen
server.listen(port,()=>{
    console.log(`json server started at port ${port}`);
})
