const express = require("express")

const exphbs = require("express-handlebars");


const app = express()

const port = process.env.PORT || 8080;

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true}));
app.use(express.json())

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var router = require("./controllers/burgers_controller")

app.use(router);



app.listen(port, function(err){
    if (err) throw err;
    console.log("you are connected on port"+ port)
})