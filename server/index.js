const express = require('express');
 
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/',(req,res) => res.json({hello: 'world'}));

//Define middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }


app.listen(PORT,function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });