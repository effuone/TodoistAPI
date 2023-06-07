import { Router } from 'express';
import taskController from '../controllers/taskController';
const taskRouter = new Router();
/**
 * @swagger
 * /api/tasks:
 *   post:
 *     tags:
 *       - Tasks
 *     summary: Create a task
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *               description:
 *                 type: string
 *               project_id:
 *                 type: string
 *             example:
 *               content: Finish my react project
 *               description: Todoist API integration
 *               project_id: 2294060145
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 // Define your task properties here
 *       400:
 *         description: Bad request
 *       500:
 *         description: Failed to create task
 */
taskRouter.post('/tasks/', taskController.createNewTask);
/**
 * @swagger
 * /api/tasks/:
 *   get:
 *     tags:
 *       - Tasks
 *     summary: Get all tasks
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   assigner_id:
 *                     type: string
 *                   assignee_id:
 *                     type: string
 *                   project_id:
 *                     type: string
 *                   section_id:
 *                     type: string
 *                   parent_id:
 *                     type: string
 *                   order:
 *                     type: number
 *                   content:
 *                     type: string
 *                   description:
 *                     type: string
 *                   is_completed:
 *                     type: boolean
 *                   labels:
 *                     type: array
 *                     items:
 *                       type: string
 *                   priority:
 *                     type: number
 *                   comment_count:
 *                     type: number
 *                   creator_id:
 *                     type: string
 *                   created_at:
 *                     type: string
 *                     format: date-time
 *                   due:
 *                     type: object
 *                     properties:
 *                       date:
 *                         type: string
 *                         format: date
 *                       string:
 *                         type: string
 *                       lang:
 *                         type: string
 *                       is_recurring:
 *                         type: boolean
 *                   url:
 *                     type: string
 */
taskRouter.get('/tasks/', taskController.getAllTasks);
/**
 * @swagger
 * /api/tasks/{id}:
 *   get:
 *     tags:
 *       - Tasks
 *     summary: Get task by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 // Add your task properties here
 *       400:
 *         description: Bad request
 *       404:
 *         description: Not found
 */
taskRouter.get('/tasks/:id', taskController.getTaskById);

/**
 * @swagger
 * /api/tasks/{id}:
 *   put:
 *     tags:
 *       - Tasks
 *     summary: Update a task
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               // Add your updated task properties here
 *     responses:
 *       200:
 *         description: Updated
 *       400:
 *         description: Bad request
 *       404:
 *         description: Not found
 */
taskRouter.put('/tasks/:id', taskController.updateTask);

/**
 * @swagger
 * /api/tasks/{id}:
 *   delete:
 *     tags:
 *       - Tasks
 *     summary: Delete a task
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Deleted
 *       400:
 *         description: Bad request
 *       404:
 *         description: Not found
 */
taskRouter.delete('/tasks/:id', taskController.deleteTask);

export default taskRouter;