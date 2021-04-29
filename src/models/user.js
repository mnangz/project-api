var mongoose = require('mongoose');
const Schema = mongoose.Schema;
var bcrypt = require('bcrypt');
  
var UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim: true
    },
  isAdmin: {
        type: Boolean,
        default: false
    },
  isNurse: {
        type: Boolean,
        default: false
    },
  isEntrance: {
        type: Boolean,
        default: false
    },
  isEmployee: {
        type: Boolean,
        default: false
    },
  password: {
        type: String,
        required: true
    },
});
 
UserSchema.pre('save',  function(next) {
    var user = this;
 
     if (!user.isModified('password')) return next();
 
     bcrypt.genSalt(10, function(err, salt) {
         if (err) return next(err);
 
         bcrypt.hash(user.password, salt, function(err, hash) {
             if (err) return next(err);
 
             user.password = hash;
             next();
         });
     });
});
 
UserSchema.methods.comparePassword = function (candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};
 
module.exports = mongoose.model('User', UserSchema);