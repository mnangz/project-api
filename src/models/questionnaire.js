var mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
var QuestionnaireSchema = new mongoose.Schema({
    employee_id: {
        type: String,
    },
    employee_id: {
        type: Number,
    },
    location: {
        type: String,
    },
    fourteen_days: {
        type: Boolean,
        default: false
    },
    leave: {
        type: Boolean,
        default: false
    },
    travel: {
        type: Boolean,
        default: false
    },
    business: {
        type: Boolean,
        default: false
    },
    contact: {
        type: Boolean,
        default: false
    },
    tested: {
        type: String
    },
    testType: {
        type: String
    },
    result: {
        type: String
    },
    verifiedby: {
        type: String
    },
    verificationDate: {
        type: String
    },
    hotBody: {
        type: String
    },
    headache: {
        type: String
    },
    weak: {
        type: String
    },
    bodyPains: {
        type: String
    },
    nausea: {
        type: String
    },
    vomiting: {
        type: String
    },
    soreThroat: {
        type: String
    },
    cough: {
        type: String
    },
    nose: {
        type: String
    },
    chestPains: {
        type: String
    },
    breathing: {
        type: String
    },
    duration: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    approved: {
        type: Boolean,
        default: false
    },
});



module.exports = mongoose.model('Questionnaire', QuestionnaireSchema);