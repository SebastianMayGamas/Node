import DuenoModel from "../models/DuenoModel.js"
//crear dueños

export const createDueno = async(req, res) => {
    try {
   const newDueno =  await  DuenoModel.create(req.body)
   console.log("Dueno creado", newDueno.id)
   res.status(201).json({
    message: 'Usuario creado exitosamente',
    id: newDueno.id
});
    } catch (error) {
    res.json({Message: error.Message})
    }
}

// actualizar dueño

export const updateDuenos = async (req, res) => {
    try {
        const result = await DuenoModel.update(req.body, {
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

export const getDueno = async (req, res) => {
    try {
        const user = await DuenoModel.findByPk(req.params.id);
        if (user) {
            res.json(user);
        } else {
            res.json({ message: "No se encontró el usuario con el ID especificado." });
        }
    } catch (error) {
        res.json({ message: error.message });
    }
};

//eliminar dueño

export const deleteDueno = async (req, res) => {
    try {
        const result = await DuenoModel.destroy({
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

