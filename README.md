# Requirements

```
Node.js: > 16.0.1
MongoDB: > 6.0.3
```

# Setting up API for McTweak

1. Download and install MongoDB on your enviroment: https://www.mongodb.com/try/download/community
2. Download MongoDB atlas or use mongosh to create database named `MCTweak`
3. Create two collections `craftings` and `items`
4. Import `craftings.json` into `craftings` collection and `items.json` into `items` collection, example files are inside examples folder
5. Run `npm install`
6. After install is complete do `npm run`
7. Api is now available under https://localhost:4000

# Production build

Move whole folder (without node_modules) into desination folder on server. After moving, perfrom `npm install`. Now you have to start app, you can use `npm start` but the process will end when you close terminal. I suggest using `pm2` to start and manage API process. Go into src folder then type `pm2 start index.js` this will start your API and allow it to work even if you close terminal window.

# Docs

Docs are available under /doc/shema/index.html
