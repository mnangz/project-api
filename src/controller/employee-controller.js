var EmployeeModel = require('../models/employee');

let EmployeeController = {
    create: async (req,res) => {
        
        const { first_name, last_name, gender, occupation, age, mobile, email, company_name,
             company_phone, address, identification} = req.body;
        const employee = await EmployeeModel.create({
            first_name,
            last_name,
            gender,
            occupation,
            age,
            mobile,
            email,
            company_name,
            company_phone,
            address,
            identification,
        });

        return res.send(employee);
    },
    find: async (req,res) => { 
        let found = await EmployeeModel.find();
        res.json(found);
    },
    all: async (req,res) => {
        let allEmployees = await EmployeeModel.find();
        res.json(allEmployees);
    },
    delete: async (req,res) => {
        let removeEmployee = await EmployeeModel.remove({_id: req.params.id});
        res.json(removeEmployee);
    },
}
module.exports = EmployeeController