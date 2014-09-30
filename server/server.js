// --- Require Dependencies ----------------------------------------------------

var fs = require('fs');
var koa = require('koa');
var router = require('koa-router');
var serve = require('koa-static');
var body = require('koa-body');

// --- Koa Setup ---------------------------------------------------------------

var app = koa();

app.use(serve('./client'));
app.use(body());
app.use(router(app));

// --- Create Servers ----------------------------------------------------------

var server = require('http').Server(app.callback());

app.get('/', function*() {
    this.body = {message: "Hello World"}
})


// EXAMPLE: call a database, in old school continuation style
var r = require('rethinkdb')
var Promise = require('bluebird')
var connection = null

connect().then(function(c) {
    connection = c
}, function(err) { console.log("CONNECTION ERROR: ", err)})

function connect() {
    return Promise.promisify(
        r.connect({ host: 'localhost', port: 28015, db: 'test'})
    )
}

function getMessage(conn, cb) {

}

server.listen(3000);
console.log('server listening on port 3000');

