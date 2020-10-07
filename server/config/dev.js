const dotenv = require("dotenv")
dotenv.config()

const connectionString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.suqn1.mongodb.net/<dbname>?retryWrites=true&w=majority`

//Store MongoDB Credentials as Environment Variables in Node.js
//https://www.coderrocketfuel.com/article/store-mongodb-credentials-as-environment-variables-in-nodejs

module.exports = {
    //mongoURI: 'mongodb+srv://dummy:dummy@cluster0.suqn1.mongodb.net/<dbname>?retryWrites=true&w=majority'
    mongoURI: connectionString
}