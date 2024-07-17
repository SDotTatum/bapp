// task-service/src/controllers/taskController.ts
import { Request, Response } from 'express';
import Task from '../models/Task';

export const createTask = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, description } = req.body;
    const userId = req.user.id; // Assuming we have middleware that adds user to request
    const task = new Task({ title, description, userId });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: 'Error creating task' });
  }
};

export const getTasks = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.user.id;
    const tasks = await Task.find({ userId });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching tasks' });
  }
};

// Implement updateTask and deleteTask similarly