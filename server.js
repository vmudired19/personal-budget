const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Serve static files from the 'public' directory
// app.use(express.static('public'));

app.use('/', express.static('public'));
 const budget= {
    myBudget: [
    {
        title: 'Concerts',
        budget: 70,
        color: '#FF00F4'
        
    },
    {
        title:'Utilities',
        budget: 200,
        color: "#FF9E00" 
        
    },
    {
        title: 'Groceries',
        budget: 108,
        color: '#C3A068' 
    },
    {
        title: 'Restaurents',
        budget: 152,
        color: '#A7C368' 
    },
    {
        title: 'Movies',
        budget: 100,
        color: '#68C393'
    },
    {
        title:'Gas',
        budget: 95,
        color: '#00D8FF' 
    },
    {
        title: 'Room Rent',
        budget: 155,
        color: '#AE00FF' 
    }
]};

app.get('/hello', (req, res) => {
    res.send("Hello World");
});
  
app.get('/budget', (req, res) => {
    res.json(budget);
});
  
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});