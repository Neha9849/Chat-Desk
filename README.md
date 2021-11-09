# Setup
> Make sure to have node installed.
1. Fork this repository 

2. Clone this repository
```
git clone https://github.com/your-username/chat-desk.git

```
3. Add a default.json file in server/config folder with following code-
```
{
  "mongoURI": "<your_mongoDB_Atlas_uri_with_credentials>",
  "jwtSecret": "secret",
  "githubToken": "<yoursecrectaccesstoken>"
}
```
4. Install server dependencies and start the frontend server
``` 
cd server
npm install
npm start
```
In new terminal,
-
5. Install client dependencies and start the backend server
```
cd client
npm install
npm run server

```

