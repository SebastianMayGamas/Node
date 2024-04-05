import db from "../database/db.js";
import { DataTypes } from "sequelize"; // Sequelize import no needed here since you're not using it directly

const DuenoModel = db.define('ed', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_usuario: {
        type: DataTypes.INTEGER
    },
    nombre: {
        type: DataTypes.STRING
    },
    apellidos: {
        type: DataTypes.STRING
    },
    numeroTelefonico: {
        type: DataTypes.INTEGER
    },
    pais: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.STRING
    },
    municipio: {
        type: DataTypes.STRING
    },
    ciudad: {
        type: DataTypes.STRING
    },
    calle: {
        type: DataTypes.STRING
    },
    numeroCasa: {
        type: DataTypes.INTEGER
    }
}, {
  tableName: 'duen0s', // Explicitly specifying table name
  timestamps: false, // Add this line if you don't have created_at and updated_at columns and don't want Sequelize to handle them
  // any other model-wide properties
});

export default DuenoModel;

