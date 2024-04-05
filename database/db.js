import { Sequelize } from "sequelize";

const db = new Sequelize('petcare', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;

