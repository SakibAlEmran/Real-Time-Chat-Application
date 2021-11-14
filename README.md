# Real-Time-Chat-Application
This is a fun project to practice real-time chatting capability.
## Overview
By using this web-application, one can chat with a user, search a user. This is role base access control system, only admin user can access the user management page.
There are 3 endpoints for this project. All the endpoints are protected by using JWT authorization cookies.
1. User Handler
2. Login Handler
3. Inbox handler


## Prerequisites
You should have NodeJs, ExpressJs and MongoDB installed in your local machine.

## How to run
1. Clone this repository
```
git clone https://github.com/SakibAlEmran/Real-Time-Chat-Application.git
```
2. Go to working directory
```
cd Real-Time-Chat-Application
```
3. Create directory: public/uploads and public/uploads/avatars
4. create a .env file and assign the value. I m providing the env variable list:
```
APP_NAME, 
APP_URL,
PORT,
MONGO_CONNECTION_STRING,
COOKIE_SECRET,
JWT_SECRET,
JWT_EXPIRY,
COOKIE_NAME,
```
5. See package.json file and install all dependencies using npm or yarn
6. Start the MongoDb database server
```
sudo systemctl start mongod
```
7. You can make request using browser or Postman.

## Credit:
I have followed a youtube tutorial playlist by Sumit Saha to do this project. Some of the files are directly taken from https://github.com/learnwithsumit/chat-application .
