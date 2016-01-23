var Hapi = require('hapi');
var Hoek = require('hoek');
var Path = require('path');
var Inert = require('inert');

var server = new Hapi.Server();

//create server
server.connection({
  host: 'localhost',
  port: 1337
});

server.register(require('inert'));

// //define main route
// server.route({
//   method: 'GET',
//   path:'/', 
//   handler: function (request, reply) {
//     reply.view('index');
//   }
// });

server.route({
  method: 'GET',
  path: '/{param*}',
  handler: {
    directory: {
      path: './dist/',
      listing: true,
      index: true
    }
  }
});

//start server
server.start( function (err) {
  if (err) {
    throw err;
  }
  
  console.log('Server running at: ', server.info.uri);
});

