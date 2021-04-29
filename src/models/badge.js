var mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
var BadgeSchema = new mongoose.Schema({
    employee_id: {
        type: String,
    },
    location: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    },
    expirationDate: {
        type: Date,
    },
});



module.exports = mongoose.model('Badge', BadgeSchema);