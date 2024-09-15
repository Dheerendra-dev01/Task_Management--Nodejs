
const Task = require('../models/taskModel');
const createTask = async (req, res) => {
    const { title, description, completed } = req.body;

    if (!title) {
        return res.status(400).json({ message: 'Title is required' });
    }
    try {
        const newTask = new Task({
            title,
            description,
            completed: completed === true ? true : false
        });

        await newTask.save();
        res.status(201).json(newTask);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const getTasksById = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).send();
        }
        res.send(task);
    } catch (error) {
        res.status(500).send();
    }
}

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};



const updateTask = async (req, res) => {
    const { id } = req.params;
    const { title, description, completed } = req.body;

    try {
        const updatedTask = await Task.findByIdAndUpdate(
            id,
            { title, description, completed }
        );
        if (!updatedTask) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.json({ message: 'Task updated successfully' });

    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};


const deleteTask = async (req, res) => {
    const { id } = req.params;

    try {
        const task = await Task.findByIdAndDelete(id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.json({ message: 'Task deleted' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

module.exports = {
    createTask,
    getAllTasks,
    getTasksById,
    updateTask,
    deleteTask
};

