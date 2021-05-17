var QModel = require('../models/questionnaire');

let QuestionnaireController = {
    create: async (req,res) => {
        
        const {  
            approved,
            employee_id,
            temperature,
            location,
            fourteen_days,
            leave,
            travel,
            business,
            contact,
            tested,
            testType,
            result,
            verifiedby,
            verificationDate,
            hotBody,
            headache,
            weak,
            bodyPains,
            nausea,
            vomiting,
            soreThroat,
            cough,
            nose,
            chestPains,
            breathing,
            duration} = req.body;
        const questionnaire = await QModel.create({
            approved,
            employee_id,
            temperature,
            location,
            fourteen_days,
            leave,
            travel,
            business,
            contact,
            tested,
            testType,
            result,
            verifiedby,
            verificationDate,
            hotBody,
            headache,
            weak,
            bodyPains,
            nausea,
            vomiting,
            soreThroat,
            cough,
            nose,
            chestPains,
            breathing,
            duration,
        });

        return res.send(questionnaire);
    },
    find: async (req,res) => { 
        let found = await QModel.find({employee_id : req.params.id});
        res.json(found);
    },
    findValid: async (req,res) => {
        const query = { employee_id : req.params.id, approved: false };
        let qValid = await QModel.find(query);
        res.json(qValid);
    },
    all: async (req,res) => {
        let allQuestionnaires = await QModel.find();
        res.json(allQuestionnaires);
    },
    delete: async (req,res) => {
        let removeQuestionnaire = await QModel.remove({_id: req.params.id});
        res.json(removeQuestionnaire);
    },
    approved: async (req,res) => {
        let qApproved = await QModel.updateOne(
            { employee_id: req.params.id },
            { $set: { approved: true }}
        );
        res.json(qApproved);
    },
}
module.exports = QuestionnaireController