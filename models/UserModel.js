import db from '../database/db.js';
import { DataTypes } from "sequelize";

const UserModel = db.define('usuari0s', {
    id:{
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        unique: true // Asegura que el correo electrónico sea único
    },
    tipo: {
        type: DataTypes.INTEGER
    },
    contrasena: {
        // Corrige la mayúscula y el plural aquí
        type: DataTypes.STRING
    }

});

export default UserModel;



