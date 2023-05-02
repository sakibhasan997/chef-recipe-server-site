
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;

const recipes = require('./data/chef-details.json')

app.use(cors());
app.get('/', (req, res)=>{
    res.send('bro is running clear the road fast jow ki')
    console.log('broo');
})

app.get('/recipes', (req, res)=>{
    res.send(recipes);
})


app.listen(port, ()=>{
    console.log(`bro choltese pera nis na ${port}`);
})