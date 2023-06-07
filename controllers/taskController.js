import axios from "axios"
import { BASE_TASKS_URL, TODOIST_TOKEN } from "../config";

class TaskController {
    async getAllTasks(req,res){
        try{
            const response = await axios.get(BASE_TASKS_URL, {
              headers: {
                'Authorization': `Bearer ${TODOIST_TOKEN}`
              }
            });
            res.json(response.data)
        }catch(e){
            console.error('Error getting tasks:', error.response.data);
            res.status(500).json({ error: 'Failed to get tasks' });
        }
    }
    async getTaskById(req,res){
        try{
            let id = req.params.id;
            const response = await axios.get(`${BASE_TASKS_URL}/${id}`, {
                headers: {
                  'Authorization': `Bearer ${TODOIST_TOKEN}`
                }
              });
              res.json(response.data)
        }catch(e){
            console.error('Error getting task:', error.response.data);
            res.status(500).json({ error: 'Failed to get task' });
        }
    }
    async createNewTask(req,res){
        try {
            const { content, description, project_id } = req.body;
            const response = await axios.post(BASE_TASKS_URL, {
              content,
              description,
              project_id,
            }, {
              headers: {
                'Authorization': `Bearer ${TODOIST_TOKEN}`
              }
            });
        
            res.json(response.data);
          } catch (error) {
            console.error('Error creating task:', error.response.data);
            res.status(500).json({ error: 'Failed to create task' });
          }        
    }
    async updateTask(req,res){
        try {
            const { id } = req.params;
            const { content, description, project_id } = req.body;
            
            const response = await axios.post(`${BASE_TASKS_URL}/${id}`, {
              content,
              description,
              project_id
            }, {
              headers: {
                'Authorization': `Bearer ${TODOIST_TOKEN}`
              }
            });
        
            res.json(response.data);
          } catch (error) {
            console.error('Error updating task:', error.response.data);
            res.status(500).json({ error: 'Failed to update task' });
          }
    }
    async deleteTask(req,res){
        try {
            const { id } = req.params;
            
            await axios.delete(`${BASE_TASKS_URL}/${id}`, {
              headers: {
                'Authorization': `Bearer ${TODOIST_TOKEN}`
              }
            });
        
            res.sendStatus(204);
          } catch (error) {
            console.error('Error deleting task:', error.response.data);
            res.status(500).json({ error: 'Failed to delete task' });
          }
    }
}

export default new TaskController()