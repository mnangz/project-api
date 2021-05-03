var BadgeModel = require('../models/badge');

let BadgeController = {
    create: async (req,res) => {
        
        const { employee_id} = req.body;
        const badge = await BadgeModel.create({
            employee_id,
        });

        return res.send(badge);
    },
    find: async (req,res) => { 
        let found = await BadgeModel.find({employee_id: req.params.id});
        res.json(found);
    },
    all: async (req,res) => {
        let allBadges = await BadgeModel.find();
        res.json(allBadges);
    },
    delete: async (req,res) => {
        let removeBadge = await BadgeModel.remove({_id: req.params.id});
        res.json(removeBadge);
    },
}
module.exports = BadgeController