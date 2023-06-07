import axios from "axios"
class TaskController {
    async getAllTasks(req,res){
        try{
            const response = await axios.get('https://api.todoist.com/rest/v2/tasks', {
              headers: {
                'Authorization': req.headers.authorization
              }
            });
            res.json(response.data)
        }catch(e){
            console.error('Error getting tasks:', e.message);
            res.status(500).json({ error: 'Failed to get tasks' });
        }
    }
    async getTaskById(req,res){
        try{
            let id = req.params.id;
            const response = await axios.get(`${'https://api.todoist.com/rest/v2/tasks'}/${id}`, {
                headers: {
                  'Authorization': req.headers.authorization
                }
              });
              res.json(response.data)
        }catch(e){
            console.error('Error getting task:', e.message);
            res.status(500).json({ error: 'Failed to get task' });
        }
    }
    async createNewTask(req,res){
        try {
            const { content, description, project_id } = req.body;
            const response = await axios.post('https://api.todoist.com/rest/v2/tasks', {
              content,
              description,
              project_id,
            }, {
              headers: {
                'Authorization': req.headers.authorization
              }
            });
        
            res.json(response.data);
          } catch (error) {
            console.error('Error creating task:', e.message);
            res.status(500).json({ error: 'Failed to create task' });
          }        
    }
    async updateTask(req,res){
        try {
            const { id } = req.params;
            const { content, description, project_id } = req.body;
            
            const response = await axios.post(`${'https://api.todoist.com/rest/v2/tasks'}/${id}`, {
              content,
              description,
              project_id
            }, {
              headers: {
                'Authorization': req.headers.authorization
              }
            });
        
            res.json(response.data);
          } catch (error) {
            console.error('Error updating task:', e.message);
            res.status(500).json({ error: 'Failed to update task' });
          }
    }
    async deleteTask(req,res){
        try {
            const { id } = req.params;
            
            await axios.delete(`${'https://api.todoist.com/rest/v2/tasks'}/${id}`, {
              headers: {
                'Authorization': req.headers.authorization
              }
            });
        
            res.sendStatus(204);
          } catch (error) {
            console.error('Error deleting task:', e.message);
            res.status(500).json({ error: 'Failed to delete task' });
          }
    }
}

export default new TaskController()