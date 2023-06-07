# Todoist.com local API

Так как возникают проблемы при интеграции сервиса на клиент с CORS ошибкой, нужно было создать proxy-server в виде этого бэкенда. Нужно запустить его локально

## Installation

Install the dependencies and start the server using npm

```sh
git clone https://github.com/effuone/TodoistAPI/
cd TodoistAPI/
npm install
touch .env
```

To run this project, you will need to add the following environment variables to your .env file. Example is shown in `.env.example`

`PORT=[YourToken]`
`TODOIST_TOKEN=[YourToken]`

Run project 
```sh
npm start
```


Check Swagger documentation for more information. Go to
`
http://localhost:{YourPort}/docs/#/
`