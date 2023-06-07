import axios from "axios"
class ProjectController {
    async getAllProjects(req,res){
        try{
            const response = await axios.get('https://api.todoist.com/rest/v2/projects', {
              headers: {
                'Authorization': req.headers.authorization
              }
            });
            res.json(response.data)
        }catch(e){
            console.error('Error getting project:', e.message);
            res.status(500).json({ error: 'Failed to get projects' });
        }
    }
    async getProjectById(req,res){
        try{
            let id = req.params.id;
            const response = await axios.get(`${'https://api.todoist.com/rest/v2/projects'}/${id}`, {
                headers: {
                  'Authorization': req.headers.authorization
                }
              });
              res.json(response.data)
        }catch(e){
            console.error('Error getting project:', e.message);
            res.status(500).json({ error: 'Failed to get project' });
        }
    }
    async createNewProject(req,res){
        try {
            const { name } = req.body;
            const response = await axios.post('https://api.todoist.com/rest/v2/projects', {name}, {
              headers: {
                'Authorization': req.headers.authorization
              }
            });
        
            res.json(response.data);
          } catch (error) {
            console.error('Error creating project:', e.message);
            res.status(500).json({ error: 'Failed to create project' });
          }        
    }
    async updateProject(req,res){
        try {
            const { id } = req.params;
            const { name } = req.body;
            
            const response = await axios.post(`${'https://api.todoist.com/rest/v2/projects'}/${id}`, {name}, {
              headers: {
                'Authorization': req.headers.authorization
              }
            });
        
            res.json(response.data);
          } catch (error) {
            console.error('Error updating project:', e.message);
            res.status(500).json({ error: 'Failed to update project' });
          }
    }
    async deleteProject(req,res){
        try {
            const { id } = req.params;
            
            await axios.delete(`${'https://api.todoist.com/rest/v2/projects'}/${id}`, {
              headers: {
                'Authorization': req.headers.authorization
              }
            });
        
            res.sendStatus(204);
          } catch (error) {
            console.error('Error deleting project:', e.message);
            res.status(500).json({ error: 'Failed to delete project' });
          }
    }
}

export default new ProjectController()