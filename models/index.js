const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("rapidemail", "er", "root", {
  host: "localhost",
  dialect:
    "mysql" /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.company = require("./company")(sequelize, Sequelize);
db.contact = require("./contact")(sequelize, Sequelize);
db.mailbox = require("./mailbox")(sequelize, Sequelize);
db.mailbox_schedule = require("./mailboxSchedule")(sequelize, Sequelize);
db.template_mail = require("./templateMail")(sequelize, Sequelize);

db.company.hasMany(db.contact, { foreignKey: "company_id" });
db.contact.belongsTo(db.company, { foreignKey: "company_id" });

module.exports = db;
