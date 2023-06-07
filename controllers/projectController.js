import axios from "axios"
import { BASE_PROJECTS_URL, TODOIST_TOKEN } from "../config";

class ProjectController {
    async getAllProjects(req,res){
        try{
            const response = await axios.get(BASE_PROJECTS_URL, {
              headers: {
                'Authorization': `Bearer ${TODOIST_TOKEN}`
              }
            });
            res.json(response.data)
        }catch(e){
            console.error('Error getting project:', error.response.data);
            res.status(500).json({ error: 'Failed to get projects' });
        }
    }
    async getProjectById(req,res){
        try{
            let id = req.params.id;
            const response = await axios.get(`${BASE_PROJECTS_URL}/${id}`, {
                headers: {
                  'Authorization': `Bearer ${TODOIST_TOKEN}`
                }
              });
              res.json(response.data)
        }catch(e){
            console.error('Error getting project:', error.response.data);
            res.status(500).json({ error: 'Failed to get project' });
        }
    }
    async createNewProject(req,res){
        try {
            const { name } = req.body;
            const response = await axios.post(BASE_PROJECTS_URL, {name}, {
              headers: {
                'Authorization': `Bearer ${TODOIST_TOKEN}`
              }
            });
        
            res.json(response.data);
          } catch (error) {
            console.error('Error creating project:', error.response.data);
            res.status(500).json({ error: 'Failed to create project' });
          }        
    }
    async updateProject(req,res){
        try {
            const { id } = req.params;
            const { name } = req.body;
            
            const response = await axios.post(`${BASE_PROJECTS_URL}/${id}`, {name}, {
              headers: {
                'Authorization': `Bearer ${TODOIST_TOKEN}`
              }
            });
        
            res.json(response.data);
          } catch (error) {
            console.error('Error updating project:', error.response.data);
            res.status(500).json({ error: 'Failed to update project' });
          }
    }
    async deleteProject(req,res){
        try {
            const { id } = req.params;
            
            await axios.delete(`${BASE_PROJECTS_URL}/${id}`, {
              headers: {
                'Authorization': `Bearer ${TODOIST_TOKEN}`
              }
            });
        
            res.sendStatus(204);
          } catch (error) {
            console.error('Error deleting project:', error.response.data);
            res.status(500).json({ error: 'Failed to delete project' });
          }
    }
}

export default new ProjectController()