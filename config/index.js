import 'dotenv/config'

export const TODOIST_TOKEN = process.env.TODOIST_TOKEN
export const BASE_TASKS_URL = 'https://api.todoist.com/rest/v2/tasks'
export const BASE_PROJECTS_URL = 'https://api.todoist.com/rest/v2/projects'
export const PORT = process.env.PORT