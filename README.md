# **Favorite Restaurants**
___
### **Feature**
___    
- Demonstrate favorite restaurants stored in *restaurant.json*
- Click restaurant to show check out detail infomation   
- Search restaurants with keyword desired category or name via search bar

### **Environment**
___
- [Node.js   v4.17.1LTS](https://nodejs.org/en/)  
- [npm   v6.14.15](https://www.npmjs.com/)    

#### **package.json**
```javascript
{
  "name": "restaurentlist",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1",
    "express-handlebars": "^5.3.3"
  }
}
```
### **Install**
___
- [Node.js]
- [express]
- [express-handlebars]
- [nodemon]

### **Usage**
___
1. Clone this project from Github to your local file
2. Open Terminal and run  `$ npm run dev` or `$ nodemon app.js`
3. Open your browser and request website sourse from  URL `localhost:3000`