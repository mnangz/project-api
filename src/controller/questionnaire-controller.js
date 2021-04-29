var QModel = require('../models/questionnaire');

let QuestionnaireController = {
    create: async (req,res) => {
        
        const { employee_id, first_name, last_name, gender, occupation, age, mobile, email, company_name,
             company_phone, address, id_number} = req.body;
        const questionnaire = await QModel.create({
            employee_id,
            first_name,
            last_name,
            mobile,
            email,
            company_name,
            address,
            id_number,
        });

        return res.send(questionnaire);
    },
    find: async (req,res) => { 
        let found = await QModel.find({employee_id : req.params.id});
        res.json(found);
    },
    all: async (req,res) => {
        let allQuestionnaires = await QModel.find();
        res.json(allQuestionnaires);
    },
    delete: async (req,res) => {
        let removeQuestionnaire = await QModel.remove({_id: req.params.id});
        res.json(removeQuestionnaire);
    },
}
module.exports = QuestionnaireController