import axios from "axios"
import { BASE_URL, TODOIST_TOKEN } from "../config";

class TaskController {
    async getAllTasks(req,res){
        try{
            const response = await axios.get(BASE_URL, {
              headers: {
                'Authorization': `Bearer ${TODOIST_TOKEN}`
              }
            });
            res.json(response.data)
        }catch(e){
            console.log(e)
        }
    }
    async getTaskById(req,res){
        try{
            let id = req.query.id;
            const response = await axios.get(`${BASE_URL}?id=${id}`, {
                headers: {
                  'Authorization': `Bearer ${TODOIST_TOKEN}`
                }
              });
              res.json(response.data)
        }catch(e){
            console.log(e)
        }
    }
    async createNewTask(req,res){
        try {
            const { content, description, project_id } = req.body;
            const response = await axios.post(BASE_URL, {
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
        try{

        }catch(e){
            console.log(e)
        }
    }
    async deleteTask(req,res){
        try{

        }catch(e){
            console.log(e)
        }
    }
}

export default new TaskController()