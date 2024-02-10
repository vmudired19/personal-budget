// Budget api
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());




const budget = require('./data.json')
app.use("/",express.static("public"));

console.log(budget)

app.get("/hello", (req,res) => {
    res.send("Hello Venkata Pranaay Reddy Mudireddy");
})

app.get("/budget", (req,res) => {
    res.json(budget);
})


app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});