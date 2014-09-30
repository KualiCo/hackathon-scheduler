var r = require('rethinkdb')
var Promise = require('bluebird')
var rConnect = Promise.promisify(r.connect)


var RethinkDBConfig = { host: 'localhost', port: 28015, db: 'test'}

// this is stupid
function connect() {
    return rConnect(RethinkDBConfig)
}

// some kind of runner that runs database stuff. 
function run(connection, query) {

}
