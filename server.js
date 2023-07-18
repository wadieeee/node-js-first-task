const express = require('express');
const app =express();

// listen for requests on port 3000
app.listen(3000 ,() => {
    console.log("server is listenning !!")
});


app.get('/' , (req, res) => {
    res.sendFile('./views/home.html',{root : __dirname});


})
app.get('/about' , (req, res) => {
    res.sendFile('./views/about.html',{root : __dirname});


})
app.use((req,res) => {
    res.sendFile('./views/404.html',{root : __dirname});
})

