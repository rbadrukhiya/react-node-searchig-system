const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name:({
        type:String
    }),
    email:({
        type:String,
        unique:true
    }),
    password:({
        type:String
    })
})

const MyModel = mongoose.model('test', schema);
module.exports = MyModel