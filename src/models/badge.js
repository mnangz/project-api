var mongoose = require('mongoose');

const Schema = mongoose.Schema;
  
var BadgeSchema = new mongoose.Schema({
    employee_id: {
        type: String,
    },
    // location: {
    //     type: String,
    // },
    date: {
        type: Date,
        expires: '7d',
        default: Date.now
    },
    expiresAt: { 
        type: Date,  
        default: Date.now() + 7*24*60*60*1000
    },
});

module.exports = mongoose.model('Badge', BadgeSchema);