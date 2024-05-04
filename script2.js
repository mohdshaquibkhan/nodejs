//  express is a framework for node.js
//  express ka use case => routing
//  routing types  => GET ROUT & POST ROUT, PUT, DELETE, PATCH
//  /profile = profile
//  /contact = contact
//  /like/adscu7agbsc = like post

const express = require('express')
const app = express();

app.use(function(req, res, next){
  console.log("hello from middleware");
  next();
});

app.get('/profile', function (req, res) {
    
  res.send('Hello from the profile')
});

app.listen(4000 );