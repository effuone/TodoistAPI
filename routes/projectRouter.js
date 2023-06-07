import { Router } from 'express';
import projectController from '../controllers/projectController';
const projectRouter = new Router();
/**
 * @swagger
 * /api/projects:
 *   post:
 *     tags:
 *       - Projects
 *     summary: Create a project
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *             example:
 *               name: Start my own weed business
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 // Define your project properties here
 *       400:
 *         description: Bad request
 *       500:
 *         description: Failed to create project
 */
projectRouter.post('/projects/', projectController.createNewProject);
/**
 * @swagger
 * /api/projects/:
 *   get:
 *     tags:
 *       - Projects
 *     summary: Get all projects
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
projectRouter.get('/projects/', projectController.getAllProjects);
/**
 * @swagger
 * /api/projects/{id}:
 *   get:
 *     tags:
 *       - Projects
 *     summary: Get project by ID
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
 *                 // Add your project properties here
 *       400:
 *         description: Bad request
 *       404:
 *         description: Not found
 */
projectRouter.get('/projects/:id', projectController.getProjectById);

/**
 * @swagger
 * /api/projects/{id}:
 *   put:
 *     tags:
 *       - Projects
 *     summary: Update a project
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the project to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *             example:
 *               name: Start learning React.js
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 // Define your project properties here
 *       400:
 *         description: Bad request
 *       500:
 *         description: Failed to update project
 */
projectRouter.put('/projects/:id', projectController.updateProject);
/**
 * @swagger
 * /api/projects/{id}:
 *   delete:
 *     tags:
 *       - Projects
 *     summary: Delete a project
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the project to delete
 *     responses:
 *       204:
 *         description: project successfully deleted
 *       400:
 *         description: Bad request
 *       500:
 *         description: Failed to delete project
 */

projectRouter.delete('/projects/:id', projectController.deleteProject);

export default projectRouter;