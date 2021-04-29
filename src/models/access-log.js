var mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
var AccessLogSchema = new mongoose.Schema({
    employee_id: {
        type: String,
    },
    location: {
        type: String,
    },
    temperature: {
        type: Number,
    },
    date: {
        type: Date,
        default: Date.now
    },
});



module.exports = mongoose.model('AccessLog', AccessLogSchema);