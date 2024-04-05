import ExpertModel from "../models/ExpertModel.js";

export const createExpert = async(req, res) => {
    try {
   const newExpert =  await  ExpertModel.create(req.body)
   console.log("Dueno creado", newExpert.id)
   res.status(201).json({
    message: 'Usuario creado exitosamente',
    id: newExpert.id
});
    } catch (error) {
    res.json({Message: error.Message})
    }
}

// actualizar dueño

export const updateExpert = async (req, res) => {
    try {
        const result = await ExpertModel.update(req.body, {
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

export const getExpert = async (req, res) => {
    try {
        const experto = await ExpertModel.findByPk(req.params.id);
        if (experto) {
            res.json(experto);
        } else {
            res.json({ message: "No se encontró el usuario con el ID especificado." });
        }
    } catch (error) {
        res.json({ message: error.message });
    }
};

//eliminar dueño

export const deleteExpert = async (req, res) => {
    try {
        const result = await ExpertModel.destroy({
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

