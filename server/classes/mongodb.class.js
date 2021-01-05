const MongoClient = require('mongodb').MongoClient

class Connection {
    static connectToMongo() {
        console.log('Make mongo connection...')
        if ( this.db ) return Promise.resolve(this.db)
        return MongoClient.connect(this.url)
            .then(db => this.db = db)
    }

    // or in the new async world
    static async connectToMongo() {
        console.log('Make mongo connection...')
        if (this.db) return this.db
        this.db = await MongoClient.connect(this.url)
        return this.db
    }
}

Connection.db = null
Connection.url = 'mongodb://127.0.0.1:27017/test'

module.exports = { Connection }