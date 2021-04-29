var AccessLogModel = require('../models/access-log');

let AccessLogController = {
    create: async (req,res) => {
        
        const { employee_id, location, temperature} = req.body;
        const accessLog = await AccessLogModel.create({
            employee_id,
            location,
            temperature,
        });

        return res.send(accessLog);
    },
    find: async (req,res) => { 
        let found = await AccessLogModel.find();
        res.json(found);
    },
    all: async (req,res) => {
        let allLogs = await AccessLogModel.find();
        res.json(allLogs);
    },
    delete: async (req,res) => {
        let removeLog = await AccessLogModel.remove({_id: req.params.id});
        res.json(removeLog);
    },
}
module.exports = AccessLogController