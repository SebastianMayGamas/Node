import { where } from "sequelize";
import UserModel from "../models/UserModel.js";

//metodo  crear

export const createUser = async (req, res) => {
    try {
        const { email } = req.body;

        const userExist = await UserModel.findOne({where: {email: email}})
        if (userExist){
            return res.status(400).json({
                message:'El correo ya existe'
            })
        }

        const newUser = await UserModel.create(req.body);
        console.log("Nuevo usuario ID:", newUser.id); 
        res.status(201).json({
            message: 'Usuario creado exitosamente',
            id: newUser.id
        });
    } catch (error) {
        res.json({ message: error.message });
    }
};


//metodo de  actualizar

export const updateUser = async (req, res) => {
    try {
        const result = await UserModel.update(req.body, {
            where: { id: req.params.id }
        });
        if (result[0] > 0) { // Verifica si se actualizó alguna fila
            res.json({ message: "Actualizado" });
        } else {
            res.json({ message: "No se encontró el usuario con el ID especificado." });
        }
    } catch (error) {
        res.json({ message: error.message }); // Cambia 'Message' a 'message' para mantener la consistencia
    }
};


//metodo de mostrar uno

export const getUser = async (req, res) => {
    try {
        const user = await UserModel.findByPk(req.params.id);
        if (user) {
            res.json(user);
        } else {
            res.json({ message: "No se encontró el usuario con el ID especificado." });
        }
    } catch (error) {
        res.json({ message: error.message });
    }
};


// metodo de eliminar

export const deleteUser = async (req, res) => {
    try {
        const result = await UserModel.destroy({
            where: { id: req.params.id }
        });
        if (result > 0) {
            res.json({ message: "Eliminado" });
        } else {
            res.json({ message: "No se encontró el usuario con el ID especificado para eliminar." });
        }
    } catch (error) {
        res.json({ message: error.message });
    }
};

export const login = async (req, res)={
    
}


