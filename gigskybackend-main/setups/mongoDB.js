const mongoose = require('mongoose');
require('dotenv').config;

const URL = process.env.MONGODB_URL
const connect = async () => {
    try{
        // console.log(`${process.env.MONGODB_URL} hello`)
        await mongoose.connect(`${URL}`);
        console.log('DB connected successfully')
    }catch(error){
        console.log('DB connection failed');
        console.error(error);

    }
}

module.exports = connect;
