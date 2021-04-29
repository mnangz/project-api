var User = require('../models/user');
var jwt = require('jsonwebtoken');
var config = require('../config/config');

function createToken(user) {
    return jwt.sign({ id: user.id, username: user.username, isAdmin: user.isAdmin, isNurse: user.isNurse, isEntrance: user.isEntrance, isEmployee: user.isEmployee}, config.jwtSecret, {
        expiresIn: 3600000
    });
}

let UserController = {
    register: async (req,res) => {
        if (!req.body.username || !req.body.password) {
            return res.status(400).json({ 'msg': 'You need to send email and password' });
        }

        User.findOne({ username: req.body.username }, async (err, user) => {
            if (err) {
                return res.status(400).json({ 'msg': err });
            }
     
            if (user) {
                return res.status(400).json({ 'msg': 'The user already exists' });
            }
        });

        const { username, isAdmin, isNurse, isEntrance, isEmployee, password} = req.body;
        const user = await User.create({
            username,
            isAdmin,
            isNurse,
            isEntrance,
            isEmployee,
            password,
        });

        return res.send(user);
    },
    login: async (req,res) => {
        if (!req.body.username || !req.body.password) {
            return res.status(400).json({ 'msg': 'You need to send email and password' });
        }

        User.findOne({ username: req.body.username }, async (err, user) => {
            if (err) {
                return res.status(400).json({ 'msg': err });
            }
     
            if (!user) {
                return res.status(400).json({ 'msg': 'The user account does not exist' });
            }
     
            user.comparePassword(req.body.password, (err, isMatch) => {
                if (isMatch && !err) {
                    return res.status(200).json({
                        token: createToken(user)
                    }); 
                } else {
                    return res.status(400).json({ msg: 'The username and password don\'t match.' });
                }
            });
        });
    },
    find: async (req,res) => {
        let found = await User.find({company: req.params.id});
        res.json(found);
    },
    all: async (req,res) => {
        let allStaff = await User.find();
        res.json(allStaff);
    },
    delete: async (req,res) => {
        let removeStaff = await User.remove({_id: req.params.id});
        res.json(removeStaff);
    },
    edit: async (req,res) => {
        id = req.body._id;
        User.findById(id, function(err, user) {
            if (err) return false;

            user.username = req.body.username;
            user.first_name = req.body.first_name;
            user.last_name = req.body.last_name;
            user.isAdmin = req.body.isAdmin;
            user.isNurse = req.body.isNurse;
            user.isEntrance = req.body.isEntrance;
            user.password = req.body.password;

            user.save();

            res.json(user);
        });
    },
    getAllBookings: async (req,res) => {
        let foundBookings = await User.find({_id: req.params.id}).populate({path:'bookings', model:'Booking' });
        res.json(foundBookings);
    },
    getAllVisitors: async (req,res) => {
        let foundVisitors = await User.find({_id: req.params.id}).populate({path:'visitors', model:'Visitor' });
        res.json(foundVisitors);
    },
}
module.exports = UserController;