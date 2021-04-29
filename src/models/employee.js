var mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
var EmployeeSchema = new mongoose.Schema({
    first_name: {
        type: String,
    },
    last_name: {
        type: String,
    },
    gender: {
        type: String,
    },
    occupation: {
        type: String,
    },
    age: {
        type: String,
    },
    mobile: {
        type: String,
    },
    email: {
        type: String,
        lowercase: true,
    },
    company_name: {
        type: String,
    },
    company_phone: {
        type: String,
    },
    address: {
        type: String,
    },
    identification: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
});



module.exports = mongoose.model('Employee', EmployeeSchema);