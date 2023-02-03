const db = require('../models');
const Company = db.company;
const Contact = db.contact;

class CompanyController {
    static async getAll(req, res, next) {
        const data = await Company.findAll();
        if (data) {
            res.status(200).json({
                info: "find all success",
                data: data
            });
        } else {
            res.status(400).json({
                info: "Company not found"
            });
        };
    };

    static async getAllInclude(req, res, next) {
        const data = await Company.findAll({ include: Contact });
        if (data) {
            res.status(200).json({
                info: "find all success",
                data: data
            });
        } else {
            res.status(400).json({
                info: "Company not found"
            });
        };
    };

    static async getById(req, res, next) {
        var id = parseInt(req.params.id);
        const data = await Company.findByPk(id);
        if (data) {
            res.status(200).json({
                info: "find with id success",
                data: data
            });
        } else {
            res.status(400).json({
                info: "Company not found"
            });
        };
    };

    static async getByIdInclude(req, res, next) {
        var id = parseInt(req.params.id);
        const data = await Company.findOne({
            where: { id: id },
            include: [{
                model: Contact,
                as: 'contacts'
            }]
        });
        if (data) {
            res.status(200).json({
                info: "find with id success",
                data: data
            });
        } else {
            res.status(400).json({
                info: "Company not found"
            });
        };
    };
};

module.exports = CompanyController