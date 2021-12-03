# project_final_group02_front

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

You can check the full content of the bot here: [DiscordGO RPG Bot](https://github.com/HETIC-MT-P2021/PROJECT_FINAL_GROUP02_BACK)

## Requirements

- Docker
- Docker-Compose

## Installation

```shell
git clone https://github.com/HETIC-MT-P2021/PROJECT_FINAL_GROUP02_FRONT.git
cd PROJECT_FINAL_GROUP02_FRONT
```

### Launch the project

First install [DiscordGO RPG Bot](https://github.com/HETIC-MT-P2021/PROJECT_FINAL_GROUP02_BACK)

Create a .env with the content of .env.example

Build the image and fire up the container

```shell
docker-compose up -d --build
```

Open [http://localhost:3000/](http://localhost:3000/) to view app in the browser.

### Stop the project

Bring down the container

```shell
docker-compose stop
```
