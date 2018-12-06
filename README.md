# NodeJS-Basic-APIs

## Starting Guide
- Clone this repository.
- Install NodeJS.
- Open Command Prompt/ Terminal and go to the directory where the repository is cloned.
- Run npm install.
- Run npm start.
- Open an API Development Environment (like Postman) to test the APIs.

## API Usage Guide
| Request type | Endpoints |             Headers             |              Body             |                    What it does?                   |
|:------------:|:---------:|:-------------------------------:|:-----------------------------:|:--------------------------------------------------:|
|      GET     |  /display |                -                |               -               |       Displays all the items in the Database       |
|     POST     |  /update  | Content-Type : application/json | (raw) { "name": <Your Name> } | Enters a new Item with your Name into the Database |
