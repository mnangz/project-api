var mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
var QuestionnaireSchema = new mongoose.Schema({
    employee_id: {
        type: String,
    },
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
    id_number: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    expirationDate: {
        type: Date,
    },
});



module.exports = mongoose.model('Questionnaire', QuestionnaireSchema);