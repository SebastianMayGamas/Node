import db from '../database/db.js';
import { DataTypes } from "sequelize";

const ExpertModel = db.define('expertoveterinario',{
    id:{
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING
    },
    apellido:{
        type: DataTypes.STRING
    },
    cedula:{
        type: DataTypes.STRING
    },
    telefonoProfecional:{
        type: DataTypes.INTEGER
    }

},{
    tableName:'expertoveterinario',
    timestamps: false,
})
export default ExpertModel;